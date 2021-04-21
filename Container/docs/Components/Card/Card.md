<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Card

A **card** is a flexible and extensible content container. It can be used for almost every component possible. It can present a product or other stuff that should be displayed with a picture, text and description.

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other CAKE components. They have no `margin` by default, so use [spacing utilities](../../Utilities/Spacing/Spacing.md) as needed.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element. This is easily customized with our various [sizing options](#sizing).

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardDefault.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![CardDefault](examples/CardDefault.html)

## Body

The building block of a card is the `.card-body`. Use it whenever you need a padded section within a card.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardBody.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardBody.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![CardBody](examples/CardBody.html)

## Title

Card titles are used by adding `.card-title` to a `<h*>` tag.
If the `.card-title` items are placed in a `.card-body` item, the card title and text are aligned nicely.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardTitlesText.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardTitlesText.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![CardTitlesText](examples/CardTitlesText.html)

### Images

`.card-img-top` places an image to the top of the card. With `.card-text`, text can be added to the card. Text within `.card-text` can also be styled with the standard HTML tags. To ensure the image-ratio of 4:3 you have to wrap the image with an element that has the classes `card-image-ratio ratio-4-3` applied to it.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardImages.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardImages.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![CardImages](examples/CardImages.html)

## Grid

You can use the default [Grid system](../../Layout/Grid/Grid.md) classes like in this example. Or you use the [Sass mixins](../../Layout/Grid/Grid.md#sass-mixins) to build custom classes.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardGridDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardGridDefault.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![CardGridDefault](examples/CardGridDefault.html)
