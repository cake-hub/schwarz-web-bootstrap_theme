import React from "react";
import { pseudoRandomHashGenerator } from "../../../helper";

const Checkbox = ( { id=pseudoRandomHashGenerator (),
                    children,
                    c_classNameWrapper="",
                    className="",
                    c_labelText="",
                    ...props
                } ) => (
    <div className={"custom-control custom-checkbox " + c_classNameWrapper}>
        <input className={ "custom-control-input " + className } type="checkbox" id={id} {...props} />
        <label htmlFor={id} className={"custom-control-label"}>
            { c_labelText }
        </label>
        { children }
    </div>
);

export default Checkbox;
