"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var _handleRender = _interopRequireDefault(require("./handleRender"));

var _httpProxyMiddleware = _interopRequireDefault(require("http-proxy-middleware"));

var Sentry = _interopRequireWildcard(require("@sentry/node"));

var _config = _interopRequireDefault(require("../config"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Sentry.init({
  dsn: _config.default.sentry_dsn
});
var NEVENS_SERVICE_URL = process.env.NEVENS_SERVICE_URL || "http://localhost:4737"; // this is a very simple express app designed only for the purpose of this repo

var app = (0, _express.default)();
var port = process.env.PORT || 3000; // const router = Express.Router();
// http proxy

var onError = function onError(err, req, res) {
  Sentry.captureException(err);
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong.');
};

app.use('/api', (0, _httpProxyMiddleware.default)({
  target: NEVENS_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  },
  onError: onError
})); // const yes = require('appengine-express-https');
// app.use(yes());
// server static content

app.use('/dist', _express.default.static('dist'));
app.use('/img', _express.default.static('img'));
app.use('/assets', _express.default.static('assets'));
app.use('/_ah/health', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('ok');
}); // register route handler

app.use(_handleRender.default); // listen out for incoming requests

app.listen(port, function () {
  console.log('app now listening on port', port);
});