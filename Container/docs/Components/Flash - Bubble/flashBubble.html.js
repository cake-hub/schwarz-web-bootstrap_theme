import React from "react";

const FlashBubble = (  {
    children,
    className="",
    ...props
}  ) => (
    <div className={"flash-bubble" + (className ? " " + className : "")} {...props}>
        <div className="flash-bubble-content">
            {children}
        </div>
    </div>
);

export default FlashBubble;
