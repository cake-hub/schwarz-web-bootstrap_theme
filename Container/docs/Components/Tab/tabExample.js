var tab = document.getElementById ('tab-selector');

tab.addEventListener ('tabChanged', function (e) {
    //Get the content elements
    var oldContentElement = document.getElementById (e.detail.oldElement.getAttribute('aria-controls'));
    var activeContentElement = document.getElementById (e.detail.activeElement.getAttribute('aria-controls'));

    //Update aria-attributes of content elements
    oldContentElement.setAttribute ('aria-hidden', true);
    activeContentElement.setAttribute ('aria-hidden', false);

    //Adjust display of content elements
    oldContentElement.classList.add ("hidden");
    activeContentElement.classList.remove ("hidden");
});

var direction = "forward";
setInterval (function () {
    if (direction === "forward") {
        if (!tab.nextTab ()) {
            tab.previousTab ();
            direction = "backward";
        }
    } else {
        if (!tab.previousTab ()) {
            tab.nextTab ();
            direction = "forward";
        }
    }
}, 5000);
