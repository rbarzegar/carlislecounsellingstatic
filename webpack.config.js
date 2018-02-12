var path = require('path');

module.exports = {
    entry: "./app/js/main.js",    //tells webpack where all the modules are bundled
    output: {
        path: path.resolve(__dirname, "./app/js/"),    //path to where the compiled javascript will go
        filename: "app.js",   //compiles the bundled javascript into browser-ready JS
    },

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}