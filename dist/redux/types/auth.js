"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prefixer = _interopRequireDefault(require("./prefixer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = '@@authTypes';
var types = {
  SIGNUP: null,
  SIGNUP_SUCCESS: null,
  SIGNUP_ERROR: null,
  SIGNIN: null,
  SIGNIN_SUCCESS: null,
  SIGNIN_ERROR: null,
  ADD_DEL_ADDR: null,
  ADD_DEL_ADDR_SUCCESS: null,
  ADD_DEL_ADDR_ERROR: null
};

var _default = (0, _prefixer.default)(types, prefix);

exports.default = _default;