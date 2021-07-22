import config from "@root/config";
import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";

const StickyBar = ( {
                        className="",
                        ...props
                    } ) => (
    <div className={"sticky-bar" + (className ? " " + className : "" )} {...props}>
        <div className="sticky-bar-content container-responsive">
            <img src={config.assetPath + "images/badge-white.svg"} className="sticky-bar-badge" />

            <a href="#" className="sticky-bar-to-top invisible" data-controller="sticky-bar/to-top">
                <Icon name="arrow-up" title="To top" className="sticky-bar-to-top-icon icon-2" />
                To top text
            </a>
        </div>
    </div>
);

export default StickyBar;
