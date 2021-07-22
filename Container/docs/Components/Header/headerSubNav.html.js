import React from "react";

const HeaderSubNavItem = ( {children, className="", href="#", c_linkTitle="", c_linkValue="", c_dataController=null, isActive=false, ...props} ) => (
    <li className={"header-sub-nav-item" + (className ? " " + className : "")} data-controller={c_dataController} {...props}>
        <a className={"header-sub-nav-link" + (isActive ? " active" : "")} href={href} title={c_linkTitle}><span className="header-sub-nav-link-content">{c_linkValue}</span></a>
        { children }
    </li>
);

const HeaderSubNav = ({ c_mainName="", c_hasMoreLink = false, isActive = false, ...props }) => (
    <ul className="header-sub-nav" role="navigation" aria-label="Sub Navigation" data-controller={isActive ? "header/sub" : null}>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 1"></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 2"></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 3"></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 4"></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 5"></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 6" isActive={isActive} ></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 7"></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 8"></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 9"></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 10"></HeaderSubNavItem>
        <HeaderSubNavItem c_linkTitle={ "from " + c_mainName } c_linkValue="Sub-Nav 11"></HeaderSubNavItem>
        { c_hasMoreLink ?
            (<HeaderSubNavItem c_dataController={isActive ? "header/sub/more" : null} c_linkValue="More">
                <ul className="header-sub-nav" role="navigation" aria-label="More Sub Navigation" data-controller="header/sub/more/list">
                </ul>
            </HeaderSubNavItem>) :
            null
        }

    </ul>
);

export default HeaderSubNav;
