import config from "@root/config";
import path from "path";

/*
    HTML Template Wrapper for Examples
    All examples are rendered inside of this template.
 */
export const htmlTemplateExample = ( reactDom, helmetData, filePath ) => {
    const rootDocsPath = path.relative (path.resolve (path.dirname (filePath), "../"), path.resolve (config.rootPath));
    const assetPath = path.join (rootDocsPath, config.rootAssetPath);
    const themeAssetPath = path.join (rootDocsPath, config.rootAssetPath);

    return `
        <!DOCTYPE html>
        <html lang="en-GB">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${ helmetData.title.toString () }
            ${ helmetData.meta.toString () }
            <link rel="stylesheet" type="text/css" href="${themeAssetPath}css/cake.css">
        </head>

        <body>
            <div id="app">${ reactDom }</div>
            <script src="${themeAssetPath}js/cake.js"></script>
            <script src="${assetPath}example.js"></script>
            ${ helmetData.script.toString () }
        </body>
        </html>
    `;
}
