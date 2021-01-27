<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Popover

Documentation and examples for adding CAKE popovers to any element on your site.

## Overview

CAKEs popovers rely on the 3rd party library [**Tippy.js**](https://github.com/atomiks/tippyjs) in version [**6.2.7**](https://atomiks.github.io/tippyjs/v6/getting-started/).

## Styling

And you have to include the CSS from `~tippy.js/dist/tippy` for basic styling. We also use a outline for the popovers. Import the `~tippy.js/dist/border` for a outlined styling. And we provide a customizable theme for it. Include also the `popover.scss` SCSS file and you can configure the styling in `variables.scss`.

```scss
@import "~tippy.js/dist/tippy";
@import "~tippy.js/dist/border";

@import "~@cake/web/scss/popover";
```

The popover will show up by focusing/hovering above a certain element. If the element loses focus/mouseover the popover will fade out with a slight delay of `200ms`. Because of the missing hover effect on handhelt devices, the popover will be shown on a click on the element.
To define the content of the popover set the `data-tippy-content="…"` property on this element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverDefault.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![PopoverDefault](examples/PopoverDefault.html)

*In the examples on this page, [spacing utilities](../../Utilities/Spacing/Spacing.md) are used to make the display clearer.*

## Placement

You have the possibility to adjust the placement of the popover with additional data-attributes.

The popovers can be placed on any side of the dependent element. Therefore you simply have to add the `data-tippy-placement` attribute with one of the values `top`, `bottom`, `left`, `right`. With these configurations the popover will stick to the side you've set up, as long as there is enough space for it. Otherwise the popover will flip to the position needed.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverPlacement.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverPlacement.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![PopoverPlacement](examples/PopoverPlacement.html)

### Extended positioning

In addition to the `data-tippy-placement="{position}"` you can add a suffix to the position like `-start` or `-end`. As a default the popover will be placed vertically or horizontally centerd next to the element, when there is enough space for it. If you add one of the above suffixes, you can move the popover to the edge of the start of the element (`-start`) or to the other edge (`-end`).

<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverPlacementExtended.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverPlacementExtended.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![PopoverPlacementExtended](examples/PopoverPlacementExtended.html)

## Contents and elements

Despite the placement you have some more options regarding the content and the dependent element of the popover.

### Custom content

You can for example also add html-content to the popover. As default the popover content will be escaped to prevent [cross-site scripting (xss)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) but you can enable the parsing of html-content inside the popover by setting the data-attribute `data-tippy-allowHTML="true"`. Below there are two examples showing the possibilities of html-content inside a popover.

> #### Keep content minimal
>
> Please be careful with custom content and keep it at the lowest required minimum! Otherwise the User-Experience can significantly be impaired!

<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverCustomContent.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverCustomContent.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![PopoverCustomContent](examples/PopoverCustomContent.html)

### Custom elements

As already mentioned above, you can add a popover to any valid html element. Therefore you just have to add at least the `data-tippy-content` to the desired element as shown below. It's recommended that you sould only use focusable elements like form elements or links in combinations with popovers to make it accessible.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverCustomElement.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverCustomElement.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![PopoverCustomElement](examples/PopoverCustomElement.html)

## Colors

The popover will show up in white "cake" theme as a default. The white color fits perfectly for the purpose of popovers.

> ### Avoid usage of themes
>
> Since these should enable the display of further information inconspicuously, the cake theme is ideally suited by the neutral representation and you should aviod using other themes wherever it is possible.

Nevertheless you can use any `$theme-color` as theme for the popover. To get the stylings below, simply add the `data-tippy-theme` attribute with the color name as value.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverColors.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverColors.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![PopoverColors](examples/PopoverColors.html)

### JavaScript

The popover does not work without javascript. You can import our javascript bundle `cake.js` to automatically use this feature. You only must ensure that the property `data-tippy-content="…"` is set on the popover element. Otherwise you can embedd the `popover.js` which already contains `tippy.js` to customize the popover options.

#### Initialization

To initialize the javascript with default configuration you could simply run the following code:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.popover ();
});
```

#### Customization

To customize the default behavior you can only embedd the `popover.js` file into your mockups. Then you can initialize the functionality by calling:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.popover (options = {
        popoverElements: [],
        popoverQuerySelector: '*[data-tippy-content]',
        tippyProps: {
            theme: "cake",
            placement: 'top',
            popperOptions: {
                positionFixed: true,
                modifiers: [
                    {
                        name: 'flip',
                        enabled: true,
                        options: {
                            fallbackPlacements: ['bottom'],
                        },
                    },
                ],
            },
            interactive: true,
            delay: 200,
            appendTo: 'parent',
            onMount({ reference }) {
                reference.setAttribute('aria-expanded', 'true')
            },
            onHide({ reference }) {
                reference.setAttribute('aria-expanded', 'false')
            },
        },
    });
});
```

* `popoverElements [Array]` - provide the popover elements as HTMLElement (optional)
* `popoverQuerySelector [String]` - provide a query-selector to select all popover elements. (optional, default: `*[data-tippy-content]`)
* `tippyProps [String]` - provide custom [tippy.js configuration](https://atomiks.github.io/tippyjs/v6/all-props/) properties. (optional)

If you do provide the `options.popoverElements` the `options.popoverQuerySelector` option gets ignored. If you do not provide any `options.popoverElements` always the `options.popoverQuerySelector` is used!

### Tippy.js options (`tippyProps`)

The **globalConfiguration** argument can be configured with any option from the [Tippy.js Documentation](https://atomiks.github.io/tippyjs/). A full list of all the options provided by Tippy.js can be found [here](https://atomiks.github.io/tippyjs/v6/all-props/). The default configuration set by CAKE has been showed above.

### Methods

The popover instance provides mutliple methods, which can be used programmatically to provide you more control and possibilities. Here is the complete [list of methods](https://atomiks.github.io/tippyjs/v6/methods/).

## Accessibility

The package Tippy.js provides basic functionalities to ensure basic accessibility standards. To dive deeper into that topic, you should definitely read the [Accessibility section on Tippy.js](https://atomiks.github.io/tippyjs/v6/accessibility/).
