"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeaderData = getHeaderData;
exports.getAdressList = getAdressList;

require("regenerator-runtime/runtime.js");

var _header = _interopRequireDefault(require("../../types/header"));

var _Api = _interopRequireDefault(require("../../../Api/Api"));

var _notify = require("../../../util/notify");

var _config = _interopRequireDefault(require("../../../config"));

var _sentry = require("../../../Sentry/sentry");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _sentry.SentryInitialize)();

function getHeaderData() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dispatch({
                type: _header.default.REQ_DATA
              });
              _context.next = 4;
              return _Api.default.get('get-start/get-config-data', {
                "jsonrpc": "2",
                "platform": "web",
                "params": {}
              });

            case 4:
              res = _context.sent;

              if (res.data.error) {
                // notifyError(res.data.error.message);
                console.log(res.data.error);
                dispatch({
                  type: _header.default.FAIL_DATA
                });
              } else {
                localStorage.setItem("globalSetting", JSON.stringify(res.data.result));
                dispatch({
                  type: _header.default.RES_DATA,
                  data: res.data.result
                });
              }

              _context.next = 14;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              Sentry.captureException(_context.t0);
              console.log(_context.t0);
              (0, _notify.error)('Invalid request (401)');
              dispatch({
                type: _header.default.FAIL_DATA
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function getAdressList() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dispatch({
                type: _header.default.REQ_DATA
              });
              _context2.next = 4;
              return _Api.default.get('delivery-address/list');

            case 4:
              res = _context2.sent;

              if (res.data.error) {
                // notifyError(res.data.error.message);
                console.log(res.data.error);
                dispatch({
                  type: _header.default.FAIL_ADDRESS_DATA
                });
              } else {
                dispatch({
                  type: _header.default.RES_ADDRESS_DATA,
                  data: res.data.result
                });
              }

              _context2.next = 14;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              Sentry.captureException(_context2.t0);
              console.log(_context2.t0);
              (0, _notify.error)('Invalid request (401)');
              dispatch({
                type: _header.default.FAIL_ADDRESS_DATA
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}