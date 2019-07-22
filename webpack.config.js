const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

let path = require("path");

module.export = {
    entry: "./js/ap.jsx",
    output: {
        path: path.join(__dirname, "./APP"),
        filename: "main.js"
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/, //正则
    //             use: [
    //                 // minCssExtractPlugin.loader,
    //                 // "css-loader"
    //                 {
    //                     loader: "style-loader",
    //                 },
    //                 {
    //                     loader: "css-loader",
    //                 }
    //             ]
    //         },
    //         {
    //             test: /\.(jpg|png|gif|jpeg|eot|woff2|woff|ttf|svg)\??.*$/, //正则
    //             use: "url-loader?limit=20000&name=[path][name].[ext]"
    //         },
    //         {
    //             test: /\.jsx$/,
    //             use: "babel-loader"
    //         },
    //         {
    //             loader: require.resolve('file-loader'),
    //             exclude: [/\.js$/, /\.html$/, /\.json$/, /\.scss$/],
    //             options: {
    //                 name: 'static/media/[name].[hash:8].[ext]',
    //             },
    //         },
    //         {
    //             test: /\.scss$/,
    //             loaders: ['style-loader', 'css-loader', 'sass-loader']
    //         }
    //     ]
    // },
    // mode: "development",
    // resolve: {
    //     extensions: [".css", ".js"]//补全后缀名
    // },
    // devtool: "#cheap-module-eval-source-map"
}

// // const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const webpack = require('webpack'); 

// const path = require('path');



// module.export = {
//     ebtry: './src/index.js',
//     output: {
//         path: path.join(__dirname, './dist'),
//         filename: 'my-first-webpack.bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 text: /\.js|jsx$/,
//                 use: "bable-loader"
//             },{
//                 text:/\.css$/,
//                 use:["css-loader","style-loader"]
//             }
//         ]
//     },
//     mode:"development",
//     resolve:{
//         extensions:[".css",".js"]
//     },
//     // plugins:[
//     //     new webpack.optimize.UglifyJsPlugin(),
//     //     new HtmlWebpackPlugin({template: './src/index.html'})
//     // ]
// };

