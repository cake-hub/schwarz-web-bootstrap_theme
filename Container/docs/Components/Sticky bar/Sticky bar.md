# Sticky bar

![StickyBarDefault](examples/StickyBarDefault.html)

The sticky bar may only be used in conjunction with the [footer](../Footer/Footer.md). The sticky bar is always placed above the footer.
The element contains the "schwarz"-badge and an optional to-top link to get back to the top of the page.

<ContentRack
    fields='
        "preview": {
            "src": "examples/StickyBarDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/StickyBarDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![StickyBarDefault](examples/StickyBarDefault.html)


## Positioning

The element is always positioned at the bottom of the screen using `position: sticky`. Only if the footer is inside the viewport, the sticky bar is rendered directly above the footer. Thus, the sticky bar is always in the viewer's visible area.

<ContentRack
    fields='
        "preview": {
            "src": "examples/StickyBarWithFooter.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/StickyBarWithFooter.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

<Iframe
    src="examples/StickyBarWithFooter.html"
    scrolling="yes"
    style="max-height: 80vh"
    title="Sticky bar with scroll example"
    alt="StickyBarWithFooter"
/>

## To-top link

On the right side of the sticky bar, under certain conditions, there is a link to jump to the start of the page. By default, this link is only displayed if the scroll height is `600px` or more, and only if the content of the page is longer than `4000px`. Otherwise the to-top link is not shown at all. This default setting is a recommendation from us, but can be customized as described below.

## JavaScript

The sticky bar does work without javascript but not the to-top link. You can import our javascript bundle `cake.js` to automatically use this feature. You only must ensure that the property `data-controller="sticky-bar/link"` is set on the link element.

### Initialization

To initialize the javascript with default configuration you could simply run the following code:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.stickyBar ();
});
```

### Customization

To customize the default behavior you can only embed the `stickyBar.js` file into your mockups. Then you can initialize the functionality by calling:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.toTop (options = {
        toTopElement: null,
        toTopQuerySelector: '[data-controller="sticky-bar/to-top"]',
        offsetPx: 600,
        minPageHeightPx: 4000,
        enableSmoothScrolling: true,
    });
});
```

* `toTopElement [HTMLElement]` - provide the specific to-top link HTMLElement. (optional)
* `toTopQuerySelector [String]` - provide a query-selector to select all to-top link elements. (optional, default: `[data-controller="sticky-bar/to-top"]`)
* `offsetPx [Number]` - number of pixels to use as offset like explained below. (optional, default: `600`).
* `minPageHeightPx [Number]` - number of pixels the page height must be to enable the to-top link. (optional, default: `4000`).
* `enableSmoothScrolling [Boolean]` - set to `true` to enable the [smooth-scrolling](#scroll-behavior) (optional, default: `true`)

If you do provide the `options.toTopElement` the `options.toTopQuerySelector` option gets ignored. If you do not provide any `options.toTopElement` always the `options.toTopQuerySelector` is used!

### Offset

The to-top link is shown after an offset of (default) `600px`. You can set a custom offset by adding the optional parameter `offsetPx` during the initialisation.

```javascript
stickyBar ({
    offsetPx: 1000,
});
```

The above example will set the offset to `1000px`.

### Scroll behavior

By default the script will set the `scroll-behavior: smooth` to the document-element of the page for a smooth scroll animation. This functionality is enabled by default but you have the option to disable this behavior. Set `enableSmoothScrolling: false` as second value to disable smooth scroll animation.

```javascript
totop ({
    enableSmoothScrolling: false,
});
```

With this initialization the smooth scrolling will be disabled and therefore the site jumps directly to-top of the page, when clicking the button.
