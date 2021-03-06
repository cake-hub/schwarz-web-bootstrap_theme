import React from "react";
import { renderToString } from "react-dom/server";
import Popover from "@Develop/Components/Popover/popover.html";
import Icon from "@Develop/Components/Icon/icon.html";
import CakeExampleImage from "@root/build/CakeExampleImage";


const PopoverDefault = () => (
    <div className="cake-example-popover" id="showBox">
        <br />
        <br />
        <br />
        <br />
        <br />
        Default popover
        <abbr { ...Popover ({
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }) }>
            <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
        </abbr>
    </div>
);

const PopoverPlacement = () => (
    <div className="cake-example-popover" id="showBox">
        <center>
            <br />
            <br />
            Popover &lt;Bottom&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "bottom",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
            </abbr><br />
            Popover &lt;Right&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "right",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
            </abbr><br />
            Popover &lt;Left&gt;
            <abbr { ...Popover ({
                placement: "left",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
            </abbr><br />
            Popover &lt;Top&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "top",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
            </abbr>
            <br />
            <br />
        </center>
    </div>
);

const PopoverPlacementExtended = () => (
    <div className="cake-example-popover" id="showBox">
        Popover &lt;right-start&gt;
        <abbr className="mb-2" { ...Popover ({
            placement: "right-start",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }) }>
            <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
        </abbr><br />
        Popover &lt;right&gt;
        <abbr className="mb-2" { ...Popover ({
            placement: "right",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }) }>
            <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
        </abbr><br />
        Popover &lt;right-end&gt;
        <abbr { ...Popover ({
            placement: "right-end",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }) }>
            <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
        </abbr>

        <br />

        Popover &lt;top-start&gt;
        <abbr className="mb-2" { ...Popover ({
            placement: "top-start",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }) }>
            <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
        </abbr><br />
        &gt; &gt; &gt; &gt; &gt; &gt; &gt; Popover &lt;top&gt;
        <abbr className="mb-2" { ...Popover ({
            placement: "top",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }) }>
            <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
        </abbr><br />
        &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; &gt; Popover &lt;top-end&gt;
        <abbr { ...Popover ({
            placement: "top-end",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }) }>
            <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
        </abbr>
    </div>
);

const PopoverCustomContent = () => (
    <div className="cake-example-popover" id="showBox">
        Popover with custom content
        <abbr className="mb-2" { ...Popover ({
            placement: "bottom",
            content: "<h1 class=\"mb-1\">Lorem ipsum dolor sit amet</h1>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <hr /> <a href=\"#\">Ut enim ad minim veniam</a>, quis nostrud exercitation ullamco laboris.",
            allowhtml: true,
        }) }>
            <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
        </abbr><br />

        Popover with image
        <abbr { ...Popover ({
            placement: "bottom",
            content: renderToString (<CakeExampleImage callFilePath={__dirname} className="img-fluid" />),
            allowhtml: true,
            maxwidth: 500,
        }) }>
            <Icon title="Default popover" name="questionmark-circle" className="icon-3 text-primary" />
        </abbr>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
);

const PopoverCustomElement = () => (
    <div className="cake-example-popover" id="showBox">
        <button { ...Popover ({
            placement: "bottom",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }) }
        className="btn btn-secondary">
            Some button
        </button>
        <br />
        <br />
        <br />
        <br />
        <input type="text" placeholder="Some inputfield with popover" className="form-control" { ...Popover ({
            placement: "top",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }) } />
    </div>
);

export default {
    PopoverDefault,
    PopoverPlacement,
    PopoverPlacementExtended,
    PopoverCustomContent,
    PopoverCustomElement,
};
