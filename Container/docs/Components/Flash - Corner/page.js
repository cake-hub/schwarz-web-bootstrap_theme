import React from "react";
import FlashCorner from "@Develop/Components/Flash - Corner/flashCorner.html";
import {TeaserNotLinked} from "@Develop/Components/Teaser/teaser.html";

const FlashCornerPreview = () => (
    <div style={{position: "relative", height: "9rem", width: "16rem", backgroundColor: "lightgray"}}>
        <FlashCorner>
            Flash - Corner
        </FlashCorner>
    </div>
);

const FlashCornerColors = () => (
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 p-1">
                <div style={{position: "relative", height: "16rem", width: "16rem", backgroundColor: "lightgray"}}>
                    <FlashCorner style={{position: "absolute"}}>
                        positive (default)
                    </FlashCorner>
                </div>
            </div>
            <div className="col col-12 col-sm-6 p-1">
                <div style={{position: "relative", height: "16rem", width: "16rem", backgroundColor: "black"}}>
                    <FlashCorner className="flash-corner-negative" style={{position: "absolute"}}>
                        .flash-corner-negative
                    </FlashCorner>
                </div>
            </div>
        </div>
    </div>
);

const FlashCornerPositioning = () => (
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 p-1">
                <div style={{position: "relative", height: "16rem", width: "16rem", backgroundColor: "lightgray"}}>
                    <FlashCorner className="top-left" style={{position: "absolute"}}>
                        .top-left
                    </FlashCorner>
                </div>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 p-1">
                <div style={{position: "relative", height: "16rem", width: "16rem", backgroundColor: "lightgray"}}>
                    <FlashCorner className="top-right" style={{position: "absolute"}}>
                        .top-right
                    </FlashCorner>
                </div>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 p-1">
                <div style={{position: "relative", height: "16rem", width: "16rem", backgroundColor: "lightgray"}}>
                    <FlashCorner className="bottom-right" style={{position: "absolute"}}>
                        .bottom-right
                    </FlashCorner>
                </div>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 p-1">
                <div style={{position: "relative", height: "16rem", width: "16rem", backgroundColor: "lightgray"}}>
                    <FlashCorner className="bottom-left" style={{position: "absolute"}}>
                        .bottom-left
                    </FlashCorner>
                </div>
            </div>
        </div>
    </div>
);

const FalshCornerLongText = () => (
    <React.Fragment>
        <style dangerouslySetInnerHTML={{__html: `
            .ratio-16-9 {
                position: relative;
                background-color: lightgray;
            }

            .ratio-16-9::after {
                display: block;
                padding-bottom: 56.25%;
                content: "";
            }

            .image-placeholder {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        `}}></style>
        <div className="ratio-16-9">
            <div className="image-placeholder">
                <FlashCorner className="top-left" style={{position: "absolute"}}>
                    view on mobile first, if it fits or not
                </FlashCorner>
            </div>
        </div>
    </React.Fragment>
);

const FlashCornerExample = () => (
    <TeaserNotLinked
        c_title="Teaser"
        c_subhead="with flash corner"
        c_addon={(
            <FlashCorner className="top-left" style={{position:"absolute", zIndex: 1}}>
                delicious
            </FlashCorner>
        )}
    />
);

export default {
    FlashCornerPreview,
    FlashCornerColors,
    FlashCornerPositioning,
    FalshCornerLongText,
    FlashCornerExample
};
