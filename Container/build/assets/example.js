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

// web component

class RndImg extends HTMLImageElement {
    constructor() {
        super();
        if (this.hasAttribute('folder') && this.hasAttribute('images')) {
            let relativePath = this.getAttribute('folder');
            let files = this.getAttribute('images').split(',');
            let filesCount = files.length;
            let newSrc = relativePath + '/' + files[Math.floor (Math.random() * 100000) % filesCount]
            this.setAttribute('src', newSrc);
        }
    }
}

customElements.define('rnd-img', RndImg, { extends: 'img' });
