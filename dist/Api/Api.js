"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _uuid = require("uuid");

var _config = _interopRequireDefault(require("../config"));

var _cookies = require("../util/cookies");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = "http://localhost:8000";

var API = _axios.default.create({
  baseURL: API_URL
});

API.defaults.headers.common['Content-Type'] = 'application/json';
var auth = '';

if (typeof window !== 'undefined') {
  var userData = JSON.parse(localStorage.getItem('userData') || '{}');

  if (!_lodash.default.isEmpty(userData)) {
    auth = 'Token ' + userData.key;
  } else {
    auth = "";
  }

  console.log(auth);
  API.defaults.headers.common['Authorization'] = auth;
}

var _default = API;
exports.default = _default;