<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Banner

![BannerPreview](examples/BannerPreview.html)

The banner consists of an image, a title and a subheadline.

The mobile version shows an image with a colored bar underneath which contains the title. The subheadline is `display: none;` on the mobile breakpoints `md` and `xs`.

The default desktop banner will have a dark arrow with light text as a partial overlay of the image.
The content of the subheadline and title should be kept as short as possible.

To create a banner you have to apply the class `.banner` to any element or like in our examples to an `<article>` element, to semantically describe a self-contained composition ([MDN: The Article Contents element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)).

The arrow of the banner can be created with any element like the `<header>` element with the css classes `.banner-content-container` applied to it. Add an element with the class `.banner-content-wrapper` to the container. Inside wrapper element you have to create another element with the attatched class `.banner-content`. Inside these wrapper elements you can put the title `.banner-title` and / or subheadline `.banner-subhead` of the banner.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BannerDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BannerDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BannerDefault](examples/BannerDefault.html)


## Variants

### Inverted

Add `.inverted` to the element with the class `.banner`, to switch the display of the area with the image and the text elements.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BannerInverted.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BannerInverted.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BannerInverted](examples/BannerInverted.html)

### Negative

There is a negative version with a lighter color on the arrow. Only add `.negative` to the `.banner` class element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BannerNegative.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BannerNegative.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BannerNegative](examples/BannerNegative.html)


## Arrow width

The main part of the arrow is by default 50% of the width from the banner element. You can control the width by adding `.col` classes to the `.banner-content-container` which presents the body of the arrow.

The predefined columns count reache from 3 to 6 (6 is the default value). Please note that you only add the column classes for the viewports `md` and `lg`. In conclusion you can use `.col-md-3` up to `.col-lg-6`

<ContentRack
    fields='
        "preview": {
            "src": "examples/BannerAll.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BannerAll.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BannerAll](examples/BannerAll.html)

## Accessibility

Don't forget to give your image alternative informations (`alt-tag`).
