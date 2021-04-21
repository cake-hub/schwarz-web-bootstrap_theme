# Browser focus

The browser focus is indicated by a visible "outline". In order to get this visible highlight, the element that is currently focused, get's a `box-shadow` applied with `3px` width. `2px` are with the `primary` color and the outer `1px` border is `white`. The box-shadow has no offset and also no blur-radius. With the multi-colored border the focus does work on all backgrounds whether dark or light.
The only exceptions are focus-able elements with contextual sate colors applied to it. In these cases the `box-shadow` has the color `danger`, `success`, `info` or any other appropriate theme-color applied to it.

We decided to create an alternative browser focus because elements like our checkboxes or radio buttons don't have a focus by default.
Please note that you must add our personalized browser focus to any element that does not have a visible focus and is focusable.
