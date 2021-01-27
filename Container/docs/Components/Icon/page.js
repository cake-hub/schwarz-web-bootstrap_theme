import React from "react";

import Icon from "@Develop/Components/Icon/icon.html";
import IconSet from "@Develop/Components/Icon/iconSet.html";

const IconDefault = () => (
    <Icon name="placeholder" title="Placeholder" />
);

const IconSizing1 = () => (
    <Icon name="placeholder" title="Placeholder" className="icon-1" />
);

const IconSizing2 = () => (
    <Icon name="placeholder" title="Placeholder" className="icon-2" />
);

const IconSizing3 = () => (
    <Icon name="placeholder" title="Placeholder" className="icon-3" />
);

const IconSizing4 = () => (
    <Icon name="placeholder" title="Placeholder" className="icon-4" />
);

const IconArrowDownExample = () => (
    <Icon className="icon-4" name="arrow-down" title="Arrow down" />
);

const IconButtonExample = () => (
    <button className="btn btn-primary">
        <Icon className="icon-3 btn-icon" name="placeholder" title="Placeholder" />&emsp;Some text
    </button>
);

const IconVerticalMiddleExample = () => (
    <div className="cake-example-cutted-border-fix" id="showbox">
        <Icon className="icon-3 icon-vertical-middle" name="placeholder" title="Placeholder" />&emsp;Some text
    </div>
);

const IconColoringExample = () => (
    <React.Fragment>
        <Icon className="icon-4" style={{ color: "red" }} name="placeholder" title="Placeholder" />
        <Icon className="icon-4" style={{ color: "#0050AA" }} name="placeholder" title="Placeholder" />
        <Icon className="icon-4" style={{ color: "rgba(190, 89, 29, 1)" }} name="placeholder" title="Placeholder" />
        <Icon className="icon-4" style={{ color: "hsla(357, 92%, 47%, 1)" }} name="placeholder" title="Placeholder" />
        <Icon className="icon-4 text-primary" name="placeholder" title="Placeholder" />
    </React.Fragment>
);

const IconSetAsTables = () => (
    <IconSet />
);

export default {
    Icon,
    IconDefault,
    IconSizing1,
    IconSizing2,
    IconSizing3,
    IconSizing4,
    IconArrowDownExample,
    IconButtonExample,
    IconVerticalMiddleExample,
    IconColoringExample,
    IconSetAsTables,
};
