"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _routes = _interopRequireDefault(require("../universal/routes"));

var _createReduxStore = _interopRequireDefault(require("../universal/createReduxStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Grab the state from a global variable injected into the server-generated HTML
var preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle
// Allow the passed state to be garbage-collected

delete window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle
// Create Redux store with initial state

var store = (0, _createReduxStore.default)({
  preloadedState: preloadedState
});
(0, _reactDom.hydrate)( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_routes.default, null))), document.getElementById('root'));