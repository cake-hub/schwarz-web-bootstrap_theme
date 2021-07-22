import React from "react";
import { pseudoRandomHashGenerator } from "../../../helper";

const SelectLabelSub = ({label}) => (
    label?
    <span className="font-weight-normal">{` ${label}`}</span>
    : null
)

const Select = (  { id=pseudoRandomHashGenerator (),
                    children,
                    c_labelClassName="",
                    c_labelSub=false,
                    c_labelText="Label for Select",
                    className="",
                    ...props
                    }  ) => (
    <div>
        <label htmlFor={id} className={"select-label " + c_labelClassName}>
            { c_labelText }
            <SelectLabelSub label={c_labelSub}/>
        </label>
        <select className={"custom-select " + className} {...props} id={id}>
            {children}
        </select>
    </div>
);

export default Select;
