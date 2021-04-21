import React from "react";

const FlashCorner = (  {
    children,
    className="",
    ...props
}  ) => (
    <div className={"flash-corner" + (className ? " " + className : "")} {...props}>
        <div className="flash-corner-rotation">
            <div className="flash-corner-wrapper">
                <div className="flash-corner-content">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default FlashCorner;
