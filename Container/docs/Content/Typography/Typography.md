<AlertWarning alertHeadline="Not modifiable">
It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Typography

Documentation and examples of the SCHWARZ typography, including global settings, headings, body text, lists, and more.

## Font

<AlertInfo alertHeadline="Get font">

**Please contact us to get credentials for the webfont for SCHWARZ CI.**

Add the credentials to your personal `.npmrc` file. A little further down in the text you will find an example configuration.
For licensing reasons, we cannot offer the web font as a direct download.

[Download "Helvetica Neue LT" for SCHWARZ CI websites.](https://dev.azure.com/schwarzit/schwarzit.cake/_packaging?_a=package&feed=cake&package=%40cake-hub%2Fschwarz-webfontkit&protocolType=Npm&view=overview)
</AlertInfo>

<AlertWarning alertHeadline="License">

Please read the license file carefully! **Here are some example conditions:**

- You have to add a **tracking snippet** that counts the page views. It is a "pay as you go" license and the tracking is required for billing purposes. You get a example for implementation in pure CSS and Javascript.
- You have to name **copyright notice**,
- you are not **allowed to use the font within form elements**
- and **some more conditions**.

You get all the requirements together with the font.
</AlertWarning>

### Add credentials to implement NPM font package

Here is a example how you can implement credentials in `.npmrc` to access the internal font package for SCHWARZ theme.

- Add scope to the Azure registry
- replace the password and email values. Contact us to get credentials.
- Setup proxy if necessary

```toml
@cake-hub:registry=https://pkgs.dev.azure.com/schwarzit/_packaging/cake/npm/registry/
always-auth=true

//registry.npmjs.org/:_authToken=${NPM_TOKEN}

#auth-token to access private repository
//pkgs.dev.azure.com/schwarzit/_packaging/cake/npm/registry/:username=ANYTHING-BUT-EMPTY
//pkgs.dev.azure.com/schwarzit/_packaging/cake/npm/registry/:_password=${AUTH_TOKEN}
//pkgs.dev.azure.com/schwarzit/_packaging/cake/npm/registry/:email=${AUTH_MAIL}
//pkgs.dev.azure.com/schwarzit/_packaging/cake/npm/registry/:always-auth=true

#proxy-settings
proxy=${PROXY_URL}
https-proxy=${PROXY_URL}
```

### Implementation

Add the variable `$font-path: "[yourTargetFontFolder]";` and insert the path to the webfont.

This is how we configured the font for you. If you want to change something you can overwride the variable.
At the bottom of this page you find a description how the `$fonts-to-load` works.

```scss
// font family name, file name, font weight (default: normal), font style (default: normal), font path (defaulted by the variable $font-path)
$fonts-to-load:         HelveticaNeueLTPro "1488974/HelveticaNeueLTPro-LtCond" 300,
                        HelveticaNeueLTPro "1488974/HelveticaNeueLTPro-LtCond",
                        HelveticaNeueLTPro "1488998/HelveticaNeueLTPro-MdCond" 500,
                        HelveticaNeueLTPro "1488998/HelveticaNeueLTPro-MdCond" 700; // to match with `bold`

$font-weight-normal:    300;
$font-weight-bold:      500;

$font-family-system:        "Helvetica Neue", "Helvetica", Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-sans-serif:    HelveticaNeueLTPro, $font-family-system;
```

The font "Arial" is defined as fallback font if the "Helvetica Neue" and "Helvetica" is not available.

You can use the `$font-family-system` variable if you want to use **only system fonts** that are included in your operating system.

## Global settings

The SCHWARZ theme sets global display, typography, and link styles. When more control is needed, check out the textual utility classes.

- For a more inclusive and accessible type scale, we assume the browser default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
- Use the `$font-family-base`, `$font-size-base`, and `$line-height-base` attributes as our typographic base applied to the `<body>`.
- Set the global link color via `$link-color` and apply link underlines only on `:hover`.
- Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`. Make sure to set `$font-size-base` in `rem`.

## Font weight

### Regular

Please use `font-weight: 300` or `font-weight: 400` for normal style. The normal style uses HelveticaNeueProLT-Cond. We prefere to use the value `300` instead of `normal`. If you use Sass you can use the `$font-weight-bold` variable which also has a value of `500`.

### Bold

Please use `font-weight: 500` or `font-weight: 700` for bold style. The bold style uses HelveticaNeueProLT-MdCond. We prefere to use the value `500` instead of `bold`. If you use Sass you can use the `$font-weight-bold` variable which also has a value of `500`.

## Headings

All HTML headings, `<h1>` through `<h5>`, are available.

![TypographyHeadlines](examples/TypographyHeadlines.html)

### Links

<ContentRack
    fields='
        "preview": {
            "src": "examples/TypographyLinks.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TypographyLinks.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TypographyLinks](examples/TypographyLinks.html)

To place links on darker backgrounds simply use the `.negative` variant of our links.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TypographyLinksNegative.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TypographyLinksNegative.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![TypographyLinksNegative](examples/TypographyLinksNegative.html)

### Lists

<ContentRack
    fields='
        "preview": {
            "src": "examples/TypographyLists.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TypographyLists.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TypographyLists](examples/TypographyLists.html)

### Unstyled list

<ContentRack
    fields='
        "preview": {
            "src": "examples/TypographyListsUnstyled.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TypographyListsUnstyled.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TypographyListsUnstyled](examples/TypographyListsUnstyled.html)


## Responsive font sizes

CAKE ships with the option to enable responsive font sizes, allowing text to scale more naturally across device and viewport sizes. <abbr title="Responsive font sizes">RFS</abbr> can be enabled by changing the `$enable-responsive-font-sizes` Sass variable to `true` and recompiling CAKE.

To support <abbr title="Responsive font sizes">RFS</abbr>, we use a Sass mixin to replace our normal `font-size` properties. Responsive font sizes will be compiled into `calc()` functions with a mix of `rem` and viewport units to enable the responsive scaling behavior. More about <abbr title="Responsive font sizes">RFS</abbr> and its configuration can be found on its [GitHub repository](https://github.com/twbs/rfs).

## custom fonts and $fonts-to-load

If you need to add new fonts please use the variable `$fonts-to-load`. With this variable it is possible to generate a complete set of fonts. It is a comma seperated list of font properties. The properties representing a string list of params like: `font family name`, `file name`, `font weight (default: normal)`, `font style (default: normal)`, `font path (defaulted by the variable $font-path)`. A mixin is generating the `@font-face`'s. You don't have to use all 5 properties every time, at least the first two parameters are required.

```scss
$fonts-to-load:     HelveticaNeueProLT HelveticaNeueProLT-Cond 300,
                    HelveticaNeueProLT HelveticaNeueProLT-Cond,  // to match with `normal`
                    HelveticaNeueProLT HelveticaNeueProLT-MdCond 500,
                    HelveticaNeueProLT HelveticaNeueProLT-MdCond 700; // to match with `bold`
```

Mixed fonts are also possible:

```scss
$fonts-to-load:     MyFont MyFontCondPro-italic notmal italic "../myFonts/",
                    Roboto roboto-v19-latin-regular,
                    Roboto roboto-v19-latin-700 700;
```
