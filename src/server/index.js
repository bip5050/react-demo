import Express from 'express';
import handleRender from './handleRender';
import Proxy from 'http-proxy-middleware';
import * as Sentry from '@sentry/node';
import config from '../config';

Sentry.init({
  dsn: config.sentry_dsn
});

const NEVENS_SERVICE_URL = process.env.NEVENS_SERVICE_URL || "http://localhost:4737" 

// this is a very simple express app designed only for the purpose of this repo
const app = Express();
const port = process.env.PORT || 3000;

// const router = Express.Router();

// http proxy
const onError = function(err, req, res) {
  Sentry.captureException(err);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Something went wrong.');
};

app.use('/api', Proxy({
  target: NEVENS_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
      '^/api': '/api'
  },
  onError
}));

// const yes = require('appengine-express-https');
// app.use(yes());
// server static content
app.use('/dist', Express.static('dist'));
app.use('/img', Express.static('img'));
app.use('/assets', Express.static('assets'));

app.use('/_ah/health', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('ok');
});


// register route handler
app.use(handleRender);

// listen out for incoming requests
app.listen(port, () => {
  console.log('app now listening on port', port);
});