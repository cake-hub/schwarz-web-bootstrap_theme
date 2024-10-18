<AlertWarning alertHeadline="Deprecated">
This component is deprecated and will be no longer supported. Main reason is the outdated logo. Please get the up to date designs from the <a href="https://brand.schwarz/">SCHWARZ Brandportal</a>.
</AlertWarning>

# Header

The header is a component for creating brand awareness and providing important or legally required links.

![HeaderPreview](examples/HeaderPreview.html)

## Parts of the header

The header consists of different parts, to provide various information or interactable content:

* container element (`.header`)
* wrapper element (`.header-wrapper` & `.container-responsive`)
* logo wrapper (`.header-logo-wrapper`)
    * logo link (`.header-logo-link`)
    * logo image (`.header-logo`)
* header navigation (`.header-nav-wrapper`)
    * brand navigation (`.header-brandnav`)
    * search (`.header-search`)
    * language selection (`.header-language`)
    * user navigation (`.header-usernavigation`) [This component is using the [Badge](../Badge/Badge.md) and the [Icon](../Icon/Icon.md) component. So you have to **include the Badge and Icon component (S)CSS** to use the user navigation]
    * main navigation (`.header-main-nav`)
        * sub navigation (`.header-sub-nav`)

## Dependencies

The header relies on some internal and external dependencies which are required. As the user-navigation uses our [Badge](../Badge/Badge.md) you have to include the badge's (S)CSS styles. Additionally we use the npm package [hamburgers](https://www.npmjs.com/package/hamburgers) to provide the mobile button with some amazing state transitions.

## Default header

The default header works responsive with all our breakpoints. We use flexbox to correctly order and position the parts of the header mentioned above. So we've implemented the header in such a way that every element does only exist once in the DOM. This is to prevent deterioration of SEO.

### States of the header

The header can have a few different states which will look differently as you can see in the example below. These states are handled with some special modifier-classes added to the outer `<header>` element. There are three different states:

* collapsed header on scroll (`.header-collapsed`).
* the expanded header on mobile view [viewports XS + SM] (`.header-mobile-expanded`).
* active search on header variant [viewports MD + LG] (`.header-search-active`).

Each of these states will be automatically added to the header-element when using [our JavaScript](#javascript) as described at the end of this page.

<ContentRack
    fields='
        "preview": {
            "src": "examples/HeaderDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/HeaderDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

<Iframe
    src="examples/HeaderDefault.html"
    style="min-height: 9.375rem; max-height: 60vh;"
    title="HeaderDefault"
    alt="HeaderDefault"
></Iframe>

## Header with sub navigation

The header provides the functionality to display an additional submenu. To not only show the submenu as flyout of the main navigation, set the active main navigation to `active`. Additionally the class `.has-active-sub-nav` has to be added to the header main navigation list element (`.header-main-nav-list` or `[data-controller="header/main/list"]`).
This can be achieved by extending the correct list-item (`li.header-main-nav-item`) of the main navigation (`ul.header-main-nav-list`) with the class `.active` like:

```html
<ul class="header-main-nav-list" data-controller="header/main/list">
    <li class="header-main-nav-item active" tabindex="0">…</li>
    …
</ul>
```

The correct setup is shown in the example below with the third main navigation set to active.

<ContentRack
    fields='
        "preview": {
            "src": "examples/HeaderWithSubNav.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/HeaderWithSubNav.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

<Iframe
    src="examples/HeaderWithSubNav.html"
    style="min-height: 9.375rem; max-height: 60vh;"
    title="HeaderWithSubNav"
    alt="HeaderWithSubNav"
></Iframe>

## Head with scroll-behavior

We've already named the different states of the header. To get a feeling of how the collapsed header state will look like, please study the example below. We've added some space to enable scrolling for this example. Now try it on your own and scroll a few pixels to see how the header will look different.

<ContentRack
    fields='
        "preview": {
            "src": "examples/HeaderWithScrollBehavior.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/HeaderWithScrollBehavior.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

<Iframe
    src="examples/HeaderWithScrollBehavior.html"
    scrolling="yes"
    style="max-height: 60vh"
    title="HeaderWithScrollBehavior"
    alt="HeaderWithScrollBehavior"
/>

## Header list

Some parts of the header use the so-called **header list**. This class can be used in the header, to provide links which should semantically stay in a list. When applying the `.header-list` class on the parts like the `.header-brandnav`, `.header-language` or `.header-usernvaigation`, the default list styling will be removed and the list items will be placed next to each other with `display: inline-block`. Additionally there are classes for the items in the list (`.header-list-item`) and for optional links inside these list items (`.header-list-item-link`).

## Accessibility

The header component should always be rendered as a `<header>` element. Otherwise the landmark `role="banner"` should be applied – when its context is not the body element – to identify the page header as explained at [W3: Banner Landmark](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/banner.html).

There is also a landmark available for the navigation parts of the header. Each of the list should have the landmark `role="navigation"` and an `aria-label="label"` with a meaningful label, which implicates, that it is a group of navigation links. Alternatively, the `<nav />` element can be used to identify a group of navigation elements, which should be preferred, when there is no list item (`ul`, `ol`) used: [W3: Navigation Landmark](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/navigation.html).

For the main navigation of the header, the `<nav>` element should be used and at the best it should be described by a meaningful `aria-label=""`.
To increase the accessibility you should consider to add the aria attributes `aria-pressed` to the navigation burgermenu (`.header-hamburger-menu`) and `aria-expanded` to the main navigation (`.header-navigation`). The JavaScript (`header.js`) is already configuring `aria-pressed` and `aria-expanded` properly.

For the user navigation a corresponding explanation must be provided for the number in the badge. This is defined as screen reader only text `.sr-only` as described in the [accessibility section of the badge](../Badge/Badge.md#accessibility).

## JavaScript

The header component relies on our JavaScript in order to work with it's full functionality. You can import our JavaScript bundle `cake.js` to automatically use all features of the header and navigation. You only must ensure that the properties and `data-controller`s are correctly set up. For example the `data-controller="header"` should always be set on the base element `<header />`.

There are in summary 6 different features that are managed by our JavaScript and that have to be implemented on your own, if you do it without our library.

### Search toggling

While in the mobile version the search appears with the menu, in the desktop version the search must be displayed by clicking on the magnifying glass icon.
To enable this functionality you have to add the `data-controller="header/search/link` to the search link. Our JavaScript uses this data-controller to add the class `.header-search-active` to the `<header>` element. With this class the search input will be shown and the user can type in his search query.
Additionally the magnifying glass link will change its appearance to a cross. By clicking on this link again, the search bar will again disappear and the class `.header-search-active` will be removed from the header.

### Search submission

Another feature our JavaScript will handle for you, is to submit the search input on enter or by clicking on the magnifying glass on mobile. To enable this feature add the `data-controller="header/search/input"` to the input element of the search. On submit the input-element will automatically throw an event named `search`. So you can just listen to this event to recognize any search submit of the user:

```javascript
document.addEventListener ("DOMContentLoaded", function () {
    const searchInput = document.querySelector ("*[data-controller='header/search/input']");
    searchInput.addEventListener ("search", function (e) {
        console.log ("The search query is:", e.detail.value);
    });
});
```

As you can see in the example code above, the `search` event does provide you the search query within the `detail` object as key `value`.

### Mobile menu toggling

As for the [search toggling](#search-toggling) the toggling of the mobile menu does work by adding the class `.header-mobile-expanded` to the base `<header />` element. Then the mobile navigation will be shown and again be hidden, when this class is missing. To add this functionality to the buger-menu link add the `data-controller="header/mobile-menu"` to the relevant burger-menu link element `<a class="header-list-item-link header-usernavigation-link header-hamburger-menu">…</a>`.
Due to the reason we are using the [hamburgers npm package](https://www.npmjs.com/package/hamburgers), you have to toggle the additional class `.is-active` on the element with `data-controller="header/mobile-menu/button"`. This will ensure the correct transition state changes.

### Collapsed header handling

As simple as the other both header states are, that simple is also the collapsed header handling. In this case the class `.header-collapsed` is responsible for the correct appearance of the header. On scrolling to top again, the additional class `.header-not-collapsed` gets attached to the `<header />` element. This class is responsible for the correct state transitions / animations. If this class (`.header-collapsed`) is set, the header is displayed in a more simple and slim variant and if the class is removed, the header will be shown in its full version again. Only ensure to use the `data-controller="header"` on the base element so that our JavaScript can work as intended.

### Handling the "more" navigation items

Due to the vertical alignment of the main and sub navigation items on mobile, they all have enough space to be shown at once (scrolling). Despite on desktop viewports there could be the case, that not all navigation items can be shown at once. There is not enough space available. To prevent navigation items to be hidden, the header automatically moves all navigation items, that do not have enough space, into another navigation item "more". These navigation items will then be shown in a flyout on hovering the "more" link.
In order to enable this behavior you have to set the following `data-controller`s to the specified elements.

* `data-controller="header/main/list"` to the `ul.header-main-nav-list` element.
* `data-controller="header/main/more"` to an additional `li.header-main-nav-item` element.
* `data-controller="header/main/more/list"` to an additional `ul.header-sub-nav` inside the "more" list element.

If you do have an **active** main navigation with a shown sub navigation you also have to set some additional `data-controller`s.

* `data-controller="header/sub"` to the `ul.header-sub-nav` element.
* `data-controller="header/sub/more"` to an additional `li.header-sub-nav-item` element.
* `data-controller="header/sub/more/list"` to an additional `ul.header-sub-nav` inside the "more" list element.

### Flyout alignment

The flyouts of the header work without any JavaScript. They are implemented with pure CSS. As a default the flyouts are aligned to the left side of the navigation item that triggers the flyout. This behavior is completely fine as long as the flyout is not cut off at the right edge of the screen. In this case our JavaScript takes care of the correct positioning of the flyout. In such a case the flyout will be aligned to the right side of the navigation item.
As a default this behavior is automatically configured for all elements matching the query-selector `.header-main-nav-link, *[data-controller="header/sub/more"] > .header-sub-nav-link`.

### Initialization

To initialize the JavaScript with default configuration you could run the following code snippet:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.header ();
});
```

To override the default values and customize the execution of the header, you can specify certain values during initialization. All available options can be found under [Customization](#javascript-customization). For example, to initiate the header using a specific element you can specify a `headerElement`. With `headerCollapsedScrollThresholdPx` for example you can also adjust the threshold of the collapsed header at which scroll height the header should collapse.

```html
<div class="header" id="our-own-header">
    …
</div>
```

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.header ({
        headerElement: document.getElementById ("our-own-header"),
        headerCollapsedScrollThresholdPx: 300,
    });
});
```

### Events

There is currently one event that gets fired, when using our JavaScript of the header.

| Element | Event | Event return object | Description |
|---|---|---|
| search input (`[data-controller="header/search/input"]`) | `search` | `{ value: "xxx" }` | Get's dispatched, when a user submits his search query. |


```javascript
document.querySelector ('[data-controller="header/search/input"]').addEventListener ("search", function (event) {
    var searchQuery = event.detail.value;
});
```

### Customization

To customize the default behavior you can embed the `header.js` file into your mockups. Then you can initialize the functionality by calling:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.header (options = {
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
    });
});
```

* `headerElement [HTMLElement]` – the header element (optional)
* `headerQuerySelector [String]` – the query selector of the header element (optional, default: `*[data-controller="header"]`)
* `headerWrapperElement [HTMLElement]` – the header element (optional)
* `headerWrapperQuerySelector [String]` – the query selector of the header element (optional, default: `*[data-controller="header"]`)
* `headerMobileMenuElement [HTMLElement]` – the mobile menu button link element (optional)
* `headerMobileMenuQuerySelector [String]` – the query selector of the mobile menu button link element (optional, default: `*[data-controller="header/mobile-menu"]`)
* `headerMobileMenuButtonElement [HTMLElement]` – the mobile menu hamburgers button element (optional)
* `headerMobileMenuButtonQuerySelector [String]` – the query selector of the mobile menu hamburgers button element (optional, default: `*[data-controller="header/mobile-menu/button"]`)
* `headerSearchElement [HTMLElement]` – the header search container element (optional)
* `headerSearchQuerySelector [String]` – the query selector of the header search container element (optional, default: `*[data-controller="header/search"]`)
* `headerSearchLinkElement [HTMLElement]` – the search link element (optional)
* `headerSearchLinkQuerySelector [String]` – the query selector of the search link element (optional, default: `*[data-controller="header/search/link"]`)
* `headerSearchInputElement [HTMLElement]` – the search input element (optional)
* `headerSearchInputQuerySelector [String]` – the query selector of the search input element (optional, default: `*[data-controller="header/search/input"]`)
* `headerUsernavigationElement [HTMLElement]` – the usernavigation element (optional)
* `headerUsernavigationQuerySelector [String]` – the query selector of the usernavigation element (optional, default: `*[data-controller="header/usernavigation"]`)
* `headerLanguageElement [HTMLElement]` – the language selection element (optional)
* `headerLanguageQuerySelector [String]` – the query selector of the language selection element (optional, default: `*[data-controller="header/language"]`)
* `headerBrandNavigationElement [HTMLElement]` – the brand navigation element (optional)
* `headerBrandNavigationQuerySelector [String]` – the query selector of the brand navigation element (optional, default: `*[data-controller="header/brandnav"]`)
* `headerBrandNavigationMoreElement [HTMLElement]` – the brand navigation more (optional)
* `headerBrandNavigationMoreQuerySelector [String]` – the query selector of the brand navigation more (optional, default: `*[data-controller="header/brandnav/more"]`)
* `headerBrandNavigationMoreListElement [HTMLElement]` – the bran navigation "more" list element (optional)
* `headerBrandNavigationMoreListQuerySelector [String]` – the query selector of the bran navigation "more" list element (optional, default: `*[data-controller="header/brandnav/more/list"]`)
* `headerMainNavigationElement [HTMLElement]` – the main navigation wrapper element (optional)
* `headerMainNavigationQuerySelector [String]` – the query selector of the main navigation wrapper element (optional, default: `*[data-controller="header/main"]`)
* `headerMainNavigationListElement [HTMLElement]` – the main navigation list element (optional)
* `headerMainNavigationListQuerySelector [String]` – the query selector of the main navigation list element (optional, default: `*[data-controller="header/main/list"]`)
* `headerMainNavigationMoreElement [HTMLElement]` – the main navigation "more" element (optional)
* `headerMainNavigationMoreQuerySelector [String]` – the query selector of the main navigation "more" element (optional, default: `*[data-controller="header/main/more"]`)
* `headerMainNavigationMoreListElement [HTMLElement]` – the main navigation "more" list element (optional)
* `headerMainNavigationMoreListQuerySelector [String]` – the query selector of the main navigation "more" list element (optional, default: `*[data-controller="header/main/more/list"]`)
* `headerSubNavigationListElement [HTMLElement]` – the sub navigation element (optional)
* `headerSubNavigationListQuerySelector [String]` – the query selector of the sub navigation element (optional, default: `*[data-controller="header/sub"]`)
* `headerSubNavigationMoreElement [HTMLElement]` – the sub navigation "more" element (optional)
* `headerSubNavigationMoreQuerySelector [String]` – the query selector of the sub navigation "more" element (optional, default: `*[data-controller="header/sub/more"]`)
* `headerSubNavigationMoreListElement [HTMLElement]` – the sub navigation "more" list element (optional)
* `headerSubNavigationMoreListQuerySelector [String]` – the query selector of the sub navigation "more" list element (optional, default: `*[data-controller="header/sub/more/list"]`)
* `headerNavigationFlyoutLinksElements [Array<HTMLElement>]` – the flyout navigation link elements (optional)
* `headerNavigationFlyoutLinksQuerySelector [String]` – the query selector of the flyout navigation link elements (optional, default: `.header-main-nav-link, *[data-controller="header/sub/more"] > .header-sub-nav-link, .header-language-active, .header-brandnav-link`)
* `breakpointMdPx [Number]` – the md/desktop-breakpoint in pixels (optional, default: `960`)
* `headerCollapsedScrollThresholdPx [Number]` – the threshold of showing the collapsed header on scroll in pixels (optional, default: `100`)

If you do provide the `options.[...]Elements` the `options.[...]QuerySelector` option gets ignored. If you do not provide any `options.[...]Elements` always the `options.[...]QuerySelector` is used!
