import React from "react";
import FlashMarker from "@Develop/Components/Flash - Marker/flashMarker.html";
import {TeaserNotLinked} from "@Develop/Components/Teaser/teaser.html";

const FlashMarkerPreview = () => (
    <div id="showbox" class="p-8">
        <FlashMarker>
            Flash - Marker
        </FlashMarker>
    </div>
);

const FlashMarkerColors = () => (
    <div id="showbox" class="p-8">
        <FlashMarker>
            primary (default)
        </FlashMarker>
        <br /><br />
        <FlashMarker className="flash-marker-negative">
            attention (negative: .flash-marker-negative)
        </FlashMarker>
    </div>
);

const FlashMarkerContent = () => (
    <div id="showbox" class="p-8">
        <FlashMarker innerClassName="hyphens">
            in this example we've put some more content to the flash marker to show the behavior for such long texts that we do not recommend at all!
        </FlashMarker>
    </div>
);

const FlashMarkerPositioning = () => (
    <React.Fragment>
        <div style={{height: "15rem", position:"relative"}}>
            <FlashMarker style={{position:"absolute", top: "5rem", left: "5rem"}}>
                example positioning with style attributes
            </FlashMarker>
        </div>
    </React.Fragment>
);

const FlashMarkerExample = () => (
    <TeaserNotLinked
        c_title="Teaser"
        c_subhead="with flash marker"
        c_addon={(
            <FlashMarker className="left" style={{position:"absolute", top: "10%", left: "10%", zIndex: 1}}>
                marker on teaser
            </FlashMarker>
        )}
        style={{position:"relative"}}
    >
    </TeaserNotLinked>
);

export default {
    FlashMarkerPreview,
    FlashMarkerColors,
    FlashMarkerContent,
    FlashMarkerPositioning,
    FlashMarkerExample
};
