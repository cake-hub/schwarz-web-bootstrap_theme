import React from "react";

const FlashFrame = (  {
    children,
    className="",
    ...props
}  ) => (
    <div className={"flash-frame" + (className ? " " + className : "")} {...props}>
        <div className="flash-frame-content">
            {children}
        </div>
    </div>
);

export default FlashFrame;
