<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Teaser

The teaser consists of an image, a title and a subheadline.

To create an teaser you have to apply the classes `.card` and `.teaser-card` to any element or like in our examples to an `<article>` element, to semantically describe a self-contained composition ([MDN: The Article Contents element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)).

The teaser component **depends on the [Card](../Card/Card.md) component** and uses `.card`, `.card-img` and `.card-img-overlay`. So you have to include the Card component Sass to use the teaser component.

## Teaser components

Only the image is obligatory which means all the other parts of a teaser can optionally be added or removed. The image can be any image with preferably a 4:3 ratio. To apply the correct styling to the image use the `.card-img ` class. In order to keep the ratio 4:3 on any image size surround the image and teaser-body with any wrapper element and the classes `.teaser-image-ratio`and `.ratio-4-3` attatched to it.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserDefault](examples/TeaserDefault.html)

## Teaser bar

The content of the subheadline and title should be kept as short as possible.

To put content onto this teaser, you have to use an element with the class `.card-body` inside the wrapper element.
In addition you have to add another `header` element with the class `.teaser-header`. Inside this element you can place your `.teaser-card-title` and `.teaser-card-subhead`.

The bar of the teaser can be created with any element like the `<header>` element with `.card-img-overlay` and `.teaser-card-img-overlay`. Inside this wrapper element you can put the title `.teaser-card-title` and / or subheadline `.teaser-card-subhead` of the teaser.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserTitle.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserTitle.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserTitle](examples/TeaserTitle.html)

## Linked teaser

If you'd like a **linked teaser**, you can simply use an `a`-tag as wrapper element for your teaser content like in the example above. Additionally you have to also apply the class `.teaser-card-link` to this `a`-tag.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserLinked.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserLinked.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserLinked](examples/TeaserLinked.html)


## Teaser inside a grid

To get started easily below is an example of how to use the teasers with our [grid](../../Layout/Grid/Grid.md). This example can be changed to whatever you need in your project.

### 3 cols

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserGrid3.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserGrid3.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserGrid3](examples/TeaserGrid3.html)

### 4 cols

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserGrid4.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserGrid4.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserGrid4](examples/TeaserGrid4.html)
