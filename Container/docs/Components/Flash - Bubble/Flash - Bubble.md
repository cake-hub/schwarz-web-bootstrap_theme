<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Flash - Bubble

![FlashBubblePreview](examples/FlashBubblePreview.html)

To build a marker element add the `.flash-bubble` class to an element. Wrapp it around an element with the class `.flash-bubble-content` which contains the content.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashBubblePreview.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashBubblePreview.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashBubblePreview](examples/FlashBubblePreview.html)


## Colors

The default variant is the positive one with the primary color as background. To use the negative variant add the class `.flash-bubble-negative` to the wrapper element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashBubbleColors.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashBubbleColors.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashBubbleColors](examples/FlashBubbleColors.html)


## Content

The element has a fixed width and height, so the element cannot grow. Therefore, with larger content the text becomes multiline up to a maximum number of 2 lines or 3 lines on breakpoint LG. If the space is not enough, the rest of the content is dotted out.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashBubbleContent.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashBubbleContent.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashBubbleContent](examples/FlashBubbleContent.html)

## Positioning

The bubble can be freely positioned. The component itself is free of positioning properties. Therefore you have to add positioning porperties on your own either with style properties or with a self styled class or id. Please test it on any device size and try to stick to the mobile first approach.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashBubblePositioning.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashBubblePositioning.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashBubblePositioning](examples/FlashBubblePositioning.html)

## Example

The flash bubble positioned on a teaser for example purpose.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashBubbleExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashBubbleExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashBubbleExample](examples/FlashBubbleExample.html)
