"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReduxStore;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxLogger = require("redux-logger");

var _reducers = _interopRequireDefault(require("../redux/reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger.createLogger)();

function createReduxStore() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      preloadedState = _ref.preloadedState,
      server = _ref.server;

  var enhancer;

  if (process.env.NODE_ENV !== 'production' && !server) {
    enhancer = (0, _redux.applyMiddleware)(_reduxThunk.default, loggerMiddleware);
  } else {
    enhancer = (0, _redux.applyMiddleware)(_reduxThunk.default);
  }

  return (0, _redux.createStore)(_reducers.default, preloadedState, enhancer);
}