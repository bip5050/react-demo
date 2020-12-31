"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _header = _interopRequireDefault(require("../types/header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _header.default.REQ_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true,
        Headerdata: {}
      });

    case _header.default.RES_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Headerdata: action.data
      });

    case _header.default.FAIL_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Headerdata: {}
      });

    case _header.default.REQ_ADDRESS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true,
        Adressdata: {}
      });

    case _header.default.RES_ADDRESS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Adressdata: action.data
      });

    case _header.default.FAIL_ADDRESS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Adressdata: {}
      });

    default:
      return state;
  }
}