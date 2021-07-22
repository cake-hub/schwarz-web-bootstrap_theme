import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";
import Badge from "@Develop/Components/Badge/badge.html";
import HeaderListItem from '@Develop/Components/Header/headerListItem.html';

const HeaderUserNavItem = (  { children,
                    c_iconTitle="Placeholder",
                    c_iconName="placeholder",
                    c_iconElement=null,
                    c_badge="" }  ) => (
    <React.Fragment>
        <div className="header-usernavigation-icon">
            { !c_iconElement ? <Icon name={c_iconName} title={c_iconTitle} /> : c_iconElement }
            { c_badge ?
                <Badge className="badge-addon badge-primary header-usernavigation-badge" c_ScreenReaderText="new item(s)">{ c_badge }</Badge>
            : null }
        </div>
        { children }
    </React.Fragment>
);

const HeaderUserNav = () => (
    <ul className="header-usernavigation header-list" role="navigation" aria-label="User Navigation" data-controller="header/usernavigation">
        <HeaderListItem className="header-usernavigation-link">
            <HeaderUserNavItem />
        </HeaderListItem>
        <HeaderListItem className="header-usernavigation-link">
            <HeaderUserNavItem />
        </HeaderListItem>
        <HeaderListItem className="header-usernavigation-link">
            <HeaderUserNavItem c_badge="X" />
        </HeaderListItem>
        <HeaderListItem className="header-usernavigation-link">
            <HeaderUserNavItem c_badge="XX" />
        </HeaderListItem>
        <HeaderListItem className="header-usernavigation-link header-hamburger-menu" c_dataController="header/mobile-menu">
            <HeaderUserNavItem
                c_iconElement={(
                    <div className="hamburger hamburger--squeeze" data-controller="header/mobile-menu/button" aria-pressed="false">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                )}
            >
                Menu
            </HeaderUserNavItem>
        </HeaderListItem>
    </ul>
);

export default HeaderUserNav;
