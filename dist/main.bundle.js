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
/* harmony import */ var _universal_createReduxStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(913);





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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(716);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Sentry_sentry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(783);





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
exports.push([module.i, "html, body{  overflow-x: hidden; scroll-behavior: smooth;}\r\n*{padding: 0; margin: 0; outline: 0;  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}\r\nbody{font-family: 'Source Sans Pro', sans-serif; font-size: 14px; font-weight: 400; line-height: 18px; color: #333333;}\r\n\r\nimg{max-width: 100%;}\r\nfigure{padding: 0; margin: 0; display: inline-block;}\r\na{color: #209DE2;}\r\na:hover{text-decoration: none; color: #209DE2;}\r\n\r\n\r\n.cTable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n.cTable th{position: relative;}\r\n.cTable th i{position: absolute; right: 15px; top: 15px; cursor: pointer;}\r\n.cTable th, .cTable td {\r\n\r\n  padding: 15px;\r\n  border: 1px solid #ccc;\r\n  border-bottom: none;\r\n\r\n}\r\n.cTable.oneCol th, .cTable.oneCol td, .cTable.oneCol .subTable td{width: 72%;}\r\n.cTable.twoCol th, .cTable.twoCol td, .cTable.twoCol .subTable td{width: 54%;}\r\n.cTable.threeCol th, .cTable.threeCol td, .cTable.threeCol .subTable td{width: 36%;}\r\n.cTable.fourCol th, .cTable.fourCol td, .cTable.fourCol .subTable td{width: 18%;}\r\n\r\n.cTable th:first-child, .cTable td:first-child{ width: 28%;}\r\n.cTable th{text-align: center;}\r\n.cTable th span{display: block; font-size: 12px;}\r\n\r\n.cTable td.st{padding: 0; border-top: none; border-bottom: none;} \r\n.subTable{width: 100%; display: none;}\r\n.stOpen .subTable{ display:table;}\r\n.subTable tr:nth-child(odd) {background-color: #f2f2f2;}\r\n.subTable td{width: 18%;}\r\n.subTable td:first-child{ width: 28%!important;}\r\n\r\n.tac{text-align: center;}\r\n\r\n\r\n", ""]);



/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(620);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(668);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(786);





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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(583);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(569);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
/* harmony import */ var _util_helperfunc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(670);
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(784);
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(716);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
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
        email: "",
        password: ""
      }
    };
    _this.toggleShowpass = _this.toggleShowpass.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.onChangeHandle = _this.onChangeHandle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(login, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "toggleShowpass",
    value: function toggleShowpass() {
      this.setState({
        typePass: this.state.typePass === 'password' ? 'text' : 'password'
      });
    }
  }, {
    key: "onChangeHandle",
    value: function onChangeHandle(e) {
      this.setState({
        formData: _objectSpread(_objectSpread({}, this.state.formData), {}, _defineProperty({}, e.target.name, e.target.value))
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var formData = this.state.formData || {};
      this.props.do_login(formData);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "Loginp"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
        className: "cTable oneCol"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "#",
        "data-toggle": "modal",
        "data-target": "#newVendor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "img/add-new.png"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Add New Vendor"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "img/box.png"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Box "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        class: "fa fa-times",
        "aria-hidden": "true"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Overall Score "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
        className: "tac"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: "img/score-b.png"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Product Description ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        class: "fa fa-angle-down",
        "aria-hidden": "true"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Box is  a  modern  content  of  management")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Funding  History ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        class: "fa fa-angle-down",
        "aria-hidden": "true"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Total  Funding: $150m")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
        colspan: "5",
        className: "st stOpen"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
        className: "subTable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Founded"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "2005")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Key Investors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "DFG, scale, venture partners")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Founders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Arone Levie, Dylon smith"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Company Info ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        class: "fa fa-angle-down",
        "aria-hidden": "true"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Johnson")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Features ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        class: "fa fa-angle-down",
        "aria-hidden": "true"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Johnson")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Customer Case Studies ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        class: "fa fa-angle-down",
        "aria-hidden": "true"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, "Johnson"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        class: "modal fade",
        id: "newVendor",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        class: "modal-dialog",
        role: "document"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        class: "modal-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        class: "modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
        class: "modal-title",
        id: "exampleModalLabel"
      }, "Add New Vendor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        class: "modal-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
        action: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        class: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        for: "email"
      }, "Vendor Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        type: "text",
        class: "form-control",
        id: "name"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        class: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        for: "email"
      }, "Email address:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        type: "email",
        class: "form-control",
        id: "email"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        class: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        for: "pwd"
      }, "Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
        type: "password",
        class: "form-control",
        id: "pwd"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
        type: "submit",
        class: "btn btn-primary"
      }, "Submit")), "      ")))));
    }
  }]);

  return login;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ 670:
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
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(671);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(672);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(720);
/* harmony import */ var _Sentry_sentry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(783);









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

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(673);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(700);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(715);
/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(653);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(716);
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

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(716);
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

/* harmony default export */ __webpack_exports__["default"] = (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(config, __webpack_require__(718)("./" + env + ".js").default || {}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(684)))

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.js": 719,
	"./index.js": 715
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
webpackContext.id = 718;

/***/ }),

/***/ 719:
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

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryInitialize", function() { return SentryInitialize; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(715);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(720);


var SentryInitialize = function SentryInitialize() {
  _sentry_browser__WEBPACK_IMPORTED_MODULE_1__["init"]({
    dsn: _config__WEBPACK_IMPORTED_MODULE_0__["default"].sentry_dsn
  });
};

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(785);

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

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(650)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "do_login", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["do_login"]; });



/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "do_login", function() { return do_login; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(286);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(788);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(672);
/* harmony import */ var _util_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(912);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(715);
/* harmony import */ var _Sentry_sentry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(783);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(716);
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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(789);

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

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixer; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(790);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);


function prefixer(types, prefix) {
  return lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()(types, function (result, value, key) {
    result[key] = "".concat(prefix, "/").concat(key); // eslint-disable-line no-param-reassign

    return result;
  }, {});
}

/***/ }),

/***/ 912:
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

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReduxStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(915);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(916);




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

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(917);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(920);




var reduxState = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  Home: _home__WEBPACK_IMPORTED_MODULE_3__["default"],
  header: _header__WEBPACK_IMPORTED_MODULE_1__["default"],
  signup: _auth__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reduxState);

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(918);
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

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(789);

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

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(788);
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

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
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

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(789);

var prefix = '@@homeTypes';
var types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_prefixer__WEBPACK_IMPORTED_MODULE_0__["default"])(types, prefix));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzPzE0MWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbm90LWZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ub3QtZm91bmQvTm90Rm91bmQuc2Nzcz84YzI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcz8xZGZkIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9oZWxwZXJmdW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9BcGkvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBzeW5jIF5cXC5cXC8uKlxcLmpzJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9TZW50cnkvc2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNzcz9hY2Y5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGgvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbm90aWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY3JlYXRlUmVkdXhTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC90eXBlcy9ob21lLmpzIl0sIm5hbWVzIjpbInByZWxvYWRlZFN0YXRlIiwid2luZG93IiwiX19QUkVMT0FERURfU1RBVEVfXyIsInN0b3JlIiwiY3JlYXRlUmVkdXhTdG9yZSIsImh5ZHJhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiU2VudHJ5SW5pdGlhbGl6ZSIsInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImNvbXBvbmVudCIsIkxvZ2luIiwiTm90Rm91bmQiLCJwdWJsaWNyb3V0ZXMiLCJwcml2YXRlUm91dGVzIiwicHJvdGVjdGVkUm91dGVzIiwiUm91dGVyIiwiaGlkZUhlYWQiLCJ1cmwiLCJ1c2VyRGF0YSIsImN1cnJlbnRBZGRyZXNzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsIm1hcCIsInJvdXRlIiwiUHVibGljUm91dGUiLCJDb21wb25lbnQiLCJyZXN0Iiwib2JqIiwicHJldlBhdGgiLCJwcm9wcyIsIlByaXZhdGVSb3V0ZSIsIl8iLCJpc0VtcHR5IiwiY29uc29sZSIsImxvZyIsIlByb3RlY3RlZFJvdXRlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsIkFwcCIsInN0eWxlcyIsIlRvcEJhciIsIkxpbmsiLCJjaGlsZHJlbiIsIkZvb3RlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic2V0Q29va2llIiwiZGF0YSIsIm5hbWUiLCJDb29raWVzIiwic2V0Iiwic2V0TGlmZXRpbWVDb29raWUiLCJkYXkiLCJleHBpcmVzIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0SlNPTiIsInNpZ251cCIsImRvX2xvZ2luIiwibG9naW4iLCJkZWZhdWx0RXJyb3JzIiwiZW1haWwiLCJwYXNzd29yZCIsImZhcURhdGEiLCJpc0xvYWRpbmciLCJtb2RhbCIsInR5cGVQYXNzIiwiZm9ybURhdGEiLCJ0b2dnbGVTaG93cGFzcyIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJvbkNoYW5nZUhhbmRsZSIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpc1N1Y2Nlc3MiLCJocmVmIiwiZXJyb3JzIiwiaXNFcnJvciIsImxlbmd0aCIsImNvbnZlcnRGbG9hdFR3b0RlY2ltYWwiLCJudW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNvbnZlcnRUd29EZWNpbWFsUm91bmQiLCJNYXRoIiwicm91bmQiLCJsb2dFcnJvclRvU2VydmVyIiwicGFyYW1zIiwiZXJyb3IiLCJ0eXBlIiwiU2VudHJ5IiwiaW52YWxpZFVybCIsImFkZGl0aW9uYWxJbmZvIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJoZWFkZXJzIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJjb25maWciLCJBUEkiLCJwb3N0Iiwic3RyaW5naWZ5IiwicmVzIiwic2V0VGltZW91dCIsImFkZHJlc3NGb3JtYXRlciIsInJlZ2V4IiwiYWRkcmVzcyIsIm1hdGNoIiwiaW5kZXhPZiIsImZvcm1hdHRlZEFkZHJlc3MiLCJtb2RBZGRyZXNzIiwidGVzdCIsIl9hZGRyZXNzIiwidmFsaWRBZHJzIiwibnVtYmVyIiwic3RyZWV0IiwiY2l0eSIsImNvdW50cnkiLCJzdGF0ZV9jb2RlIiwiemlwY29kZSIsImlzVmFsaWRFbWFpbCIsInBhdHRlcm4iLCJTdHJpbmciLCJBUElfVVJMIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiZGVmYXVsdHMiLCJjb21tb24iLCJhdXRoIiwia2V5IiwiZW52IiwicHJvY2VzcyIsInBvcnQiLCJQT1JUIiwiZXh0ZW5kIiwicmVxdWlyZSIsImRlZmF1bHQiLCJmb29kamV0c1VybCIsImFwaV9lbmQiLCJHVE1fY29kZSIsIkdTVE1fY29kZSIsInBheXBhbCIsIm1vZGUiLCJkc24iLCJzZW50cnlfZHNuIiwic2VuZERhdGEiLCJ1c2VybmFtZSIsIlRZUEUiLCJTSUdOSU4iLCJub3RpZnlFcnJvciIsIlNJR05JTl9FUlJPUiIsInNldEl0ZW0iLCJTSUdOSU5fU1VDQ0VTUyIsInByZWZpeCIsInR5cGVzIiwiU0lHTlVQIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRVJST1IiLCJBRERfREVMX0FERFIiLCJBRERfREVMX0FERFJfU1VDQ0VTUyIsIkFERF9ERUxfQUREUl9FUlJPUiIsInByZWZpeGVyIiwicmVkdWNlIiwicmVzdWx0Iiwic3VjY2VzcyIsIm15Q29sb3IiLCJiYWNrZ3JvdW5kIiwidGV4dCIsIm5vdGlmeSIsInNob3ciLCJoIiwid2FybmluZyIsImN1c3RvbWVycm9yIiwiaGlkZSIsImxvZ2dlck1pZGRsZXdhcmUiLCJjcmVhdGVMb2dnZXIiLCJzZXJ2ZXIiLCJlbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdXhTdGF0ZSIsImNvbWJpbmVSZWR1Y2VycyIsIkhvbWUiLCJoZWFkZXIiLCJhY3Rpb24iLCJSRVFfREFUQSIsIkhlYWRlcmRhdGEiLCJSRVNfREFUQSIsIkZBSUxfREFUQSIsIlJFUV9BRERSRVNTX0RBVEEiLCJBZHJlc3NkYXRhIiwiUkVTX0FERFJFU1NfREFUQSIsIkZBSUxfQUREUkVTU19EQVRBIiwiaW5pdGlhbFN0YXRlIiwiaXNQcm9jZXNzaW5nIiwiaXNBZGRyZXNzRXJyb3IiLCJIb21lZGF0YSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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RTtBQUhDLENBQWQ7QUFRZTVCLHdIQUFRLENBQUNQLEtBQUQsRUFBUUQsTUFBUixDQUF2QixFIiwiZmlsZSI6Ii4vbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsMV0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICcuLi91bml2ZXJzYWwvcm91dGVzJztcclxuaW1wb3J0IGNyZWF0ZVJlZHV4U3RvcmUgZnJvbSAnLi4vdW5pdmVyc2FsL2NyZWF0ZVJlZHV4U3RvcmUnO1xyXG5cclxuLy8gR3JhYiB0aGUgc3RhdGUgZnJvbSBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBpbnRvIHRoZSBzZXJ2ZXItZ2VuZXJhdGVkIEhUTUxcclxuY29uc3QgcHJlbG9hZGVkU3RhdGUgPSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxyXG5cclxuLy8gQWxsb3cgdGhlIHBhc3NlZCBzdGF0ZSB0byBiZSBnYXJiYWdlLWNvbGxlY3RlZFxyXG5kZWxldGUgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcclxuXHJcbi8vIENyZWF0ZSBSZWR1eCBzdG9yZSB3aXRoIGluaXRpYWwgc3RhdGVcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVSZWR1eFN0b3JlKHsgcHJlbG9hZGVkU3RhdGUgfSk7XHJcblxyXG5oeWRyYXRlKFxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgIDxSb3V0ZXIgLz5cclxuICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICA8L1Byb3ZpZGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9jb250YWluZXJzL0FwcCc7XHJcbmltcG9ydCB7Z2V0Q29va2llfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xyXG5cclxuLy9pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29udGFpbmVycy9BYm91dCc7XHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb250YWluZXJzL05vdEZvdW5kJztcclxuXHJcbmltcG9ydCAnLi9nbG9iYWwuY3NzJ1xyXG4vL2ltcG9ydCB7IGdldEFib3V0RGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWJvdXQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9ucywge25vdGlmeX0gZnJvbSAncmVhY3Qtbm90aWZ5LXRvYXN0JztcclxuXHJcblxyXG5cclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbnRhaW5lcnMvTG9naW4nO1xyXG5cclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7U2VudHJ5SW5pdGlhbGl6ZSB9IGZyb20gXCIuLi9TZW50cnkvc2VudHJ5XCJcclxuU2VudHJ5SW5pdGlhbGl6ZSgpO1xyXG4vLyBmb3IgbW9yZSBkZXRhaWxzIHNlZSBodHRwczovL3JlYWN0dHJhaW5pbmcuY29tL3JlYWN0LXJvdXRlci93ZWIvZ3VpZGVzL3NlcnZlci1yZW5kZXJpbmdcclxuLy8gc3BlY2lmeSByb3V0ZXMgd2l0aCB0aGUgYXNueWMgZnVuY3Rpb24gcmVxdWlyZWQgdG8gZmV0Y2ggdGhlIGRhdGEgdG8gcmVuZGVyIHRoZSByb3V0ZVxyXG4vLyBJTVBPUlRBTlQ6IHRoZSBsb2FkRGF0YSBmdW5jdGlvbiBtdXN0IHJldHVybiBhIFByb21pc2VcclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFt7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICAgIGNvbXBvbmVudDogTG9naW5cclxuICB9LCB7XHJcbiAgICBjb21wb25lbnQ6IE5vdEZvdW5kXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHB1YmxpY3JvdXRlcyA9IFtcclxuICAge1xyXG4gIHBhdGg6ICcvbG9naW4nLFxyXG4gIGNvbXBvbmVudDogTG9naW4gICAgXHJcbn1cclxuXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpdmF0ZVJvdXRlcyA9IFtcclxuXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvdGVjdGVkUm91dGVzID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3V0ZXIoKSB7XHJcbiAgbGV0ICBoaWRlSGVhZCA9IHRydWU7XHJcbiAgbGV0IHVybCAgICAgICAgICAgICAgICAgICA9ICAgJyc7XHJcbiAgbGV0IHVzZXJEYXRhICAgID0ge307XHJcbiAgbGV0IGN1cnJlbnRBZGRyZXNzICAgID0ge307XHJcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgdXNlckRhdGEgICAgICAgICAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpIHx8ICd7fScpO1xyXG4gIFxyXG4gIH1cclxuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSkgeyAgICAgIFxyXG4gICAgdXJsICAgICAgICAgICAgICAgICAgICAgPSAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gICAgaWYgKHVybFsxXSA9PSAnJyB8fCB1cmxbMV0gPT0gJ2xvZ2luJ3x8IHVybFsxXSA9PSAnc2lnbnVwJykge1xyXG4gICAgICBoaWRlSGVhZCAgICAgICAgID0gICBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICB7XHJcbiAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyBcclxuICAgICAgPGRpdj4gICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICA8Tm90aWZpY2F0aW9ucyAvPlxyXG4gICAgIFxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICB7cHJvdGVjdGVkUm91dGVzLm1hcCgocm91dGUpID0+IChcclxuICAgICAgICAgICAgPFByb3RlY3RlZFJvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gdXNlckRhdGE9e3VzZXJEYXRhfSBwcmV2UGF0aD17dXJsWzFdfS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHtwcml2YXRlUm91dGVzLm1hcCgocm91dGUpID0+IChcclxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBrZXk9e3JvdXRlLnBhdGh9IHBhdGg9e3JvdXRlLnBhdGh9IHJvdXRlPXtyb3V0ZX0gY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9IHVzZXJEYXRhPXt1c2VyRGF0YX0gIHByZXZQYXRoPXt1cmxbMV19Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAge3B1YmxpY3JvdXRlcy5tYXAocm91dGUgPT4oXHJcbiAgICAgICAgICAgICAgPFB1YmxpY1JvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gcHJldlBhdGg9e3VybFsxXX0vPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3JvdXRlcy5tYXAocm91dGUgPT4oXHJcbiAgICAgICAgICAgICAgPFJvdXRlIGtleT17YGluZGV4ICR7cm91dGUucGF0aH1gfSB7Li4ucm91dGV9Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgICA8L2Rpdj4gICBcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQdWJsaWNSb3V0ZSh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pIHtcclxuICBsZXQgb2JqID0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9O1xyXG4gIGxldCBwcmV2UGF0aCAgPSByZXN0LnByZXZQYXRoIHx8ICcnO1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofSBcclxuICAgICAgICAvKiBjb21wb25lbnQ9e29iai5jb21wb25lbnR9ICovXHJcbiAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcclxuICAgICAgICAgIDxvYmouY29tcG9uZW50IHsuLi5wcm9wc30gcHJldlBhdGg9e3ByZXZQYXRofSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBQcml2YXRlUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XHJcbiAgbGV0IG9iaiA9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfTtcclxuICAvL2NvbnNvbGUubG9nKCdMb2NhbCBTdG9yYWdlIDogJywgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlRGF0YScpKSk7XHJcbiAgbGV0IGN1cnJlbnRBZGRyZXNzICA9IHJlc3QuY3VycmVudEFkZHJlc3MgfHwge307XHJcbiAgbGV0IHVzZXJEYXRhICA9IHJlc3QudXNlckRhdGEgfHwge307XHJcbiAgbGV0IHByZXZQYXRoICA9IHJlc3QucHJldlBhdGggfHwgJyc7XHJcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eSh1c2VyRGF0YSkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdSb3V0ZSBQUml2YXRlIDogJywgcmVzdC5yb3V0ZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFJvdXRlIGtleT17YGluZGV4ICR7b2JqLnBhdGh9YH0gcGF0aD17b2JqLnBhdGh9IFxyXG4gICAgICAgIC8qIGNvbXBvbmVudD17b2JqLmNvbXBvbmVudH0gKi9cclxuICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxyXG4gICAgICAgICAgPG9iai5jb21wb25lbnQgey4uLnByb3BzfSB1c2VyRGF0YT17dXNlckRhdGF9IHByZXZQYXRoPXtwcmV2UGF0aH0gLz5cclxuICAgICAgICApfVxyXG4gICAgLz5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlZGlyZWN0XHJcbiAgICAgICAgdG89e3tcclxuICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIlxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBQcm90ZWN0ZWRSb3V0ZSh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pIHtcclxuICBsZXQgb2JqID0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9O1xyXG4gIGxldCB1c2VyRGF0YSAgPSByZXN0LnVzZXJEYXRhIHx8IHt9O1xyXG4gIGxldCBwcmV2UGF0aCAgPSByZXN0LnByZXZQYXRoIHx8ICcnO1xyXG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICFfLmlzRW1wdHkodXNlckRhdGEpKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFJvdXRlIGtleT17YGluZGV4ICR7b2JqLnBhdGh9YH0gcGF0aD17b2JqLnBhdGh9XHJcbiAgICAgIC8qIGNvbXBvbmVudD17b2JqLmNvbXBvbmVudH0gKi9cclxuICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcclxuICAgICAgICA8b2JqLmNvbXBvbmVudCB7Li4ucHJvcHN9IHVzZXJEYXRhPXt1c2VyRGF0YX0gcHJldlBhdGg9e3ByZXZQYXRofS8+XHJcbiAgICAgICl9XHJcbiAgICAvPlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVkaXJlY3RcclxuICAgICAgICB0bz17e1xyXG4gICAgICAgICAgcGF0aG5hbWU6IFwiL2xvZ2luXCJcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2FwcCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7fSwgZGlzcGF0Y2gpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShBcHApO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BcHAnO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ub3BCYXJ9PlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30gdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9IHRvPVwiL0ludmFsaWRMaW5rXCI+SW52YWxpZExpbms8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfSB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyfT5XaWxsaWFtIFdvb2RoZWFkIC0gTUlUIExpY2Vuc2U8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxyXG59O1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkFwcF9fQXBwX19fVnR3QnQge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbi5BcHBfX1RvcEJhcl9fXzN5dTlGIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uQXBwX19MaW5rX19fMjU0WXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAuQXBwX19MaW5rX19fMjU0WXIgKyAuQXBwX19MaW5rX19fMjU0WXIge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuXFxuLkFwcF9fRm9vdGVyX19fMTFmZnEge1xcbiAgY29sb3I6ICNBQUFBQUE7IH1cXG5cXG4uQXBwX19hbGlnbi1pdGVtcy1jZW50ZXJfX19CUjIwbiBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgNSU7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAuQXBwX19hbGlnbi1pdGVtcy1jZW50ZXJfX19CUjIwbiBoMiB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJBcHAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLGFBQWEsRUFBRTs7QUFFakI7RUFDRSxxQkFBcUIsRUFBRTtFQUN2QjtJQUNFLGdCQUFnQixFQUFFOztBQUV0QjtFQUNFLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBRTs7QUFFakI7RUFDRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVUsRUFBRSxFQUFFXCIsXCJmaWxlXCI6XCJBcHAuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQXBwIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IH1cXG5cXG4uVG9wQmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uTGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5MaW5rICsgLkxpbmsge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuXFxuLkZvb3RlciB7XFxuICBjb2xvcjogI0FBQUFBQTsgfVxcblxcbi5hbGlnbi1pdGVtcy1jZW50ZXIgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDUlOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLmFsaWduLWl0ZW1zLWNlbnRlciBoMiB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwOyB9IH1cXG5cIl19XSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIkFwcFwiOiBcIkFwcF9fQXBwX19fVnR3QnRcIixcblx0XCJUb3BCYXJcIjogXCJBcHBfX1RvcEJhcl9fXzN5dTlGXCIsXG5cdFwiTGlua1wiOiBcIkFwcF9fTGlua19fXzI1NFlyXCIsXG5cdFwiRm9vdGVyXCI6IFwiQXBwX19Gb290ZXJfX18xMWZmcVwiLFxuXHRcImFsaWduLWl0ZW1zLWNlbnRlclwiOiBcIkFwcF9fYWxpZ24taXRlbXMtY2VudGVyX19fQlIyMG5cIlxufTsiLCJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuLy9jb25zb2xlLmxvZygnQ29va2llIENvbmZpZyA6ICcsIGNvbmZpZy5jb29raWUpO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldCA9IChuYW1lID0gJ2Zvb2RqZXRzX25ld19tZXJjaGFudCcpID0+e1xyXG4vLyBcdGlmKGNvbmZpZy5jb29raWUuaG9zdG5hbWUgPT09ICdodHRwOi8vY29uc29sZS5kZXYuZm9vZGpldHMuY29tJykge1xyXG4vLyBcdFx0bmFtZSA9ICdkZXZfJytuYW1lXHJcbi8vIFx0fVxyXG5cclxuLy8gICBcdHJldHVybiBDb29raWVzLmdldEpTT04obmFtZSk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3Qgc2V0ID0gKGRhdGEsIG5hbWUgPSAnZm9vZGpldHNfbmV3X21lcmNoYW50JykgPT57XHJcbi8vIFx0aWYoY29uZmlnLmNvb2tpZS5ob3N0bmFtZSA9PT0gJ2h0dHA6Ly9jb25zb2xlLmRldi5mb29kamV0cy5jb20nKSB7XHJcbi8vIFx0XHRuYW1lID0gJ2Rldl8nK25hbWVcclxuLy8gXHR9XHJcbi8vIFx0aWYoISFjb25maWcuY29va2llLmRvbWFpbilcclxuLy8gXHRcdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEsIHtkb21haW46IGNvbmZpZy5jb29raWUuZG9tYWlufSk7XHJcbi8vIFx0ZWxzZVxyXG4vLyBcdFx0Q29va2llcy5zZXQobmFtZSwgZGF0YSk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgcmVtb3ZlID0gKG5hbWUgPSAnZm9vZGpldHNfbmV3X21lcmNoYW50JykgPT57XHJcbi8vIFx0aWYoY29uZmlnLmNvb2tpZS5ob3N0bmFtZSA9PT0gJ2h0dHA6Ly9jb25zb2xlLmRldi5mb29kamV0cy5jb20nKSB7XHJcbi8vIFx0XHRuYW1lID0gJ2Rldl8nK25hbWVcclxuLy8gXHR9XHJcblxyXG4vLyBcdGlmKCEhY29uZmlnLmNvb2tpZS5kb21haW4pXHJcbi8vIFx0XHRDb29raWVzLnJlbW92ZShuYW1lLCB7ZG9tYWluOiBjb25maWcuY29va2llLmRvbWFpbn0pO1xyXG4vLyBcdGVsc2VcclxuLy8gXHRcdENvb2tpZXMucmVtb3ZlKG5hbWUpO1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChkYXRhLCBuYW1lKSA9PntcclxuICBcdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExpZmV0aW1lQ29va2llID0gKGRhdGEsIG5hbWUsZGF5KSA9PntcclxuXHRDb29raWVzLnNldChuYW1lLCBkYXRhLCB7IGV4cGlyZXM6IGRheSB9KTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKG5hbWUpID0+e1xyXG4gIFx0Q29va2llcy5yZW1vdmUobmFtZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKG5hbWUpID0+e1xyXG4gIFx0cmV0dXJuIENvb2tpZXMuZ2V0SlNPTihuYW1lKTtcclxufTsiLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL25vdC1mb3VuZCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHt9O1xyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7fSwgZGlzcGF0Y2gpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShOb3RGb3VuZCk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL05vdEZvdW5kJztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05vdEZvdW5kLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMTAwdmhcIj48aDIgY2xhc3NOYW1lPVwibS0wIGJsdWUtZGVmYXVsdFwiPlJvdXRlIE5vdCBGb3VuZDwvaDI+PC9kaXY+ICAgICAgXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL05vdEZvdW5kLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL05vdEZvdW5kLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLk5vdEZvdW5kX19Ob3RGb3VuZF9fXzJ6Y3BCIHtcXG4gIGNvbG9yOiBpbmhlcml0OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiTm90Rm91bmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWMsRUFBRVwiLFwiZmlsZVwiOlwiTm90Rm91bmQuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTm90Rm91bmQge1xcbiAgY29sb3I6IGluaGVyaXQ7IH1cXG5cIl19XSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIk5vdEZvdW5kXCI6IFwiTm90Rm91bmRfX05vdEZvdW5kX19fMnpjcEJcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHl7ICBvdmVyZmxvdy14OiBoaWRkZW47IHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO31cXHJcXG4qe3BhZGRpbmc6IDA7IG1hcmdpbjogMDsgb3V0bGluZTogMDsgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBib3gtc2l6aW5nOiBib3JkZXItYm94O31cXHJcXG5ib2R5e2ZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNDAwOyBsaW5lLWhlaWdodDogMThweDsgY29sb3I6ICMzMzMzMzM7fVxcclxcblxcclxcbmltZ3ttYXgtd2lkdGg6IDEwMCU7fVxcclxcbmZpZ3VyZXtwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGRpc3BsYXk6IGlubGluZS1ibG9jazt9XFxyXFxuYXtjb2xvcjogIzIwOURFMjt9XFxyXFxuYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiAjMjA5REUyO31cXHJcXG5cXHJcXG5cXHJcXG4uY1RhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcclxcbn1cXHJcXG4uY1RhYmxlIHRoe3Bvc2l0aW9uOiByZWxhdGl2ZTt9XFxyXFxuLmNUYWJsZSB0aCBpe3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE1cHg7IHRvcDogMTVweDsgY3Vyc29yOiBwb2ludGVyO31cXHJcXG4uY1RhYmxlIHRoLCAuY1RhYmxlIHRkIHtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxuLmNUYWJsZS5vbmVDb2wgdGgsIC5jVGFibGUub25lQ29sIHRkLCAuY1RhYmxlLm9uZUNvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDcyJTt9XFxyXFxuLmNUYWJsZS50d29Db2wgdGgsIC5jVGFibGUudHdvQ29sIHRkLCAuY1RhYmxlLnR3b0NvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDU0JTt9XFxyXFxuLmNUYWJsZS50aHJlZUNvbCB0aCwgLmNUYWJsZS50aHJlZUNvbCB0ZCwgLmNUYWJsZS50aHJlZUNvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDM2JTt9XFxyXFxuLmNUYWJsZS5mb3VyQ29sIHRoLCAuY1RhYmxlLmZvdXJDb2wgdGQsIC5jVGFibGUuZm91ckNvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDE4JTt9XFxyXFxuXFxyXFxuLmNUYWJsZSB0aDpmaXJzdC1jaGlsZCwgLmNUYWJsZSB0ZDpmaXJzdC1jaGlsZHsgd2lkdGg6IDI4JTt9XFxyXFxuLmNUYWJsZSB0aHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxcclxcbi5jVGFibGUgdGggc3BhbntkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxMnB4O31cXHJcXG5cXHJcXG4uY1RhYmxlIHRkLnN0e3BhZGRpbmc6IDA7IGJvcmRlci10b3A6IG5vbmU7IGJvcmRlci1ib3R0b206IG5vbmU7fSBcXHJcXG4uc3ViVGFibGV7d2lkdGg6IDEwMCU7IGRpc3BsYXk6IG5vbmU7fVxcclxcbi5zdE9wZW4gLnN1YlRhYmxleyBkaXNwbGF5OnRhYmxlO31cXHJcXG4uc3ViVGFibGUgdHI6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxcclxcbi5zdWJUYWJsZSB0ZHt3aWR0aDogMTglO31cXHJcXG4uc3ViVGFibGUgdGQ6Zmlyc3QtY2hpbGR7IHdpZHRoOiAyOCUhaW1wb3J0YW50O31cXHJcXG5cXHJcXG4udGFje3RleHQtYWxpZ246IGNlbnRlcjt9XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbic7XHJcbmltcG9ydCB7IGRvX2xvZ2luIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9hdXRoJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhzdGF0ZSlcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogc3RhdGUuc2lnbnVwXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xyXG4gICAgZG9fbG9naW46ZG9fbG9naW4sXHJcbiAgfSwgZGlzcGF0Y2gpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShMb2dpbik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vbG9naW4nOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7aXNWYWxpZEVtYWlsfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcmZ1bmMnO1xyXG5cclxuaW1wb3J0ICcuL2xvZ2luLmNzcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmRlZmF1bHRFcnJvcnMgICAgPSB7XHJcbiAgICAgIGVtYWlsOiBmYWxzZSxcclxuICAgICAgcGFzc3dvcmQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlICAgICAgICAgICAgICAgICAgICAgID0ge1xyXG4gICAgICBmYXFEYXRhICAgICAgICAgOiBbXSxcclxuICAgICAgaXNMb2FkaW5nICAgICAgIDogdHJ1ZSxcclxuICAgICAgbW9kYWwgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICB0eXBlUGFzczogJ3Bhc3N3b3JkJyxcclxuICAgICAgZm9ybURhdGEgICAgICAgICAgOiB7XHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgIHRoaXMudG9nZ2xlU2hvd3Bhc3MgID0gdGhpcy50b2dnbGVTaG93cGFzcy5iaW5kKHRoaXMpO1xyXG4gICB0aGlzLmhhbmRsZVN1Ym1pdCAgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICB0aGlzLiBvbkNoYW5nZUhhbmRsZSA9IHRoaXMub25DaGFuZ2VIYW5kbGUuYmluZCh0aGlzKTtcclxuICBcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkgeyAgfVxyXG4gIHRvZ2dsZVNob3dwYXNzKCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICB0eXBlUGFzczogdGhpcy5zdGF0ZS50eXBlUGFzcyA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlSGFuZGxlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmb3JtRGF0YSA6IHtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLmZvcm1EYXRhLFxyXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1EYXRhICA9IHRoaXMuc3RhdGUuZm9ybURhdGEgfHwge307XHJcbiAgICB0aGlzLnByb3BzLmRvX2xvZ2luKGZvcm1EYXRhKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykgeyAgICBcclxuICAgIGlmKCEhcHJvcHMuZGF0YSAmJiAhIXByb3BzLmRhdGEuaXNTdWNjZXNzKSB7XHJcbiAgICAgIFxyXG4gICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9kYXNoYm9hcmRcIjtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgIGxldCBmb3JtRGF0YVx0PVx0dGhpcy5zdGF0ZS5mb3JtRGF0YSB8fCB7fTtcclxuXHRcdGxldCBlcnJvcnNcdFx0PVx0ey4uLnRoaXMuZGVmYXVsdEVycm9yc307XHJcblx0XHRsZXQgaXNFcnJvclx0XHQ9XHRmYWxzZTtcclxuICAgIGlmKCEhIWZvcm1EYXRhLmVtYWlsKSB7XHJcbiAgICAgICAgZXJyb3JzLmVtYWlsICAgICAgICA9XHR0cnVlO1xyXG4gICAgICAgIGlzRXJyb3JcdFx0XHRcdD1cdHRydWU7XHJcbiAgICB9XHJcblx0XHRpZighISFmb3JtRGF0YS5wYXNzd29yZCkge1xyXG5cdFx0XHRlcnJvcnMucGFzc3dvcmRcdFx0PVx0dHJ1ZTtcclxuXHRcdFx0aXNFcnJvclx0XHRcdFx0PVx0dHJ1ZTtcclxuICAgIH0gXHJcbiAgICBpZighIWZvcm1EYXRhLnBhc3N3b3JkICYmIGZvcm1EYXRhLnBhc3N3b3JkLmxlbmd0aDw0KSB7XHJcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkXHRcdD1cdHRydWU7XHJcbiAgICAgICAgaXNFcnJvclx0XHQgICAgICAgID1cdHRydWU7XHJcbiAgICB9XHJcblx0XHRyZXR1cm4ge2lzRXJyb3I6IGlzRXJyb3IsIGVycm9yczogZXJyb3JzfTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2lucFwiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJjVGFibGUgb25lQ29sXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNuZXdWZW5kb3JcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hZGQtbmV3LnBuZ1wiLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZGQgTmV3IFZlbmRvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ib3gucG5nXCIvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkJveCA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdGg+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiA8dGg+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZHJvcGJveC5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RHJvcGJveDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZ29vZ2xlLWRyaXZlLnBuZ1wiLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Hb29nbGUgRHJpdmU8L3NwYW4+ICBcclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvU2FsZXNmb3JjZS5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U2FsZXMgRm9yY2U8L3NwYW4+ICBcclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3RoPiAqL31cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+T3ZlcmFsbCBTY29yZSA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFjXCI+PGltZyBzcmM9XCJpbWcvc2NvcmUtYi5wbmdcIi8+PC90ZD5cclxuICAgICAgICAgICAgey8qIDx0ZCBjbGFzc05hbWU9XCJ0YWNcIj48aW1nIHNyYz1cImltZy9zY29yZS1yLnBuZ1wiLz48L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFjXCI+PGltZyBzcmM9XCJpbWcvc2NvcmUtci5wbmdcIi8+PC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhY1wiPjxpbWcgc3JjPVwiaW1nL3Njb3JlLWIucG5nXCIvPjwvdGQ+ICovfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPlByb2R1Y3QgRGVzY3JpcHRpb24gPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5Cb3ggaXMgIGEgIG1vZGVybiAgY29udGVudCAgb2YgIG1hbmFnZW1lbnQ8L3RkPlxyXG4gICAgICAgICAgICB7LyogPHRkPkRyb3AgQm94IGlzIGEgY2xvdWQgYmFzZWQgZmlsZSBtYW5hZ2VtZW50PC90ZD5cclxuICAgICAgICAgICAgPHRkPlN0b3JlLCBTaW5rIGFuZCBzYXJlIGZpbGUgZWFzaWx5PC90ZD5cclxuICAgICAgICAgICAgPHRkPlNhbGVmb3JjZSBpcyBhIGNsb3VkIGJhc2VkIGZpbGUgc3RvcmFnZTwvdGQ+ICovfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+RnVuZGluZyAgSGlzdG9yeSA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC90ZD5cclxuICAgICAgICAgICAgPHRkPlRvdGFsICBGdW5kaW5nOiAkMTUwbTwvdGQ+XHJcbiAgICAgICAgICAgIHsvKiA8dGQ+VG90YWwgIEZ1bmRpbmc6ICQxNzBtPC90ZD5cclxuICAgICAgICAgICAgPHRkPlRvdGFsICBGdW5kaW5nOiAkMzYuMW08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+VG90YWwgIEZ1bmRpbmc6ICQ3NTYuMW08L3RkPiAqL31cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgY29sc3Bhbj1cIjVcIiBjbGFzc05hbWU9XCJzdCBzdE9wZW5cIj5cclxuPHRhYmxlIGNsYXNzTmFtZT1cInN1YlRhYmxlXCI+XHJcbiAgPHRyPlxyXG4gICAgPHRkPkZvdW5kZWQ8L3RkPlxyXG4gICAgPHRkPjIwMDU8L3RkPlxyXG4gICAgey8qIDx0ZD4yMDA3PC90ZD5cclxuICAgIDx0ZD4xOTk4PC90ZD5cclxuICAgIDx0ZD4yMDAyPC90ZD4gICAgICovfVxyXG4gIDwvdHI+XHJcbiAgPHRyPlxyXG4gICAgPHRkPktleSBJbnZlc3RvcnM8L3RkPlxyXG4gICAgPHRkPkRGRywgc2NhbGUsIHZlbnR1cmUgcGFydG5lcnM8L3RkPlxyXG4gICAgey8qIDx0ZD5JbmRleCBWYWxsdWUgc2VxdW9pYTwvdGQ+XHJcbiAgICA8dGQ+U2VxdW9pYSBrbGluZXIgaW5kZXggVmFsbHVlPC90ZD5cclxuICAgIDx0ZD5zZXF1b2lhIExhcnJ5IHBhZ2U8L3RkPiAgICAgKi99XHJcbiAgPC90cj5cclxuICA8dHI+XHJcbiAgICA8dGQ+Rm91bmRlcnM8L3RkPlxyXG4gICAgPHRkPkFyb25lIExldmllLCBEeWxvbiBzbWl0aDwvdGQ+XHJcbiAgICB7LyogPHRkPkFyc2hhIEZlZGFyaXNoPC90ZD5cclxuICAgIDx0ZD5MYXJyeSBwYWdlIHNpZyBiaW48L3RkPlxyXG4gICAgPHRkPktsZWluZXIgc2VnZXJ5IGJpbjwvdGQ+ICAgICAqL31cclxuICA8L3RyPlxyXG48L3RhYmxlPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+ICAgICAgICAgIFxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+Q29tcGFueSBJbmZvIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+Sm9obnNvbjwvdGQ+XHJcbiAgICAgICAgICAgIHsvKiA8dGQ+Njc8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+Njc8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+Njc8L3RkPiAqL31cclxuICAgICAgICAgIDwvdHI+ICAgXHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZD5GZWF0dXJlcyA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC90ZD5cclxuICAgICAgICAgICAgPHRkPkpvaG5zb248L3RkPlxyXG4gICAgICAgICAgICB7LyogPHRkPjY3PC90ZD5cclxuICAgICAgICAgICAgPHRkPjY3PC90ZD5cclxuICAgICAgICAgICAgPHRkPjY3PC90ZD4gKi99XHJcbiAgICAgICAgICA8L3RyPiAgIFxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+Q3VzdG9tZXIgQ2FzZSBTdHVkaWVzIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+Sm9obnNvbjwvdGQ+XHJcbiAgICAgICAgICAgIHsvKiA8dGQ+Njc8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+Njc8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+Njc8L3RkPiAqL31cclxuICAgICAgICAgIDwvdHI+ICAgIFxyXG4gICAgICAgIDwvdGFibGU+XHJcblxyXG5cclxuICAgICAgICB7LyogIE1vZGFsICovfVxyXG48ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwibmV3VmVuZG9yXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5BZGQgTmV3IFZlbmRvcjwvaDU+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5WZW5kb3IgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsIGFkZHJlc3M6PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIiAvPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwicHdkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicHdkXCIgLz5cclxuICA8L2Rpdj5cclxuICBcclxuICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG48L2Zvcm0+ICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBcclxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IFJlbWVtYmVyIG1lPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgQVBJIGZyb20gJy4uL0FwaS9BcGknO1xyXG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9icm93c2VyJztcclxuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uL1NlbnRyeS9zZW50cnlcIjtcclxuU2VudHJ5SW5pdGlhbGl6ZSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRGbG9hdFR3b0RlY2ltYWwgPSBmdW5jdGlvbihudW0pIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSkudG9GaXhlZCgyKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRUd29EZWNpbWFsUm91bmQgPSBmdW5jdGlvbihudW0pIHtcclxuICAgIHJldHVybiArKE1hdGgucm91bmQobnVtICsgXCJlKzJcIikgKyBcImUtMlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0Vycm9yVG9TZXJ2ZXIgPSBhc3luYyBmdW5jdGlvbihwYXJhbXMsIGVycm9yKSB7XHJcbiAgICBcclxuICAgIGlmKHBhcmFtcy50eXBlID09PSAnY2F0Y2gnKVxyXG4gICAgICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKGVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIGNvbnN0IGludmFsaWRVcmwgICAgPScvaW52YWxpZC1saW5rJztcclxuICAgIGxldCBhZGRpdGlvbmFsSW5mbyAgICAgID0gICB7fTtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYVxyXG4gICAgICAgICAqIHN0YXR1cyBjb2RlIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcclxuICAgICAgICAgKi9cclxuICAgICAgICBhZGRpdGlvbmFsSW5mby5kYXRhICAgICA9ICAgZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBhZGRpdGlvbmFsSW5mby5zdGF0dXMgICA9ICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmhlYWRlcnMgID0gICBlcnJvci5yZXNwb25zZS5oZWFkZXJzO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0RhdGEgOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdTdGF0dXMgOiAnLCBlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0hlYWRlcnMgOiAnLCBlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcclxuICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZCwgYGVycm9yLnJlcXVlc3RgXHJcbiAgICAgICAgICogaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlXHJcbiAgICAgICAgICogb2YgaHR0cC5DbGllbnRSZXF1ZXN0IGluIE5vZGUuanNcclxuICAgICAgICAgKi9cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdSZXF1ZXN0IDogJywgZXJyb3IucmVxdWVzdCk7XHJcbiAgICAgICAgYWRkaXRpb25hbEluZm8ucmVxdWVzdCAgICAgPSAgIGVycm9yLnJlcXVlc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IGFuZCB0cmlnZ2VyZWQgYW4gRXJyb3JcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdFcnJvciA6ICcsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLm1lc3NhZ2UgICAgID0gICBlcnJvci5tZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZygnQ29uZmlnIDogJywgZXJyb3IuY29uZmlnKTtcclxuICAgIGlmKCEhZXJyb3IuY29uZmlnKVxyXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmNvbmZpZyAgICAgPSAgIGVycm9yLmNvbmZpZztcclxuICAgIGNvbnN0IHJlcyAgICAgICAgICAgPSAgIGF3YWl0IEFQSS5wb3N0KCcvYXV0aC9jYXRjaC1pbnZhbGlkLWxpbmsnLCB7XHJcbiAgICAgICAgXCJwYXJhbXNcIiAgICA6ICAgey4uLnBhcmFtcywgYWRkaXRpb25hbEluZm86IEpTT04uc3RyaW5naWZ5KGFkZGl0aW9uYWxJbmZvKX1cclxuICAgIH0pXHJcbiAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZXMuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpICAgPT4gIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBpbnZhbGlkVXJsXHJcbiAgICAgICAgfSwzMDAwKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgYWRkcmVzc0Zvcm1hdGVyID0gKG9iaikgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICBsZXQgcmVnZXggPSAvKFxcZCspICguKz8pLCAoLis/KSwgKC4rPykgKFswLTldezV9KS87XHJcbiAgXHJcbiAgICAgIGxldCBhZGRyZXNzID0gb2JqLm1hdGNoKHJlZ2V4KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhhZGRyZXNzKTtcclxuICAgICAgaWYoYWRkcmVzc1s0XS5pbmRleE9mKCcsJykgPiAtMSAmJiBhZGRyZXNzWzNdLmluZGV4T2YoJyAnKSA+IC0xKXtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbM10rJywgJysgYWRkcmVzc1s0XSArICcgJysgYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV07XHJcbiAgICAgICAgbGV0IG1vZEFkZHJlc3MgPSBmb3JtYXR0ZWRBZGRyZXNzKycsIFVTQSc7XHJcbiAgICAgICAgaWYoLyhcXGQrKSAoLis/KSwgKC4rPyksICguKz8pIChbMC05XXs1fSkvZy50ZXN0KG1vZEFkZHJlc3MpKXtcclxuICAgICAgICAgIGxldCBfYWRkcmVzcyA9IG1vZEFkZHJlc3MubWF0Y2gocmVnZXgpO1xyXG4gIFxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsaWRBZHJzOiB0cnVlLCBcclxuICAgICAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogZm9ybWF0dGVkQWRkcmVzcyxcclxuICAgICAgICAgICAgYWRkcmVzczogbW9kQWRkcmVzcyxcclxuICAgICAgICAgICAgbnVtYmVyOiBfYWRkcmVzc1swXSxcclxuICAgICAgICAgICAgc3RyZWV0OiBfYWRkcmVzc1sxXSxcclxuICAgICAgICAgICAgY2l0eTogX2FkZHJlc3NbMl0sXHJcbiAgICAgICAgICAgIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzJyxcclxuICAgICAgICAgICAgc3RhdGVfY29kZTogX2FkZHJlc3NbNF0sXHJcbiAgICAgICAgICAgIHppcGNvZGU6IF9hZGRyZXNzW19hZGRyZXNzLmxlbmd0aCAtMV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsaWRBZHJzOiBmYWxzZSBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzWzFdICsgJyAnICsgYWRkcmVzc1syXSArICcsICcrIGFkZHJlc3NbM10gKyAnLCAnICsgYWRkcmVzc1s0XSArICcgJyArIGFkZHJlc3NbYWRkcmVzcy5sZW5ndGggLTFdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWxpZEFkcnM6IHRydWUsIFxyXG4gICAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogZm9ybWF0dGVkQWRkcmVzcyxcclxuICAgICAgICAgIGFkZHJlc3M6IG9iaixcclxuICAgICAgICAgIG51bWJlcjogYWRkcmVzc1sxXSxcclxuICAgICAgICAgIHN0cmVldDogYWRkcmVzc1syXSxcclxuICAgICAgICAgIGNpdHk6IGFkZHJlc3NbM10sXHJcbiAgICAgICAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsXHJcbiAgICAgICAgICBzdGF0ZV9jb2RlOiBhZGRyZXNzWzRdLFxyXG4gICAgICAgICAgemlwY29kZTogYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV0sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZEFkcnM6IGZhbHNlIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZEVtYWlsID0oZW1haWwpID0+e1xyXG4gIGNvbnN0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gIHJldHVybiBwYXR0ZXJuLnRlc3QoU3RyaW5nKGVtYWlsKSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge2dldENvb2tpZSwgc2V0TGlmZXRpbWVDb29raWV9IGZyb20gJy4uL3V0aWwvY29va2llcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuY29uc3QgQVBJX1VSTCAgICAgICAgICAgPSAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XHJcblxyXG5jb25zdCBBUEkgICAgICAgICAgICAgICA9ICAgYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IEFQSV9VUkxcclxufSlcclxuQVBJLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxubGV0IGF1dGggICAgICAgICAgICAgID0gICAnJztcclxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gIGxldCB1c2VyRGF0YSAgICAgICAgICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9Jyk7XHJcbiAgaWYoIV8uaXNFbXB0eSh1c2VyRGF0YSkpe1xyXG4gICAgYXV0aCAgICAgICAgICAgICAgPSAgICAnVG9rZW4gJyArIHVzZXJEYXRhLmtleTtcclxuICB9IGVsc2V7XHJcbiAgICBhdXRoICAgPSAgXCJcIlxyXG4gIH1cclxuIFxyXG4gIGNvbnNvbGUubG9nKGF1dGgpO1xyXG4gIEFQSS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYXV0aDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQVBJOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vL3Byb2Nlc3MuZW52Lk5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JzsgLy8gc3RhZ2luZyB8IGRldmVsb3BtZW50IHwgcHJvZHVjdGlvblxyXG4vL3Byb2Nlc3MuZW52LlBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODA7XHJcbi8vY29uc3QgZW52ICAgICA9IChwcm9jZXNzLmVudi5OT0RFX0VOVik/cHJvY2Vzcy5lbnYuTk9ERV9FTlY6J2RldmVsb3BtZW50JztcclxuLy9jb25zdCBlbnYgICAgICAgPSAnc3RhZ2luZyc7XHJcblxyXG5sZXQgZW52ICAgPSAnJztcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgID09PSAncHJvZHVjdGlvbicpXHJcbiAgZW52ICA9ICdwcm9kdWN0aW9uJztcclxuZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpXHJcbiAgZW52ICA9ICdzdGFnaW5nJztcclxuZWxzZVxyXG4gIGVudiAgPSAnZGV2ZWxvcG1lbnQnO1xyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgLy9lbnY6IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCcsXHJcbiAgZW52OmVudixcclxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODFcclxufTtcclxuLy9jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOViwgXy5leHRlbmQoY29uZmlnLCByZXF1aXJlKCcuLycgKyBlbnYgKyAnLmpzJykuZGVmYXVsdCB8fCB7fSkpXHJcbmV4cG9ydCBkZWZhdWx0IF8uZXh0ZW5kKGNvbmZpZywgcmVxdWlyZSgnLi8nICsgZW52ICsgJy5qcycpLmRlZmF1bHQgfHwge30pOyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc1wiOiA3MTksXG5cdFwiLi9pbmRleC5qc1wiOiA3MTVcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA3MTg7IiwiXHJcbiBjb25zdCBjb25maWcgICAgPSAgIHtcclxuICAgIC8vIGZvciBkZXYgICAgXHJcbiAgICBmb29kamV0c1VybCAgICAgICAgICAgICA6ICAgJycsXHJcbiAgICBhcGlfZW5kICAgICAgICAgICAgICAgICA6ICAgJy9hcGkvJyxcclxuICAgIEdUTV9jb2RlICAgICAgICAgICAgICAgIDogICAnR1RNLVRITkdQSDYnLFxyXG4gICAgR1NUTV9jb2RlICAgICAgICAgICAgICAgOiAgICdVQS02NTU1NDMwMS0zJyxcclxuICAgIHBheXBhbCAgICAgICAgICAgICAgICAgIDogICB7XHJcbiAgICAgICAgbW9kZSAgICAgICAgICAgICAgICA6ICAgJ3NhbmRib3gnXHJcbiAgICB9IFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L2Jyb3dzZXInO1xyXG5cclxuXHJcblxyXG4gIGV4cG9ydCBjb25zdCBTZW50cnlJbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgU2VudHJ5LmluaXQoe1xyXG4gICAgICAgIGRzbjogY29uZmlnLnNlbnRyeV9kc25cclxuICAgICAgfSk7XHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9naW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydCB7IGRvX2xvZ2luIH0gZnJvbSAnLi9hdXRoJzsiLCJpbXBvcnQgVFlQRSBmcm9tICcuLi8uLi90eXBlcy9hdXRoJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi8uLi9BcGkvQXBpJztcclxuaW1wb3J0IHsgZXJyb3IgYXMgbm90aWZ5RXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL25vdGlmeSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uLy4uLy4uL1NlbnRyeS9zZW50cnlcIlxyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcclxuU2VudHJ5SW5pdGlhbGl6ZSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvX2xvZ2luKGRhdGEpIHtcclxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpICAgICAgICAgICAgID0+ICB7XHJcbiAgICAgICAgbGV0ICBzZW5kRGF0YSAgPSAge3VzZXJuYW1lOmRhdGEuZW1haWwsIHBhc3N3b3JkOmRhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBUWVBFLlNJR05JTiB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzICAgICAgICAgICAgICAgICAgID0gICBhd2FpdCBBUEkucG9zdCgncmVzdC1hdXRoL2xvZ2luLycsIHNlbmREYXRhKVxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKHJlcy5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fRVJST1IgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlckRhdGEgICAgPSAgIHJlcy5kYXRhIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fU1VDQ0VTUywgZGF0YTogIHJlcy5kYXRhfSk7XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgbm90aWZ5RXJyb3IoJ0ludmFsaWQgcmVxdWVzdCAoNDAxKScpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOX0VSUk9SIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xyXG5cclxuY29uc3QgcHJlZml4ID0gJ0BAYXV0aFR5cGVzJztcclxuXHJcbmNvbnN0IHR5cGVzID0ge1xyXG4gIFNJR05VUDogbnVsbCxcclxuICBTSUdOVVBfU1VDQ0VTUzogbnVsbCxcclxuICBTSUdOVVBfRVJST1I6IG51bGwsXHJcbiAgU0lHTklOOiBudWxsLFxyXG4gIFNJR05JTl9TVUNDRVNTOiBudWxsLFxyXG4gIFNJR05JTl9FUlJPUjogbnVsbCxcclxuICBBRERfREVMX0FERFI6IG51bGwsXHJcbiAgQUREX0RFTF9BRERSX1NVQ0NFU1M6IG51bGwsXHJcbiAgQUREX0RFTF9BRERSX0VSUk9SOiBudWxsLFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVmaXhlcih0eXBlcywgcHJlZml4KSB7XHJcbiAgcmV0dXJuIHJlZHVjZSh0eXBlcywgKHJlc3VsdCwgdmFsdWUsIGtleSkgPT4ge1xyXG4gICAgcmVzdWx0W2tleV0gPSBgJHtwcmVmaXh9LyR7a2V5fWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSwge30pO1xyXG59XHJcbiIsImltcG9ydCB7IG5vdGlmeSB9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XHJcblxyXG5leHBvcnQgY29uc3Qgc3VjY2VzcyA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyMwMDgwMDAnLCB0ZXh0OiBcIiNGRkZGRkZcIiwgXCJ6LWluZGV4XCI6XCI5OTk5OVwiIH07XHJcbiAgICBub3RpZnkuc2hvdyhtZXNzYWdlLCBcImN1c3RvbVwiLCA1MDAwLCBteUNvbG9yKTsgICAgXHJcbn1cclxuLy8gZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcclxuLy8gICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnI0ZCNjA1NicsIHRleHQ6IFwiI0ZGRkZGRlwiIH07XHJcbi8vICAgICBub3RpZnkuc2hvdyhtZXNzYWdlLCBcImN1c3RvbVwiLCA1MDAwLCBteUNvbG9yKTtcclxuLy8gfVxyXG5leHBvcnQgY29uc3QgZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IG15Q29sb3IgPSB7IGJhY2tncm91bmQ6ICcjRkI2MDU2JywgdGV4dDogXCIjRkZGRkZGXCIgfTtcclxuICAgIGxldCBoID1cInhcIlxyXG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJ3YXJuaW5nXCIsIDUwMDApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3VzdG9tZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IG15Q29sb3IgPSB7IGJhY2tncm91bmQ6ICcjZmYwMDAwJywgdGV4dDogXCIjRkZGRkZGXCIgfTtcclxuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDYwMDAwLCBteUNvbG9yKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGUgPSAoKSA9PiB7XHJcbiAgICBub3RpZnkuaGlkZSgpO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcic7XHJcbmltcG9ydCByZWR1eFN0YXRlIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSBjcmVhdGVMb2dnZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlZHV4U3RvcmUoeyBwcmVsb2FkZWRTdGF0ZSwgc2VydmVyIH0gPSB7fSkge1xyXG4gIGxldCBlbmhhbmNlcjtcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXNlcnZlcikge1xyXG4gICAgZW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1eFN0YXRlLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcblxyXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IHNpZ251cCBmcm9tICcuL2F1dGgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xyXG5cclxuXHJcblxyXG5jb25zdCByZWR1eFN0YXRlID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIEhvbWUsXHJcbiAgICBoZWFkZXIsXHJcbiAgICBzaWdudXAsXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4U3RhdGU7IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vdHlwZXMvaGVhZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IG51bGwsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVFlQRS5SRVFfREFUQTpcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlLCBIZWFkZXJkYXRhOiB7fSB9O1xyXG4gICAgY2FzZSBUWVBFLlJFU19EQVRBOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEhlYWRlcmRhdGE6IGFjdGlvbi5kYXRhfTtcclxuICAgIGNhc2UgVFlQRS5GQUlMX0RBVEE6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogZmFsc2UsIEhlYWRlcmRhdGE6IHt9fTtcclxuXHJcbiAgICAgIGNhc2UgVFlQRS5SRVFfQUREUkVTU19EQVRBOlxyXG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSwgQWRyZXNzZGF0YToge30gfTtcclxuICAgICAgICBjYXNlIFRZUEUuUkVTX0FERFJFU1NfREFUQTpcclxuICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzpmYWxzZSwgQWRyZXNzZGF0YTogYWN0aW9uLmRhdGF9O1xyXG5cclxuICAgICAgY2FzZSBUWVBFLkZBSUxfQUREUkVTU19EQVRBOlxyXG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogZmFsc2UsIEFkcmVzc2RhdGE6IHt9fTtcclxuICAgXHJcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xyXG5cclxuY29uc3QgcHJlZml4ID0gJ0BAaGVhZGVyVHlwZXMnO1xyXG5cclxuY29uc3QgdHlwZXMgPSB7XHJcbiAgUkVRX0RBVEE6IG51bGwsXHJcbiAgUkVTX0RBVEE6IG51bGwsXHJcbiAgRkFJTF9EQVRBOiBudWxsLFxyXG4gIFJFUV9BRERSRVNTX0RBVEE6IG51bGwsXHJcbiAgUkVTX0FERFJFU1NfREFUQTogbnVsbCxcclxuICBGQUlMX0FERFJFU1NfREFUQTogbnVsbCxcclxuXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJlZml4ZXIodHlwZXMsIHByZWZpeCk7IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vdHlwZXMvYXV0aCc7XHJcbmxldCB1c2VyRGF0YSAgICA9IHt9O1xyXG4vL2lmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICB1c2VyRGF0YSAgICAgICAgICA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpIHx8ICd7fScpIDoge307XHJcbi8vfVxyXG5jb25zb2xlLmxvZyh1c2VyRGF0YSk7XHJcbmxldCBpbml0aWFsU3RhdGUgICAgPSAgIHtcclxuICB1c2VyRGF0YTogey4uLnVzZXJEYXRhfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVFlQRS5TSUdOVVA6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogdHJ1ZSwgaXNTdWNjZXNzOiBmYWxzZX07XHJcbiAgICBjYXNlIFRZUEUuU0lHTlVQX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzpmYWxzZSwgaXNTdWNjZXNzOiB0cnVlLCB1c2VyRGF0YTogYWN0aW9uLmRhdGF9O1xyXG4gICAgY2FzZSBUWVBFLlNJR05VUF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOiBmYWxzZSwgaXNTdWNjZXNzOiBmYWxzZX07XHJcbiAgICBjYXNlIFRZUEUuU0lHTklOOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IHRydWUsIGlzU3VjY2VzczogZmFsc2V9O1xyXG4gICAgY2FzZSBUWVBFLlNJR05JTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6ZmFsc2UsIGlzU3VjY2VzczogdHJ1ZSwgdXNlckRhdGE6IGFjdGlvbi5kYXRhfTtcclxuICAgIGNhc2UgVFlQRS5TSUdOSU5fRVJST1I6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogZmFsc2UsIGlzU3VjY2VzczogZmFsc2V9O1xyXG4gICAgY2FzZSBUWVBFLkFERF9ERUxfQUREUjpcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IGZhbHNlfTtcclxuICAgIGNhc2UgVFlQRS5BRERfREVMX0FERFJfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IGZhbHNlfTtcclxuICAgIGNhc2UgVFlQRS5BRERfREVMX0FERFJfRVJST1I6XHJcbiAgICByZXR1cm4gey4uLnN0YXRlLCBpc0FkZHJlc3NFcnJvcjogdHJ1ZX07IFxyXG4gICBcclxuICAgIGRlZmF1bHQ6IHJldHVybiB7Li4uc3RhdGUsIC4uLmluaXRpYWxTdGF0ZX07XHJcbiAgfVxyXG59IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vdHlwZXMvaG9tZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFRZUEUuUkVRX0RBVEE6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSwgSG9tZWRhdGE6IHt9IH07XHJcbiAgICBjYXNlIFRZUEUuUkVTX0RBVEE6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzpmYWxzZSwgSG9tZWRhdGE6IGFjdGlvbi5kYXRhfTtcclxuICAgIGNhc2UgVFlQRS5GQUlMX0RBVEE6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogZmFsc2UsIEhvbWVkYXRhOiB7fX07XHJcbiAgIFxyXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcclxuXHJcbmNvbnN0IHByZWZpeCA9ICdAQGhvbWVUeXBlcyc7XHJcblxyXG5jb25zdCB0eXBlcyA9IHtcclxuICBSRVFfREFUQTogbnVsbCxcclxuICBSRVNfREFUQTogbnVsbCxcclxuICBGQUlMX0RBVEE6IG51bGwsXHJcblxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyJdLCJzb3VyY2VSb290IjoiIn0=