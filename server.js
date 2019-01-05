const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);
const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

//You need to remove the next code it's for the demo purposes only
app.get('/users', (req, res, next) => {
    res.send([{ "firstName": "John", "lastName": "Doe" }])
});

