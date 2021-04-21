import React from "react";

const FlashMarker = (  {
    children,
    className="",
    innerClassName="",
    ...props
}  ) => (
    <div className={"flash-marker" + (className ? " " + className : "")} {...props}>
        <div className={"flash-marker-content" + (innerClassName ? " " + innerClassName : "")}>
            {children}
        </div>
    </div>
);

export default FlashMarker;
