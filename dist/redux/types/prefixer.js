"use strict";

require("core-js/modules/es.array.concat.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixer;

var _reduce = _interopRequireDefault(require("lodash/reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixer(types, prefix) {
  return (0, _reduce.default)(types, function (result, value, key) {
    result[key] = "".concat(prefix, "/").concat(key); // eslint-disable-line no-param-reassign

    return result;
  }, {});
}