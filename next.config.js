const path = require("path")
const webpack = require("webpack")

const withTM = require('next-transpile-modules')(['gsap']);
const withStyles = require('@webdeb/next-styles')

const NODE_ENV = process.env.NODE_ENV || "development"
const isDev = NODE_ENV === "development"

console.log(`CURRENTLY RUNNING IN: ${NODE_ENV} MODE`)
module.exports = withTM(withStyles({
    sass: true,
    modules: true,
    cssLoaderOptions: {
            modules: {
                // localIdentName: isDev ?
                //     "[name]__[local]__[hash:base64:5]" :
                //     "[hash:base64:12]",
                localIdentName: '[name]__[local]___[hash:base64:5]', 
            },
            importLoaders: 1,
        },
        miniCssExtractOptions: {
            ignoreOrder: true,
        },
    webpack: (config, options) => {
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
      
        return config
    },
}))