const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV !== 'production') {
  const config = require('./webpack.dev.config.js');
  fs.unlink(`${__dirname}/public/${config.output.filename}`, () => {});
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

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);  
});

app.set('port', process.env.PORT || 1446);
const server = app.listen(app.get('port'), () => {	
	console.log(`React app is up and running on port: ${app.get('port')}`);  
});
