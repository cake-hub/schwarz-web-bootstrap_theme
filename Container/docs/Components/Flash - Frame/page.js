import React from "react";
import FlashFrame from "@Develop/Components/Flash - Frame/flashFrame.html";
import {TeaserNotLinked} from "@Develop/Components/Teaser/teaser.html";

const FlashFramePreview = () => (
    <FlashFrame>
        Flash - Frame
    </FlashFrame>
);

const FlashFrameColors = () => (
    <React.Fragment>
        <FlashFrame>
            positive (default)
        </FlashFrame>
        <br /><br />
        <FlashFrame className="flash-frame-negative">
            .flash-frame-negative
        </FlashFrame>
    </React.Fragment>
);

const FlashFrameContent = () => (
    <FlashFrame>
        first line<br />
        second line
    </FlashFrame>
);

const FlashFramePositioning = () => (
    <React.Fragment>
        <div style={{height: "15rem", position:"relative"}}>
            <FlashFrame className="right" style={{position:"absolute", top: 0}}>
                .right
            </FlashFrame>
            <br /><br />
            <FlashFrame  className="left right-lg" style={{position:"absolute", top: "5rem"}}>
                .left.right-lg
            </FlashFrame>
            <br /><br />
            <FlashFrame  className="right left-md" style={{position:"absolute", top: "10rem"}}>
                .right.left-md
            </FlashFrame>
        </div>
    </React.Fragment>
);

const FlashFrameExample = () => (
    <TeaserNotLinked
        c_title="Teaser"
        c_subhead="with flash frame"
        c_addon={(
            <FlashFrame className="left" style={{position:"absolute", top: "1rem", zIndex: 1}}>
                frame
            </FlashFrame>
        )}
        style={{position:"relative"}}
    >
    </TeaserNotLinked>
);

export default {
    FlashFramePreview,
    FlashFrameColors,
    FlashFrameContent,
    FlashFramePositioning,
    FlashFrameExample
};
