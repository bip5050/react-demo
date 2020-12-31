"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _auth = _interopRequireDefault(require("../types/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userData = {}; //if(typeof window !== 'undefined'){

userData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData') || '{}') : {}; //}

console.log(userData);
var initialState = {
  userData: _objectSpread({}, userData)
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _auth.default.SIGNUP:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: true,
        isSuccess: false
      });

    case _auth.default.SIGNUP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: false,
        isSuccess: true,
        userData: action.data
      });

    case _auth.default.SIGNUP_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: false,
        isSuccess: false
      });

    case _auth.default.SIGNIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: true,
        isSuccess: false
      });

    case _auth.default.SIGNIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: false,
        isSuccess: true,
        userData: action.data
      });

    case _auth.default.SIGNIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: false,
        isSuccess: false
      });

    case _auth.default.ADD_DEL_ADDR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAddressError: false
      });

    case _auth.default.ADD_DEL_ADDR_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAddressError: false
      });

    case _auth.default.ADD_DEL_ADDR_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAddressError: true
      });

    default:
      return _objectSpread(_objectSpread({}, state), initialState);
  }
}