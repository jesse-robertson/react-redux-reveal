var webpack =  require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    externals: {
      reveal: 'Reveal'  
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/assets/index.html'
        })
        
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, 'src'),
            loaders: ['react-hot','babel']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
      }
};