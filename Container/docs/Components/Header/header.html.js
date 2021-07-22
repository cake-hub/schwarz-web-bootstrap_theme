import React from "react";
import HeaderLogo from './headerLogo.html';
import { HeaderBrandNav, HeaderBrandNavContent } from './headerBrandNav.html';
import HeaderLanguageSelector from './headerLanguageSelector.html';
import HeaderUserNav from './headerUserNav.html';
import HeaderSearch from './headerSeach.html';
import HeaderMainNav from './headerMainNav.html';

const Header = (  {
    children,
    c_hasActiveSubNav = false,
    className="",
    ...props
}  ) => (
    <header className={"header" + (className ? " " + className : "")} data-controller="header">
        <div className="header-wrapper container-responsive" data-controller="header/wrapper">
            <HeaderLogo></HeaderLogo>
            <div className="header-nav-wrapper">
                <HeaderBrandNav>
                    <HeaderBrandNavContent></HeaderBrandNavContent>
                </HeaderBrandNav>
                <HeaderLanguageSelector></HeaderLanguageSelector>
                <HeaderUserNav></HeaderUserNav>
                <HeaderSearch></HeaderSearch>
                <HeaderMainNav c_hasActiveSubNav={c_hasActiveSubNav}></HeaderMainNav>
            </div>
        </div>
    </header>
);

export default Header;
