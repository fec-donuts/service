const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src/index.jsx');
const DIST_DIR = path.join(__dirname, '/client/dist');



module.exports = {
  entry: SRC_DIR,
  entry: {
  vendor: ["styled-components"],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
       name: "vendor",
       minChunks: Infinity,
     }),
    ],
  module: {
    rules: [
        { 
          test: /\.(js|jsx)$/, exclude: /node_modules/, 
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        }
    ]
  },

};