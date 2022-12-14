const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: './src/index.jsx',
    devtool: (process.env.NODE_ENV === 'production') ? false : 'inline-source-map',
    mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader',
                ],
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
            {
                test: /\.css|scss$/,
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader", // 2. Turns css into commonjs
                ],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    }
};

module.exports = config;
