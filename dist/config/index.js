"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // staging | development | production
//process.env.PORT = process.env.PORT || 8080;
//const env     = (process.env.NODE_ENV)?process.env.NODE_ENV:'development';
//const env       = 'staging';
var env = '';
if (process.env.NODE_ENV === 'production') env = 'production';else if (process.env.NODE_ENV === 'development') env = 'staging';else env = 'development';
var config = {
  //env: process.env.NODE_ENV || 'development',
  env: env,
  port: process.env.PORT || 8081
}; //console.log(process.env.NODE_ENV, _.extend(config, require('./' + env + '.js').default || {}))

var _default = _lodash.default.extend(config, require('./' + env + '.js').default || {});

exports.default = _default;