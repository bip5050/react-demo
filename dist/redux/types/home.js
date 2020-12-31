"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prefixer = _interopRequireDefault(require("./prefixer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = '@@homeTypes';
var types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null
};

var _default = (0, _prefixer.default)(types, prefix);

exports.default = _default;