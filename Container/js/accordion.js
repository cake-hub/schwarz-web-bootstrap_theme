import "./cakeDOM";

if (typeof window.cake !== "object") {
    window.cake = {};
}

const defaultOptions = {
    elements: [],
    querySelector: '*[data-controller="accordion/input"]'
};

window.cake.accordion = (options = defaultOptions) => {
    options = {...defaultOptions, ...options};
    //Get All Accordion-Inputs and set Event-Listener (change)
    let accordionInputElements = window.cake.utils.getElements (options.elements, options.querySelector);

    accordionInputElements.forEach ((accordionInputElement) => {
        accordionInputElement.addEventListener ('change', () => {
            let accordionInputLabel = accordionInputElement.nextSibling;

            //Toggle aria-expanded on all other elements, when input is radio (single-variant)
            if (accordionInputElement.getAttribute ('type') === 'radio') {
                const accordionInputLabelElement = accordionInputElement.parentElement.siblingSelector ('label[aria-expanded=true]');
                if (accordionInputLabelElement) {
                    accordionInputLabelElement.setAttribute ('aria-expanded', false);
                }
            }

            accordionInputLabel.setAttribute ('aria-expanded', accordionInputLabel.getAttribute ('aria-expanded') == "false" ? true : false);
        });
    })
};

export default window.cake.accordion;
