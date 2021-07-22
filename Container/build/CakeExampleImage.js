import React from 'react';
import config from "@root/config";
import path, { join } from "path";
import { fetchFiles } from "@root/helper";

let cakeImages = Object.values (
    fetchFiles (
        config.exampleImagesPath,
        false,
        false,
        [
            ".jpg",
            ".png",
            ".gif",
        ]
    )
).map (cakeImage => path.basename (cakeImage));

const CakeExampleImage = ( { callFilePath, className="", ...props } ) => {
    const relativePath = path.relative(callFilePath + "/" + config.pageExamplePath, config.exampleImagesPath);

    return (
        <img is="rnd-img" src={relativePath + '/' + "Backen_Weihnachten_CloseUp_v02_USAR.jpg"} alt="A beautiful cake image *_*" class={className} folder={relativePath} images={(cakeImages.join())} {...props} />
    );
}

export default CakeExampleImage;
