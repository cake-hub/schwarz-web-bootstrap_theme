import React from "react";

const themeColors = [
    "primary",
    "secondary",
    "info",
    "attention",
    "danger",
    "success",
    "gray",
];

const TextColors = () => (
    <React.Fragment>
        {
            themeColors
                .map (colorName => (
                    <p
                        key={colorName}
                        className={"text-" + colorName}
                    >
                        .text-{colorName}
                    </p>
                ))
        }
    </React.Fragment>
);
const ColorBackground = () => (
    <React.Fragment>
        {
            themeColors
                .map (colorName => (
                    <p
                        key={colorName}
                        className={"bg-" + colorName + (colorName === "attention" ? " text-black" : " text-white")}
                    >
                        .bg-{colorName}
                    </p>
                ))
        }
    </React.Fragment>
);
const ColorMark = () => (
    <React.Fragment>
        <p className="text-mark">.text-mark</p>
        <p className="bg-mark">.bg-mark</p>
    </React.Fragment>
);

export default {
    TextColors,
    ColorBackground,
    ColorMark,
};
