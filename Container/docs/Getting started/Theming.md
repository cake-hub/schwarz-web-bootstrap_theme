# Order to include SCSS files

## File namings

When ever it is possible, we use the varialbes to customize components and all the other stuff. But in some cases we changed, modified or added some code.

For these files we use a "-theme" suffix to every SCSS file. These files are next to the original one in the import list. It is also possible that we replaced a original SCSS file.

### Example

```scss
@import "../../../scss/functions";
@import "../../../scss/variables-root";
@import "./variables-root-theme"; // --> themed file
@import "../../../scss/variables";
@import "./variables-theme"; // --> themed file
@import "../../../scss/mixins";
@import "./mixins/badge-theme"; // --> themed file
@import "../../../scss/root";
@import "../../../scss/reboot";
```
