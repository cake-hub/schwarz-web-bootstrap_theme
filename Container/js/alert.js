import "./cakeDOM";

if (typeof window.cake !== "object") {
    window.cake = {};
}

const defaultOptions = {
    elements: [],
    querySelector: 'button[data-controller="alert/close"]'
};

window.cake.alert = (options = defaultOptions) => {
    options = {...defaultOptions, ...options};
    //Get All Accordion-Inputs and set Event-Listener (change)
    let alertCloseButtons = window.cake.utils.getElements (options.elements, options.querySelector);

    //Create the Events needed
    let alertCloseEvent = new CustomEvent('alertClose');
    let alertClosedEvent = new CustomEvent('alertClosed');


    alertCloseButtons.forEach (alertCloseButton => {
        //Get parent element (alert-element)
        let alertElement = alertCloseButton.closest ('.alert');

        //Show the alertCloseButton
        alertCloseButton.style.display = 'block';

        let removeElementFromDom = () => {
            alertElement.dispatchEvent(alertClosedEvent);
            alertElement.parentNode.removeChild(alertElement);
        };

        //Add click-listener to hide element on click
        alertCloseButton.addEventListener ('click', (e) => {
            alertElement.dispatchEvent(alertCloseEvent);
            alertElement.classList.remove ('show');
            alertElement.classList.add ('hide');

            //Remove element directly from dom, when no fade class applied to it
            if (!alertElement.classList.contains ('fade')) {
                removeElementFromDom ();
            }
        });

        //Remove element from Dom, after transition ended
        alertElement.addEventListener("transitionend", (e) => {
            removeElementFromDom ();
        }, false);

        //Add Method to programmatically close an alert
        alertElement.closeAlert = () => {
            alertCloseButton.click ();
        }
    });
};


export default window.cake.alert;
