"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _header = _interopRequireDefault(require("./header"));

var _auth = _interopRequireDefault(require("./auth"));

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduxState = (0, _redux.combineReducers)({
  Home: _home.default,
  header: _header.default,
  signup: _auth.default
});
var _default = reduxState;
exports.default = _default;