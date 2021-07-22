import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";

const HeaderSearch = () => (
    <div className="header-search" data-controller="header/search">
        <a href="#" className="header-search-link" data-controller="header/search/link">
            <Icon name="magnifier" title="search" />
        </a>
        <input tabindex="-1" disabled placeholder="Your search goes here…" type="text" className="form-control header-search-input" data-controller="header/search/input" />
    </div>
);

export default HeaderSearch;
