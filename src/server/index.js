import Express from 'express';
import handleRender from './handleRender';
import Proxy from 'http-proxy-middleware';


import config from '../config';



const ESM_SERVICE_URL = process.env.ESM_SERVICE_URL || 'http://localhost:8000';//http://localhost:4737 http://192.168.0.67:5656

// this is a very simple express app designed only for the purpose of this repo
const app = Express();
const port = 3000;

// const router = Express.Router();

// http proxy
const onError = function(err, req, res) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Something went wrong.');
};



// const yes = require('appengine-express-https');
// app.use(yes());
// server static content
app.use('/dist', Express.static('dist'));
app.use('/img', Express.static('img'));
app.use('/assets', Express.static('assets'));

app.use('/liveness_check', function(req, res) {
  res.status(200).send('ok');
});

app.use('/readiness_check', function(req, res) {
  res.status(200).send('ok');
});


// register route handler
app.use(handleRender);

// listen out for incoming requests
app.listen(port, () => {
  console.log('app now listening on port', port);
});