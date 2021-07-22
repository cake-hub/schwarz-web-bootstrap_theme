import React from "react";
import HeaderListItem from '@Develop/Components/Header/headerListItem.html';

export const HeaderBrandNavContent = () => (
    <React.Fragment>
        <HeaderListItem className="header-brandnav-link" c_itemClassName="header-brandnav-list-item">
            <span class="header-brandnav-link-content">
                Brand-Nav title 1
            </span>
        </HeaderListItem>
        <HeaderListItem className="header-brandnav-link" c_itemClassName="header-brandnav-list-item">
            <span class="header-brandnav-link-content">
                Brand-Nav title 2
            </span>
        </HeaderListItem>
        <HeaderListItem className="header-brandnav-link" c_itemClassName="header-brandnav-list-item">
            <span class="header-brandnav-link-content">
                Brand-Nav title 3
            </span>
        </HeaderListItem>
        <HeaderListItem className="header-brandnav-link" c_itemClassName="header-brandnav-list-item">
            <span class="header-brandnav-link-content">
                Brand-Nav title 4
            </span>
        </HeaderListItem>
        <HeaderListItem
            c_itemClassName="header-brandnav-list-item"
            className="header-brandnav-link"
            c_listDataController="header/brandnav/more"
            c_Appendix={(<ul className="header-brandnav-flyout" role="navigation" aria-label="More Bandnavigations" data-controller="header/brandnav/more/list"></ul>)}
            c_AppendixWrapperClassName="header-brandnav-wrapper"
        >
            <span class="header-brandnav-link-content">
                More
            </span>
        </HeaderListItem>
    </React.Fragment>
);

export const HeaderBrandNav = ( {children} ) => (
    <ul className="header-brandnav header-list" data-controller="header/brandnav" role="navigation" aria-label="Brand Navigation">
        {children}
    </ul>
);
