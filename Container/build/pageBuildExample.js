/*
    Page Builder used to generate the different types of html-pages.
 */
import "module-alias/register";
import fs from "fs-extra";
import React from "react";
import config from "../config";
import { renderToStaticMarkup } from "react-dom/server";
import Helmet from "react-helmet";
import { logToConsole } from "@root/helper";
import { htmlTemplateExample } from "./exampleTemplate";

//Build ExamplePage
export const buildExamplePage = (exampleName, exampleTemplate, exampleOutputFolder) => {
    const fileName = exampleOutputFolder + "/" + exampleName + ".html";
    // Set actual example path + example name (from page.js)
    config._currentExample = fileName + "_" + exampleTemplate.name;
    logToConsole ("CAKE-BUILDER", "Build page", fileName);
    const htmlString = new Uint8Array(
        Buffer.from(
            htmlTemplateExample (
                renderToStaticMarkup(
                    <React.Fragment>
                        <Helmet>
                            <title>{ exampleName }</title>
                        </Helmet>
                        {
                            (exampleTemplate.template) ? (
                                    <div className={exampleTemplate.c_previewClassName ? exampleTemplate.c_previewClassName : ""}>
                                        {exampleTemplate.template (exampleTemplate.props ? exampleTemplate.props : {})}
                                    </div>
                            ) : exampleTemplate ({})
                        }
                    </React.Fragment>
                 ),
                Helmet.renderStatic(),
                fileName
            )
        )
    );
    fs.writeFileSync( fileName, htmlString );
}
