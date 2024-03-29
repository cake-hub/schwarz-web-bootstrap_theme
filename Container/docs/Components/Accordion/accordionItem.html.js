import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";
import { pseudoRandomHashGenerator } from "../../../helper";

const AccordionItem = ({
    id=pseudoRandomHashGenerator (),
    headingId=pseudoRandomHashGenerator (),
    collapseId=pseudoRandomHashGenerator (),
    c_accordionId="",
    c_mode="",
    c_labelText="",
    children,
    ...props
}) => (
    <div className="accordion-item">
        <input type={c_mode === "single" ? "radio" : "checkbox"} data-controller="accordion/input" className="accordion-check sr-only" id={id} {...props} />
        <label type="button" className="accordion-label" htmlFor={id} id={headingId} data-target={'#' + collapseId} aria-expanded={props.checked ? "true" : "false"} aria-controls={collapseId}>
            <h5 className="accordion-item-header">
                {c_labelText}
            </h5>
            <Icon name="arrow-down" title="Expand" className="accordion-icon" />
        </label>
        <div id={collapseId} className="accordion-collapse" aria-labelledby={headingId} data-parent={"#" + c_accordionId}>
            {children}
        </div>
    </div>
);

export default AccordionItem;
