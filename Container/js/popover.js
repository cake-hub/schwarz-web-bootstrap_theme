import "core-js/stable";
import "regenerator-runtime/runtime";
import "./cakeDOM";
import tippy from "tippy.js/dist/tippy.cjs";

if (typeof window.cake !== "object") {
    window.cake = {};
}

const defaultOptions = {
    popoverElements: [],
    popoverQuerySelector: '*[data-tippy-content]',
    tippyProps: {
        theme: "cake",
        placement: 'top',
        popperOptions: {
            positionFixed: true,
            modifiers: [
                {
                    name: 'flip',
                    enabled: true,
                    options: {
                        fallbackPlacements: ['bottom'],
                    },
                },
            ],
        },
        interactive: true,
        delay: 200,
        appendTo: 'parent',
        onMount({ reference }) {
            reference.setAttribute('aria-expanded', 'true')
        },
        onHide({ reference }) {
            reference.setAttribute('aria-expanded', 'false')
        },
    },
};

window.cake.popover = (options = defaultOptions) => {
    options = {...defaultOptions, ...options};
    const popoverElements = window.cake.utils.getElements (options.popoverElements, options.popoverQuerySelector);

    //Initialize popovers
    return tippy (popoverElements, options.tippyProps);
};

export default window.cake.popover;
