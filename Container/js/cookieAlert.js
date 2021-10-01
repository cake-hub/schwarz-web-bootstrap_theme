if (typeof window.cake !== "object") {
    window.cake = {};
}

 window.cake.cookie = {
    //Add Event Listeners
    _eventListeners: [],
    _forceFocus: true,
    _addEventListener: function (element, listenerType, listenerFunction) {
        window.cake.cookie._eventListeners.push ({
            element: element,
            listenerFunction: listenerFunction,
            listenerType: listenerType
        });
        element.addEventListener (listenerType, listenerFunction);
    },
    _removeAllEventListeners: function () {
        window.cake.cookie._eventListeners.forEach (function (listenerConfig) {
            listenerConfig.element.removeEventListener (listenerConfig.listenerType, listenerConfig.listenerFunction);
        });
    },
    // Add custom polyfills / utilities
    _addPolyfills: function () {
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }
    },
    //Set cookie settings and hide cookie
    acceptCookies: function (optinPreferences, optinStatistics, optinMarketing) {
        if (window.Cookiebot) {
            window.Cookiebot.submitCustomConsent(optinPreferences, optinStatistics, optinMarketing);
        }
        window.cake.cookie.hideCookieAlert ();
    },
    //Show and initialize cookie alert
    showCookieAlertWithoutForcedFocus: function () {
        return window.cake.cookie.showCookieAlert (false);
    },
    showCookieAlert: function (forceFocus) {
        window.cake.cookie._addPolyfills ();

        if (forceFocus === undefined) {
            forceFocus = true;
        }
        window.cake.cookie._forceFocus = forceFocus;

        // Parse cookie-alert element
        var cookieAlert = document.querySelector ("*[data-controller='cookie-alert']");
        //If not cookie-alert is available, just skip
        if (!cookieAlert || cookieAlert.classList.contains ("opened")) {
            return;
        }

        // Parse relevant elements
        var cookieAlertModal = cookieAlert.childNodes [0];
        var acceptAllButton = document.querySelector ("*[data-controller='cookie-alert/button/accept']");
        var acceptConfigButton = document.querySelector ("*[data-controller='cookie-alert/button/configuration']");
        var showDetailsLink = document.querySelector ("*[data-controller='cookie-alert/detail-link']");
        var configurationDiv = document.querySelector ("*[data-controller='cookie-alert/configuration']");
        var closeElements = document.querySelectorAll("*[data-controller='cookie-alert/button/close']");

        //update overlay/alert size depending on viewport
        setTimeout (function () {
            window.cake.cookie._updateOverlaySize (cookieAlert, acceptAllButton, true);
        }, 100);

        window.cake.cookie._addEventListener (acceptAllButton, "click", function () {
            window.cake.cookie.acceptCookies (true, true, true);
        });

        window.cake.cookie._addEventListener (acceptConfigButton, "click", function () {
            var preferenceCookies = document.getElementById ("preferences").checked || false;
            var statisticsCookies = document.getElementById ("statistics").checked || false;
            var marketingCookies = document.getElementById ("marketing").checked || false;
            window.cake.cookie.acceptCookies (preferenceCookies, statisticsCookies, marketingCookies);
        });

        window.cake.cookie._addEventListener (showDetailsLink, "click", function () {
            configurationDiv.classList.toggle("expanded");
            showDetailsLink.classList.toggle("expanded");

            if (configurationDiv.classList.contains ("expanded")) {
                // Make acceptAllButton disabled
                acceptAllButton.disabled = true;

                //Adjust details-text, if texts are available
                if (window.CookieConsent && window.CookieConsent.dialog) {
                    showDetailsLink.innerHTML = window.CookieConsent.dialog.hideDetailsText;
                }
                configurationDiv.setAttribute ("aria-expanded", "true");
                cookieAlertModal.scrollTop = cookieAlertModal.scrollHeight;
            } else {
                // Make acceptAllButton enabled
                acceptAllButton.disabled = false;

                //Adjust details-text, if texts are available
                if (window.CookieConsent && window.CookieConsent.dialog) {
                    showDetailsLink.innerHTML = window.CookieConsent.dialog.showDetailsText;
                }
                configurationDiv.setAttribute ("aria-expanded", "false");
            }
        });

        // Close elements event Listener
        closeElements.forEach(function (closeElement) {
            window.cake.cookie._addEventListener (closeElement, 'click', function (e) {
                e.preventDefault();
                window.cake.cookie.acceptCookies (false, false, false);
            });
        });

        //Display cookie alert
        cookieAlert.showModal = cookieAlert.showModal || function () {};
        cookieAlert.showModal (); // Native Browser-Method for the dialog-element
        cookieAlert.setAttribute ('open', 'open');
        cookieAlert.classList.add ("opened");
        cookieAlert.style.display = "block";
    },
    //Deconstruct cookie alert
    hideCookieAlert: function () {
        var cookieAlert = document.querySelector ("*[data-controller='cookie-alert']");

        //Hide cookie alert
        cookieAlert.close = cookieAlert.close || function () {};
        cookieAlert.close(); // Native Browser-Method for the dialog-element
        cookieAlert.removeAttribute ('open');
        cookieAlert.classList.remove ("opened");
        cookieAlert.style.display = "none";

        //update overlay/alert size to previous values
        window.cake.cookie._revertOverlaySize ();

        //Remove eventListeners
        window.cake.cookie._removeAllEventListeners ();
    },
    // bugfix - oldBrowser - Safari iOS viewport is initially bigger than the visible part (https://medium.com/@susiekim9/how-to-compensate-for-the-ios-viewport-unit-bug-46e78d54af0d)
    _tmpStylings: [],
    _updateOverlaySize: function (cookieAlert, acceptAllButton, setEventListener) {
        if (setEventListener === true && window.cake.cookie._tmpStylings.length < 1) {
            window.cake.cookie._tmpStylings.push ({
                el: document.body,
                val: document.body.style.overflow,
                attr: "overflow"
            });
            window.cake.cookie._tmpStylings.push ({
                el: document.body,
                val: document.body.style.height,
                attr: "height"
            });
            window.cake.cookie._tmpStylings.push ({
                el: document.documentElement,
                val: document.documentElement.style.overflow,
                attr: "overflow"
            });
            window.cake.cookie._tmpStylings.push ({
                el: document.documentElement,
                val: document.documentElement.style.height,
                attr: "height"
            });

            window.cake.cookie._addEventListener (window, "resize", function () {
                //On resize or orientation switch, update the size of the alert
                window.cake.cookie._updateOverlaySize (cookieAlert);
            }.bind (cookieAlert));

            //Keep focus inside the cookie-alert element, if option is set to true
            if (window.cake.cookie._forceFocus) {
                cookieAlert.querySelectorAll ("button,a,input").forEach (function (element) {
                    window.cake.cookie._addEventListener (element, "focusout", function () {
                        setTimeout (function () {
                            //Prevent focus from jumping out of cookie-alert elements
                            if (!cookieAlert.contains(document.activeElement)) {
                                acceptAllButton.focus ();
                            }
                        }, 20);
                    });
                });

                document.querySelectorAll ('[tabindex="1"]').forEach (function (element) {
                    if (!cookieAlert.contains(element)) {
                        element.dataset.oldTabIndex = "1";
                        element.setAttribute ('tabindex', 0);
                    }
                });
                document.querySelectorAll ('[tabindex="2"]').forEach (function (element) {
                    element.dataset.oldTabIndex = "2";
                    element.setAttribute ('tabindex', 0);
                });
            }

        }

        cookieAlert.style.height = window.innerHeight + "px";

        document.body.style.overflow = "hidden";
        document.body.style.height = window.innerHeight + "px";

        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.height = window.innerHeight + "px";
    },
    _revertOverlaySize: function () {
        window.cake.cookie._tmpStylings.forEach (function (tmpStyling) {
            tmpStyling.el.style [tmpStyling.attr] = tmpStyling.val;
        });
        if (window.cake.cookie._forceFocus) {
            document.querySelectorAll ('[data-old-tab-index="1"]').forEach (function (element) {
                element.removeAttribute ("data-old-tab-index");
                element.setAttribute ('tabindex', 1);
            });
            document.querySelectorAll ('[data-old-tab-index="2"]').forEach (function (element) {
                element.removeAttribute ("data-old-tab-index");
                element.setAttribute ('tabindex', 2);
            });
        }
    }
};
