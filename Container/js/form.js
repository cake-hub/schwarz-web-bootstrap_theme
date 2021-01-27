import "./cakeDOM";

if (typeof window.cake !== "object") {
    window.cake = {};
}

const defaultOptions = {
    passwordInputElements: [],
    passwordInputQuerySelector: '[data-controller="inputfield/password"]',
    passwordToggleElements: [],
    passwordToggleQuerySelector: '[data-controller="inputfield/password/toggle"]'
};

window.cake.form = (options = defaultOptions) => {
    options = {...defaultOptions, ...options};
    const passwordFields = window.cake.utils.getElements (options.passwordInputElements, options.passwordInputQuerySelector);

    passwordFields.forEach( (passwordField, idx) => {
        const passwordToggle = window.cake.utils.getElement (options.passwordToggleElements [idx], options.passwordToggleQuerySelector, passwordField, "siblingSelector");

        if(passwordToggle) {
            passwordToggle.classList.remove ('d-none');
            passwordToggle.onclick = function( ev ) {
                ev.preventDefault();
                if(passwordField.getAttribute('type') === 'password'){
                    passwordField.setAttribute('type', "text");
                    passwordToggle.setAttribute('aria-pressed', "true");
                } else {
                    passwordField.setAttribute('type', "password");
                    passwordToggle.setAttribute('aria-pressed', "false");
                }
            }
        }
    });
};

export default window.cake.form;
