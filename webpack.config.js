
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8083,
    },
    "entry": "./src/index.js",
    "output": {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin(
            {
              name: 'Microfrontendhost',
              filename:
                'remoteEntry.js',
              remotes: {
                MFE1:
                  'Microfrontend1@http://localhost:8082/remoteEntry.js',
              },
            }
        ),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}