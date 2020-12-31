"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.number.to-fixed.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.parse-float.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidEmail = exports.addressFormater = exports.logErrorToServer = exports.convertTwoDecimalRound = exports.convertFloatTwoDecimal = void 0;

require("regenerator-runtime/runtime.js");

var _Api = _interopRequireDefault(require("../Api/Api"));

var Sentry = _interopRequireWildcard(require("@sentry/browser"));

var _sentry = require("../Sentry/sentry");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _sentry.SentryInitialize)();

var convertFloatTwoDecimal = function convertFloatTwoDecimal(num) {
  return parseFloat(num).toFixed(2);
};

exports.convertFloatTwoDecimal = convertFloatTwoDecimal;

var convertTwoDecimalRound = function convertTwoDecimalRound(num) {
  return +(Math.round(num + "e+2") + "e-2");
};

exports.convertTwoDecimalRound = convertTwoDecimalRound;

var logErrorToServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, error) {
    var invalidUrl, additionalInfo, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (params.type === 'catch') Sentry.captureException(error);
            console.log(error);
            invalidUrl = '/invalid-link';
            additionalInfo = {};

            if (error.response) {
              /*
               * The request was made and the server responded with a
               * status code that falls out of the range of 2xx
               */
              additionalInfo.data = error.response.data;
              additionalInfo.status = error.response.status;
              additionalInfo.headers = error.response.headers; //console.log('Data : ', error.response.data);
              //console.log('Status : ', error.response.status);
              //console.log('Headers : ', error.response.headers);
            } else if (error.request) {
              /*
               * The request was made but no response was received, `error.request`
               * is an instance of XMLHttpRequest in the browser and an instance
               * of http.ClientRequest in Node.js
               */
              //console.log('Request : ', error.request);
              additionalInfo.request = error.request;
            } else {
              // Something happened in setting up the request and triggered an Error
              //console.log('Error : ', error.message);
              additionalInfo.message = error.message;
            } //console.log('Config : ', error.config);


            if (!!error.config) additionalInfo.config = error.config;
            _context.next = 8;
            return _Api.default.post('/auth/catch-invalid-link', {
              "params": _objectSpread(_objectSpread({}, params), {}, {
                additionalInfo: JSON.stringify(additionalInfo)
              })
            });

          case 8:
            res = _context.sent;

            if (res.data.error) {
              Sentry.captureException(res.data.error);
              console.log(res.data.error);
            } else {
              setTimeout(function () {
                window.location.href = invalidUrl;
              }, 3000);
            }

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function logErrorToServer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.logErrorToServer = logErrorToServer;

var addressFormater = function addressFormater(obj) {
  try {
    var regex = /(\d+) (.+?), (.+?), (.+?) ([0-9]{5})/;
    var address = obj.match(regex); //console.log(address);

    if (address[4].indexOf(',') > -1 && address[3].indexOf(' ') > -1) {
      var formattedAddress = address[3] + ', ' + address[4] + ' ' + address[address.length - 1];
      var modAddress = formattedAddress + ', USA';

      if (/(\d+) (.+?), (.+?), (.+?) ([0-9]{5})/g.test(modAddress)) {
        var _address = modAddress.match(regex);

        return {
          validAdrs: true,
          formattedAddress: formattedAddress,
          address: modAddress,
          number: _address[0],
          street: _address[1],
          city: _address[2],
          country: 'United States',
          state_code: _address[4],
          zipcode: _address[_address.length - 1]
        };
      } else {
        return {
          validAdrs: false
        };
      }
    } else {
      var _formattedAddress = address[1] + ' ' + address[2] + ', ' + address[3] + ', ' + address[4] + ' ' + address[address.length - 1];

      return {
        validAdrs: true,
        formattedAddress: _formattedAddress,
        address: obj,
        number: address[1],
        street: address[2],
        city: address[3],
        country: 'United States',
        state_code: address[4],
        zipcode: address[address.length - 1]
      };
    }
  } catch (e) {
    console.log(e);
    return {
      validAdrs: false
    };
  }
};

exports.addressFormater = addressFormater;

var isValidEmail = function isValidEmail(email) {
  var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email));
};

exports.isValidEmail = isValidEmail;