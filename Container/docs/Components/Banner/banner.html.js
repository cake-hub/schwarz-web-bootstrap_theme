import React from "react";
import CakeExampleImage from "@root/build/CakeExampleImage";

const Banner = ({
    className="",
    c_subhead="",
    c_title="",
    c_contentClassName="",
    ...props
}) => (
    <article className={"banner" + (className ? " " + className : "")} {...props}>
        <div className="banner-image-container">
            <CakeExampleImage callFilePath={__dirname} className="banner-image" alt="Banner image" />
        </div>
        { c_subhead || c_title ? (
            <header className={"banner-content-container" + (c_contentClassName ? " " + c_contentClassName : "")}>
                <div className="banner-content-wrapper">
                    <div className="banner-content">
                        {c_title ? (<h2 className="banner-title display-1">{ c_title }</h2>) : null }
                        {c_subhead ? (<h3 className="banner-subhead">{ c_subhead }</h3>) : null }
                    </div>
                </div>
            </header>
        ) : null }
    </article>
);

export default Banner;
