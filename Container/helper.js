import fs from "fs";
import path from "path";
import glob from "glob";
import config from "./config";
import crypto from "crypto";
import { renderToStaticMarkup } from "react-dom/server";
import { parse } from 'node-html-parser';
import { html_beautify } from "js-beautify";

/*
    LOG to console with standardized structure
*/
export const logToConsole = (namespace, action, data = "", highlight = false) => {
    if (highlight) {
        logToConsole (namespace, "-".repeat(action.length));
    }
    console.log (
        "\x1b[33m%s\x1b[0m %s \x1b[35m%s\x1b[0m %s \x1b[32m%s\x1b[0m", //Set Colors for the log
        namespace, "|",
        action, data ? "|" : "",
        data
    );
    if (highlight) {
        logToConsole (namespace, "-".repeat(action.length));
    }
};

export const fetchFiles = ( searchPath, onlyDirectories = false, recursively = false, fileTypes = [] ) => {
    //Check if searchPath is a file, if so break
    const pathStat = fs.lstatSync(searchPath);
    if (!pathStat.isDirectory () && !pathStat.isSymbolicLink ())
        return [];

    const foundPaths = fs.readdirSync (searchPath);
    let structure = {};

    //Iterate through the found paths
    foundPaths.forEach (foundPath => {
        //Check if this entry is a hidden one
        if (foundPath.indexOf( "_" ) === 0 || foundPath.indexOf( "." ) === 0) {
            return;
        }

        //Check if this is a folder
        const subpathStat = fs.lstatSync(path.resolve (searchPath, foundPath));
        if (subpathStat.isDirectory () || subpathStat.isSymbolicLink ()) {
            //Handle Folder:

            let folderStructure = {};
            //Add Folders recursively if active
            if (recursively) {
                folderStructure = fetchFiles (
                    path.resolve (searchPath, foundPath),
                    onlyDirectories,
                    recursively,
                    fileTypes
                );
            }
            structure [foundPath] = folderStructure;
        } else if (!onlyDirectories) {
            //Handle File:
            if (fileTypes.length >= 1 && !fileTypes.includes (path.extname (foundPath))) {
                return;
            }

            structure [foundPath] = path.resolve (searchPath, foundPath);
        }
    });

    return structure;
};


export const getThemes = () => {
    return [
        'Cake',
        ...Object.keys(
            fetchFiles (
                path.resolve (__dirname, "../", "themes"),
                true
            )
        ),
    ];
};

export const kebabCaseToCapitalizedWords = (kebabCase) => {
    let wordArray = [];
    kebabCase.split('-').forEach(string => {
        wordArray.push( string.charAt(0).toUpperCase() + string.slice(1) );
    });
    return wordArray.join(' ');
};

export const rawMarkup = (filePathOrContent, selector = null, extension = null) => {
    let body = "";
    if (typeof filePathOrContent === "object") {
        body = renderToStaticMarkup (filePathOrContent);
    } else {
        body = fs.readFileSync(filePathOrContent, 'utf8');
    }
    if (!extension) {
        extension = path.extname (filePathOrContent).replace (/[\#\?]+.*$/ig, '');
    }
    switch(extension) {
        case '.html':
        case '.htm':
            body = parse(body);
            if (selector) {
                body = body.querySelector(selector);
            }
            if(body) {
                body = body.innerHTML;
            } else {
                body = "no selector found (╯°□°）╯︵ ┻━┻";
                logToConsole ("CAKE-BUILDER", "(╯°□°）╯︵ ┻━┻", "Warning: Selector: '" + selector + "' in example file '" + filePath + "' not found.", true);
            }
            break;
    }

    // Delete react attributes if existing
    body = body
            .replace( /data-react["=0-9a-zA-Z\-]*/g, "" )
            .replace( /=""/g, "" )
            .replace( /></g, '>\n<')
            .replace( / {2,}/g, " ")
            .replace( /" >/g, '">')
            .replace( /> +</g, "><");

    // https://github.com/beautify-web/js-beautify
    const jsBeautifyOptions = {
        "indent_size": 4,
        "indent_char": " ",
        "indent_with_tabs": false,
        "eol": "\n",
        "end_with_newline": false,
        "indent_level": 0,
        "preserve_newlines": true,
        "max_preserve_newlines": 10,
        "wrap_line_length": 100,
    };

    let htmlString = html_beautify( body, jsBeautifyOptions);
    if ( htmlString.indexOf('\n', 0) === -1 ) {
        htmlString += '\n\n';
    }
    return htmlString;
};

// Method to extract all files of sourcePath and compile them to distPath (with minified version and exclusion of files)
export const getEntryFiles = (sourcePath, distPath, minified = false) => {
    let entryFiles = {};
    for (let file of glob.sync(sourcePath)) {
      entryFiles [distPath + path.parse (file).name] = file;
      if (minified) {
        entryFiles [distPath + path.parse (file).name + ".min"] = file;
      }
    }
    return entryFiles;
};

// convert relative aliases to absolute ones
export const getAbsoluteAliases = (relativeAliases) => {
    let absolutedAliases = {};
    for (let alias in relativeAliases) {
        absolutedAliases[alias] = path.resolve(__dirname, relativeAliases [alias])
    }
};

export const uniqueFileNames = (pathArray ,ext) => {
    let usedNames = [];
    let iconArray = [];
    for (let iconPath of pathArray.reverse ()) {
        const iconName = path.basename (iconPath, ext);
        if (!usedNames.includes (iconName)) {
            usedNames.push (iconName);
            iconArray.push (iconPath);
        }
    }
    return iconArray;
};

export const pseudoRandomHashGenerator = (randomString = null) => {
    // Retrieve excecution stack
    // API: https://github.com/sindresorhus/callsites#api
    const _prepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const stacks = new Error().stack.slice(1);
    Error.prepareStackTrace = _prepareStackTrace;


    // STACK SHOULD BE:
    // …/helper.js
    // …/Accordion/accordionItem.html.js
    // …/Accordion/page.js
    // …/build/pageBuildExample.js
    // …/build/exampleBuild.js
    // …

    // BUT ACTUALLY IS:
    // …/helper.js
    // …/Components/Cookie alert/page.js
    // …/Components/Cookie alert/cookieAlert.html.js
    // …/node_modules/react-dom/cjs/react-dom-server.node.development.js
    // …/node_modules/react-dom/cjs/react-dom-server.node.development.js
    // …

    // THEREFORE we need to track the current example that get's rendered: therefore we use "_currentExample" in config

    // Generate pseudo-random hash with stack
    let hash = "";
    for (const stack of stacks) {
        hash = `${hash}-${path.relative (process.cwd (), stack.getFileName ())}_${stack.getLineNumber ()}_${stack.getColumnNumber ()}`;
    }
    hash = `${hash}_${randomString}_${config._currentExample}`;

    // hash data
    hash = crypto.createHash ("md5").update (hash).digest ("hex");

    return hash.substr (0, 8);
};
