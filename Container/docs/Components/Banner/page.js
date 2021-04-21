import React from "react";
import Banner from "@Develop/Components/Banner/banner.html";


const BannerPreview = () => (
    <Banner
        c_title="Title"
    />
);

const BannerDefault = () => (
    <Banner
        c_title="Title"
        c_subhead="Body text"
    />
);

const BannerInverted = () => (
    <Banner
        c_title="Inverted"
        className="inverted"
    />
);

const BannerNegative = () => (
    <Banner
        c_title="Negative"
        className="negative"
    />
);

const BannerAll = () => (
    <React.Fragment>
        <Banner
            c_title="Standard"
            c_subhead="no additional classes"
        />
        <Banner
            c_title="inverted negative"
            c_subhead="col-md-5"
            className="inverted negative"
            c_contentClassName="col-md-5"
        />
        <br />
        <Banner
            c_title="Negative"
            c_subhead="col-md-3 col-lg-4"
            className="negative"
            c_contentClassName="col-md-3 col-lg-4"
        />
        <br />
        <Banner
            c_title="Inverted"
            c_subhead="col-md-5 col-lg-6"
            className="inverted"
            c_contentClassName="col-md-5 col-lg-6"
        />
    </React.Fragment>
);

export default {
    BannerPreview,
    BannerDefault,
    BannerInverted,
    BannerNegative,
    BannerAll
};
