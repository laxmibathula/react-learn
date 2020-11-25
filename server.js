require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes.js");
const app = express();
const fs = require('fs');

app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV !== 'production') {
  const config = require('./webpack.dev.config.js');
  fs.unlink(`${__dirname}/public/${config.output.filename}`, (err) => {
    console.log(err);
  });
  fs.unlink(`${__dirname}/public/${config.output.filename}.map`, () => {});

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  
  const compiler = webpack(config);
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {  
    publicPath: config.output.publicPath
  }));
}

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

function isJsonParsable(json) { 
	try{
		JSON.parse(json);  
	}catch(e){
		return false;
	}      
  
	return true;
};

app.use(function(req, res, next) {
	if(req.text && isJsonParsable(req.text)){
		req.body = JSON.parse(req.text);
	}

	if(req.body && typeof(req.body) === "string" && isJsonParsable(req.body)){
		req.body = JSON.parse(req.body);
	}

	next();
});

app.use("/",routes);

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {	
	console.log(`React app is up and running on port: ${app.get('port')}`);  
});

