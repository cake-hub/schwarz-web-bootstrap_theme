import React from "react";
import fs from "fs";
import path from "path";
import config from "@root/config";
import { kebabCaseToCapitalizedWords, fetchFiles } from "@root/helper";

import Icon from "./icon.html";

const SvgExtension = '.svg';

const IconTableRows = ({icons}) => {
    let index = 0;

    return (
        <React.Fragment>
            {icons.map(icon => (
                <tr key={icon.id} data-index={++index}>
                    <td>{icon.name}</td>
                    <td><code>{icon.reference}</code></td>
                    <td><code>{icon.path}</code></td>
                    <td>
                        <Icon name={icon.id} title={icon.id} className="icon-4" />
                    </td>
                </tr>
            ))}
        </React.Fragment>
    );
};

const IconTable = ({ files, headline }) => {
    let icons = [];

    //Prepare all the icons
    //id, name, reference, path,
    files.forEach (file => {
        const fileBaseName = path.basename(file, SvgExtension);
        const iconName = kebabCaseToCapitalizedWords(fileBaseName);
        const symbolReference = fileBaseName.toLowerCase();

        icons.push({
            name: iconName,
            reference: '#' + symbolReference,
            path: path.relative (config.rootPath, file),
            id: symbolReference
        });
    });

    return (
        <React.Fragment>
            <h3 id={ headline }>{ kebabCaseToCapitalizedWords(headline) }</h3>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Reference</th>
                            <th>Icon-Path</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        <IconTableRows icons={icons} />
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};


const uniqueIconIds = (dirs) => {
    let alreadyUsedIconIds = [];
    for (const dir of dirs.reverse ()) {
        dir.files = dir.files.reverse ().filter (file => {
            const fileBaseName = path.basename (file);
            if (alreadyUsedIconIds.includes (fileBaseName)) {
                return false;
            } else {
                alreadyUsedIconIds.push (fileBaseName);
                return true;
            }
        }).reverse ();
        if (dir.files.length <= 0) {
            dirs.splice (dirs.indexOf (dir), 1);
        }
    }
    return dirs.reverse ();
};

const IconSet = () => {
    const path2Icons = config.rootPath + '/assets/icons/';

    // Scan icon folders
    const fileList = fetchFiles (path2Icons, false, true, [SvgExtension]);

    // Extract all icons with it's folders
    let dirs = [];
    let files = [];
    const appendFiles = (fileList) => {
        let folderFiles = [];
        for (const key in fileList) {
            // If key is folder, just iterate over this folder
            if (typeof fileList [key] !== "string") {
                // Check if this category-name already exists and then only append icon-files
                const dirIdx = dirs.findIndex (dir => dir.name === key);
                if (dirIdx >= 0) {
                    dirs [dirIdx].files = [
                        ...dirs [dirIdx].files,
                        appendFiles (fileList [key])
                    ];
                } else {
                    dirs.push ({
                        name: key,
                        files: appendFiles (fileList [key]),
                    });
                }
                continue;
            }
            // If key is file, just add this file
            folderFiles.push (fileList [key]);
        }
        return folderFiles;
    }
    files = appendFiles (fileList);

    // If single files without folder are found, categorize them
    if (files.length > 0) {
        dirs.push ({
            files,
            name: 'Other',
        });
    }

    dirs = uniqueIconIds (dirs);

    return (
        <React.Fragment>
            {dirs.map((dir)=>(
                <IconTable key={dir.name} files={dir.files} headline={dir.name} />
            ))}
        </React.Fragment>
    );
};

export default IconSet;
