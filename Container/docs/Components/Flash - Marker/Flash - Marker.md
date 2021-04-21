<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Flash - Marker

![FlashMarkerPreview](examples/FlashMarkerPreview.html)

To build a marker element add the `.flash-marker` class to an element. Wrapp it around an element with the class `.flash-marker-content` which contains the content.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashMarkerPreview.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashMarkerPreview.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![FlashMarkerPreview](examples/FlashMarkerPreview.html)


## Colors

The default variant is the positive one with the primary color as background. To use the negative variant add the class `.flash-marker-negative` to the wrapper element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashMarkerColors.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashMarkerColors.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![FlashMarkerColors](examples/FlashMarkerColors.html)


## Content

The element has a fixed width, so the element cannot grow in width. Therefore, with larger content, the element grows only in height and becomes multiline up to a maximum number of 4 lines. If this space is not enough, the rest of the content is dotted out.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashMarkerContent.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashMarkerContent.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![FlashMarkerContent](examples/FlashMarkerContent.html)

## Positioning

The marker can be freely positioned. The component itself is free of positioning properties. Therefore you have to add positioning porperties on your own either with `style` properties or with a self styled `class` or `id`. Please test it on any device size and try to stick to the mobile first approach.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashMarkerPositioning.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashMarkerPositioning.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashMarkerPositioning](examples/FlashMarkerPositioning.html)

## Example

The marker positioned on a teaser for example purpose.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashMarkerExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashMarkerExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlashMarkerExample](examples/FlashMarkerExample.html)
