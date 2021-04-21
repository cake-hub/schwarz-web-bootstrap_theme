<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Flash - Frame

![FlashFramePreview](examples/FlashFramePreview.html)

To build a frame element add the `.flash-frame` class to an element. Wrapp it around an element with the class `.flash-frame-content` for the content.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashFramePreview.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashFramePreview.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashFramePreview](examples/FlashFramePreview.html)


## Colors

The default positive variant is with the primary color as background. To use the negative variant simply add the class `.flash-frame-negative`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashFrameColors.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashFrameColors.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashFrameColors](examples/FlashFrameColors.html)


## Content

The frame grows with the content up to a `max-width` of 50% of the parent element. If the text don't fit, it will be cut off with the ellipsis (`…`). The content is one line most of the time, but if you want two lines: please use `<br />` as an line divider. The third line is not visible anymore.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashFrameContent.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashFrameContent.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashFrameContent](examples/FlashFrameContent.html)

## Positioning

The frame should be placed at the left or right border of an component. The vertical setting is freely selectable. The component is free of positioning properties, but we added a little help for you.
You can add the `.left` or `.right` class for the proper placement. Not that you need to add the `.right` class for the switched visualisation of the component. Next to this we added `left: 0` and `right: 0` to the corresponding classes. `.left` and `.right` can be extended for the specific viewports, so you can add `-sm`, `-ms` and `-lg` to these classes.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashFramePositioning.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashFramePositioning.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashFramePositioning](examples/FlashFramePositioning.html)

## Example

For example a frame on a teaser.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashFrameExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashFrameExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashFrameExample](examples/FlashFrameExample.html)
