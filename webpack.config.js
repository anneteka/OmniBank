const path = require('path');

module.exports = {
    target: 'web',
    entry: {
        main: './src/index.js',
        //db: './src/database.js'
    },

    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // ...additional rules...
        ],
    },
};