import React from "react";
import HeaderListItem from '@Develop/Components/Header/headerListItem.html';

const HeaderLanguageSelector = () => (
    <nav className="header-language" data-controller="header/language" aria-label="Language selection">
        <div className="header-language-wrapper">
            <a href="#" className="header-language-active" lang="en-GB" aria-label="The current active language is english." title="Language selection">
                English
            </a>
            <ul className="header-language-list header-list">
                <HeaderListItem className="header-language-link" lang="en-GB">
                    <span class="header-language-link-content">
                        English
                    </span>
                </HeaderListItem>
                <HeaderListItem className="header-language-link" lang="en-US">
                    <span class="header-language-link-content">
                        American English
                    </span>
                </HeaderListItem>
                <HeaderListItem className="header-language-link" lang="de-DE">
                    <span class="header-language-link-content">
                        Deutsch
                    </span>
                </HeaderListItem>
            </ul>
        </div>
    </nav>
);

export default HeaderLanguageSelector;
