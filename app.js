var express = require('express'),
	app = express(),
	webpack = require('webpack'),
	config = require('./webpack.config.js'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config,function(){
	console.log('done')
});//如果有回调函数并且没有中间件插架则直接运行webpack。如果没有回调函数或没有中间件插件则不直接执行webpack。
var options ={
    publicPath: "/",
}

app.use(webpackDevMiddleware(compiler, options));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('output'))
app.listen(8080, function () {
  console.log('Example app listening on!')
})