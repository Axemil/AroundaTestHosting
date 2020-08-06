const path = require("path")
const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

const withSass = require('@zeit/next-sass')

const NODE_ENV = process.env.NODE_ENV || "development"
const isDev = NODE_ENV === "development"

module.exports = withSass({
    cssModules: true,
    webpack: (config, options) => {
        // config.optimization = {
        //     minimizer: [
        //         new OptimizeCssAssetsPlugin({
        //             cssProcessorOptions: {
        //                 zindex: false
        //             }
        //         }),
        //         new TerserPlugin()
        //     ]
        // }
        config.resolve = {
            modules: ["node_modules", path.resolve(__dirname, "src")],
            alias: {
                ...config.resolve.alias,
                "pages": path.join(__dirname, "pages/"),
                "@": path.join(__dirname, "src/"),
                "@sections": path.join(__dirname, "src/components/sections"),
                "@assets": path.join(__dirname, "src/assets/"),
                "@svg": path.join(__dirname, "src/assets/svg/"),
                "@simple": path.join(__dirname, "src/components/simple"),
                "@pages": path.join(__dirname, "src/components/pages"),
                "@landing": path.join(__dirname, "src/components/landing"),
                "@case": path.join(__dirname, "src/components/case")
            }
        }
        // devServer: {
        //     port: 9090,
        //     historyApiFallback: true,
        //     open: true,
        //     hot: true,
        //     publicPath: "/",
        //     stats: {
        //         colors: true
        //     },
        //     overlay: {
        //         warnings: false,
        //         errors: true
        //     }
        // }
        config.module.rules = [...config.module.rules, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                // Match woff2 in addition to patterns like .woff?v=1.1.1.
                test: /\.(woff|woff2|otf|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "./fonts/[name].[ext]",
                        outputPath: "./fonts",
                        limit: 50000,
                        context: path.resolve(__dirname, "src"),
                    }
                }
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            },
            {
                test: /\.(png|jpg|gif|webp)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "images/[hash].[ext]"
                    }
                }]
            }
        ];
        config.plugins.push(new webpack.DefinePlugin({
            __DEV__: JSON.stringify(isDev)
        }))
        // config.plugins.push(new CopyWebpackPlugin([{
        //     from: path.resolve("./src/static"),
        //     to: path.resolve("./dist")
        // }]))
        // config.plugins.push(new MiniCssExtractPlugin({
        //     filename: "bundle.css"
        // }))

        return config
    },
})