import React from "react";
import HeaderSubNav from './headerSubNav.html';

const HeaderMainNavItem = ( {children, c_linkTitle, c_dataController = null, className="", c_hasSubNav = true, isActive = false, ...props} ) => (
    <li className={"header-main-nav-item" + (className ? " " + className : "") + (isActive ? " active" : "")} data-controller={c_dataController}>
        <a className="header-main-nav-link" href="#"><span className="header-main-nav-link-content">{c_linkTitle}</span></a>
        { c_hasSubNav ?
            <HeaderSubNav isActive={isActive} c_hasMoreLink={isActive} c_mainName={c_linkTitle} /> :
            null
        }
        { children }
    </li>
);

const HeaderMainNav = ({ c_hasActiveSubNav = false }) => (
    <nav className="header-main-nav" role="navigation" aria-label="Main Navigation" data-controller="header/main">
        <ul className={"header-main-nav-list" + (c_hasActiveSubNav ? " has-active-sub-nav" : "")} data-controller="header/main/list">
            <HeaderMainNavItem c_linkTitle="Main-Nav 1"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 2"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 3" isActive={c_hasActiveSubNav}></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 4"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 5"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 6"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 7"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 8"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 9"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 10"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="Main-Nav 11"></HeaderMainNavItem>
            <HeaderMainNavItem c_linkTitle="More" c_dataController="header/main/more" c_hasSubNav={false}>
                <ul className="header-sub-nav" role="navigation" aria-label="More Navigation" data-controller="header/main/more/list"></ul>
            </HeaderMainNavItem>
        </ul>
    </nav>
);

export default HeaderMainNav;
