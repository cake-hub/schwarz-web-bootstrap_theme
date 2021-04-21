import React from "react";
import Button from "@Develop/Components/Button/button.html";
import Icon from "@Develop/Components/Icon/icon.html";

const ButtonPositive = () => (
    <React.Fragment>
        <Button className="btn-primary mt-1">
            Primary
        </Button>
        <Button className="btn-primary ml-1 mt-1" disabled>
            Primary disabled
        </Button>
        <Button className="btn-secondary ml-1 mt-1">
            Secondary
        </Button>
        <Button className="btn-secondary ml-1 mt-1" disabled>
            Secondary disabled
        </Button>
    </React.Fragment>
);

const ButtonNegative = () => (
    <div className="cake-example-negative" id="showBox">
        <Button className="btn-primary-negative mt-1">
            Primary
        </Button>
        <Button className="btn-primary-negative ml-1 mt-1" disabled>
            Primary disabled
        </Button>
        <Button className="btn-secondary-negative ml-1 mt-1">
            Secondary
        </Button>
        <Button className="btn-secondary-negative ml-1 mt-1" disabled>
            Secondary disabled
        </Button>
    </div>
);

const ButtonWithIcon = () => (
    <React.Fragment>
        <Button className="btn-primary mt-1">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3 mr-1" />
            Primary
        </Button>
        <Button className="btn-primary ml-1 mt-1" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3 mr-1" />
            Primary disabled
        </Button>
        <Button className="btn-secondary ml-1 mt-1">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3 mr-1" />
            Secondary
        </Button>
        <Button className="btn-secondary ml-1 mt-1" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3 mr-1" />
            Secondary disabled
        </Button>
    </React.Fragment>
);

const ButtonWithIconPositive = () => (
    <React.Fragment>
        <Button className="btn-primary mt-1">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3" />
        </Button>
        <Button className="btn-primary ml-1 mt-1" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3" />
        </Button>
        <Button className="btn-secondary ml-1 mt-1">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3" />
        </Button>
        <Button className="btn-secondary ml-1 mt-1" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3" />
        </Button>
    </React.Fragment>
);

const ButtonWithIconAndTextNegative = () => (
    <div className="cake-example-negative" id="showBox">
        <Button className="btn-primary-negative mt-1">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3 mr-1" />
            Primary
        </Button>
        <Button className="btn-primary-negative ml-1 mt-1" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3 mr-1" />
            Primary disabled
        </Button>
        <Button className="btn-secondary-negative ml-1 mt-1">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3 mr-1" />
            Secondary
        </Button>
        <Button className="btn-secondary-negative ml-1 mt-1" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3 mr-1" />
            Secondary disabled
        </Button>
    </div>
);

const ButtonWithIconNegative = () => (
    <div className="cake-example-negative" id="showBox">
        <Button className="btn-primary-negative mt-1">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3" />
        </Button>
        <Button className="btn-primary-negative ml-1 mt-1" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3" />
        </Button>
        <Button className="btn-secondary-negative ml-1 mt-1">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3" />
        </Button>
        <Button className="btn-secondary-negative ml-1 mt-1" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-3" />
        </Button>
    </div>
);

export default {
    ButtonPositive,
    ButtonNegative,
    ButtonWithIcon,
    ButtonWithIconPositive,
    ButtonWithIconAndTextNegative,
    ButtonWithIconNegative
};
