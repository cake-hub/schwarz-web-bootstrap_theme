import React from "react";
import config from "@root/config";

const HeaderLogo = () => (
    <div className="header-logo-wrapper">
        <a href="#" className="header-logo-link">
            <img src={config.assetPath + "images/logo.svg"} alt="Schwarz Logo" className="header-logo" />
        </a>
    </div>
);

export default HeaderLogo;
