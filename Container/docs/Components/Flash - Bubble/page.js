import React from "react";
import FlashBubble from "./flashBubble.html";
import {TeaserNotLinked} from "@Develop/Components/Teaser/teaser.html";

const FlashBubblePreview = () => (
    <FlashBubble>
        Flash - Bubble
    </FlashBubble>
);

const FlashBubbleColors = () => (
    <React.Fragment>
        <FlashBubble>
            primary (default)
        </FlashBubble>
        <br /><br />
        <FlashBubble className="flash-bubble-negative">
            attention (negative)
        </FlashBubble>
    </React.Fragment>
);

const FlashBubbleContent = () => (
    <FlashBubble>
        in this example we've put some more content to the flash bubble to show the behavior for such long texts that we do not recommend at all!
    </FlashBubble>
);

const FlashBubblePositioning = () => (
    <div style={{height: "15rem", position:"relative"}}>
        <FlashBubble style={{position:"absolute", top: "5rem", left: "5rem"}}>
            example positioning
        </FlashBubble>
    </div>
);

const FlashBubbleExample = () => (
    <TeaserNotLinked
        c_title="Teaser"
        c_subhead="with flash bubble"
        c_addon={(
            <FlashBubble className="left" style={{position:"absolute", top: "10%", left: "10%", zIndex: 1}}>
                bubble on teaser
            </FlashBubble>
        )}
        style={{position:"relative"}}
    >
    </TeaserNotLinked>
);

export default {
    FlashBubblePreview,
    FlashBubbleColors,
    FlashBubbleContent,
    FlashBubblePositioning,
    FlashBubbleExample
};
