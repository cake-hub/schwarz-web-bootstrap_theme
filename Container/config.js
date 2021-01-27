//This file should not be written using the module syntax of ES6

const path = require( "path" );

module.exports = class Configuration {

    static get rootAssetPath () {
        return "./_assets/";
    }

    static get assetPath () {
        return Configuration.basePath + Configuration.rootAssetPath;
    }

    static get basePath () {
        return "../../../";
    }

    static get rootPath () {
        return path.resolve (__dirname);
    }

    static get pageAssetFolders () {
        return [
            "assets",
            "examples"
        ];
    }

    static get pageExamplePath () {
        return Configuration.pageAssetFolders [1];
    }

    static get exampleImagesPath () {
        return path.resolve (__dirname, "./docs", Configuration.rootAssetPath + "images/examples");
    }

}
