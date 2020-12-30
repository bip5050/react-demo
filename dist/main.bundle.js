/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(568);


/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(569);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(574);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(620);
/* harmony import */ var _universal_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(643);
/* harmony import */ var _universal_createReduxStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(910);





 // Grab the state from a global variable injected into the server-generated HTML

var preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle
// Allow the passed state to be garbage-collected

delete window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle
// Create Redux store with initial state

var store = Object(_universal_createReduxStore__WEBPACK_IMPORTED_MODULE_5__["default"])({
  preloadedState: preloadedState
});
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["hydrate"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_universal_routes__WEBPACK_IMPORTED_MODULE_4__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicroutes", function() { return publicroutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privateRoutes", function() { return privateRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protectedRoutes", function() { return protectedRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(189);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(569);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(644);
/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(645);
/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(653);
/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(655);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(660);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(662);
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(667);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(842);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Sentry_sentry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(846);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 //import About from '../containers/About';


 //import { getAboutData } from '../redux/actions/about';





Object(_Sentry_sentry__WEBPACK_IMPORTED_MODULE_13__["SentryInitialize"])(); // for more details see https://reacttraining.com/react-router/web/guides/server-rendering
// specify routes with the asnyc function required to fetch the data to render the route
// IMPORTANT: the loadData function must return a Promise

var routes = [{
  path: '/',
  exact: true,
  component: _containers_Login__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"]
}];
var publicroutes = [{
  path: '/login',
  component: _containers_Login__WEBPACK_IMPORTED_MODULE_11__["default"]
}];
var privateRoutes = [];
var protectedRoutes = [];
function Router() {
  var hideHead = true;
  var url = '';
  var userData = {};
  var currentAddress = {};

  if (typeof window !== 'undefined') {
    userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }

  if (typeof window !== 'undefined') {
    url = window.location.pathname.split('/');

    if (url[1] == '' || url[1] == 'login' || url[1] == 'signup') {
      hideHead = false;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, typeof window !== 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_notify_toast__WEBPACK_IMPORTED_MODULE_10___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Switch"], null, protectedRoutes.map(function (route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ProtectedRoute, {
      key: route.path,
      path: route.path,
      route: route,
      component: route.component,
      userData: userData,
      prevPath: url[1]
    });
  }), privateRoutes.map(function (route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(PrivateRoute, {
      key: route.path,
      path: route.path,
      route: route,
      component: route.component,
      userData: userData,
      prevPath: url[1]
    });
  }), publicroutes.map(function (route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(PublicRoute, {
      key: route.path,
      path: route.path,
      route: route,
      component: route.component,
      prevPath: url[1]
    });
  }), routes.map(function (route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], _extends({
      key: "index ".concat(route.path)
    }, route));
  }))) : null);
}

function PublicRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  var obj = _objectSpread({
    component: Component
  }, rest);

  var prevPath = rest.prevPath || '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    key: "index ".concat(obj.path),
    path: obj.path
    /* component={obj.component} */
    ,
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(obj.component, _extends({}, props, {
        prevPath: prevPath
      }));
    }
  });
}

function PrivateRoute(_ref2) {
  var Component = _ref2.component,
      rest = _objectWithoutProperties(_ref2, ["component"]);

  var obj = _objectSpread({
    component: Component
  }, rest); //console.log('Local Storage : ', typeof window !== 'undefined' && !_.isEmpty(localStorage.getItem('peopleData')));


  var currentAddress = rest.currentAddress || {};
  var userData = rest.userData || {};
  var prevPath = rest.prevPath || '';

  if (typeof window !== 'undefined' && !lodash__WEBPACK_IMPORTED_MODULE_12___default.a.isEmpty(userData)) {
    console.log('Route PRivate : ', rest.route);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      key: "index ".concat(obj.path),
      path: obj.path
      /* component={obj.component} */
      ,
      render: function render(props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(obj.component, _extends({}, props, {
          userData: userData,
          prevPath: prevPath
        }));
      }
    });
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
      to: {
        pathname: "/"
      }
    });
  }
}

function ProtectedRoute(_ref3) {
  var Component = _ref3.component,
      rest = _objectWithoutProperties(_ref3, ["component"]);

  var obj = _objectSpread({
    component: Component
  }, rest);

  var userData = rest.userData || {};
  var prevPath = rest.prevPath || '';

  if (typeof window !== 'undefined' && !lodash__WEBPACK_IMPORTED_MODULE_12___default.a.isEmpty(userData)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      key: "index ".concat(obj.path),
      path: obj.path
      /* component={obj.component} */
      ,
      render: function render(props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(obj.component, _extends({}, props, {
          userData: userData,
          prevPath: prevPath
        }));
      }
    });
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
      to: {
        pathname: "/login"
      }
    });
  }
}

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(620);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(646);




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({}, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_app__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(647);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _App__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(583);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(569);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(648);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable jsx-a11y/anchor-is-valid */





var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: _App_scss__WEBPACK_IMPORTED_MODULE_5___default.a.App
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: _App_scss__WEBPACK_IMPORTED_MODULE_5___default.a.TopBar
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: _App_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Link,
        to: "/"
      }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: _App_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Link,
        to: "/InvalidLink"
      }, "InvalidLink"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: _App_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Link,
        to: "/about"
      }, "About")), this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: _App_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Footer
      }, "William Woodhead - MIT License"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);


App.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(649);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(651)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(650)(true);
// Module
exports.push([module.i, ".App__App___VtwBt {\n  font-size: 1.5em; }\n\n.App__TopBar___3yu9F {\n  display: flex; }\n\n.App__Link___254Yr {\n  display: inline-block; }\n  .App__Link___254Yr + .App__Link___254Yr {\n    margin-left: 8px; }\n\n.App__Footer___11ffq {\n  color: #AAAAAA; }\n\n.App__align-items-center___BR20n h2 {\n  text-align: center;\n  line-height: 36px;\n  padding: 0 5%; }\n\n@media (min-width: 1400px) {\n  .App__align-items-center___BR20n h2 {\n    max-width: 50%;\n    text-align: center;\n    line-height: 36px;\n    padding: 0; } }\n", "",{"version":3,"sources":["App.scss"],"names":[],"mappings":"AAAA;EACE,gBAAgB,EAAE;;AAEpB;EACE,aAAa,EAAE;;AAEjB;EACE,qBAAqB,EAAE;EACvB;IACE,gBAAgB,EAAE;;AAEtB;EACE,cAAc,EAAE;;AAElB;EACE,kBAAkB;EAClB,iBAAiB;EACjB,aAAa,EAAE;;AAEjB;EACE;IACE,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,UAAU,EAAE,EAAE","file":"App.scss","sourcesContent":[".App {\n  font-size: 1.5em; }\n\n.TopBar {\n  display: flex; }\n\n.Link {\n  display: inline-block; }\n  .Link + .Link {\n    margin-left: 8px; }\n\n.Footer {\n  color: #AAAAAA; }\n\n.align-items-center h2 {\n  text-align: center;\n  line-height: 36px;\n  padding: 0 5%; }\n\n@media (min-width: 1400px) {\n  .align-items-center h2 {\n    max-width: 50%;\n    text-align: center;\n    line-height: 36px;\n    padding: 0; } }\n"]}]);

// Exports
exports.locals = {
	"App": "App__App___VtwBt",
	"TopBar": "App__TopBar___3yu9F",
	"Link": "App__Link___254Yr",
	"Footer": "App__Footer___11ffq",
	"align-items-center": "App__align-items-center___BR20n"
};

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLifetimeCookie", function() { return setLifetimeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(654);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
 //console.log('Cookie Config : ', config.cookie);
// export const get = (name = 'foodjets_new_merchant') =>{
// 	if(config.cookie.hostname === 'http://console.dev.foodjets.com') {
// 		name = 'dev_'+name
// 	}
//   	return Cookies.getJSON(name);
// };
// export const set = (data, name = 'foodjets_new_merchant') =>{
// 	if(config.cookie.hostname === 'http://console.dev.foodjets.com') {
// 		name = 'dev_'+name
// 	}
// 	if(!!config.cookie.domain)
// 		Cookies.set(name, data, {domain: config.cookie.domain});
// 	else
// 		Cookies.set(name, data);
// };
// export const remove = (name = 'foodjets_new_merchant') =>{
// 	if(config.cookie.hostname === 'http://console.dev.foodjets.com') {
// 		name = 'dev_'+name
// 	}
// 	if(!!config.cookie.domain)
// 		Cookies.remove(name, {domain: config.cookie.domain});
// 	else
// 		Cookies.remove(name);
// };

var setCookie = function setCookie(data, name) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(name, data);
};
var setLifetimeCookie = function setLifetimeCookie(data, name, day) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(name, data, {
    expires: day
  });
};
var removeCookie = function removeCookie(name) {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(name);
};
var getCookie = function getCookie(name) {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON(name);
};

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(620);
/* harmony import */ var _components_not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(656);




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({}, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_not_found__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(657);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NotFound__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NotFound_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(658);
/* harmony import */ var _NotFound_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NotFound_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var NotFound = /*#__PURE__*/function (_Component) {
  _inherits(NotFound, _Component);

  var _super = _createSuper(NotFound);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _super.apply(this, arguments);
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "d-flex flex-row justify-content-center align-items-center h-100vh"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "m-0 blue-default"
      }, "Route Not Found"));
    }
  }]);

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(659);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(651)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(650)(true);
// Module
exports.push([module.i, ".NotFound__NotFound___2zcpB {\n  color: inherit; }\n", "",{"version":3,"sources":["NotFound.scss"],"names":[],"mappings":"AAAA;EACE,cAAc,EAAE","file":"NotFound.scss","sourcesContent":[".NotFound {\n  color: inherit; }\n"]}]);

// Exports
exports.locals = {
	"NotFound": "NotFound__NotFound___2zcpB"
};

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(661);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(651)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(650)(false);
// Module
exports.push([module.i, "html, body{  overflow-x: hidden; scroll-behavior: smooth;}\r\n*{padding: 0; margin: 0; outline: 0;  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}\r\nbody{font-family: 'Source Sans Pro', sans-serif; font-size: 14px; font-weight: 400; line-height: 18px; color: #333333;}\r\n\r\nimg{max-width: 100%;}\r\nfigure{padding: 0; margin: 0; display: inline-block;}\r\na{color: #209DE2;}\r\na:hover{text-decoration: none; color: #209DE2;}\r\n\r\n\r\n.cTable {border-collapse: collapse; width: 100%; border-bottom: 1px solid #ccc;}\r\n.cTable th{position: relative;}\r\n.cTable th i{position: absolute; right: 15px; top: 15px; cursor: pointer;}\r\n.cTable th, .cTable td {padding: 15px; border: 1px solid #ccc; border-bottom: none; position: relative;}\r\n.cTable.oneCol th, .cTable.oneCol td, .cTable.oneCol .subTable td{width: 72%;}\r\n.cTable.twoCol th, .cTable.twoCol td, .cTable.twoCol .subTable td{width: 54%;}\r\n.cTable.threeCol th, .cTable.threeCol td, .cTable.threeCol .subTable td{width: 36%;}\r\n.cTable.fourCol th, .cTable.fourCol td, .cTable.fourCol .subTable td{width: 18%;}\r\n\r\n.cTable th:first-child, .cTable td:first-child{ width: 28%;}\r\n.cTable th{text-align: center;}\r\n.cTable th span{display: block; font-size: 12px;}\r\n\r\n.closeSec{position: absolute; right: 15px; color: #FB6056; cursor: pointer;}\r\n\r\n.cTable td.st{padding: 0; border-top: none; border-bottom: none;} \r\n.subTable{width: 100%; display: none;}\r\n.stOpen .subTable{ display:table;}\r\n.subTable tr:nth-child(odd) {background-color: #f2f2f2;}\r\n.subTable td{width: 18%;}\r\n.subTable td:first-child{ width: 28%!important;}\r\n\r\n.tac{text-align: center;}\r\n\r\n\r\n", ""]);



/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(620);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(668);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(670);





var mapStateToProps = function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    data: state.signup
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({
    do_login: _redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__["do_login"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_login__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _login__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return login; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(123);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(160);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(166);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(583);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(569);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(580);
/* harmony import */ var _util_helperfunc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(919);
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(920);
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(842);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var login = /*#__PURE__*/function (_Component) {
  _inherits(login, _Component);

  var _super = _createSuper(login);

  function login(props) {
    var _this;

    _classCallCheck(this, login);

    _this = _super.call(this, props);
    _this.defaultErrors = {
      email: false,
      password: false
    };
    _this.state = {
      faqData: [],
      isLoading: true,
      modal: false,
      typePass: 'password',
      formData: {
        product_description: "",
        funding_history: "",
        company_info: "",
        fetaures: "",
        customer_case_study: "",
        overall_scoor: "Score",
        box_header: "Box"
      },
      columData: [{
        box_header: {
          text: "Box",
          data: [{
            description: "data"
          }]
        },
        overall_scoor: {
          text: "Overall Score",
          data: [{
            description: "Score"
          }]
        },
        product_description: {
          text: "Product Description",
          data: [{
            description: "Box is a modern content of management"
          }]
        },
        funding_history: {
          text: "Funding History",
          data: [{
            description: "Total Funding: $150m"
          }],
          subitems: {
            Founded: ["2005"],
            KeyInvestors: ["DFG, scale, venture partners"],
            Founders: ["Arone Levie, Dylon smith"]
          }
        },
        company_info: {
          text: "Company Info",
          data: [{
            description: "Johnson"
          }]
        },
        fetaures: {
          text: "Fetaures",
          data: [{
            description: "Good"
          }]
        },
        customer_case_study: {
          text: "Company Case Study",
          data: [{
            description: "Good Client"
          }]
        }
      }],
      hideClass: true
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.onChangeHandle = _this.onChangeHandle.bind(_assertThisInitialized(_this));
    _this.deleteColum = _this.deleteColum.bind(_assertThisInitialized(_this));
    _this.toogleClass = _this.toogleClass.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(login, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "onChangeHandle",
    value: function onChangeHandle(e) {
      this.setState({
        formData: _objectSpread(_objectSpread({}, this.state.formData), {}, _defineProperty({}, e.target.name, e.target.value))
      });
    }
  }, {
    key: "toogleClass",
    value: function toogleClass() {
      var hideClass = this.state.hideClass;
      hideClass = !hideClass;
      this.setState({
        hideClass: hideClass
      });
    }
  }, {
    key: "deleteColum",
    value: function deleteColum(id) {
      var _this2 = this;

      var columData = this.state.columData;
      swal({
        title: "Are you sure you want  to  delete  this  item?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          columData.map(function (cdata, index) {
            Object.keys(cdata).map(function (oneKey, i) {
              cdata[oneKey].data = cdata[oneKey].data.filter(function (data, index) {
                return id != index;
              });
            });
          });

          _this2.setState({
            columData: columData
          }, function () {
            swal("Poof! Your itemhas been deleted!", {
              icon: "success"
            });
          });
        } else {}
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var _this3 = this;

      var _this$state = this.state,
          formData = _this$state.formData,
          columData = _this$state.columData;
      var overall_scoor = formData.overall_scoor,
          box_header = formData.box_header,
          product_description = formData.product_description,
          funding_history = formData.funding_history,
          fetaures = formData.fetaures,
          customer_case_study = formData.customer_case_study,
          company_info = formData.company_info;
      columData.map(function (cdata, index) {
        console.log(cdata.product_description.data.length);

        if (cdata.product_description.data.length > 2) {
          swal({
            title: "You cant add more  than  3  items",
            icon: "warning"
          });

          _this3.setState({
            formData: {
              product_description: "",
              funding_history: "",
              company_info: "",
              fetaures: "",
              customer_case_study: "",
              overall_scoor: "Score",
              box_header: "Box"
            }
          }, function () {
            $("#newVendor").modal("hide");
          });
        } else {
          cdata.product_description.data.push({
            description: product_description
          });
          cdata.funding_history.data.push({
            description: funding_history
          });
          cdata.fetaures.data.push({
            description: fetaures
          });
          cdata.customer_case_study.data.push({
            description: customer_case_study
          });
          cdata.company_info.data.push({
            description: company_info
          });
          cdata.overall_scoor.data.push({
            description: overall_scoor
          });
          cdata.box_header.data.push({
            description: box_header
          });

          _this3.setState({
            columData: columData,
            formData: {
              product_description: "",
              funding_history: "",
              company_info: "",
              fetaures: "",
              customer_case_study: "",
              overall_scoor: "Score",
              box_header: "Box"
            }
          }, function () {
            $("#newVendor").modal("hide");
          });
        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (!!props.data && !!props.data.isSuccess) {
        // this.props.history.push('/dashboard');
        window.location.href = "/dashboard";
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var formData = this.state.formData || {};

      var errors = _objectSpread({}, this.defaultErrors);

      var isError = false;

      if (!!!formData.email) {
        errors.email = true;
        isError = true;
      }

      if (!!!formData.password) {
        errors.password = true;
        isError = true;
      }

      if (!!formData.password && formData.password.length < 4) {
        errors.password = true;
        isError = true;
      }

      return {
        isError: isError,
        errors: errors
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          columData = _this$state2.columData,
          formData = _this$state2.formData,
          hideClass = _this$state2.hideClass;
      var colSpan = "";
      columData.map(function (data, key) {
        if (data.product_description.data.length == 1) {
          colSpan = "oneCol";
        }

        if (data.product_description.data.length == 2) {
          colSpan = "twoCol";
        }

        if (data.product_description.data.length == 3) {
          colSpan = "threeCol";
        }

        if (data.product_description.data.length == 4) {
          colSpan = "fourCol";
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "Loginp"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "cTable ".concat(colSpan)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        "data-toggle": "modal",
        "data-target": "#newVendor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "img/add-new.png"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "Add New Vendor"))), columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.box_header ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, data.box_header.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
            key: key
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
            src: "img/box.png"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "Box "), data.box_header.data.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
            className: "fa fa-times",
            onClick: function onClick() {
              return _this4.deleteColum(key);
            },
            "aria-hidden": "true"
          }) : "");
        })) : "");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.overall_scoor ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.overall_scoor.text, " "), data.overall_scoor.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key,
            className: "tac"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
            src: "img/score-b.png"
          }));
        })) : "");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.product_description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.product_description.text, " "), data.product_description.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.funding_history ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          onClick: function onClick() {
            return _this4.toogleClass();
          }
        }, data.funding_history.text, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          className: "fa fa-angle-down",
          "aria-hidden": "true"
        })), data.funding_history.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        colSpan: "2",
        className: hideClass ? "st" : "st stOpen"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "subTable"
      }, columData.map(function (data, key) {
        return Object.keys(data.funding_history.subitems).map(function (oneKey, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
            key: i
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, oneKey), data.funding_history.subitems[oneKey].map(function (item, key) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, item);
          }));
        });
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.company_info ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.company_info.text, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "closeSec"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          class: "fa fa-times-circle",
          "aria-hidden": "true"
        }))), data.company_info.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.fetaures ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.fetaures.text, " "), data.fetaures.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.customer_case_study ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.customer_case_study.text, " "), data.customer_case_study.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal fade",
        id: "newVendor",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", {
        className: "modal-title",
        id: "exampleModalLabel"
      }, "Add New Vendor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "product_description"
      }, "Product Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: formData.product_description,
        onChange: function onChange(e) {
          return _this4.onChangeHandle(e);
        },
        name: "product_description"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "funding_history"
      }, "Funding History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        value: formData.funding_history,
        onChange: function onChange(e) {
          return _this4.onChangeHandle(e);
        },
        className: "form-control",
        name: "funding_history"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "company_info"
      }, "Company Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        value: formData.company_info,
        onChange: function onChange(e) {
          return _this4.onChangeHandle(e);
        },
        className: "form-control",
        name: "company_info"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "fetaures"
      }, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        value: formData.fetaures,
        onChange: function onChange(e) {
          return _this4.onChangeHandle(e);
        },
        className: "form-control",
        name: "fetaures"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "customer_case_study"
      }, "Customer case study"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        value: formData.customer_case_study,
        onChange: function onChange(e) {
          return _this4.onChangeHandle(e);
        },
        className: "form-control",
        name: "customer_case_study"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this4.handleSubmit();
        },
        className: "btn btn-primary"
      }, "Submit"))))));
    }
  }]);

  return login;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(671);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "do_login", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["do_login"]; });



/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "do_login", function() { return do_login; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(286);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(672);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(673);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(798);
/* harmony import */ var _util_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(845);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(841);
/* harmony import */ var _Sentry_sentry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(846);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(842);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







Object(_Sentry_sentry__WEBPACK_IMPORTED_MODULE_7__["SentryInitialize"])();
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
                type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["default"].SIGNIN
              });
              _context.next = 5;
              return _Api_Api__WEBPACK_IMPORTED_MODULE_4__["default"].post('rest-auth/login/', sendData);

            case 5:
              res = _context.sent;

              if (res.data.error) {
                Object(_util_notify__WEBPACK_IMPORTED_MODULE_5__["error"])(res.data.error);
                console.log(res.data.error);
                dispatch({
                  type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["default"].SIGNIN_ERROR
                });
              } else {
                userData = res.data || {};
                localStorage.setItem('userData', JSON.stringify(userData));
                dispatch({
                  type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["default"].SIGNIN_SUCCESS,
                  data: res.data
                });
              }

              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              Object(_util_notify__WEBPACK_IMPORTED_MODULE_5__["error"])('Invalid request (401)');
              dispatch({
                type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["default"].SIGNIN_ERROR
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

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(674);

var prefix = '@@authTypes';
var types = {
  SIGNUP: null,
  SIGNUP_SUCCESS: null,
  SIGNUP_ERROR: null,
  SIGNIN: null,
  SIGNIN_SUCCESS: null,
  SIGNIN_ERROR: null,
  ADD_DEL_ADDR: null,
  ADD_DEL_ADDR_SUCCESS: null,
  ADD_DEL_ADDR_ERROR: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_prefixer__WEBPACK_IMPORTED_MODULE_0__["default"])(types, prefix));

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixer; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);


function prefixer(types, prefix) {
  return lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()(types, function (result, value, key) {
    result[key] = "".concat(prefix, "/").concat(key); // eslint-disable-line no-param-reassign

    return result;
  }, {});
}

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(799);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(826);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(841);
/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(653);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(842);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var API_URL = "http://localhost:8000";
var API = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: API_URL
});
API.defaults.headers.common['Content-Type'] = 'application/json';
var auth = '';

if (typeof window !== 'undefined') {
  var userData = JSON.parse(localStorage.getItem('userData') || '{}');

  if (!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(userData)) {
    auth = 'Token ' + userData.key;
  } else {
    auth = "";
  }

  console.log(auth);
  API.defaults.headers.common['Authorization'] = auth;
}

/* harmony default export */ __webpack_exports__["default"] = (API);

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(842);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 //process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // staging | development | production
//process.env.PORT = process.env.PORT || 8080;
//const env     = (process.env.NODE_ENV)?process.env.NODE_ENV:'development';
//const env       = 'staging';

var env = '';
if (false) {}else if (false) {}else env = 'development';
var config = {
  //env: process.env.NODE_ENV || 'development',
  env: env,
  port: process.env.PORT || 8081
}; //console.log(process.env.NODE_ENV, _.extend(config, require('./' + env + '.js').default || {}))

/* harmony default export */ __webpack_exports__["default"] = (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(config, __webpack_require__(843)("./" + env + ".js").default || {}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(810)))

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.js": 844,
	"./index.js": 841
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 843;

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  // for dev    
  foodjetsUrl: '',
  api_end: '/api/',
  GTM_code: 'GTM-THNGPH6',
  GSTM_code: 'UA-65554301-3',
  paypal: {
    mode: 'sandbox'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerror", function() { return customerror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(662);
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_0__);

var success = function success(message) {
  var myColor = {
    background: '#008000',
    text: "#FFFFFF",
    "z-index": "99999"
  };
  react_notify_toast__WEBPACK_IMPORTED_MODULE_0__["notify"].show(message, "custom", 5000, myColor);
}; // export const error = (message) => {
//     let myColor = { background: '#FB6056', text: "#FFFFFF" };
//     notify.show(message, "custom", 5000, myColor);
// }

var error = function error(message) {
  var myColor = {
    background: '#FB6056',
    text: "#FFFFFF"
  };
  var h = "x";
  react_notify_toast__WEBPACK_IMPORTED_MODULE_0__["notify"].show(message, "custom", 5000, myColor);
};
var warning = function warning(message) {
  react_notify_toast__WEBPACK_IMPORTED_MODULE_0__["notify"].show(message, "warning", 5000);
};
var customerror = function customerror(message) {
  var myColor = {
    background: '#ff0000',
    text: "#FFFFFF"
  };
  react_notify_toast__WEBPACK_IMPORTED_MODULE_0__["notify"].show(message, "custom", 60000, myColor);
};
var hide = function hide() {
  react_notify_toast__WEBPACK_IMPORTED_MODULE_0__["notify"].hide();
};

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryInitialize", function() { return SentryInitialize; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(841);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(847);


var SentryInitialize = function SentryInitialize() {
  _sentry_browser__WEBPACK_IMPORTED_MODULE_1__["init"]({
    dsn: _config__WEBPACK_IMPORTED_MODULE_0__["default"].sentry_dsn
  });
};

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReduxStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(911);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(912);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(913);




var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])();
function createReduxStore() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      preloadedState = _ref.preloadedState,
      server = _ref.server;

  var enhancer;

  if ( true && !server) {
    enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], loggerMiddleware);
  } else {
    enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_redux_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, enhancer);
}

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(916);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(917);




var reduxState = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  Home: _home__WEBPACK_IMPORTED_MODULE_3__["default"],
  header: _header__WEBPACK_IMPORTED_MODULE_1__["default"],
  signup: _auth__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reduxState);

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(915);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_header__WEBPACK_IMPORTED_MODULE_0__["default"].REQ_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true,
        Headerdata: {}
      });

    case _types_header__WEBPACK_IMPORTED_MODULE_0__["default"].RES_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Headerdata: action.data
      });

    case _types_header__WEBPACK_IMPORTED_MODULE_0__["default"].FAIL_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Headerdata: {}
      });

    case _types_header__WEBPACK_IMPORTED_MODULE_0__["default"].REQ_ADDRESS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true,
        Adressdata: {}
      });

    case _types_header__WEBPACK_IMPORTED_MODULE_0__["default"].RES_ADDRESS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Adressdata: action.data
      });

    case _types_header__WEBPACK_IMPORTED_MODULE_0__["default"].FAIL_ADDRESS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Adressdata: {}
      });

    default:
      return state;
  }
});

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(674);

var prefix = '@@headerTypes';
var types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null,
  REQ_ADDRESS_DATA: null,
  RES_ADDRESS_DATA: null,
  FAIL_ADDRESS_DATA: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_prefixer__WEBPACK_IMPORTED_MODULE_0__["default"])(types, prefix));

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(673);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var userData = {}; //if(typeof window !== 'undefined'){

userData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userData') || '{}') : {}; //}

console.log(userData);
var initialState = {
  userData: _objectSpread({}, userData)
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["default"].SIGNUP:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: true,
        isSuccess: false
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["default"].SIGNUP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: false,
        isSuccess: true,
        userData: action.data
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["default"].SIGNUP_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: false,
        isSuccess: false
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["default"].SIGNIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: true,
        isSuccess: false
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["default"].SIGNIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: false,
        isSuccess: true,
        userData: action.data
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["default"].SIGNIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessing: false,
        isSuccess: false
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_DEL_ADDR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAddressError: false
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_DEL_ADDR_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAddressError: false
      });

    case _types_auth__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_DEL_ADDR_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        isAddressError: true
      });

    default:
      return _objectSpread(_objectSpread({}, state), initialState);
  }
});

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(918);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_home__WEBPACK_IMPORTED_MODULE_0__["default"].REQ_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true,
        Homedata: {}
      });

    case _types_home__WEBPACK_IMPORTED_MODULE_0__["default"].RES_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Homedata: action.data
      });

    case _types_home__WEBPACK_IMPORTED_MODULE_0__["default"].FAIL_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        Homedata: {}
      });

    default:
      return state;
  }
});

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(674);

var prefix = '@@homeTypes';
var types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_prefixer__WEBPACK_IMPORTED_MODULE_0__["default"])(types, prefix));

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFloatTwoDecimal", function() { return convertFloatTwoDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTwoDecimalRound", function() { return convertTwoDecimalRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logErrorToServer", function() { return logErrorToServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressFormater", function() { return addressFormater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEmail", function() { return isValidEmail; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(252);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(171);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(238);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(286);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(187);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(672);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(798);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(847);
/* harmony import */ var _Sentry_sentry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(846);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




Object(_Sentry_sentry__WEBPACK_IMPORTED_MODULE_10__["SentryInitialize"])();
var convertFloatTwoDecimal = function convertFloatTwoDecimal(num) {
  return parseFloat(num).toFixed(2);
};
var convertTwoDecimalRound = function convertTwoDecimalRound(num) {
  return +(Math.round(num + "e+2") + "e-2");
};
var logErrorToServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, error) {
    var invalidUrl, additionalInfo, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (params.type === 'catch') _sentry_browser__WEBPACK_IMPORTED_MODULE_9__["captureException"](error);
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
            return _Api_Api__WEBPACK_IMPORTED_MODULE_8__["default"].post('/auth/catch-invalid-link', {
              "params": _objectSpread(_objectSpread({}, params), {}, {
                additionalInfo: JSON.stringify(additionalInfo)
              })
            });

          case 8:
            res = _context.sent;

            if (res.data.error) {
              _sentry_browser__WEBPACK_IMPORTED_MODULE_9__["captureException"](res.data.error);
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
var isValidEmail = function isValidEmail(email) {
  var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email));
};

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(921);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(651)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(650)(false);
// Module
exports.push([module.i, "", ""]);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzPzE0MWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbm90LWZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ub3QtZm91bmQvTm90Rm91bmQuc2Nzcz84YzI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcz8xZGZkIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGgvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwaS9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIHN5bmMgXlxcLlxcLy4qXFwuanMkIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbm90aWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9TZW50cnkvc2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY3JlYXRlUmVkdXhTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC90eXBlcy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2hlbHBlcmZ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY3NzP2FjZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY3NzIl0sIm5hbWVzIjpbInByZWxvYWRlZFN0YXRlIiwid2luZG93IiwiX19QUkVMT0FERURfU1RBVEVfXyIsInN0b3JlIiwiY3JlYXRlUmVkdXhTdG9yZSIsImh5ZHJhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiU2VudHJ5SW5pdGlhbGl6ZSIsInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImNvbXBvbmVudCIsIkxvZ2luIiwiTm90Rm91bmQiLCJwdWJsaWNyb3V0ZXMiLCJwcml2YXRlUm91dGVzIiwicHJvdGVjdGVkUm91dGVzIiwiUm91dGVyIiwiaGlkZUhlYWQiLCJ1cmwiLCJ1c2VyRGF0YSIsImN1cnJlbnRBZGRyZXNzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsIm1hcCIsInJvdXRlIiwiUHVibGljUm91dGUiLCJDb21wb25lbnQiLCJyZXN0Iiwib2JqIiwicHJldlBhdGgiLCJwcm9wcyIsIlByaXZhdGVSb3V0ZSIsIl8iLCJpc0VtcHR5IiwiY29uc29sZSIsImxvZyIsIlByb3RlY3RlZFJvdXRlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsIkFwcCIsInN0eWxlcyIsIlRvcEJhciIsIkxpbmsiLCJjaGlsZHJlbiIsIkZvb3RlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic2V0Q29va2llIiwiZGF0YSIsIm5hbWUiLCJDb29raWVzIiwic2V0Iiwic2V0TGlmZXRpbWVDb29raWUiLCJkYXkiLCJleHBpcmVzIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0SlNPTiIsInNpZ251cCIsImRvX2xvZ2luIiwibG9naW4iLCJkZWZhdWx0RXJyb3JzIiwiZW1haWwiLCJwYXNzd29yZCIsImZhcURhdGEiLCJpc0xvYWRpbmciLCJtb2RhbCIsInR5cGVQYXNzIiwiZm9ybURhdGEiLCJwcm9kdWN0X2Rlc2NyaXB0aW9uIiwiZnVuZGluZ19oaXN0b3J5IiwiY29tcGFueV9pbmZvIiwiZmV0YXVyZXMiLCJjdXN0b21lcl9jYXNlX3N0dWR5Iiwib3ZlcmFsbF9zY29vciIsImJveF9oZWFkZXIiLCJjb2x1bURhdGEiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJzdWJpdGVtcyIsIkZvdW5kZWQiLCJLZXlJbnZlc3RvcnMiLCJGb3VuZGVycyIsImhpZGVDbGFzcyIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJvbkNoYW5nZUhhbmRsZSIsImRlbGV0ZUNvbHVtIiwidG9vZ2xlQ2xhc3MiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwic3dhbCIsInRpdGxlIiwiaWNvbiIsImJ1dHRvbnMiLCJkYW5nZXJNb2RlIiwidGhlbiIsIndpbGxEZWxldGUiLCJjZGF0YSIsImluZGV4IiwiT2JqZWN0Iiwia2V5cyIsIm9uZUtleSIsImkiLCJmaWx0ZXIiLCJsZW5ndGgiLCIkIiwicHVzaCIsImlzU3VjY2VzcyIsImhyZWYiLCJlcnJvcnMiLCJpc0Vycm9yIiwiY29sU3BhbiIsImtleSIsInN1YmRhdGEiLCJpdGVtIiwic2VuZERhdGEiLCJ1c2VybmFtZSIsInR5cGUiLCJUWVBFIiwiU0lHTklOIiwiQVBJIiwicG9zdCIsInJlcyIsImVycm9yIiwibm90aWZ5RXJyb3IiLCJTSUdOSU5fRVJST1IiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiU0lHTklOX1NVQ0NFU1MiLCJwcmVmaXgiLCJ0eXBlcyIsIlNJR05VUCIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0VSUk9SIiwiQUREX0RFTF9BRERSIiwiQUREX0RFTF9BRERSX1NVQ0NFU1MiLCJBRERfREVMX0FERFJfRVJST1IiLCJwcmVmaXhlciIsInJlZHVjZSIsInJlc3VsdCIsIkFQSV9VUkwiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhdXRoIiwiZW52IiwicHJvY2VzcyIsImNvbmZpZyIsInBvcnQiLCJQT1JUIiwiZXh0ZW5kIiwicmVxdWlyZSIsImRlZmF1bHQiLCJmb29kamV0c1VybCIsImFwaV9lbmQiLCJHVE1fY29kZSIsIkdTVE1fY29kZSIsInBheXBhbCIsIm1vZGUiLCJzdWNjZXNzIiwibWVzc2FnZSIsIm15Q29sb3IiLCJiYWNrZ3JvdW5kIiwibm90aWZ5Iiwic2hvdyIsImgiLCJ3YXJuaW5nIiwiY3VzdG9tZXJyb3IiLCJoaWRlIiwiU2VudHJ5IiwiZHNuIiwic2VudHJ5X2RzbiIsImxvZ2dlck1pZGRsZXdhcmUiLCJjcmVhdGVMb2dnZXIiLCJzZXJ2ZXIiLCJlbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdXhTdGF0ZSIsImNvbWJpbmVSZWR1Y2VycyIsIkhvbWUiLCJoZWFkZXIiLCJhY3Rpb24iLCJSRVFfREFUQSIsIkhlYWRlcmRhdGEiLCJSRVNfREFUQSIsIkZBSUxfREFUQSIsIlJFUV9BRERSRVNTX0RBVEEiLCJBZHJlc3NkYXRhIiwiUkVTX0FERFJFU1NfREFUQSIsIkZBSUxfQUREUkVTU19EQVRBIiwiaW5pdGlhbFN0YXRlIiwiaXNQcm9jZXNzaW5nIiwiaXNBZGRyZXNzRXJyb3IiLCJIb21lZGF0YSIsImNvbnZlcnRGbG9hdFR3b0RlY2ltYWwiLCJudW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNvbnZlcnRUd29EZWNpbWFsUm91bmQiLCJNYXRoIiwicm91bmQiLCJsb2dFcnJvclRvU2VydmVyIiwicGFyYW1zIiwiaW52YWxpZFVybCIsImFkZGl0aW9uYWxJbmZvIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZXF1ZXN0Iiwic2V0VGltZW91dCIsImFkZHJlc3NGb3JtYXRlciIsInJlZ2V4IiwiYWRkcmVzcyIsIm1hdGNoIiwiaW5kZXhPZiIsImZvcm1hdHRlZEFkZHJlc3MiLCJtb2RBZGRyZXNzIiwidGVzdCIsIl9hZGRyZXNzIiwidmFsaWRBZHJzIiwibnVtYmVyIiwic3RyZWV0IiwiY2l0eSIsImNvdW50cnkiLCJzdGF0ZV9jb2RlIiwiemlwY29kZSIsImlzVmFsaWRFbWFpbCIsInBhdHRlcm4iLCJTdHJpbmciXSwibWFwcGlu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LENBQUNWLElBQVIsQ0FBYVcsTUFBTSxDQUFDOUssS0FBRCxDQUFuQixDQUFQO0FBQ0QsQ0FITSxDOzs7Ozs7OztBQzVHUCxjQUFjLG1CQUFPLENBQUMsR0FBNEQ7O0FBRWxGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7OztBQ25CZiwyQkFBMkIsbUJBQU8sQ0FBQyxHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyIsImZpbGUiOiIuL21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vdW5pdmVyc2FsL3JvdXRlcyc7XHJcbmltcG9ydCBjcmVhdGVSZWR1eFN0b3JlIGZyb20gJy4uL3VuaXZlcnNhbC9jcmVhdGVSZWR1eFN0b3JlJztcclxuXHJcbi8vIEdyYWIgdGhlIHN0YXRlIGZyb20gYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgaW50byB0aGUgc2VydmVyLWdlbmVyYXRlZCBIVE1MXHJcbmNvbnN0IHByZWxvYWRlZFN0YXRlID0gd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcclxuXHJcbi8vIEFsbG93IHRoZSBwYXNzZWQgc3RhdGUgdG8gYmUgZ2FyYmFnZS1jb2xsZWN0ZWRcclxuZGVsZXRlIHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXHJcblxyXG4vLyBDcmVhdGUgUmVkdXggc3RvcmUgd2l0aCBpbml0aWFsIHN0YXRlXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlUmVkdXhTdG9yZSh7IHByZWxvYWRlZFN0YXRlIH0pO1xyXG5cclxuaHlkcmF0ZShcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICA8Um91dGVyIC8+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgPC9Qcm92aWRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29udGFpbmVycy9BcHAnO1xyXG5pbXBvcnQge2dldENvb2tpZX0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcclxuXHJcbi8vaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbnRhaW5lcnMvQWJvdXQnO1xyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vY29udGFpbmVycy9Ob3RGb3VuZCc7XHJcblxyXG5pbXBvcnQgJy4vZ2xvYmFsLmNzcydcclxuLy9pbXBvcnQgeyBnZXRBYm91dERhdGEgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2Fib3V0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnMsIHtub3RpZnl9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb250YWluZXJzL0xvZ2luJztcclxuXHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQge1NlbnRyeUluaXRpYWxpemUgfSBmcm9tIFwiLi4vU2VudHJ5L3NlbnRyeVwiXHJcblNlbnRyeUluaXRpYWxpemUoKTtcclxuLy8gZm9yIG1vcmUgZGV0YWlscyBzZWUgaHR0cHM6Ly9yZWFjdHRyYWluaW5nLmNvbS9yZWFjdC1yb3V0ZXIvd2ViL2d1aWRlcy9zZXJ2ZXItcmVuZGVyaW5nXHJcbi8vIHNwZWNpZnkgcm91dGVzIHdpdGggdGhlIGFzbnljIGZ1bmN0aW9uIHJlcXVpcmVkIHRvIGZldGNoIHRoZSBkYXRhIHRvIHJlbmRlciB0aGUgcm91dGVcclxuLy8gSU1QT1JUQU5UOiB0aGUgbG9hZERhdGEgZnVuY3Rpb24gbXVzdCByZXR1cm4gYSBQcm9taXNlXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbe1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgZXhhY3Q6IHRydWUsXHJcbiAgICBjb21wb25lbnQ6IExvZ2luXHJcbiAgfSwge1xyXG4gICAgY29tcG9uZW50OiBOb3RGb3VuZFxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwdWJsaWNyb3V0ZXMgPSBbXHJcbiAgIHtcclxuICBwYXRoOiAnL2xvZ2luJyxcclxuICBjb21wb25lbnQ6IExvZ2luICAgIFxyXG59XHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXZhdGVSb3V0ZXMgPSBbXHJcblxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVyKCkge1xyXG4gIGxldCAgaGlkZUhlYWQgPSB0cnVlO1xyXG4gIGxldCB1cmwgICAgICAgICAgICAgICAgICAgPSAgICcnO1xyXG4gIGxldCB1c2VyRGF0YSAgICA9IHt9O1xyXG4gIGxldCBjdXJyZW50QWRkcmVzcyAgICA9IHt9O1xyXG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICAgIHVzZXJEYXRhICAgICAgICAgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSB8fCAne30nKTtcclxuICBcclxuICB9XHJcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykpIHsgICAgICBcclxuICAgIHVybCAgICAgICAgICAgICAgICAgICAgID0gICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuICAgIGlmICh1cmxbMV0gPT0gJycgfHwgdXJsWzFdID09ICdsb2dpbid8fCB1cmxbMV0gPT0gJ3NpZ251cCcpIHtcclxuICAgICAgaGlkZUhlYWQgICAgICAgICA9ICAgZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAge1xyXG4gICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gXHJcbiAgICAgIDxkaXY+ICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbnMgLz5cclxuICAgICBcclxuICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAge3Byb3RlY3RlZFJvdXRlcy5tYXAoKHJvdXRlKSA9PiAoXHJcbiAgICAgICAgICAgIDxQcm90ZWN0ZWRSb3V0ZSBrZXk9e3JvdXRlLnBhdGh9IHBhdGg9e3JvdXRlLnBhdGh9IHJvdXRlPXtyb3V0ZX0gY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9IHVzZXJEYXRhPXt1c2VyRGF0YX0gcHJldlBhdGg9e3VybFsxXX0vPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICB7cHJpdmF0ZVJvdXRlcy5tYXAoKHJvdXRlKSA9PiAoXHJcbiAgICAgICAgICAgIDxQcml2YXRlUm91dGUga2V5PXtyb3V0ZS5wYXRofSBwYXRoPXtyb3V0ZS5wYXRofSByb3V0ZT17cm91dGV9IGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fSB1c2VyRGF0YT17dXNlckRhdGF9ICBwcmV2UGF0aD17dXJsWzFdfS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHtwdWJsaWNyb3V0ZXMubWFwKHJvdXRlID0+KFxyXG4gICAgICAgICAgICAgIDxQdWJsaWNSb3V0ZSBrZXk9e3JvdXRlLnBhdGh9IHBhdGg9e3JvdXRlLnBhdGh9IHJvdXRlPXtyb3V0ZX0gY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9IHByZXZQYXRoPXt1cmxbMV19Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtyb3V0ZXMubWFwKHJvdXRlID0+KFxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke3JvdXRlLnBhdGh9YH0gey4uLnJvdXRlfS8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICBcclxuICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgPC9kaXY+ICAgXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHVibGljUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XHJcbiAgbGV0IG9iaiA9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfTtcclxuICBsZXQgcHJldlBhdGggID0gcmVzdC5wcmV2UGF0aCB8fCAnJztcclxuICAgIHJldHVybiAoXHJcbiAgICA8Um91dGUga2V5PXtgaW5kZXggJHtvYmoucGF0aH1gfSBwYXRoPXtvYmoucGF0aH0gXHJcbiAgICAgICAgLyogY29tcG9uZW50PXtvYmouY29tcG9uZW50fSAqL1xyXG4gICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiAoXHJcbiAgICAgICAgICA8b2JqLmNvbXBvbmVudCB7Li4ucHJvcHN9IHByZXZQYXRoPXtwcmV2UGF0aH0gLz5cclxuICAgICAgICApfVxyXG4gICAgLz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gUHJpdmF0ZVJvdXRlKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkge1xyXG4gIGxldCBvYmogPSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH07XHJcbiAgLy9jb25zb2xlLmxvZygnTG9jYWwgU3RvcmFnZSA6ICcsIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICFfLmlzRW1wdHkobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZURhdGEnKSkpO1xyXG4gIGxldCBjdXJyZW50QWRkcmVzcyAgPSByZXN0LmN1cnJlbnRBZGRyZXNzIHx8IHt9O1xyXG4gIGxldCB1c2VyRGF0YSAgPSByZXN0LnVzZXJEYXRhIHx8IHt9O1xyXG4gIGxldCBwcmV2UGF0aCAgPSByZXN0LnByZXZQYXRoIHx8ICcnO1xyXG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICFfLmlzRW1wdHkodXNlckRhdGEpKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUm91dGUgUFJpdmF0ZSA6ICcsIHJlc3Qucm91dGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofSBcclxuICAgICAgICAvKiBjb21wb25lbnQ9e29iai5jb21wb25lbnR9ICovXHJcbiAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcclxuICAgICAgICAgIDxvYmouY29tcG9uZW50IHsuLi5wcm9wc30gdXNlckRhdGE9e3VzZXJEYXRhfSBwcmV2UGF0aD17cHJldlBhdGh9IC8+XHJcbiAgICAgICAgKX1cclxuICAgIC8+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWRpcmVjdFxyXG4gICAgICAgIHRvPXt7XHJcbiAgICAgICAgICBwYXRobmFtZTogXCIvXCJcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUHJvdGVjdGVkUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XHJcbiAgbGV0IG9iaiA9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfTtcclxuICBsZXQgdXNlckRhdGEgID0gcmVzdC51c2VyRGF0YSB8fCB7fTtcclxuICBsZXQgcHJldlBhdGggID0gcmVzdC5wcmV2UGF0aCB8fCAnJztcclxuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhXy5pc0VtcHR5KHVzZXJEYXRhKSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofVxyXG4gICAgICAvKiBjb21wb25lbnQ9e29iai5jb21wb25lbnR9ICovXHJcbiAgICAgIHJlbmRlcj17KHByb3BzKSA9PiAoXHJcbiAgICAgICAgPG9iai5jb21wb25lbnQgey4uLnByb3BzfSB1c2VyRGF0YT17dXNlckRhdGF9IHByZXZQYXRoPXtwcmV2UGF0aH0vPlxyXG4gICAgICApfVxyXG4gICAgLz5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlZGlyZWN0XHJcbiAgICAgICAgdG89e3tcclxuICAgICAgICAgIHBhdGhuYW1lOiBcIi9sb2dpblwiXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9hcHAnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7fTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe30sIGRpc3BhdGNoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoQXBwKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQXBwJztcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVG9wQmFyfT5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9IHRvPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfSB0bz1cIi9JbnZhbGlkTGlua1wiPkludmFsaWRMaW5rPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30gdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlcn0+V2lsbGlhbSBXb29kaGVhZCAtIE1JVCBMaWNlbnNlPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcclxufTtcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5BcHBfX0FwcF9fX1Z0d0J0IHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IH1cXG5cXG4uQXBwX19Ub3BCYXJfX18zeXU5RiB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLkFwcF9fTGlua19fXzI1NFlyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLkFwcF9fTGlua19fXzI1NFlyICsgLkFwcF9fTGlua19fXzI1NFlyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcblxcbi5BcHBfX0Zvb3Rlcl9fXzExZmZxIHtcXG4gIGNvbG9yOiAjQUFBQUFBOyB9XFxuXFxuLkFwcF9fYWxpZ24taXRlbXMtY2VudGVyX19fQlIyMG4gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDUlOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLkFwcF9fYWxpZ24taXRlbXMtY2VudGVyX19fQlIyMG4gaDIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMDsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0IsRUFBRTs7QUFFcEI7RUFDRSxhQUFhLEVBQUU7O0FBRWpCO0VBQ0UscUJBQXFCLEVBQUU7RUFDdkI7SUFDRSxnQkFBZ0IsRUFBRTs7QUFFdEI7RUFDRSxjQUFjLEVBQUU7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUU7O0FBRWpCO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVLEVBQUUsRUFBRVwiLFwiZmlsZVwiOlwiQXBwLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFwcCB7XFxuICBmb250LXNpemU6IDEuNWVtOyB9XFxuXFxuLlRvcEJhciB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLkxpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAuTGluayArIC5MaW5rIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcblxcbi5Gb290ZXIge1xcbiAgY29sb3I6ICNBQUFBQUE7IH1cXG5cXG4uYWxpZ24taXRlbXMtY2VudGVyIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCA1JTsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5hbGlnbi1pdGVtcy1jZW50ZXIgaDIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMDsgfSB9XFxuXCJdfV0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJBcHBcIjogXCJBcHBfX0FwcF9fX1Z0d0J0XCIsXG5cdFwiVG9wQmFyXCI6IFwiQXBwX19Ub3BCYXJfX18zeXU5RlwiLFxuXHRcIkxpbmtcIjogXCJBcHBfX0xpbmtfX18yNTRZclwiLFxuXHRcIkZvb3RlclwiOiBcIkFwcF9fRm9vdGVyX19fMTFmZnFcIixcblx0XCJhbGlnbi1pdGVtcy1jZW50ZXJcIjogXCJBcHBfX2FsaWduLWl0ZW1zLWNlbnRlcl9fX0JSMjBuXCJcbn07IiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbi8vY29uc29sZS5sb2coJ0Nvb2tpZSBDb25maWcgOiAnLCBjb25maWcuY29va2llKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXQgPSAobmFtZSA9ICdmb29kamV0c19uZXdfbWVyY2hhbnQnKSA9PntcclxuLy8gXHRpZihjb25maWcuY29va2llLmhvc3RuYW1lID09PSAnaHR0cDovL2NvbnNvbGUuZGV2LmZvb2RqZXRzLmNvbScpIHtcclxuLy8gXHRcdG5hbWUgPSAnZGV2XycrbmFtZVxyXG4vLyBcdH1cclxuXHJcbi8vICAgXHRyZXR1cm4gQ29va2llcy5nZXRKU09OKG5hbWUpO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHNldCA9IChkYXRhLCBuYW1lID0gJ2Zvb2RqZXRzX25ld19tZXJjaGFudCcpID0+e1xyXG4vLyBcdGlmKGNvbmZpZy5jb29raWUuaG9zdG5hbWUgPT09ICdodHRwOi8vY29uc29sZS5kZXYuZm9vZGpldHMuY29tJykge1xyXG4vLyBcdFx0bmFtZSA9ICdkZXZfJytuYW1lXHJcbi8vIFx0fVxyXG4vLyBcdGlmKCEhY29uZmlnLmNvb2tpZS5kb21haW4pXHJcbi8vIFx0XHRDb29raWVzLnNldChuYW1lLCBkYXRhLCB7ZG9tYWluOiBjb25maWcuY29va2llLmRvbWFpbn0pO1xyXG4vLyBcdGVsc2VcclxuLy8gXHRcdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEpO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChuYW1lID0gJ2Zvb2RqZXRzX25ld19tZXJjaGFudCcpID0+e1xyXG4vLyBcdGlmKGNvbmZpZy5jb29raWUuaG9zdG5hbWUgPT09ICdodHRwOi8vY29uc29sZS5kZXYuZm9vZGpldHMuY29tJykge1xyXG4vLyBcdFx0bmFtZSA9ICdkZXZfJytuYW1lXHJcbi8vIFx0fVxyXG5cclxuLy8gXHRpZighIWNvbmZpZy5jb29raWUuZG9tYWluKVxyXG4vLyBcdFx0Q29va2llcy5yZW1vdmUobmFtZSwge2RvbWFpbjogY29uZmlnLmNvb2tpZS5kb21haW59KTtcclxuLy8gXHRlbHNlXHJcbi8vIFx0XHRDb29raWVzLnJlbW92ZShuYW1lKTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoZGF0YSwgbmFtZSkgPT57XHJcbiAgXHRDb29raWVzLnNldChuYW1lLCBkYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMaWZldGltZUNvb2tpZSA9IChkYXRhLCBuYW1lLGRheSkgPT57XHJcblx0Q29va2llcy5zZXQobmFtZSwgZGF0YSwgeyBleHBpcmVzOiBkYXkgfSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChuYW1lKSA9PntcclxuICBcdENvb2tpZXMucmVtb3ZlKG5hbWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChuYW1lKSA9PntcclxuICBcdHJldHVybiBDb29raWVzLmdldEpTT04obmFtZSk7XHJcbn07IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9ub3QtZm91bmQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7fTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe30sIGRpc3BhdGNoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoTm90Rm91bmQpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ob3RGb3VuZCc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ob3RGb3VuZC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMHZoXCI+PGgyIGNsYXNzTmFtZT1cIm0tMCBibHVlLWRlZmF1bHRcIj5Sb3V0ZSBOb3QgRm91bmQ8L2gyPjwvZGl2PiAgICAgIFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90Rm91bmQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Ob3RGb3VuZF9fTm90Rm91bmRfX18yemNwQiB7XFxuICBjb2xvcjogaW5oZXJpdDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIk5vdEZvdW5kLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjLEVBQUVcIixcImZpbGVcIjpcIk5vdEZvdW5kLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLk5vdEZvdW5kIHtcXG4gIGNvbG9yOiBpbmhlcml0OyB9XFxuXCJdfV0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJOb3RGb3VuZFwiOiBcIk5vdEZvdW5kX19Ob3RGb3VuZF9fXzJ6Y3BCXCJcbn07IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5eyAgb3ZlcmZsb3cteDogaGlkZGVuOyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDt9XFxyXFxuKntwYWRkaW5nOiAwOyBtYXJnaW46IDA7IG91dGxpbmU6IDA7ICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgYm94LXNpemluZzogYm9yZGVyLWJveDt9XFxyXFxuYm9keXtmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDQwMDsgbGluZS1oZWlnaHQ6IDE4cHg7IGNvbG9yOiAjMzMzMzMzO31cXHJcXG5cXHJcXG5pbWd7bWF4LXdpZHRoOiAxMDAlO31cXHJcXG5maWd1cmV7cGFkZGluZzogMDsgbWFyZ2luOiAwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxcclxcbmF7Y29sb3I6ICMyMDlERTI7fVxcclxcbmE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzIwOURFMjt9XFxyXFxuXFxyXFxuXFxyXFxuLmNUYWJsZSB7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgd2lkdGg6IDEwMCU7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO31cXHJcXG4uY1RhYmxlIHRoe3Bvc2l0aW9uOiByZWxhdGl2ZTt9XFxyXFxuLmNUYWJsZSB0aCBpe3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE1cHg7IHRvcDogMTVweDsgY3Vyc29yOiBwb2ludGVyO31cXHJcXG4uY1RhYmxlIHRoLCAuY1RhYmxlIHRkIHtwYWRkaW5nOiAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBib3JkZXItYm90dG9tOiBub25lOyBwb3NpdGlvbjogcmVsYXRpdmU7fVxcclxcbi5jVGFibGUub25lQ29sIHRoLCAuY1RhYmxlLm9uZUNvbCB0ZCwgLmNUYWJsZS5vbmVDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiA3MiU7fVxcclxcbi5jVGFibGUudHdvQ29sIHRoLCAuY1RhYmxlLnR3b0NvbCB0ZCwgLmNUYWJsZS50d29Db2wgLnN1YlRhYmxlIHRke3dpZHRoOiA1NCU7fVxcclxcbi5jVGFibGUudGhyZWVDb2wgdGgsIC5jVGFibGUudGhyZWVDb2wgdGQsIC5jVGFibGUudGhyZWVDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiAzNiU7fVxcclxcbi5jVGFibGUuZm91ckNvbCB0aCwgLmNUYWJsZS5mb3VyQ29sIHRkLCAuY1RhYmxlLmZvdXJDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiAxOCU7fVxcclxcblxcclxcbi5jVGFibGUgdGg6Zmlyc3QtY2hpbGQsIC5jVGFibGUgdGQ6Zmlyc3QtY2hpbGR7IHdpZHRoOiAyOCU7fVxcclxcbi5jVGFibGUgdGh7dGV4dC1hbGlnbjogY2VudGVyO31cXHJcXG4uY1RhYmxlIHRoIHNwYW57ZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTJweDt9XFxyXFxuXFxyXFxuLmNsb3NlU2Vje3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE1cHg7IGNvbG9yOiAjRkI2MDU2OyBjdXJzb3I6IHBvaW50ZXI7fVxcclxcblxcclxcbi5jVGFibGUgdGQuc3R7cGFkZGluZzogMDsgYm9yZGVyLXRvcDogbm9uZTsgYm9yZGVyLWJvdHRvbTogbm9uZTt9IFxcclxcbi5zdWJUYWJsZXt3aWR0aDogMTAwJTsgZGlzcGxheTogbm9uZTt9XFxyXFxuLnN0T3BlbiAuc3ViVGFibGV7IGRpc3BsYXk6dGFibGU7fVxcclxcbi5zdWJUYWJsZSB0cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XFxyXFxuLnN1YlRhYmxlIHRke3dpZHRoOiAxOCU7fVxcclxcbi5zdWJUYWJsZSB0ZDpmaXJzdC1jaGlsZHsgd2lkdGg6IDI4JSFpbXBvcnRhbnQ7fVxcclxcblxcclxcbi50YWN7dGV4dC1hbGlnbjogY2VudGVyO31cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luJztcclxuaW1wb3J0IHsgZG9fbG9naW4gfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2F1dGgnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHN0YXRlKVxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBzdGF0ZS5zaWdudXBcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7XHJcbiAgICBkb19sb2dpbjpkb19sb2dpbixcclxuICB9LCBkaXNwYXRjaCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKExvZ2luKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9sb2dpbic7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBpc1ZhbGlkRW1haWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcmZ1bmMnO1xyXG5cclxuaW1wb3J0ICcuL2xvZ2luLmNzcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmRlZmF1bHRFcnJvcnMgPSB7XHJcbiAgICAgIGVtYWlsOiBmYWxzZSxcclxuICAgICAgcGFzc3dvcmQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmYXFEYXRhOiBbXSxcclxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICBtb2RhbDogZmFsc2UsXHJcbiAgICAgIHR5cGVQYXNzOiAncGFzc3dvcmQnLFxyXG4gICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgZnVuZGluZ19oaXN0b3J5OiBcIlwiLFxyXG4gICAgICAgIGNvbXBhbnlfaW5mbzpcIlwiLFxyXG4gICAgICAgIGZldGF1cmVzOlwiXCIsXHJcbiAgICAgICAgY3VzdG9tZXJfY2FzZV9zdHVkeTpcIlwiLFxyXG4gICAgICAgIG92ZXJhbGxfc2Nvb3I6XCJTY29yZVwiLFxyXG4gICAgICAgIGJveF9oZWFkZXI6XCJCb3hcIlxyXG5cclxuICAgICAgfSxcclxuICAgICAgY29sdW1EYXRhOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYm94X2hlYWRlcjoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkJveFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBbe1xyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImRhdGFcIlxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvdmVyYWxsX3Njb29yOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiT3ZlcmFsbCBTY29yZVwiLFxyXG4gICAgICAgICAgICBkYXRhOiBbe1xyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjb3JlXCJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlByb2R1Y3QgRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgZGF0YTogW3tcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCb3ggaXMgYSBtb2Rlcm4gY29udGVudCBvZiBtYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuZGluZ19oaXN0b3J5OiB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiRnVuZGluZyBIaXN0b3J5XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFt7XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVG90YWwgRnVuZGluZzogJDE1MG1cIixcclxuXHJcblxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgc3ViaXRlbXM6IHtcclxuICAgICAgICAgICAgICBGb3VuZGVkOiBbXCIyMDA1XCJdLFxyXG4gICAgICAgICAgICAgIEtleUludmVzdG9yczogW1wiREZHLCBzY2FsZSwgdmVudHVyZSBwYXJ0bmVyc1wiXSxcclxuICAgICAgICAgICAgICBGb3VuZGVyczogW1wiQXJvbmUgTGV2aWUsIER5bG9uIHNtaXRoXCJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb21wYW55X2luZm86IHtcclxuICAgICAgICAgICAgdGV4dDogXCJDb21wYW55IEluZm9cIixcclxuICAgICAgICAgICAgZGF0YTogW3tcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJKb2huc29uXCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmZXRhdXJlczoge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkZldGF1cmVzXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFt7XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR29vZFwiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY3VzdG9tZXJfY2FzZV9zdHVkeToge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkNvbXBhbnkgQ2FzZSBTdHVkeVwiLFxyXG4gICAgICAgICAgICBkYXRhOiBbe1xyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdvb2QgQ2xpZW50XCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGhpZGVDbGFzczp0cnVlLFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlID0gdGhpcy5vbkNoYW5nZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kZWxldGVDb2x1bSAgICA9ICB0aGlzLmRlbGV0ZUNvbHVtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvb2dsZUNsYXNzID0gIHRoaXMudG9vZ2xlQ2xhc3MuYmluZCh0aGlzKTtcclxuXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHsgfVxyXG5cclxuXHJcbiAgb25DaGFuZ2VIYW5kbGUoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5mb3JtRGF0YSxcclxuICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9vZ2xlQ2xhc3MoKSB7XHJcbmxldCAge2hpZGVDbGFzcyB9ID0gIHRoaXMuc3RhdGU7XHJcbiAgICBoaWRlQ2xhc3MgPSFoaWRlQ2xhc3NcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaGlkZUNsYXNzXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBkZWxldGVDb2x1bShpZCl7XHJcbiAgICBsZXQgIHsgY29sdW1EYXRhfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBcclxuXHJcbiAgICBzd2FsKHtcclxuICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50ICB0byAgZGVsZXRlICB0aGlzICBpdGVtP1wiLFxyXG4gICAgIFxyXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgYnV0dG9uczogdHJ1ZSxcclxuICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICAudGhlbigod2lsbERlbGV0ZSkgPT4ge1xyXG4gICAgICBpZiAod2lsbERlbGV0ZSkge1xyXG5cclxuICAgICAgICBjb2x1bURhdGEubWFwKChjZGF0YSwgaW5kZXgpPT57XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyhjZGF0YSkubWFwKChvbmVLZXksIGkpID0+e1xyXG4gICAgICAgICAgICBjZGF0YVtvbmVLZXldLmRhdGE9Y2RhdGFbb25lS2V5XS5kYXRhLmZpbHRlcigoZGF0YSxpbmRleCk9PmlkIT1pbmRleClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY29sdW1EYXRhXHJcbiAgICAgICAgfSwoKT0+e1xyXG4gICAgICAgICAgc3dhbChcIlBvb2YhIFlvdXIgaXRlbWhhcyBiZWVuIGRlbGV0ZWQhXCIsIHtcclxuICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgIGxldCAge2Zvcm1EYXRhLCBjb2x1bURhdGF9ID0gdGhpcy5zdGF0ZTtcclxuICAgXHJcbiAgIGxldHtvdmVyYWxsX3Njb29yLGJveF9oZWFkZXIscHJvZHVjdF9kZXNjcmlwdGlvbiwgZnVuZGluZ19oaXN0b3J5LCBmZXRhdXJlcywgY3VzdG9tZXJfY2FzZV9zdHVkeSxjb21wYW55X2luZm99ID0gZm9ybURhdGE7XHJcblxyXG5cclxuICAgXHJcbiAgXHJcbiAgIGNvbHVtRGF0YS5tYXAoKGNkYXRhLGluZGV4KT0+e1xyXG4gICAgIGNvbnNvbGUubG9nKGNkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGgpO1xyXG4gICAgIGlmKGNkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGg+Mil7XHJcbiAgICAgIHN3YWwoe1xyXG4gICAgICAgIHRpdGxlOiBcIllvdSBjYW50IGFkZCBtb3JlICB0aGFuICAzICBpdGVtc1wiLFxyXG4gICAgICBcclxuICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICBmdW5kaW5nX2hpc3Rvcnk6IFwiXCIsXHJcbiAgICAgICAgICBjb21wYW55X2luZm86XCJcIixcclxuICAgICAgICAgIGZldGF1cmVzOlwiXCIsXHJcbiAgICAgICAgICBjdXN0b21lcl9jYXNlX3N0dWR5OlwiXCIsXHJcbiAgICAgICAgICBvdmVyYWxsX3Njb29yOlwiU2NvcmVcIixcclxuICAgICAgICAgIGJveF9oZWFkZXI6XCJCb3hcIlxyXG4gIFxyXG4gICAgICAgIH1cclxuICBcclxuICBcclxuICBcclxuICAgICAgfSwoKT0+e1xyXG4gICAgICAgICQoXCIjbmV3VmVuZG9yXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgfSlcclxuICAgICB9XHJcbiAgICAgZWxzZXtcclxuICAgICAgY2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLnB1c2goe2Rlc2NyaXB0aW9uOnByb2R1Y3RfZGVzY3JpcHRpb259KTtcclxuICAgICAgY2RhdGEuZnVuZGluZ19oaXN0b3J5LmRhdGEucHVzaCh7ZGVzY3JpcHRpb246ZnVuZGluZ19oaXN0b3J5fSk7XHJcbiAgICAgIGNkYXRhLmZldGF1cmVzLmRhdGEucHVzaCh7ZGVzY3JpcHRpb246ZmV0YXVyZXN9KTtcclxuICAgICAgY2RhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeS5kYXRhLnB1c2goe2Rlc2NyaXB0aW9uOmN1c3RvbWVyX2Nhc2Vfc3R1ZHl9KTtcclxuICAgICAgY2RhdGEuY29tcGFueV9pbmZvLmRhdGEucHVzaCh7ZGVzY3JpcHRpb246Y29tcGFueV9pbmZvfSk7XHJcbiAgICAgIGNkYXRhLm92ZXJhbGxfc2Nvb3IuZGF0YS5wdXNoKHtkZXNjcmlwdGlvbjpvdmVyYWxsX3Njb29yfSk7XHJcbiAgICAgIGNkYXRhLmJveF9oZWFkZXIuZGF0YS5wdXNoKHtkZXNjcmlwdGlvbjpib3hfaGVhZGVyfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGNvbHVtRGF0YSxcclxuICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgIGZ1bmRpbmdfaGlzdG9yeTogXCJcIixcclxuICAgICAgICAgIGNvbXBhbnlfaW5mbzpcIlwiLFxyXG4gICAgICAgICAgZmV0YXVyZXM6XCJcIixcclxuICAgICAgICAgIGN1c3RvbWVyX2Nhc2Vfc3R1ZHk6XCJcIixcclxuICAgICAgICAgIG92ZXJhbGxfc2Nvb3I6XCJTY29yZVwiLFxyXG4gICAgICAgICAgYm94X2hlYWRlcjpcIkJveFwiXHJcbiAgXHJcbiAgICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgICB9LCgpPT57XHJcbiAgICAgICAgJChcIiNuZXdWZW5kb3JcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICB9KVxyXG4gICAgIH1cclxuICAgIFxyXG4gICB9KVxyXG4gICBcclxuICAgIFxyXG5cclxuICB9XHJcblxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XHJcbiAgICBpZiAoISFwcm9wcy5kYXRhICYmICEhcHJvcHMuZGF0YS5pc1N1Y2Nlc3MpIHtcclxuXHJcbiAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZGFzaGJvYXJkXCI7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgbGV0IGZvcm1EYXRhID0gdGhpcy5zdGF0ZS5mb3JtRGF0YSB8fCB7fTtcclxuICAgIGxldCBlcnJvcnMgPSB7IC4uLnRoaXMuZGVmYXVsdEVycm9ycyB9O1xyXG4gICAgbGV0IGlzRXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICghISFmb3JtRGF0YS5lbWFpbCkge1xyXG4gICAgICBlcnJvcnMuZW1haWwgPSB0cnVlO1xyXG4gICAgICBpc0Vycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghISFmb3JtRGF0YS5wYXNzd29yZCkge1xyXG4gICAgICBlcnJvcnMucGFzc3dvcmQgPSB0cnVlO1xyXG4gICAgICBpc0Vycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghIWZvcm1EYXRhLnBhc3N3b3JkICYmIGZvcm1EYXRhLnBhc3N3b3JkLmxlbmd0aCA8IDQpIHtcclxuICAgICAgZXJyb3JzLnBhc3N3b3JkID0gdHJ1ZTtcclxuICAgICAgaXNFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBpc0Vycm9yOiBpc0Vycm9yLCBlcnJvcnM6IGVycm9ycyB9O1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgY29sdW1EYXRhICwgZm9ybURhdGEsIGhpZGVDbGFzc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0ICBjb2xTcGFuID0gXCJcIjtcclxuICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsa2V5KT0+e1xyXG4gICAgICBpZihkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGg9PTEpe1xyXG4gICAgICAgIGNvbFNwYW49IFwib25lQ29sXCJcclxuICAgICAgfVxyXG4gICAgICBpZihkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGg9PTIpe1xyXG4gICAgICAgIGNvbFNwYW49IFwidHdvQ29sXCJcclxuICAgICAgfVxyXG4gICAgICBpZihkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGg9PTMpe1xyXG4gICAgICAgIGNvbFNwYW49IFwidGhyZWVDb2xcIlxyXG4gICAgICB9XHJcbiAgICAgIGlmKGRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLmxlbmd0aD09NCl7XHJcbiAgICAgICAgY29sU3Bhbj0gXCJmb3VyQ29sXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5wXCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17YGNUYWJsZSAke2NvbFNwYW59YH0+XHJcbiAgICAgICAgICA8dHI+XHJcblxyXG4gICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbmV3VmVuZG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hZGQtbmV3LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgTmV3IFZlbmRvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuYm94X2hlYWRlcikgPyA8PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmJveF9oZWFkZXIuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGgga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ib3gucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qm94IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYm94X2hlYWRlci5kYXRhLmxlbmd0aD4xPyAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiAgb25DbGljaz17KCk9PnRoaXMuZGVsZXRlQ29sdW0oa2V5KX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjpcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPilcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cclxuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEub3ZlcmFsbF9zY29vcikgPyA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5vdmVyYWxsX3Njb29yLnRleHR9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEub3ZlcmFsbF9zY29vci5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0gY2xhc3NOYW1lPVwidGFjXCI+PGltZyBzcmM9XCJpbWcvc2NvcmUtYi5wbmdcIiAvPjwvdGQ+KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxyXG5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbikgPyA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLnRleHR9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuZnVuZGluZ19oaXN0b3J5KSA/IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9eygpPT50aGlzLnRvb2dsZUNsYXNzKCl9PntkYXRhLmZ1bmRpbmdfaGlzdG9yeS50ZXh0fSA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZnVuZGluZ19oaXN0b3J5LmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cclxuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG5cclxuICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPXtoaWRlQ2xhc3MgP1wic3RcIjpcInN0IHN0T3BlblwiIH0+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN1YlRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtcykubWFwKChvbmVLZXksIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57b25lS2V5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zW29uZUtleV0ubWFwKChpdGVtLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkPntpdGVtfTwvdGQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICB7KCEhZGF0YS5jb21wYW55X2luZm8pID8gPD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmNvbXBhbnlfaW5mby50ZXh0fSA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVNlY1wiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5jb21wYW55X2luZm8uZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxyXG5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5mZXRhdXJlcykgPyA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5mZXRhdXJlcy50ZXh0fSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZldGF1cmVzLmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cclxuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeSkgPyA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5LnRleHR9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeS5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG5cclxuXHJcbiAgICAgICAgey8qICBNb2RhbCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cIm5ld1ZlbmRvclwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+QWRkIE5ldyBWZW5kb3I8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9kdWN0X2Rlc2NyaXB0aW9uXCI+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtmb3JtRGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGUpPT50aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBuYW1lPVwicHJvZHVjdF9kZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZnVuZGluZ19oaXN0b3J5XCI+RnVuZGluZyBIaXN0b3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLmZ1bmRpbmdfaGlzdG9yeX0gb25DaGFuZ2U9eyhlKT0+dGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZ1bmRpbmdfaGlzdG9yeVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29tcGFueV9pbmZvXCI+Q29tcGFueSBJbmZvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLmNvbXBhbnlfaW5mb30gb25DaGFuZ2U9eyhlKT0+dGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImNvbXBhbnlfaW5mb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmV0YXVyZXNcIj5GZWF0dXJlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5mZXRhdXJlc30gb25DaGFuZ2U9eyhlKT0+dGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZldGF1cmVzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdXN0b21lcl9jYXNlX3N0dWR5XCI+Q3VzdG9tZXIgY2FzZSBzdHVkeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICB2YWx1ZT17Zm9ybURhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeX0gb25DaGFuZ2U9eyhlKT0+dGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImN1c3RvbWVyX2Nhc2Vfc3R1ZHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgIG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZVN1Ym1pdCgpfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJleHBvcnQgeyBkb19sb2dpbiB9IGZyb20gJy4vYXV0aCc7IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vLi4vdHlwZXMvYXV0aCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vLi4vQXBpL0FwaSc7XHJcbmltcG9ydCB7IGVycm9yIGFzIG5vdGlmeUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9ub3RpZnknO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7U2VudHJ5SW5pdGlhbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9TZW50cnkvc2VudHJ5XCJcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XHJcblNlbnRyeUluaXRpYWxpemUoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb19sb2dpbihkYXRhKSB7XHJcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSAgICAgICAgICAgICA9PiAge1xyXG4gICAgICAgIGxldCAgc2VuZERhdGEgID0gIHt1c2VybmFtZTpkYXRhLmVtYWlsLCBwYXNzd29yZDpkYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU4gfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyAgICAgICAgICAgICAgICAgICA9ICAgYXdhaXQgQVBJLnBvc3QoJ3Jlc3QtYXV0aC9sb2dpbi8nLCBzZW5kRGF0YSlcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihyZXMuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOX0VSUk9SIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJEYXRhICAgID0gICByZXMuZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRGF0YScsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOX1NVQ0NFU1MsIGRhdGE6ICByZXMuZGF0YX0pO1xyXG4gICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIG5vdGlmeUVycm9yKCdJbnZhbGlkIHJlcXVlc3QgKDQwMSknKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBUWVBFLlNJR05JTl9FUlJPUiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcclxuXHJcbmNvbnN0IHByZWZpeCA9ICdAQGF1dGhUeXBlcyc7XHJcblxyXG5jb25zdCB0eXBlcyA9IHtcclxuICBTSUdOVVA6IG51bGwsXHJcbiAgU0lHTlVQX1NVQ0NFU1M6IG51bGwsXHJcbiAgU0lHTlVQX0VSUk9SOiBudWxsLFxyXG4gIFNJR05JTjogbnVsbCxcclxuICBTSUdOSU5fU1VDQ0VTUzogbnVsbCxcclxuICBTSUdOSU5fRVJST1I6IG51bGwsXHJcbiAgQUREX0RFTF9BRERSOiBudWxsLFxyXG4gIEFERF9ERUxfQUREUl9TVUNDRVNTOiBudWxsLFxyXG4gIEFERF9ERUxfQUREUl9FUlJPUjogbnVsbCxcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmVmaXhlcih0eXBlcywgcHJlZml4KTsiLCJpbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlZml4ZXIodHlwZXMsIHByZWZpeCkge1xyXG4gIHJldHVybiByZWR1Y2UodHlwZXMsIChyZXN1bHQsIHZhbHVlLCBrZXkpID0+IHtcclxuICAgIHJlc3VsdFtrZXldID0gYCR7cHJlZml4fS8ke2tleX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0sIHt9KTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge2dldENvb2tpZSwgc2V0TGlmZXRpbWVDb29raWV9IGZyb20gJy4uL3V0aWwvY29va2llcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuY29uc3QgQVBJX1VSTCAgICAgICAgICAgPSAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XHJcblxyXG5jb25zdCBBUEkgICAgICAgICAgICAgICA9ICAgYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IEFQSV9VUkxcclxufSlcclxuQVBJLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxubGV0IGF1dGggICAgICAgICAgICAgID0gICAnJztcclxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gIGxldCB1c2VyRGF0YSAgICAgICAgICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9Jyk7XHJcbiAgaWYoIV8uaXNFbXB0eSh1c2VyRGF0YSkpe1xyXG4gICAgYXV0aCAgICAgICAgICAgICAgPSAgICAnVG9rZW4gJyArIHVzZXJEYXRhLmtleTtcclxuICB9IGVsc2V7XHJcbiAgICBhdXRoICAgPSAgXCJcIlxyXG4gIH1cclxuIFxyXG4gIGNvbnNvbGUubG9nKGF1dGgpO1xyXG4gIEFQSS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYXV0aDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQVBJOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vL3Byb2Nlc3MuZW52Lk5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JzsgLy8gc3RhZ2luZyB8IGRldmVsb3BtZW50IHwgcHJvZHVjdGlvblxyXG4vL3Byb2Nlc3MuZW52LlBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODA7XHJcbi8vY29uc3QgZW52ICAgICA9IChwcm9jZXNzLmVudi5OT0RFX0VOVik/cHJvY2Vzcy5lbnYuTk9ERV9FTlY6J2RldmVsb3BtZW50JztcclxuLy9jb25zdCBlbnYgICAgICAgPSAnc3RhZ2luZyc7XHJcblxyXG5sZXQgZW52ICAgPSAnJztcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgID09PSAncHJvZHVjdGlvbicpXHJcbiAgZW52ICA9ICdwcm9kdWN0aW9uJztcclxuZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpXHJcbiAgZW52ICA9ICdzdGFnaW5nJztcclxuZWxzZVxyXG4gIGVudiAgPSAnZGV2ZWxvcG1lbnQnO1xyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgLy9lbnY6IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCcsXHJcbiAgZW52OmVudixcclxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODFcclxufTtcclxuLy9jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOViwgXy5leHRlbmQoY29uZmlnLCByZXF1aXJlKCcuLycgKyBlbnYgKyAnLmpzJykuZGVmYXVsdCB8fCB7fSkpXHJcbmV4cG9ydCBkZWZhdWx0IF8uZXh0ZW5kKGNvbmZpZywgcmVxdWlyZSgnLi8nICsgZW52ICsgJy5qcycpLmRlZmF1bHQgfHwge30pOyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc1wiOiA4NDQsXG5cdFwiLi9pbmRleC5qc1wiOiA4NDFcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA4NDM7IiwiXHJcbiBjb25zdCBjb25maWcgICAgPSAgIHtcclxuICAgIC8vIGZvciBkZXYgICAgXHJcbiAgICBmb29kamV0c1VybCAgICAgICAgICAgICA6ICAgJycsXHJcbiAgICBhcGlfZW5kICAgICAgICAgICAgICAgICA6ICAgJy9hcGkvJyxcclxuICAgIEdUTV9jb2RlICAgICAgICAgICAgICAgIDogICAnR1RNLVRITkdQSDYnLFxyXG4gICAgR1NUTV9jb2RlICAgICAgICAgICAgICAgOiAgICdVQS02NTU1NDMwMS0zJyxcclxuICAgIHBheXBhbCAgICAgICAgICAgICAgICAgIDogICB7XHJcbiAgICAgICAgbW9kZSAgICAgICAgICAgICAgICA6ICAgJ3NhbmRib3gnXHJcbiAgICB9IFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiLCJpbXBvcnQgeyBub3RpZnkgfSBmcm9tICdyZWFjdC1ub3RpZnktdG9hc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3MgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IG15Q29sb3IgPSB7IGJhY2tncm91bmQ6ICcjMDA4MDAwJywgdGV4dDogXCIjRkZGRkZGXCIsIFwiei1pbmRleFwiOlwiOTk5OTlcIiB9O1xyXG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7ICAgIFxyXG59XHJcbi8vIGV4cG9ydCBjb25zdCBlcnJvciA9IChtZXNzYWdlKSA9PiB7XHJcbi8vICAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNGQjYwNTYnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xyXG4vLyAgICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7XHJcbi8vIH1cclxuZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnI0ZCNjA1NicsIHRleHQ6IFwiI0ZGRkZGRlwiIH07XHJcbiAgICBsZXQgaCA9XCJ4XCJcclxuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDUwMDAsIG15Q29sb3IpO1xyXG59XHJcbmV4cG9ydCBjb25zdCB3YXJuaW5nID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwid2FybmluZ1wiLCA1MDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGN1c3RvbWVycm9yID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnI2ZmMDAwMCcsIHRleHQ6IFwiI0ZGRkZGRlwiIH07XHJcbiAgICBub3RpZnkuc2hvdyhtZXNzYWdlLCBcImN1c3RvbVwiLCA2MDAwMCwgbXlDb2xvcik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoaWRlID0gKCkgPT4ge1xyXG4gICAgbm90aWZ5LmhpZGUoKTtcclxufSIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvYnJvd3Nlcic7XHJcblxyXG5cclxuXHJcbiAgZXhwb3J0IGNvbnN0IFNlbnRyeUluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICBTZW50cnkuaW5pdCh7XHJcbiAgICAgICAgZHNuOiBjb25maWcuc2VudHJ5X2RzblxyXG4gICAgICB9KTtcclxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xyXG5pbXBvcnQgcmVkdXhTdGF0ZSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gY3JlYXRlTG9nZ2VyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWR1eFN0b3JlKHsgcHJlbG9hZGVkU3RhdGUsIHNlcnZlciB9ID0ge30pIHtcclxuICBsZXQgZW5oYW5jZXI7XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFzZXJ2ZXIpIHtcclxuICAgIGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdXhTdGF0ZSwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5cclxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBzaWdudXAgZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJztcclxuXHJcblxyXG5cclxuY29uc3QgcmVkdXhTdGF0ZSA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBIb21lLFxyXG4gICAgaGVhZGVyLFxyXG4gICAgc2lnbnVwLFxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eFN0YXRlOyIsImltcG9ydCBUWVBFIGZyb20gJy4uL3R5cGVzL2hlYWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFRZUEUuUkVRX0RBVEE6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSwgSGVhZGVyZGF0YToge30gfTtcclxuICAgIGNhc2UgVFlQRS5SRVNfREFUQTpcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOmZhbHNlLCBIZWFkZXJkYXRhOiBhY3Rpb24uZGF0YX07XHJcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBIZWFkZXJkYXRhOiB7fX07XHJcblxyXG4gICAgICBjYXNlIFRZUEUuUkVRX0FERFJFU1NfREFUQTpcclxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIEFkcmVzc2RhdGE6IHt9IH07XHJcbiAgICAgICAgY2FzZSBUWVBFLlJFU19BRERSRVNTX0RBVEE6XHJcbiAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEFkcmVzc2RhdGE6IGFjdGlvbi5kYXRhfTtcclxuXHJcbiAgICAgIGNhc2UgVFlQRS5GQUlMX0FERFJFU1NfREFUQTpcclxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBBZHJlc3NkYXRhOiB7fX07XHJcbiAgIFxyXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcclxuXHJcbmNvbnN0IHByZWZpeCA9ICdAQGhlYWRlclR5cGVzJztcclxuXHJcbmNvbnN0IHR5cGVzID0ge1xyXG4gIFJFUV9EQVRBOiBudWxsLFxyXG4gIFJFU19EQVRBOiBudWxsLFxyXG4gIEZBSUxfREFUQTogbnVsbCxcclxuICBSRVFfQUREUkVTU19EQVRBOiBudWxsLFxyXG4gIFJFU19BRERSRVNTX0RBVEE6IG51bGwsXHJcbiAgRkFJTF9BRERSRVNTX0RBVEE6IG51bGwsXHJcblxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCBUWVBFIGZyb20gJy4uL3R5cGVzL2F1dGgnO1xyXG5sZXQgdXNlckRhdGEgICAgPSB7fTtcclxuLy9pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgdXNlckRhdGEgICAgICAgICAgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSB8fCAne30nKSA6IHt9O1xyXG4vL31cclxuY29uc29sZS5sb2codXNlckRhdGEpO1xyXG5sZXQgaW5pdGlhbFN0YXRlICAgID0gICB7XHJcbiAgdXNlckRhdGE6IHsuLi51c2VyRGF0YX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFRZUEUuU0lHTlVQOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IHRydWUsIGlzU3VjY2VzczogZmFsc2V9O1xyXG4gICAgY2FzZSBUWVBFLlNJR05VUF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6ZmFsc2UsIGlzU3VjY2VzczogdHJ1ZSwgdXNlckRhdGE6IGFjdGlvbi5kYXRhfTtcclxuICAgIGNhc2UgVFlQRS5TSUdOVVBfRVJST1I6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogZmFsc2UsIGlzU3VjY2VzczogZmFsc2V9O1xyXG4gICAgY2FzZSBUWVBFLlNJR05JTjpcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOiB0cnVlLCBpc1N1Y2Nlc3M6IGZhbHNlfTtcclxuICAgIGNhc2UgVFlQRS5TSUdOSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOmZhbHNlLCBpc1N1Y2Nlc3M6IHRydWUsIHVzZXJEYXRhOiBhY3Rpb24uZGF0YX07XHJcbiAgICBjYXNlIFRZUEUuU0lHTklOX0VSUk9SOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IGZhbHNlLCBpc1N1Y2Nlc3M6IGZhbHNlfTtcclxuICAgIGNhc2UgVFlQRS5BRERfREVMX0FERFI6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzQWRkcmVzc0Vycm9yOiBmYWxzZX07XHJcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzQWRkcmVzc0Vycm9yOiBmYWxzZX07XHJcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSX0VSUk9SOlxyXG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IHRydWV9OyBcclxuICAgXHJcbiAgICBkZWZhdWx0OiByZXR1cm4gey4uLnN0YXRlLCAuLi5pbml0aWFsU3RhdGV9O1xyXG4gIH1cclxufSIsImltcG9ydCBUWVBFIGZyb20gJy4uL3R5cGVzL2hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBUWVBFLlJFUV9EQVRBOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIEhvbWVkYXRhOiB7fSB9O1xyXG4gICAgY2FzZSBUWVBFLlJFU19EQVRBOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEhvbWVkYXRhOiBhY3Rpb24uZGF0YX07XHJcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBIb21lZGF0YToge319O1xyXG4gICBcclxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XHJcblxyXG5jb25zdCBwcmVmaXggPSAnQEBob21lVHlwZXMnO1xyXG5cclxuY29uc3QgdHlwZXMgPSB7XHJcbiAgUkVRX0RBVEE6IG51bGwsXHJcbiAgUkVTX0RBVEE6IG51bGwsXHJcbiAgRkFJTF9EQVRBOiBudWxsLFxyXG5cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmVmaXhlcih0eXBlcywgcHJlZml4KTsiLCJpbXBvcnQgQVBJIGZyb20gJy4uL0FwaS9BcGknO1xyXG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9icm93c2VyJztcclxuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uL1NlbnRyeS9zZW50cnlcIjtcclxuU2VudHJ5SW5pdGlhbGl6ZSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRGbG9hdFR3b0RlY2ltYWwgPSBmdW5jdGlvbihudW0pIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRUd29EZWNpbWFsUm91bmQgPSBmdW5jdGlvbihudW0pIHtcclxuICAgIHJldHVybiArKE1hdGgucm91bmQobnVtICsgXCJlKzJcIikgKyBcImUtMlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0Vycm9yVG9TZXJ2ZXIgPSBhc3luYyBmdW5jdGlvbihwYXJhbXMsIGVycm9yKSB7XHJcbiAgICBcclxuICAgIGlmKHBhcmFtcy50eXBlID09PSAnY2F0Y2gnKVxyXG4gICAgICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKGVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIGNvbnN0IGludmFsaWRVcmwgICAgPScvaW52YWxpZC1saW5rJztcclxuICAgIGxldCBhZGRpdGlvbmFsSW5mbyAgICAgID0gICB7fTtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYVxyXG4gICAgICAgICAqIHN0YXR1cyBjb2RlIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgKi9cclxuICAgICAgICBhZGRpdGlvbmFsSW5mby5kYXRhICAgICA9ICAgZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBhZGRpdGlvbmFsSW5mby5zdGF0dXMgICA9ICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmhlYWRlcnMgID0gICBlcnJvci5yZXNwb25zZS5oZWFkZXJzO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0RhdGEgOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdTdGF0dXMgOiAnLCBlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0hlYWRlcnMgOiAnLCBlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZCwgYGVycm9yLnJlcXVlc3RgXHJcbiAgICAgICAgICogaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlXHJcbiAgICAgICAgICogb2YgaHR0cC5DbGllbnRSZXF1ZXN0IGluIE5vZGUuanNcclxuICAgICAgICAgKi9cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdSZXF1ZXN0IDogJywgZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgYWRkaXRpb25hbEluZm8ucmVxdWVzdCAgICAgPSAgIGVycm9yLnJlcXVlc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IGFuZCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdFcnJvciA6ICcsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLm1lc3NhZ2UgICAgID0gICBlcnJvci5tZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZygnQ29uZmlnIDogJywgZXJyb3IuY29uZmlnKTtcclxuICAgIGlmKCEhZXJyb3IuY29uZmlnKVxyXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmNvbmZpZyAgICAgPSAgIGVycm9yLmNvbmZpZztcclxuICAgIGNvbnN0IHJlcyAgICAgICAgICAgPSAgIGF3YWl0IEFQSS5wb3N0KCcvYXV0aC9jYXRjaC1pbnZhbGlkLWxpbmsnLCB7XHJcbiAgICAgICAgXCJwYXJhbXNcIiAgICA6ICAgey4uLnBhcmFtcywgYWRkaXRpb25hbEluZm86IEpTT04uc3RyaW5naWZ5KGFkZGl0aW9uYWxJbmZvKX1cclxuICAgIH0pXHJcbiAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZXMuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpICAgPT4gIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBpbnZhbGlkVXJsXHJcbiAgICAgICAgfSwzMDAwKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgYWRkcmVzc0Zvcm1hdGVyID0gKG9iaikgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICBsZXQgcmVnZXggPSAvKFxcZCspICguKz8pLCAoLis/KSwgKC4rPykgKFswLTldezV9KS87XHJcbiAgXHJcbiAgICAgIGxldCBhZGRyZXNzID0gb2JqLm1hdGNoKHJlZ2V4KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhhZGRyZXNzKTtcclxuICAgICAgaWYoYWRkcmVzc1s0XS5pbmRleE9mKCcsJykgPiAtMSAmJiBhZGRyZXNzWzNdLmluZGV4T2YoJyAnKSA+IC0xKXtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbM10rJywgJysgYWRkcmVzc1s0XSArICcgJysgYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV07XHJcbiAgICAgICAgbGV0IG1vZEFkZHJlc3MgPSBmb3JtYXR0ZWRBZGRyZXNzKycsIFVTQSc7XHJcbiAgICAgICAgaWYoLyhcXGQrKSAoLis/KSwgKC4rPyksICguKz8pIChbMC05XXs1fSkvZy50ZXN0KG1vZEFkZHJlc3MpKXtcclxuICAgICAgICAgIGxldCBfYWRkcmVzcyA9IG1vZEFkZHJlc3MubWF0Y2gocmVnZXgpO1xyXG4gIFxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsaWRBZHJzOiB0cnVlLCBcclxuICAgICAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogZm9ybWF0dGVkQWRkcmVzcyxcclxuICAgICAgICAgICAgYWRkcmVzczogbW9kQWRkcmVzcyxcclxuICAgICAgICAgICAgbnVtYmVyOiBfYWRkcmVzc1swXSxcclxuICAgICAgICAgICAgc3RyZWV0OiBfYWRkcmVzc1sxXSxcclxuICAgICAgICAgICAgY2l0eTogX2FkZHJlc3NbMl0sXHJcbiAgICAgICAgICAgIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzJyxcclxuICAgICAgICAgICAgc3RhdGVfY29kZTogX2FkZHJlc3NbNF0sXHJcbiAgICAgICAgICAgIHppcGNvZGU6IF9hZGRyZXNzW19hZGRyZXNzLmxlbmd0aCAtMV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsaWRBZHJzOiBmYWxzZSBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzWzFdICsgJyAnICsgYWRkcmVzc1syXSArICcsICcrIGFkZHJlc3NbM10gKyAnLCAnICsgYWRkcmVzc1s0XSArICcgJyArIGFkZHJlc3NbYWRkcmVzcy5sZW5ndGggLTFdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWxpZEFkcnM6IHRydWUsIFxyXG4gICAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogZm9ybWF0dGVkQWRkcmVzcyxcclxuICAgICAgICAgIGFkZHJlc3M6IG9iaixcclxuICAgICAgICAgIG51bWJlcjogYWRkcmVzc1sxXSxcclxuICAgICAgICAgIHN0cmVldDogYWRkcmVzc1syXSxcclxuICAgICAgICAgIGNpdHk6IGFkZHJlc3NbM10sXHJcbiAgICAgICAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsXHJcbiAgICAgICAgICBzdGF0ZV9jb2RlOiBhZGRyZXNzWzRdLFxyXG4gICAgICAgICAgemlwY29kZTogYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV0sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZEFkcnM6IGZhbHNlIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZEVtYWlsID0oZW1haWwpID0+e1xyXG4gIGNvbnN0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gIHJldHVybiBwYXR0ZXJuLnRlc3QoU3RyaW5nKGVtYWlsKSk7XHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9naW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=