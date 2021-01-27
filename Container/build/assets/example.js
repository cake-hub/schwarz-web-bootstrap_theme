/* Prevent anchor links from jumping */

document.addEventListener ("DOMContentLoaded", () => {
    const anchorClickEvent = (e) => {
        e.preventDefault ();
        return false;
    };

    const linkElements = Array.prototype.slice.call(document.getElementsByTagName ("a"));
    linkElements.forEach (linkElement => {
        if (linkElement.href.substr (0, 1) === "#" || linkElement.href.substr (-1) === "#") {
            linkElement.addEventListener ("click", anchorClickEvent);
        }
    });
});


/* Initialize extended cookie alert */

document.addEventListener ("DOMContentLoaded", () => {
    if (!window.cake) {
        window.cake = {};
    }
    if (window.cake.cookie && window.cake.cookie.showCookieAlert) {
        window.cake.cookie.showCookieAlert ();
    }
});
