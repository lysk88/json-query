const { resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtensionReloader  = require('webpack-extension-reloader');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    watch: true,
    entry: {
        content: './src/app/content.js',
        background: './src/app/background.js',        
    },

    output: {
        publicPath: ".",
        path: resolve(__dirname, "dist/"),
        filename: "[name].js",
        libraryTarget: "umd"
      },

    resolve: {
        extensions: [".js"]
    },

    plugins: [
        new ExtensionReloader({
            manifest: resolve(__dirname, "manifest.json")
        }),
        new CopyWebpackPlugin([
            { from: "./manifest.json" },
          ])
    ],

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
};