const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: {
        control: './src/control/control.js',
        viewer:'./src/viewer/viewer.js'
    },
    output: {
        filename: "[name].js",
        path: __dirname + '/src/static/js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
