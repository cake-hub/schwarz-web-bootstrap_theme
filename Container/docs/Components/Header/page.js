import React from "react";
import Header from '@Develop/Components/Header/header.html';

const HeaderPreview = () => (
    <React.Fragment>
        <Header />
        <br />
    </React.Fragment>
);

const HeaderDefault = () => (
    <div style={{height:"200vh"}}>
        <Header />
    </div>
);

const HeaderWithSubNav = () => (
    <div style={{height:"200vh"}}>
        <Header c_hasActiveSubNav={true} />
    </div>
);

const HeaderWithScrollBehavior = () => (
    <div style={{height:"200vh"}}>
        <Header c_hasActiveSubNav={true} />
    </div>
);

export default {
    HeaderPreview,
    HeaderDefault,
    HeaderWithSubNav,
    HeaderWithScrollBehavior,
};
