<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Examples

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the six **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [cakes alert plugin](#examples-dismissing).

<ContentRack
    fields='
        "preview": {
            "src": "examples/AlertDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AlertDefault.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![AlertDefault](examples/AlertDefault.html)

> ### Conveying meaning to assistive technologies
>
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

### Link color

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

<ContentRack
    fields='
        "preview": {
            "src": "examples/AlertLink.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AlertLink.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![AlertLink](examples/AlertLink.html)

### Icon aside

A status icon on the page can highlight the intended use. We use `display: flex;` to place the icon aside the content. Wrap your content inside a `<div class="alert-content-with-icon">` and add `<div class="alert-icon">ADD YOUR ICON</div>` in front of it. Thereby the icon must have a fixed size. The icon wrapper `.alert-icon` adjusts to the width of the icon.

<ContentRack
    fields='
        "preview": {
            "src": "examples/AlertIconsAside.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AlertIconsAside.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![AlertIconsAside](examples/AlertIconsAside.html)

### Additional content

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.

<ContentRack
    fields='
        "preview": {
            "src": "examples/AlertAddidtionalContent.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AlertAddidtionalContent.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![AlertAddidtionalContent](examples/AlertAddidtionalContent.html)

### Dismissing

Using the alert JavaScript plugin, it's possible to dismiss any alert inline. Here's how:

- Be sure you've loaded the alert plugin, or the compiled CAKE JavaScript.
- Add a dismiss button and the `.alert-dismissible` class, which positions the `.close` button.
- On the dismiss button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it and place it as the first child of the alert for proper behavior across all devices.
- To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo:

<ContentRack
    fields='
        "preview": {
            "src": "examples/AlertDismissing.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AlertDismissing.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![AlertDismissing](examples/AlertDismissing.html)

### Dismissing with icon aside

<ContentRack
    fields='
        "preview": {
            "src": "examples/AlertDismissingIconAside.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AlertDismissingIconAside.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![AlertDismissingIconAside](examples/AlertDismissingIconAside.html)

## JavaScript

The alert does work without javascript. Only the dismissable alerts require our javascript to provide the closing functionality.
You can import our javascript bundle `cake.js` to automatically use this feature. You only must ensure that the property `data-controller="alert/close"` is set on the closing-button element of the alert.

### Initialization

To initialize the javascript with default configuration you could simply run the following code:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.alert ();
});
```

### Customization

To customize the default behavior you can only embedd the `alert.js` file into your mockups. Then you can initialize the functionality by calling:

```javascript
document.addEventListener ('DOMContentLoaded', () => {
    window.cake.alert (options = {
        elements: [],
        querySelector: 'button[data-controller=alert]'
    });
});
```

* `elements [Array]` - provide the specific closing-button element of the alert (optional)
* `querySelector [String]` - provide a query-selector to select all closing-button elements of the alert. (optional, default: `button[data-controller="alert/close"]`)

If you do provide the `options.elements` the `options.querySelector` option gets ignored. If you do not provide any `options.elements` always the `options.querySelector` is used!


### Triggers

Enable dismissal of an alert via `data` attributes on a button **within the alert**, as demonstrated above:

```html
<button type="button" class="close" data-controller="alert/close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
</button>
```

Note that closing an alert will remove it from the DOM.

### Methods

| Method | Description |
|---|---|
| `element.closeAlert ()` | Closes an alert by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the alert will fade out before it is removed. |

```javascript
document.getElementById ("#alert-selector").closeAlert ()
```

### Events

CAKE's alert plugin exposes a few custom events for hooking into alert functionality.

| Event | Description |
|---|---|
| `alertClose` | This event fires immediately when the <code>closeAlert ()</code> instance method is called. |
| `alertClosed` | This event is fired when the alert has been closed (will wait for CSS transitions to complete). |

```javascript
document.getElementById ("#alert-selector").addEventListener('alertClosed', () => {
    // do something...
})
```
