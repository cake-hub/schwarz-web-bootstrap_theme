<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Flash - Corner

![FlashCornerPreview](examples/FlashCornerPreview.html)

To build a corner element start with the `.flash-corner` class an element. The fist child should be a `div` with the class `.flash-corner-rotation` and this needs a child `div` too with `flash-corner-wrapper` as class. All this is wrapped around the final `div` (`.flash-corner-content`) which contains the text content.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashCornerPreview.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashCornerPreview.html",
            "type": "content",
            "selector": "#app"
        }
    '
/>

![FlashCornerPreview](examples/FlashCornerPreview.html)


## Colors

There exists also a negative version for better contrast. Only add `.flash-corner-negative` to the main element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashCornerColors.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashCornerColors.html",
            "type": "content",
            "selector": "#app"
        }
    '
/>

![FlashCornerColors](examples/FlashCornerColors.html)


## Positioning

The corner is built to be placed in the edges of an element. We added classes for every position, to help you not only with the style and rotation of the corner, we added the `top`, `right`, `bottom` and `left` coordinates too. The `position` property needs to be set by your self, if you want to use it. Be sure to set the `position` property of the parent element to everything but not `static`.
The top left corner variant is the default, but if you like to have the coordiantes for it too, simply add `.top-left` to the main element. The other 3 classes change the styles too. Here are all of them in a list:

* `top-left`
* `top-right`
* `bottom-right`
* `bottom-left`

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashCornerPositioning.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashCornerPositioning.html",
            "type": "content",
            "selector": "#app"
        }
    '
/>

![FlashCornerPositioning](examples/FlashCornerPositioning.html)


## Text lengths

Be sure to check the text length on the smallest size, probably on mobile, of the parent element. We defined a `max-width` for the ellipsis to start. The calculation is mentioned on the headline [magic numbers](#magic-numbers).

<ContentRack
    fields='
        "preview": {
            "src": "examples/FalshCornerLongText.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FalshCornerLongText.html",
            "type": "content",
            "selector": "#app"
        }
    '
/>

![FalshCornerLongText](examples/FalshCornerLongText.html)


## Example

For example a corner on a teaser.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlashCornerExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlashCornerExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
/>

![FlashCornerExample](examples/FlashCornerExample.html)


## Magic numbers

We used a 360px wide screen width for our calculation. This is the most used small screen width for mobile devices on our Sites. But the solution also works for 320px! The corner component was placed up to the center of an image. So we got the length of the component for mobile devices.
Since a larger font size was used for the desktop view, the corner component is longer in this view to be able to display approximately the same text length as on mobile view.
