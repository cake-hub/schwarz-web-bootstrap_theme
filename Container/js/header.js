import "./cakeDOM";

if (typeof window.cake !== "object") {
    window.cake = {};
}

const defaultOptions = {
    headerElement: null,
    headerQuerySelector: '*[data-controller="header"]',
    headerWrapperElement: null,
    headerWrapperQuerySelector: '*[data-controller="header/wrapper"]',

    headerMobileMenuElement: null,
    headerMobileMenuQuerySelector: '*[data-controller="header/mobile-menu"]',
    headerMobileMenuButtonElement: null,
    headerMobileMenuButtonQuerySelector: '*[data-controller="header/mobile-menu/button"]',

    headerSearchElement: null,
    headerSearchQuerySelector: '*[data-controller="header/search"]',
    headerSearchLinkElement: null,
    headerSearchLinkQuerySelector: '*[data-controller="header/search/link"]',
    headerSearchInputElement: null,
    headerSearchInputQuerySelector: '*[data-controller="header/search/input"]',

    headerUsernavigationElement: null,
    headerUsernavigationQuerySelector: '*[data-controller="header/usernavigation"]',

    headerLanguageElement: null,
    headerLanguageQuerySelector: '*[data-controller="header/language"]',

    headerBrandNavigationElement: null,
    headerBrandNavigationQuerySelector: '*[data-controller="header/brandnav"]',
    headerBrandNavigationMoreElement: null,
    headerBrandNavigationMoreQuerySelector: '*[data-controller="header/brandnav/more"]',
    headerBrandNavigationMoreListElement: null,
    headerBrandNavigationMoreListQuerySelector: '*[data-controller="header/brandnav/more/list"]',

    headerMainNavigationElement: null,
    headerMainNavigationQuerySelector: '*[data-controller="header/main"]',
    headerMainNavigationListElement: null,
    headerMainNavigationListQuerySelector: '*[data-controller="header/main/list"]',
    headerMainNavigationMoreElement: null,
    headerMainNavigationMoreQuerySelector: '*[data-controller="header/main/more"]',
    headerMainNavigationMoreListElement: null,
    headerMainNavigationMoreListQuerySelector: '*[data-controller="header/main/more/list"]',

    headerSubNavigationListElement: null,
    headerSubNavigationListQuerySelector: '*[data-controller="header/sub"]',
    headerSubNavigationMoreElement: null,
    headerSubNavigationMoreQuerySelector: '*[data-controller="header/sub/more"]',
    headerSubNavigationMoreListElement: null,
    headerSubNavigationMoreListQuerySelector: '*[data-controller="header/sub/more/list"]',

    headerNavigationFlyoutLinksElements: null,
    headerNavigationFlyoutLinksQuerySelector: '.header-main-nav-link, *[data-controller="header/sub/more"] > .header-sub-nav-link, .header-language-active, .header-brandnav-link',

    breakpointMdPx: 960,
    headerCollapsedScrollThresholdPx: 100,
};

window.cake.header = (options = defaultOptions) => {
    options = {...defaultOptions, ...options};

    // ****************** Parse all required elements ****************** //

    // general elements
    const headerElement = window.cake.utils.getElement (options.headerElement, options.headerQuerySelector);
    const headerWrapperElement = window.cake.utils.getElement (options.headerWrapperElement, options.headerWrapperQuerySelector);
    const headerMobileMenuElement = window.cake.utils.getElement (options.headerMobileMenuElement, options.headerMobileMenuQuerySelector);
    const headerMobileMenuButtonElement = window.cake.utils.getElement (options.headerMobileMenuButtonElement, options.headerMobileMenuButtonQuerySelector);

    // search elements
    const headerSearchElement = window.cake.utils.getElement (options.headerSearchElement, options.headerSearchQuerySelector);
    const headerSearchLinkElement = window.cake.utils.getElement (options.headerSearchLinkElement, options.headerSearchLinkQuerySelector);
    const headerSearchInputElement = window.cake.utils.getElement (options.headerSearchInputElement, options.headerSearchInputQuerySelector);

    // user navigation elements
    const headerUsernavigationElement = window.cake.utils.getElement (options.headerUsernavigationElement, options.headerUsernavigationQuerySelector);

    // language elements
    const headerLanguageElement = window.cake.utils.getElement (options.headerLanguageElement, options.headerLanguageQuerySelector);

    // brand nav elements
    const headerBrandNavigationElement = window.cake.utils.getElement (options.headerBrandNavigationElement, options.headerBrandNavigationQuerySelector);
    const headerBrandNavigationMoreElement = window.cake.utils.getElement (options.headerBrandNavigationMoreElement, options.headerBrandNavigationMoreQuerySelector);
    const headerBrandNavigationMoreListElement = window.cake.utils.getElement (options.headerBrandNavigationMoreListElement, options.headerBrandNavigationMoreListQuerySelector);

    // main nav elements
    const headerMainNavigationElement = window.cake.utils.getElement (options.headerMainNavigationElement, options.headerMainNavigationQuerySelector);
    const headerMainNavigationListElement = window.cake.utils.getElement (options.headerMainNavigationListElement, options.headerMainNavigationListQuerySelector);
    const headerMainNavigationMoreElement = window.cake.utils.getElement (options.headerMainNavigationMoreElement, options.headerMainNavigationMoreQuerySelector);
    const headerMainNavigationMoreListElement = window.cake.utils.getElement (options.headerMainNavigationMoreListElement, options.headerMainNavigationMoreListQuerySelector);

    // sub nav elements
    const headerSubNavigationListElement = window.cake.utils.getElement (options.headerSubNavigationListElement, options.headerSubNavigationListQuerySelector);
    const headerSubNavigationMoreElement = window.cake.utils.getElement (options.headerSubNavigationMoreElement, options.headerSubNavigationMoreQuerySelector);
    const headerSubNavigationMoreListElement = window.cake.utils.getElement (options.headerSubNavigationMoreListElement, options.headerSubNavigationMoreListQuerySelector);

    // navigation flyout links
    const headerNavigationFlyoutLinksElements = window.cake.utils.getElements (options.headerNavigationFlyoutLinksElements, options.headerNavigationFlyoutLinksQuerySelector);


    // ****************** Basic configuration and helpers ****************** //

    // Check if header element exists
    if (!headerElement) {
        return;
    }

    // State class definitions
    const headerSearchActiveClass = "header-search-active";
    const headerMobileExpandedClass = "header-mobile-expanded";
    const headerCollapsedClass = "header-collapsed";
    const headerNotCollapsedClass = "header-not-collapsed";

    // State queries
    const isSearchActive = () => headerSearchElement && headerElement.classList.contains (headerSearchActiveClass);
    const isCollapsedActive = () => headerElement && headerElement.classList.contains (headerCollapsedClass);

    // Basic helper methods
    const convertRemToPx = (remValue) => {
        return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };

    const getPxValueOfStringWithRemOrPx = (string) => {
        if (!string) {
            return 0;
        }
        if (string.indexOf('rem') > 0) {
            return convertRemToPx(parseFloat(string));
        }
        if (string.indexOf('px') > 0) {
            return parseFloat(string);
        }
        return 0;
    };

    const getVariableValue = (varName, fromElement = headerElement) => {
        return getComputedStyle(fromElement).getPropertyValue(varName);
    }

    const getCssVariablePx = (varName, fromElement = headerElement) => {
        return getPxValueOfStringWithRemOrPx(getVariableValue (varName, fromElement));
    };

    // Method to move element from one parent into another
    const moveElement = (element, targetParent, mode = "append", reference = null) => {
        switch (mode) {
            case "append":
                targetParent.appendChild (element);
                break;
            case "prepend":
                targetParent.prepend (element);
                break;
            case "before":
                targetParent.insertBefore (element, reference);
                break;
        }
    };


    // ****************** Handle Mobile Header Menu ****************** //

    if (headerMobileMenuElement) {
        // Method to toggle mobile menu
        const toggleHeaderMobileMenu = () => {
            if (headerElement.classList.contains (headerMobileExpandedClass)) {
                headerElement.classList.remove (headerMobileExpandedClass);
                headerMobileMenuButtonElement.classList.remove ("is-active");
                headerMobileMenuButtonElement.setAttribute ("aria-pressed", false);
            } else {
                headerElement.classList.add (headerMobileExpandedClass);
                headerMobileMenuButtonElement.classList.add ("is-active");
                headerMobileMenuButtonElement.setAttribute ("aria-pressed", true);
            }
        };

        // Add mobile menu link event listener
        headerMobileMenuElement.addEventListener ("click", () => toggleHeaderMobileMenu ());
    }


    // ****************** Handle Collapsed Header ****************** //

    // Prepare collapsed header options
    const bufferHeight = 50;
    if (options.headerCollapsedScrollThresholdPx < bufferHeight) {
        options.headerCollapsedScrollThresholdPx = bufferHeight;
    }

    const getHeaderSearchWidths = () => {
        let headerSearchWidth = 0,
            searchActiveWidth = 0;

        if (headerSearchElement) {
            headerSearchWidth = headerSearchElement.offsetWidth;
            if (headerSearchWidth > 0) {
                const headerSearchInputWidth = getCssVariablePx('--header-search-input-width');
                const headerSearchPaddingRight = getPxValueOfStringWithRemOrPx(getComputedStyle(headerSearchElement).paddingRight);
                searchActiveWidth = headerSearchInputWidth + headerSearchPaddingRight;
            }
        }

        return {
            headerSearchWidth,
            searchActiveWidth
        };
    }

    const getHeaderUsernavigationWidth = () => {
        let headerUsernavigationWidth = 0;
        if (headerUsernavigationElement) {
            const headerUsernavigationOffsetWidth = headerUsernavigationElement.offsetWidth;
            const headerUserNavigationMarginLeft = getPxValueOfStringWithRemOrPx(getComputedStyle(headerUsernavigationElement).marginLeft);
            headerUsernavigationWidth = headerUsernavigationOffsetWidth + headerUserNavigationMarginLeft;
        }
        return headerUsernavigationWidth;
    };

    const getHeaderNavWrapperCalculatedWidth = () => {
        const headerLogoWidth = getCssVariablePx('--header-logo-width');
        const headerLogoMarginRight = getCssVariablePx('--header-logo-margin-right');
        const headerWrapperWidth = getPxValueOfStringWithRemOrPx(getComputedStyle(headerWrapperElement).width);
        const headerWrapperPaddingLeft = getPxValueOfStringWithRemOrPx(getComputedStyle(headerWrapperElement).paddingLeft);
        const headerWrapperPaddingRight = getPxValueOfStringWithRemOrPx(getComputedStyle(headerWrapperElement).paddingRight);
        return headerWrapperWidth - headerWrapperPaddingLeft - headerLogoWidth - headerLogoMarginRight - headerWrapperPaddingRight;
    };

    // Method to calculate the available width for the main and sub nav on collapsed, if not collapsed returns null
    const getCollapsedNavWidthOrNull = () => {
        // calculate only if we are collapsed
        if (isCollapsedActive () || headerElement.classList.contains (headerCollapsedClass)) {

            const headerNavWrapperWidth = getHeaderNavWrapperCalculatedWidth();
            const headerUsernavigationWidth = getHeaderUsernavigationWidth();
            const headerSearchWidthObj = getHeaderSearchWidths();

            // active search or search button + usernavigation: use the larger one
            let usedWidth = headerSearchWidthObj.headerSearchWidth + headerUsernavigationWidth;
            if (usedWidth < headerSearchWidthObj.searchActiveWidth) {
                usedWidth = headerSearchWidthObj.searchActiveWidth;
            }

            return Math.round(headerNavWrapperWidth - usedWidth);
        }
        return null;
    };

    // Method to check header-status if collapsed or not
    const handleCollapsedHeaderState = (scrollDirection = null, isInitial = false) => {
        // detect if we are on top of page
        if (
            (
                scrollDirection === "down" ||
                isInitial
            )
            &&
            options.headerCollapsedScrollThresholdPx < window.scrollY - bufferHeight &&
            !headerElement.classList.contains (headerCollapsedClass)
        ) {
            // Collapsed header
            headerElement.classList.add (headerCollapsedClass);
            headerElement.classList.remove (headerNotCollapsedClass);

            setTimeout (() => {
                const availableWidth = getCollapsedNavWidthOrNull ();
                handleMainNavigation (availableWidth);
                handleSubNavigation (availableWidth);
            }, 100);
        }
        else if (
            (
                scrollDirection === "up"
            )
                ||
            (
                options.headerCollapsedScrollThresholdPx > window.scrollY + bufferHeight &&
                headerElement.classList.contains (headerCollapsedClass)
            )
        ) {
            // Extended header
            if (!isInitial) {
                headerElement.classList.add (headerNotCollapsedClass);
            }
            headerElement.classList.remove (headerCollapsedClass);
            setTimeout (() => {
                handleMainNavigation ();
                handleSubNavigation ();
            }, 100);
        }
    };

    // Add scroll event listener
    window.cake.utils.addMethodExecutedEarliestOnLoad (() => setTimeout (() => handleCollapsedHeaderState (null, true), 500));
    let lastScrollTopPosition = window.scrollY;
    window.eventThrottled ("scroll", () => {
        let direction = lastScrollTopPosition < window.scrollY ? "down" : "up";
        if (
            (
                direction === "up" &&
                lastScrollTopPosition - window.scrollY > options.headerCollapsedScrollThresholdPx
            ) ||
            (
                direction === "down" &&
                window.scrollY - lastScrollTopPosition > options.headerCollapsedScrollThresholdPx
            )
        ) {
            lastScrollTopPosition = window.scrollY;
        } else {
            direction = null;
        }
        handleCollapsedHeaderState (direction);

    }, 500);


    // ****************** Handle Header Main Navigation More ****************** //

    // Method to move navigation elements if required
    const checkNavigationElements = (availableWidth, listElement, moreElement, moreListElement, isRevert = false, elementsToSubtractFromWidth = []) => {
        // Calculate the navigation width
        const widthBufferPx = 20;
        const moreElementInvisibleClass = "invisible";
        const moreElementWidth = moreElement.classList.contains (moreElementInvisibleClass) ? 0 : moreElement.offsetWidth;
        const elementsToSubtractWidths = elementsToSubtractFromWidth.length > 0 ?
                                            elementsToSubtractFromWidth.map (e => e.offsetWidth + getCssVariablePx ("margin-left", e) || 0).reduce ((p, n) => p + n) :
                                            0;
        let mainNavigationWidthLeft = availableWidth - moreElementWidth - elementsToSubtractWidths - widthBufferPx;

        // Check each list-element if it has enough space
        let elementsToAdd = [];
        if (!isRevert) {
            const listElements = [...listElement.childNodes];
            for (const listElement of listElements) {
                if (listElement.dataset.controller === moreElement.dataset.controller) {
                    continue;
                }

                const listElementWidth = listElement.offsetWidth;
                mainNavigationWidthLeft -= listElementWidth;

                if (mainNavigationWidthLeft < 0) {
                    elementsToAdd.push (listElement);
                }
            }
        }

        // Move elements to more, that do not have enough space anymore
        elementsToAdd.reverse ().map (listElement => {
            moveElement (listElement, moreListElement, "prepend");
        });

        // Check for enough space to readd element to list
        if (elementsToAdd.length <= 0 || mainNavigationWidthLeft > 0 || isRevert) {
            const moreListElements = [...moreListElement.childNodes];
            for (const moreListItem of moreListElements) {
                const moreListItemWidth = moreListItem.offsetWidth + widthBufferPx;
                if (
                    mainNavigationWidthLeft >= moreListItemWidth || // we have enough space in navigation
                    isRevert || // we are on mobile menu
                    moreListElements.length === 1 && mainNavigationWidthLeft + moreElementWidth >= moreListItemWidth // only 1 menu in more and without "more" we have enough space in navigation
                ) {
                    moveElement (moreListItem, listElement, "before", moreElement);
                    mainNavigationWidthLeft -= moreListItemWidth;
                } else {
                    // stop iterating, after the first element not fitting
                    break;
                }
            }
        }

        // Check if more button is needed
        if (isRevert || moreListElement.childNodes.length <= 0) {
            moreElement.classList.add (moreElementInvisibleClass);
        } else {
            moreElement.classList.remove (moreElementInvisibleClass);
        }
    };

    // Method to handle main navigation
    const handleMainNavigation = (availableWidth = null) => {
        if (!headerMainNavigationElement) {
            return;
        }
        availableWidth = availableWidth || headerMainNavigationElement.offsetWidth;
        checkNavigationElements (
            availableWidth,
            headerMainNavigationListElement,
            headerMainNavigationMoreElement,
            headerMainNavigationMoreListElement,
            window.innerWidth < options.breakpointMdPx,
            isSearchActive () && isCollapsedActive () ? [headerSearchInputElement] : []
        );
    };

    if (headerMainNavigationElement && headerMainNavigationListElement && headerMainNavigationMoreElement && headerMainNavigationMoreListElement) {
        window.cake.utils.addMethodExecutedEarliestOnLoad (() => handleMainNavigation ());
        window.eventThrottled ("resize", () => {
            const availableWidth = getCollapsedNavWidthOrNull();
            handleMainNavigation (availableWidth);
        }, 100);
    }

    // Method to handle sub navigation
    const handleSubNavigation = (availableWidth = null) => {
        if (!headerSubNavigationListElement) {
            return;
        }
        availableWidth = availableWidth || headerMainNavigationElement.offsetWidth;
        checkNavigationElements (
            // headerSubNavigationListElement,
            availableWidth,
            headerSubNavigationListElement,
            headerSubNavigationMoreElement,
            headerSubNavigationMoreListElement,
            window.innerWidth < options.breakpointMdPx,
            isSearchActive () && isCollapsedActive () ? [headerSearchInputElement] : []
        );
    };

    if (headerSubNavigationListElement && headerSubNavigationMoreElement && headerSubNavigationMoreListElement) {
        let isSMDownBreakpointPrevious = null;
        const resizeHandler = () => {
            const availableWidth = getCollapsedNavWidthOrNull();
            handleSubNavigation (availableWidth);

            // Handle search input state (disabled?)
            const isSMDownBreakpoint = window.innerWidth < options.breakpointMdPx;
            if (isSMDownBreakpoint !== isSMDownBreakpointPrevious) {
                toggleHeaderSearchInputState (isSearchActive () || isSMDownBreakpoint);
                isSMDownBreakpointPrevious = isSMDownBreakpoint;
            }
        };
        window.cake.utils.addMethodExecutedEarliestOnLoad (() => resizeHandler ());
        window.eventThrottled ("resize", () => {
            resizeHandler ();
        }, 100);
    }

    const handleBrandNavigation = (availableWidth = null) => {
        if (!headerBrandNavigationElement) {
            return;
        }
        availableWidth = availableWidth || headerMainNavigationElement.offsetWidth;
        checkNavigationElements (
            availableWidth,
            headerBrandNavigationElement,
            headerBrandNavigationMoreElement,
            headerBrandNavigationMoreListElement,
            window.innerWidth < options.breakpointMdPx,
            [
                ...(isSearchActive () && isCollapsedActive () ? [headerSearchInputElement] : []),
                ...(headerUsernavigationElement ? [headerUsernavigationElement] : []),
                ...(headerSearchElement ? [headerSearchElement] : []),
                ...(headerLanguageElement ? [headerLanguageElement] : []),
            ]
        );
    };

    if (headerBrandNavigationElement && headerBrandNavigationMoreElement && headerBrandNavigationMoreListElement) {
        window.cake.utils.addMethodExecutedEarliestOnLoad (() => handleBrandNavigation ());
        window.eventThrottled ("resize", () => {
            const availableWidth = getCollapsedNavWidthOrNull();
            handleBrandNavigation (availableWidth);
        }, 100);
    }


    // ****************** Handle Header Search ****************** //

    const toggleHeaderSearchInputState = (enable) => {
        if (enable) {
            headerSearchInputElement.disabled = false;
            headerSearchInputElement.tabIndex = "0";
        } else {
            headerSearchInputElement.disabled = true;
            headerSearchInputElement.tabIndex = "-1";
        }
    };

    // Method to toggle active state of header
    const toggleHeaderSearch = () => {
        if (headerElement.classList.contains (headerSearchActiveClass)) {
            headerElement.classList.remove (headerSearchActiveClass);
            setTimeout (() => {
                toggleHeaderSearchInputState (false);

            }, parseInt (getVariableValue ("--header-transition-duration", headerElement) || 600));
        } else {
            headerElement.classList.add (headerSearchActiveClass);
            toggleHeaderSearchInputState (true);
            // set focus on input element
            setTimeout (() => headerSearchInputElement.focus (), 50);
        }
    };

    if (headerSearchElement && headerSearchLinkElement && headerSearchInputElement) {
        // Method to submit search
        const submitSearch = () => {
            headerSearchInputElement.dispatchEvent (new CustomEvent('search', {
                bubbles: true,
                detail: {
                    value: headerSearchInputElement.value,
                },
            }));
        };

        // Add search link event listener
        headerSearchLinkElement.addEventListener ("click", () => {
            if (window.innerWidth >= options.breakpointMdPx) {
                // Toggle active state on desktop (MD/LG)
                toggleHeaderSearch ();
            } else {
                // Submit search on mobile (XS/SM)
                submitSearch ();
            }
        });

        // Add search input event listener
        headerSearchInputElement.addEventListener ("keyup", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault ();
                // Submit search
                submitSearch ();
            }
        });
    }


    // ****************** Handle Flyout Alignment ****************** //

    if (headerNavigationFlyoutLinksElements) {
        // Method to handle flyout position
        const handleFlyoutAlignment = (element) => {
            const flyoutList = element.siblingSelector ("ul");

            if (flyoutList) {
                const flyoutListBox = flyoutList.getBoundingClientRect ();

                if (flyoutListBox.right + 20 > (window.innerWidth || document.documentElement.clientWidth)) {
                    flyoutList.classList.add ("right");
                }
            }
        };

        for (const headerNavigationFlyoutLinksElement of headerNavigationFlyoutLinksElements) {
            headerNavigationFlyoutLinksElement.addEventListener ("mouseenter", () => handleFlyoutAlignment (headerNavigationFlyoutLinksElement));
        }
    }

};

export default window.cake.header;
