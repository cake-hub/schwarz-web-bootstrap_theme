import React from "react";
import {Teaser, TeaserNotLinked} from "@Develop/Components/Teaser/teaser.html";

const TeaserDefault = () => (
    <TeaserNotLinked />
);

const TeaserTitle = () => (
    <TeaserNotLinked
        c_title="Title"
        c_subhead=""
    ></TeaserNotLinked>
);

const TeaserLinked = () => (
    <Teaser />
);

const TeaserGrid3 = () => (
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-4 p-1">
                <Teaser
                    c_title="Title"
                ></Teaser>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 p-1">
                <Teaser
                    c_title="Title"
                ></Teaser>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 p-1">
                <Teaser
                    c_title="Title"
                ></Teaser>
            </div>
        </div>
    </div>
);

const TeaserGrid4 = () => (
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-3 p-1">
                <Teaser
                    c_title="Title"
                    c_subhead="Subhead"
                ></Teaser>
            </div>
            <div className="col col-12 col-sm-6 col-md-3 p-1">
                <Teaser
                    c_title="Title"
                    c_subhead="Subhead"
                ></Teaser>
            </div>
            <div className="col col-12 col-sm-6 col-md-3 p-1">
                <Teaser
                    c_title="Title"
                    c_subhead="Subhead"
                ></Teaser>
            </div>
            <div className="col col-12 col-sm-6 col-md-3 p-1">
                <Teaser
                    c_title="Title"
                    c_subhead="Subhead"
                ></Teaser>
            </div>
        </div>
    </div>
);

export default {
    TeaserDefault,
    TeaserTitle,
    TeaserLinked,
    TeaserGrid3,
    TeaserGrid4,
};
