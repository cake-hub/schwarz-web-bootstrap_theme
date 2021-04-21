<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Colors

Convey meaning through color with a handful of color utility classes.

## Definition of colors in CAKE

### theme-colors

In `$theme-colors` are the basic colors of this library already pre-defined. You can add other (theme-)colors to this list by providing a logical name and a color definition for these.

* `primary`
* `secondary`
* `success`
* `info`
* `danger`
* `attention`
* `gray`

### color-gradations

To give you a jump start and to cover the most relevant colors with it's gradations already, the `$color-gradations` map is already predefined.
Each relevant color has been defined with at least one gradation `base`. This is the default color. Most of the colors does already have some more gradations as listed below.

These color gradations can be used with the `cake-color` function. This function has two parameters where the second one is optional:

```scss
$my-color: cake-color(<color definition>, <gradation *optional, default=base>);

/* eg. */
$my-second-color:   cake-color("primary"); /* => #6e1e6e */
$my-color:          cake-color("gray", "dark"); /* => #505050 */
```

The available colors that can be used with the `cake-color` function are listed below:

* `primary`|`secondary`|`mark`|`white`|`black`
  * `base` (default)
* `success`|`info`|`danger`|`attention`
  * `base` (default)
  * `dark`
  * `darker`
  * `darkest`
* `gray`
  * `base` (default)
  * `background`
  * `lightest`
  * `lighter`
  * `light`
  * `dark`


## Text colors

To be able to use our `$theme-colors` without scss, there are utility classes `.text-<theme-color>`. With these you can color the text to the appropriate color. Additionally `.text-white` and `.text-black` are always available too.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TextColors.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TextColors.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TextColors](examples/TextColors.html)


## Background colors

Similar to the contextual text color classes, set the background of an element to any contextual class like `.bg-<theme-color>`. Background utilities **do not set** color, so in some cases you’ll want to use `.text-*` utilities too.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ColorBackground.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ColorBackground.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ColorBackground](examples/ColorBackground.html)


> ## Dealing with specificity
>
> Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element’s content in a `<div>` with the class.
>
> ## Conveying meaning to assistive technologies
>
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

## Special color "mark"

Beside the `$theme-colors` there is another color named **mark** which can be used for special highlighting like with a marker pen.
The color can be used with variable defined in `_variables_root.scss`.

* `$mark`

These can be used everywhere in your sass files as long as the `_variables-root.scss` is included before their usage.

To use the mark color also in your css and html there are two utility classes ready to use. `.text-mark` can be used to set the `color` and `.gb-mark` to adjust the `background-color`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ColorMark.html",
            "type": "link"
        },
        "<html>": {
            "src": "examples/ColorMark.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ColorMark](examples/ColorMark.html)

> ## Pay attention with contrast ratio
>
> By using the color mark take care of the contrast ratio of the content to the background. The content should always be legible, even for people with impaired vision. In addition, the mark color should only be used very sparingly in order to fulfil its purpose as a highlight color.

## Extend the color-set

If you need to extend the predefined color-set you have to add new colors to the `$theme-color` map or add gradations to available colors by extending the map `$color-gradations`. The default gradation color is called "base" where each `$theme-color` is automatically included in the `$color-gradations` with at least their `base` gradation. To add more gradations, you simply have to extend the map by the desired color.
As already mentioned, the `base` gradation does not have to be specified here, but can still be used. Accordingly, the color `cake-color( "primary", "base")` or even more simply `cake-color("primary")` is available anyway!

```scss
// Extend $theme-colors
$theme-color: cake-map-merge(
    $theme-color,
    (
        "cool-theme-color": "#123456"
    )
);

// Extend $color-gradations
$color-gradations: cake-map-merge(
    $color-gradations,
    (
        "primary": (
            "extravagant": "#ba57ba",
            "fancy": "#380638"
        ),
    )
);

// use new $theme-color
body {
    color: cake-color("cool-theme-color");
}

// use new $color-gradations
p {
    color: cake-color("primary", "extravagant");
    background-color: cake-color("primary", "fancy");
}
```
