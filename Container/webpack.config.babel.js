import path from  "path";
import glob from "glob";
import FriendlyErrorsWebpackPlugin from  "friendly-errors-webpack-plugin";
import MiniCssExtractPlugin from  "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from  "optimize-css-assets-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import FileManagerPlugin from "filemanager-webpack-plugin";
import SVGSpritemapPlugin from "svg-spritemap-webpack-plugin";
import FixStyleOnlyEntriesPlugin from "webpack-fix-style-only-entries";
import packageJson from "./package.json";
import { getEntryFiles, getAbsoluteAliases, uniqueFileNames } from "./helper";


export default {

    // generate object of all files to be processed
    // ---
    entry: {
        //Cake theme documentation assets
        ...getEntryFiles ("./build/assets/*.js", "docs/_assets/"),

        // Bootstrap-Theme files
        ...getEntryFiles ("./js/*.js", "./dist/js/", true),
        ...getEntryFiles ("./scss/!(_)*.scss", "./dist/css/", true),
    },


    // resolve all aliases in the entry files (eg @develop, @root, …)
    // ---
    resolve: {
        modules: [
            path.resolve ( "./" ),
            "node_modules"
        ],
        alias: getAbsoluteAliases (packageJson._moduleAliases),
    },


    // File processing pipeline for all files that match the specified rules
    // configuration of scss processor and bable js processor (ES6 -> ES5, SCSS -> CSS, …)
    // ---
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    url: false
                }
            },
            {
                loader: "postcss-loader",
                options: {
                plugins: () => [
                    require ('postcss-inline-svg')({
                        removeFill: true,
                        xmlns: true,
                        path: process.cwd () + '/',
                    }),
                    require ('autoprefixer'),
                ]
                }
            },
            {
                loader: "sass-loader", // compiles Sass to CSS, using Dart-Sass by default
                options: {
                    implementation: require ('sass'),
                },
            }
            ],
        },
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
        ],
    },


    // post precessing of all entry files after main processing
    // ---
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin ({
                parallel: true,
                include: /\.min\.js$/,
                sourceMap: false,
                uglifyOptions: {
                    output: {
                        comments: false,
                    },
                }
            }),
            new OptimizeCSSAssetsPlugin ({
                assetNameRegExp: /\.min\.css$/g,
            }),
        ]
    },

    // start tools if processing of all entry files is done
    // ---
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['Webpack compilation was successful!'],
            },
            clearConsole: true,
        }),
        new MiniCssExtractPlugin(),
        // Cake-Theme icons
        new SVGSpritemapPlugin (
            uniqueFileNames ([
                //Sort the icons by importance! (the last line overwrites all previous ones, if the name equals)
                ...glob.sync ('./assets/icons/!(_)*.svg'),
                ...glob.sync ('./assets/icons/!(_)**/!(_)*.svg'),
            ], '.svg'),
            {
                output: {
                    filename: 'dist/images/icon__sprite.svg',
                    svgo: true,
                },
                sprite: {
                    prefix: false,
                }
            }
        ),
        new FileManagerPlugin ({
            onEnd: {
                copy: [
                    {
                        source: './assets/!(icons|examples)**/*',
                        destination: path.resolve (__dirname, './dist/')
                    },
                    {
                        source: './dist/',
                        destination: path.resolve (__dirname, './docs/_assets/')
                    },
                    {
                        source: './assets/images/examples',
                        destination: path.resolve (__dirname, './docs/_assets/images/examples')
                    },
                ],
            }
        }),
        new FixStyleOnlyEntriesPlugin (),
    ],


    // Configure output folder where genereated files should be relative to
    // ---
    output: {
        path: path.resolve(__dirname, './'),
    },


    // Additional configuration of webpack
    // ---
    mode: 'production',
    context: path.join ( __dirname, "./" ),
    stats: 'errors-warnings', // 'errors-warnings', 'verbose'
    performance: {
        hints: "error",
        maxEntrypointSize: 1024 * 1024,   // 1MiB size-limit
        maxAssetSize: 1024 * 1024,   // 1MiB size-limit
    },
};
