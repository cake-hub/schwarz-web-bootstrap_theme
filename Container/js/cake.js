//Import Polyfills and external dependencies
import svg4everybody from "svg4everybody";

//Import CAKE Dependencies as you want (you can simply remove the lines you do not need)
import accordion from "./accordion";
import alert from "./alert";
import form from "./form";
import popover from "./popover";
import tab from "./tab";
import "./cookieAlert";

document.addEventListener ('DOMContentLoaded', () => {
    //Run external dependencies
    svg4everybody ();

    //Scripts to load when document-loaded
    accordion ();
    alert ();
    form ();
    popover ();
    tab ();
});
