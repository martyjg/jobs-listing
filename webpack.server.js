const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // Inform webpack that we're building a bundle for nodeJS, rather than for the browser
    // By default webpack assumes client side. But we'll tell it otherwise
    target: 'node',

    // Tell webpack the root file of our server app
    entry: './src/index.js',

    // Tell webpack where to put the output file (bundle.js) that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);
