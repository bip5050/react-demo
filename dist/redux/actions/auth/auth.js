"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.do_login = do_login;

require("regenerator-runtime/runtime.js");

var _auth = _interopRequireDefault(require("../../types/auth"));

var _Api = _interopRequireDefault(require("../../../Api/Api"));

var _notify = require("../../../util/notify");

var _config = _interopRequireDefault(require("../../../config"));

var _sentry = require("../../../Sentry/sentry");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _sentry.SentryInitialize)();

function do_login(data) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var sendData, res, userData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sendData = {
                username: data.email,
                password: data.password
              };
              _context.prev = 1;
              dispatch({
                type: _auth.default.SIGNIN
              });
              _context.next = 5;
              return _Api.default.post('rest-auth/login/', sendData);

            case 5:
              res = _context.sent;

              if (res.data.error) {
                (0, _notify.error)(res.data.error);
                console.log(res.data.error);
                dispatch({
                  type: _auth.default.SIGNIN_ERROR
                });
              } else {
                userData = res.data || {};
                localStorage.setItem('userData', JSON.stringify(userData));
                dispatch({
                  type: _auth.default.SIGNIN_SUCCESS,
                  data: res.data
                });
              }

              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              (0, _notify.error)('Invalid request (401)');
              dispatch({
                type: _auth.default.SIGNIN_ERROR
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}