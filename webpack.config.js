var path = require('path'),
	webpack =require('webpack');
var config = {
    entry: 
    ["./src/a.js",
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    ],
    output: {
        path: path.resolve(__dirname, './output/'),
        filename:'bundle.js',
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}

module.exports = config;