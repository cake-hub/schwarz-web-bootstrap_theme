import "./cakeDOM";

if (typeof window.cake !== "object") {
    window.cake = {};
}

const defaultOptions = {
    toTopElement: null,
    toTopQuerySelector: '[data-controller="sticky-bar/to-top"]',
    offsetPx: 600,
    minPageHeightPx: 4000,
    enableSmoothScrolling: true,
};

window.cake.stickyBar = (options = defaultOptions) => {
    options = {...defaultOptions, ...options};

    // Get sticky-bar elements
    const toTop = window.cake.utils.getElement (options.toTopElement, options.toTopQuerySelector);

    // stop here if no sticky bar exists
    if (!toTop) {
        return null;
    }

    // Method to toggle to-top button
    let timeoutId = null;
    const hideElement = (element, isHidden) => {
        // show element again
        if (!isHidden) {
            clearTimeout (timeoutId);
            timeoutId = null;
            element.classList.remove ("invisible");
            return;
        }
        // check if we already created timeout or element is already invisible
        if (timeoutId !== null || element.classList.contains ("invisible")) {
            return;
        }

        // set timeoutId to hide element
        const delay = window.getComputedStyle (element).getPropertyValue ('transition-duration') || 0;
        timeoutId = setTimeout (
            () => {
                element.classList.add ("invisible");
                timeoutId = null;
            },
            parseFloat (delay) * 1000
        );
    };

    // Add mechanism to show / hide to-top button
    window.eventThrottled ("scroll", () => {
        if (document.body.scrollTop > options.offsetPx || document.documentElement.scrollTop > options.offsetPx) {
            // Check if we need to-top-button
            if (options.minPageHeightPx >= document.body.clientHeight) {
                return;
            }
            hideElement (toTop, false);
        } else {
            hideElement (toTop, true);
        }
    });

    // add to-top click functionality
    toTop.addEventListener ("click", ( ev ) => {
        ev.preventDefault ();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Add smooth scroll behavior to html-element
    if (options.enableSmoothScrolling) {
        document.documentElement.style.scrollBehavior = "smooth";
    }
};

export default window.cake.stickyBar;
