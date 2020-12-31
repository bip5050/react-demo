"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.some.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleRender;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _reactRouter = require("react-router");

var _reactRedux = require("react-redux");

var _routes = _interopRequireWildcard(require("../universal/routes"));

var _renderFullPage = _interopRequireDefault(require("./renderFullPage"));

var _createReduxStore = _interopRequireDefault(require("../universal/createReduxStore"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleRender(req, res) {
  var promises = []; // Create a new Redux store instance for every request

  var store = (0, _createReduxStore.default)({
    server: true
  });
  var matchedRoute; // use `some` to imitate `<Switch>` behavior of selecting only the first to match

  _routes.routes.some(function (route) {
    matchedRoute = (0, _reactRouterDom.matchPath)(req.path, route);
    if (matchedRoute && route.loadData) promises.push(store.dispatch(route.loadData()));
    return matchedRoute;
  }); // once all the promises from the routes have been resolved, continue with rendering


  return Promise.all(promises).then(function () {
    // here is where we actually render the html, once we have the required asnyc data
    var html = (0, _server.renderToString)(
    /*#__PURE__*/
    // eslint-disable-line
    _react.default.createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react.default.createElement(_reactRouter.StaticRouter, {
      location: req.url,
      context: {}
    }, /*#__PURE__*/_react.default.createElement(_routes.default, null)))); // get the preloaded state from the redux store

    var preloadedState = store.getState(); // send a code based on whether the route matched or was not found

    return res.status(matchedRoute && matchedRoute.isExact ? 200 : 404).send((0, _renderFullPage.default)(html, preloadedState));
  });
}