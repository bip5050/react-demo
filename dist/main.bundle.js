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
exports.push([module.i, "html, body{  overflow-x: hidden; scroll-behavior: smooth;}\n*{padding: 0; margin: 0; outline: 0;  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}\nbody{font-family: 'Source Sans Pro', sans-serif; font-size: 14px; font-weight: 400; line-height: 18px; color: #333333;}\n\nimg{max-width: 100%;}\nfigure{padding: 0; margin: 0; display: inline-block;}\na{color: #209DE2;}\na:hover{text-decoration: none; color: #209DE2;}\n\n\n.cTable {\n  border-collapse: collapse;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.cTable th{position: relative;}\n.cTable th i{position: absolute; right: 15px; top: 15px; cursor: pointer;}\n.cTable th, .cTable td {\n\n  padding: 15px;\n  border: 1px solid #ccc;\n  border-bottom: none;\n\n}\n.cTable.oneCol th, .cTable.oneCol td, .cTable.oneCol .subTable td{width: 72%;}\n.cTable.twoCol th, .cTable.twoCol td, .cTable.twoCol .subTable td{width: 54%;}\n.cTable.threeCol th, .cTable.threeCol td, .cTable.threeCol .subTable td{width: 36%;}\n.cTable.fourCol th, .cTable.fourCol td, .cTable.fourCol .subTable td{width: 18%;}\n\n.cTable th:first-child, .cTable td:first-child{ width: 28%;}\n.cTable th{text-align: center;}\n.cTable th span{display: block; font-size: 12px;}\n\n.cTable td.st{padding: 0; border-top: none; border-bottom: none;} \n.subTable{width: 100%; display: none;}\n.stOpen .subTable{ display:table;}\n.subTable tr:nth-child(odd) {background-color: #f2f2f2;}\n.subTable td{width: 18%;}\n.subTable td:first-child{ width: 28%!important;}\n\n.tac{text-align: center;}\n\n", ""]);



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
/* harmony import */ var _util_helperfunc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(670);
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(784);
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(716);
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
          colSpan = "twoCol";
        }

        if (data.product_description.data.length == 2) {
          colSpan = "threeCol";
        }

        if (data.product_description.data.length == 3) {
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
        colSpan: "3",
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
      })))), columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.company_info ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.company_info.text, " "), data.company_info.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzPzE0MWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbm90LWZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ub3QtZm91bmQvTm90Rm91bmQuc2Nzcz84YzI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcz8xZGZkIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9oZWxwZXJmdW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9BcGkvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBzeW5jIF5cXC5cXC8uKlxcLmpzJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9TZW50cnkvc2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNzcz9hY2Y5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGgvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbm90aWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY3JlYXRlUmVkdXhTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC90eXBlcy9ob21lLmpzIl0sIm5hbWVzIjpbInByZWxvYWRlZFN0YXRlIiwid2luZG93IiwiX19QUkVMT0FERURfU1RBVEVfXyIsInN0b3JlIiwiY3JlYXRlUmVkdXhTdG9yZSIsImh5ZHJhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiU2VudHJ5SW5pdGlhbGl6ZSIsInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImNvbXBvbmVudCIsIkxvZ2luIiwiTm90Rm91bmQiLCJwdWJsaWNyb3V0ZXMiLCJwcml2YXRlUm91dGVzIiwicHJvdGVjdGVkUm91dGVzIiwiUm91dGVyIiwiaGlkZUhlYWQiLCJ1cmwiLCJ1c2VyRGF0YSIsImN1cnJlbnRBZGRyZXNzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsIm1hcCIsInJvdXRlIiwiUHVibGljUm91dGUiLCJDb21wb25lbnQiLCJyZXN0Iiwib2JqIiwicHJldlBhdGgiLCJwcm9wcyIsIlByaXZhdGVSb3V0ZSIsIl8iLCJpc0VtcHR5IiwiY29uc29sZSIsImxvZyIsIlByb3RlY3RlZFJvdXRlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsIkFwcCIsInN0eWxlcyIsIlRvcEJhciIsIkxpbmsiLCJjaGlsZHJlbiIsIkZvb3RlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic2V0Q29va2llIiwiZGF0YSIsIm5hbWUiLCJDb29raWVzIiwic2V0Iiwic2V0TGlmZXRpbWVDb29raWUiLCJkYXkiLCJleHBpcmVzIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0SlNPTiIsInNpZ251cCIsImRvX2xvZ2luIiwibG9naW4iLCJkZWZhdWx0RXJyb3JzIiwiZW1haWwiLCJwYXNzd29yZCIsImZhcURhdGEiLCJpc0xvYWRpbmciLCJtb2RhbCIsInR5cGVQYXNzIiwiZm9ybURhdGEiLCJwcm9kdWN0X2Rlc2NyaXB0aW9uIiwiZnVuZGluZ19oaXN0b3J5IiwiY29tcGFueV9pbmZvIiwiZmV0YXVyZXMiLCJjdXN0b21lcl9jYXNlX3N0dWR5Iiwib3ZlcmFsbF9zY29vciIsImJveF9oZWFkZXIiLCJjb2x1bURhdGEiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJzdWJpdGVtcyIsIkZvdW5kZWQiLCJLZXlJbnZlc3RvcnMiLCJGb3VuZGVycyIsImhpZGVDbGFzcyIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJvbkNoYW5nZUhhbmRsZSIsImRlbGV0ZUNvbHVtIiwidG9vZ2xlQ2xhc3MiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwic3dhbCIsInRpdGxlIiwiaWNvbiIsImJ1dHRvbnMiLCJkYW5nZXJNb2RlIiwidGhlbiIsIndpbGxEZWxldGUiLCJjZGF0YSIsImluZGV4IiwiT2JqZWN0Iiwia2V5cyIsIm9uZUtleSIsImkiLCJmaWx0ZXIiLCJsZW5ndGgiLCIkIiwicHVzaCIsImlzU3VjY2VzcyIsImhyZWYiLCJlcnJvcnMiLCJpc0Vycm9yIiwiY29sU3BhbiIsImtleSIsInN1YmRhdGEiLCJpdGVtIiwiY29udmVydEZsb2F0VHdvRGVjaW1hbCIsIm51bSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY29udmVydFR3b0RlY2ltYWxSb3VuZCIsIk1hdGgiLCJyb3VuZCIsImxvZ0Vycm9yVG9TZXJ2ZXIiLCJwYXJhbXMiLCJlcnJvciIsInR5cGUiLCJTZW50cnkiLCJpbnZhbGlkVXJsIiwiYWRkaXRpb25hbEluZm8iLCJyZXNwb25zZSIsInN0YXR1cyIsImhlYWRlcnMiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsIkFQSSIsInBvc3QiLCJzdHJpbmdpZnkiLCJyZXMiLCJzZXRUaW1lb3V0IiwiYWRkcmVzc0Zvcm1hdGVyIiwicmVnZXgiLCJhZGRyZXNzIiwibWF0Y2giLCJpbmRleE9mIiwiZm9ybWF0dGVkQWRkcmVzcyIsIm1vZEFkZHJlc3MiLCJ0ZXN0IiwiX2FkZHJlc3MiLCJ2YWxpZEFkcnMiLCJudW1iZXIiLCJzdHJlZXQiLCJjaXR5IiwiY291bnRyeSIsInN0YXRlX2NvZGUiLCJ6aXBjb2RlIiwiaXNWYWxpZEVtYWlsIiwicGF0dGVybiIsIlN0cmluZyIsIkFQSV9VUkwiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJkZWZhdWx0cyIsImNvbW1vbiIsImF1dGgiLCJlbnYiLCJwcm9jZXNzIiwicG9ydCIsIlBPUlQiLCJleHRlbmQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImZvb2RqZXRzVXJsIiwiYXBpX2VuZCIsIkdUTV9jb2RlIiwiR1NUTV9jb2RlIiwicGF5cGFsIiwibW9kZSIsImRzbiIsInNlbnRyeV9kc24iLCJzZW5kRGF0YSIsInVzZXJuYW1lIiwiVFlQRSIsIlNJR05JTiIsIm5vdGlmeUVycm9yIiwiU0lHTklOX0VSUk9SIiwic2V0SXRlbSIsIlNJR05JTl9TVUNDRVNTIiwicHJlZml4IiwidHlwZXMiLCJTSUdOVVAiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9FUlJPUiIsIkFERF9ERUxfQUREUiIsIkFERF9ERUxfQUREUl9TVUNDRVNTIiwiQUREX0RFTF9BRERSX0VSUk9SIiwicHJlZml4ZXIiLCJyZWR1Y2UiLCJyZXN1bHQiLCJzdWNjZXNzIiwibXlDb2xvciIsImJhY2tncm91bmQiLCJub3RpZnkiLCJzaG93IiwiaCIsIndhcm5pbmciLCJjdXN0b21lcnJvciIsImhpZGUiLCJsb2dnZXJNaWRkbGV3YXJlIiwiY3JlYXRlTG9nZ2VyIiwic2VydmVyIiwiZW5oYW5jZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJlZHV4U3RhdGUiLCJjb21iaW5lUmVkdWNlcnMiLCJIb21lIiwiaGVhZGVyIiwiYWN0aW9uIiwiUkVRX0RBVEEiLCJIZWFkZXJkYXRhIiwiUkVTX0RBVEEiLCJGQUlMX0RBVEEiLCJSRVFfQUREUkVTU19EQVRBIiwiQWRyZXNzZGF0YSIsIlJFU19BRERSRVNTX0RBVEEiLCJGQUlMX0FERFJFU1NfREFUQSIsImluaXRpYWxTdGF0ZSIsImlzUHJvY2Vzc2luZyIsImlzQWRkcmVzc0Vycm9yIiwiSG9tZWRhdGEiXSwibWFwcGlu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LHdIQUFRLENBQUNQLEtBQUQsRUFBUUQsTUFBUixDQUF2QixFIiwiZmlsZSI6Ii4vbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsMV0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vdW5pdmVyc2FsL3JvdXRlcyc7XG5pbXBvcnQgY3JlYXRlUmVkdXhTdG9yZSBmcm9tICcuLi91bml2ZXJzYWwvY3JlYXRlUmVkdXhTdG9yZSc7XG5cbi8vIEdyYWIgdGhlIHN0YXRlIGZyb20gYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgaW50byB0aGUgc2VydmVyLWdlbmVyYXRlZCBIVE1MXG5jb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG5cbi8vIEFsbG93IHRoZSBwYXNzZWQgc3RhdGUgdG8gYmUgZ2FyYmFnZS1jb2xsZWN0ZWRcbmRlbGV0ZSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuXG4vLyBDcmVhdGUgUmVkdXggc3RvcmUgd2l0aCBpbml0aWFsIHN0YXRlXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVJlZHV4U3RvcmUoeyBwcmVsb2FkZWRTdGF0ZSB9KTtcblxuaHlkcmF0ZShcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8Um91dGVyIC8+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwJztcbmltcG9ydCB7Z2V0Q29va2llfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuXG4vL2ltcG9ydCBBYm91dCBmcm9tICcuLi9jb250YWluZXJzL0Fib3V0JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb250YWluZXJzL05vdEZvdW5kJztcblxuaW1wb3J0ICcuL2dsb2JhbC5jc3MnXG4vL2ltcG9ydCB7IGdldEFib3V0RGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWJvdXQnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMsIHtub3RpZnl9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XG5cblxuXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29udGFpbmVycy9Mb2dpbic7XG5cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7U2VudHJ5SW5pdGlhbGl6ZSB9IGZyb20gXCIuLi9TZW50cnkvc2VudHJ5XCJcblNlbnRyeUluaXRpYWxpemUoKTtcbi8vIGZvciBtb3JlIGRldGFpbHMgc2VlIGh0dHBzOi8vcmVhY3R0cmFpbmluZy5jb20vcmVhY3Qtcm91dGVyL3dlYi9ndWlkZXMvc2VydmVyLXJlbmRlcmluZ1xuLy8gc3BlY2lmeSByb3V0ZXMgd2l0aCB0aGUgYXNueWMgZnVuY3Rpb24gcmVxdWlyZWQgdG8gZmV0Y2ggdGhlIGRhdGEgdG8gcmVuZGVyIHRoZSByb3V0ZVxuLy8gSU1QT1JUQU5UOiB0aGUgbG9hZERhdGEgZnVuY3Rpb24gbXVzdCByZXR1cm4gYSBQcm9taXNlXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW3tcbiAgICBwYXRoOiAnLycsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBMb2dpblxuICB9LCB7XG4gICAgY29tcG9uZW50OiBOb3RGb3VuZFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgcHVibGljcm91dGVzID0gW1xuICAge1xuICBwYXRoOiAnL2xvZ2luJyxcbiAgY29tcG9uZW50OiBMb2dpbiAgICBcbn1cblxuXTtcblxuZXhwb3J0IGNvbnN0IHByaXZhdGVSb3V0ZXMgPSBbXG5cbl07XG5cbmV4cG9ydCBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVyKCkge1xuICBsZXQgIGhpZGVIZWFkID0gdHJ1ZTtcbiAgbGV0IHVybCAgICAgICAgICAgICAgICAgICA9ICAgJyc7XG4gIGxldCB1c2VyRGF0YSAgICA9IHt9O1xuICBsZXQgY3VycmVudEFkZHJlc3MgICAgPSB7fTtcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHVzZXJEYXRhICAgICAgICAgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSB8fCAne30nKTtcbiAgXG4gIH1cbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykpIHsgICAgICBcbiAgICB1cmwgICAgICAgICAgICAgICAgICAgICA9ICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgaWYgKHVybFsxXSA9PSAnJyB8fCB1cmxbMV0gPT0gJ2xvZ2luJ3x8IHVybFsxXSA9PSAnc2lnbnVwJykge1xuICAgICAgaGlkZUhlYWQgICAgICAgICA9ICAgZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICB7XG4gICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gXG4gICAgICA8ZGl2PiAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgPE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAge3Byb3RlY3RlZFJvdXRlcy5tYXAoKHJvdXRlKSA9PiAoXG4gICAgICAgICAgICA8UHJvdGVjdGVkUm91dGUga2V5PXtyb3V0ZS5wYXRofSBwYXRoPXtyb3V0ZS5wYXRofSByb3V0ZT17cm91dGV9IGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fSB1c2VyRGF0YT17dXNlckRhdGF9IHByZXZQYXRoPXt1cmxbMV19Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7cHJpdmF0ZVJvdXRlcy5tYXAoKHJvdXRlKSA9PiAoXG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gdXNlckRhdGE9e3VzZXJEYXRhfSAgcHJldlBhdGg9e3VybFsxXX0vPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtwdWJsaWNyb3V0ZXMubWFwKHJvdXRlID0+KFxuICAgICAgICAgICAgICA8UHVibGljUm91dGUga2V5PXtyb3V0ZS5wYXRofSBwYXRoPXtyb3V0ZS5wYXRofSByb3V0ZT17cm91dGV9IGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fSBwcmV2UGF0aD17dXJsWzFdfS8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cm91dGVzLm1hcChyb3V0ZSA9PihcbiAgICAgICAgICAgICAgPFJvdXRlIGtleT17YGluZGV4ICR7cm91dGUucGF0aH1gfSB7Li4ucm91dGV9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICBcbiAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgfVxuICAgICAgPC9kaXY+ICAgXG4gICk7XG59XG5cbmZ1bmN0aW9uIFB1YmxpY1JvdXRlKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkge1xuICBsZXQgb2JqID0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9O1xuICBsZXQgcHJldlBhdGggID0gcmVzdC5wcmV2UGF0aCB8fCAnJztcbiAgICByZXR1cm4gKFxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofSBcbiAgICAgICAgLyogY29tcG9uZW50PXtvYmouY29tcG9uZW50fSAqL1xuICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAgIDxvYmouY29tcG9uZW50IHsuLi5wcm9wc30gcHJldlBhdGg9e3ByZXZQYXRofSAvPlxuICAgICAgICApfVxuICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBQcml2YXRlUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XG4gIGxldCBvYmogPSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH07XG4gIC8vY29uc29sZS5sb2coJ0xvY2FsIFN0b3JhZ2UgOiAnLCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhXy5pc0VtcHR5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZW9wbGVEYXRhJykpKTtcbiAgbGV0IGN1cnJlbnRBZGRyZXNzICA9IHJlc3QuY3VycmVudEFkZHJlc3MgfHwge307XG4gIGxldCB1c2VyRGF0YSAgPSByZXN0LnVzZXJEYXRhIHx8IHt9O1xuICBsZXQgcHJldlBhdGggID0gcmVzdC5wcmV2UGF0aCB8fCAnJztcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eSh1c2VyRGF0YSkpIHtcbiAgICBjb25zb2xlLmxvZygnUm91dGUgUFJpdmF0ZSA6ICcsIHJlc3Qucm91dGUpO1xuICAgIHJldHVybiAoXG4gICAgPFJvdXRlIGtleT17YGluZGV4ICR7b2JqLnBhdGh9YH0gcGF0aD17b2JqLnBhdGh9IFxuICAgICAgICAvKiBjb21wb25lbnQ9e29iai5jb21wb25lbnR9ICovXG4gICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgICAgPG9iai5jb21wb25lbnQgey4uLnByb3BzfSB1c2VyRGF0YT17dXNlckRhdGF9IHByZXZQYXRoPXtwcmV2UGF0aH0gLz5cbiAgICAgICAgKX1cbiAgICAvPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlZGlyZWN0XG4gICAgICAgIHRvPXt7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL1wiXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBQcm90ZWN0ZWRSb3V0ZSh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pIHtcbiAgbGV0IG9iaiA9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfTtcbiAgbGV0IHVzZXJEYXRhICA9IHJlc3QudXNlckRhdGEgfHwge307XG4gIGxldCBwcmV2UGF0aCAgPSByZXN0LnByZXZQYXRoIHx8ICcnO1xuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhXy5pc0VtcHR5KHVzZXJEYXRhKSkge1xuICAgIHJldHVybiAoXG4gICAgPFJvdXRlIGtleT17YGluZGV4ICR7b2JqLnBhdGh9YH0gcGF0aD17b2JqLnBhdGh9XG4gICAgICAvKiBjb21wb25lbnQ9e29iai5jb21wb25lbnR9ICovXG4gICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICA8b2JqLmNvbXBvbmVudCB7Li4ucHJvcHN9IHVzZXJEYXRhPXt1c2VyRGF0YX0gcHJldlBhdGg9e3ByZXZQYXRofS8+XG4gICAgICApfVxuICAgIC8+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVkaXJlY3RcbiAgICAgICAgdG89e3tcbiAgICAgICAgICBwYXRobmFtZTogXCIvbG9naW5cIlxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2FwcCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe30sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQXBwKTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FwcCc7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVG9wQmFyfT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfSB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9IHRvPVwiL0ludmFsaWRMaW5rXCI+SW52YWxpZExpbms8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30gdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlcn0+V2lsbGlhbSBXb29kaGVhZCAtIE1JVCBMaWNlbnNlPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5BcHBfX0FwcF9fX1Z0d0J0IHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IH1cXG5cXG4uQXBwX19Ub3BCYXJfX18zeXU5RiB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLkFwcF9fTGlua19fXzI1NFlyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLkFwcF9fTGlua19fXzI1NFlyICsgLkFwcF9fTGlua19fXzI1NFlyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcblxcbi5BcHBfX0Zvb3Rlcl9fXzExZmZxIHtcXG4gIGNvbG9yOiAjQUFBQUFBOyB9XFxuXFxuLkFwcF9fYWxpZ24taXRlbXMtY2VudGVyX19fQlIyMG4gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDUlOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLkFwcF9fYWxpZ24taXRlbXMtY2VudGVyX19fQlIyMG4gaDIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMDsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0IsRUFBRTs7QUFFcEI7RUFDRSxhQUFhLEVBQUU7O0FBRWpCO0VBQ0UscUJBQXFCLEVBQUU7RUFDdkI7SUFDRSxnQkFBZ0IsRUFBRTs7QUFFdEI7RUFDRSxjQUFjLEVBQUU7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUU7O0FBRWpCO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVLEVBQUUsRUFBRVwiLFwiZmlsZVwiOlwiQXBwLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFwcCB7XFxuICBmb250LXNpemU6IDEuNWVtOyB9XFxuXFxuLlRvcEJhciB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLkxpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAuTGluayArIC5MaW5rIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcblxcbi5Gb290ZXIge1xcbiAgY29sb3I6ICNBQUFBQUE7IH1cXG5cXG4uYWxpZ24taXRlbXMtY2VudGVyIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCA1JTsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5hbGlnbi1pdGVtcy1jZW50ZXIgaDIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMDsgfSB9XFxuXCJdfV0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJBcHBcIjogXCJBcHBfX0FwcF9fX1Z0d0J0XCIsXG5cdFwiVG9wQmFyXCI6IFwiQXBwX19Ub3BCYXJfX18zeXU5RlwiLFxuXHRcIkxpbmtcIjogXCJBcHBfX0xpbmtfX18yNTRZclwiLFxuXHRcIkZvb3RlclwiOiBcIkFwcF9fRm9vdGVyX19fMTFmZnFcIixcblx0XCJhbGlnbi1pdGVtcy1jZW50ZXJcIjogXCJBcHBfX2FsaWduLWl0ZW1zLWNlbnRlcl9fX0JSMjBuXCJcbn07IiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuLy9jb25zb2xlLmxvZygnQ29va2llIENvbmZpZyA6ICcsIGNvbmZpZy5jb29raWUpO1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0ID0gKG5hbWUgPSAnZm9vZGpldHNfbmV3X21lcmNoYW50JykgPT57XG4vLyBcdGlmKGNvbmZpZy5jb29raWUuaG9zdG5hbWUgPT09ICdodHRwOi8vY29uc29sZS5kZXYuZm9vZGpldHMuY29tJykge1xuLy8gXHRcdG5hbWUgPSAnZGV2XycrbmFtZVxuLy8gXHR9XG5cbi8vICAgXHRyZXR1cm4gQ29va2llcy5nZXRKU09OKG5hbWUpO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IHNldCA9IChkYXRhLCBuYW1lID0gJ2Zvb2RqZXRzX25ld19tZXJjaGFudCcpID0+e1xuLy8gXHRpZihjb25maWcuY29va2llLmhvc3RuYW1lID09PSAnaHR0cDovL2NvbnNvbGUuZGV2LmZvb2RqZXRzLmNvbScpIHtcbi8vIFx0XHRuYW1lID0gJ2Rldl8nK25hbWVcbi8vIFx0fVxuLy8gXHRpZighIWNvbmZpZy5jb29raWUuZG9tYWluKVxuLy8gXHRcdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEsIHtkb21haW46IGNvbmZpZy5jb29raWUuZG9tYWlufSk7XG4vLyBcdGVsc2Vcbi8vIFx0XHRDb29raWVzLnNldChuYW1lLCBkYXRhKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBjb25zdCByZW1vdmUgPSAobmFtZSA9ICdmb29kamV0c19uZXdfbWVyY2hhbnQnKSA9Pntcbi8vIFx0aWYoY29uZmlnLmNvb2tpZS5ob3N0bmFtZSA9PT0gJ2h0dHA6Ly9jb25zb2xlLmRldi5mb29kamV0cy5jb20nKSB7XG4vLyBcdFx0bmFtZSA9ICdkZXZfJytuYW1lXG4vLyBcdH1cblxuLy8gXHRpZighIWNvbmZpZy5jb29raWUuZG9tYWluKVxuLy8gXHRcdENvb2tpZXMucmVtb3ZlKG5hbWUsIHtkb21haW46IGNvbmZpZy5jb29raWUuZG9tYWlufSk7XG4vLyBcdGVsc2Vcbi8vIFx0XHRDb29raWVzLnJlbW92ZShuYW1lKTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoZGF0YSwgbmFtZSkgPT57XG4gIFx0Q29va2llcy5zZXQobmFtZSwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TGlmZXRpbWVDb29raWUgPSAoZGF0YSwgbmFtZSxkYXkpID0+e1xuXHRDb29raWVzLnNldChuYW1lLCBkYXRhLCB7IGV4cGlyZXM6IGRheSB9KTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChuYW1lKSA9PntcbiAgXHRDb29raWVzLnJlbW92ZShuYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT57XG4gIFx0cmV0dXJuIENvb2tpZXMuZ2V0SlNPTihuYW1lKTtcbn07IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL25vdC1mb3VuZCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe30sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoTm90Rm91bmQpO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTm90Rm91bmQnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ob3RGb3VuZC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMTAwdmhcIj48aDIgY2xhc3NOYW1lPVwibS0wIGJsdWUtZGVmYXVsdFwiPlJvdXRlIE5vdCBGb3VuZDwvaDI+PC9kaXY+ICAgICAgXG4gICAgKTtcbiAgfVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90Rm91bmQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Ob3RGb3VuZF9fTm90Rm91bmRfX18yemNwQiB7XFxuICBjb2xvcjogaW5oZXJpdDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIk5vdEZvdW5kLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjLEVBQUVcIixcImZpbGVcIjpcIk5vdEZvdW5kLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLk5vdEZvdW5kIHtcXG4gIGNvbG9yOiBpbmhlcml0OyB9XFxuXCJdfV0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJOb3RGb3VuZFwiOiBcIk5vdEZvdW5kX19Ob3RGb3VuZF9fXzJ6Y3BCXCJcbn07IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5eyAgb3ZlcmZsb3cteDogaGlkZGVuOyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDt9XFxuKntwYWRkaW5nOiAwOyBtYXJnaW46IDA7IG91dGxpbmU6IDA7ICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgYm94LXNpemluZzogYm9yZGVyLWJveDt9XFxuYm9keXtmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDQwMDsgbGluZS1oZWlnaHQ6IDE4cHg7IGNvbG9yOiAjMzMzMzMzO31cXG5cXG5pbWd7bWF4LXdpZHRoOiAxMDAlO31cXG5maWd1cmV7cGFkZGluZzogMDsgbWFyZ2luOiAwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxcbmF7Y29sb3I6ICMyMDlERTI7fVxcbmE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzIwOURFMjt9XFxuXFxuXFxuLmNUYWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG59XFxuLmNUYWJsZSB0aHtwb3NpdGlvbjogcmVsYXRpdmU7fVxcbi5jVGFibGUgdGggaXtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAxNXB4OyB0b3A6IDE1cHg7IGN1cnNvcjogcG9pbnRlcjt9XFxuLmNUYWJsZSB0aCwgLmNUYWJsZSB0ZCB7XFxuXFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuXFxufVxcbi5jVGFibGUub25lQ29sIHRoLCAuY1RhYmxlLm9uZUNvbCB0ZCwgLmNUYWJsZS5vbmVDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiA3MiU7fVxcbi5jVGFibGUudHdvQ29sIHRoLCAuY1RhYmxlLnR3b0NvbCB0ZCwgLmNUYWJsZS50d29Db2wgLnN1YlRhYmxlIHRke3dpZHRoOiA1NCU7fVxcbi5jVGFibGUudGhyZWVDb2wgdGgsIC5jVGFibGUudGhyZWVDb2wgdGQsIC5jVGFibGUudGhyZWVDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiAzNiU7fVxcbi5jVGFibGUuZm91ckNvbCB0aCwgLmNUYWJsZS5mb3VyQ29sIHRkLCAuY1RhYmxlLmZvdXJDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiAxOCU7fVxcblxcbi5jVGFibGUgdGg6Zmlyc3QtY2hpbGQsIC5jVGFibGUgdGQ6Zmlyc3QtY2hpbGR7IHdpZHRoOiAyOCU7fVxcbi5jVGFibGUgdGh7dGV4dC1hbGlnbjogY2VudGVyO31cXG4uY1RhYmxlIHRoIHNwYW57ZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTJweDt9XFxuXFxuLmNUYWJsZSB0ZC5zdHtwYWRkaW5nOiAwOyBib3JkZXItdG9wOiBub25lOyBib3JkZXItYm90dG9tOiBub25lO30gXFxuLnN1YlRhYmxle3dpZHRoOiAxMDAlOyBkaXNwbGF5OiBub25lO31cXG4uc3RPcGVuIC5zdWJUYWJsZXsgZGlzcGxheTp0YWJsZTt9XFxuLnN1YlRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cXG4uc3ViVGFibGUgdGR7d2lkdGg6IDE4JTt9XFxuLnN1YlRhYmxlIHRkOmZpcnN0LWNoaWxkeyB3aWR0aDogMjglIWltcG9ydGFudDt9XFxuXFxuLnRhY3t0ZXh0LWFsaWduOiBjZW50ZXI7fVxcblxcblwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbic7XG5pbXBvcnQgeyBkb19sb2dpbiB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYXV0aCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coc3RhdGUpXG4gIHJldHVybiB7XG4gICAgZGF0YTogc3RhdGUuc2lnbnVwXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgZG9fbG9naW46ZG9fbG9naW4sXG4gIH0sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoTG9naW4pOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2xvZ2luJzsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGlzVmFsaWRFbWFpbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVyZnVuYyc7XG5cbmltcG9ydCAnLi9sb2dpbi5jc3MnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZGVmYXVsdEVycm9ycyA9IHtcbiAgICAgIGVtYWlsOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmFxRGF0YTogW10sXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICB0eXBlUGFzczogJ3Bhc3N3b3JkJyxcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGZ1bmRpbmdfaGlzdG9yeTogXCJcIixcbiAgICAgICAgY29tcGFueV9pbmZvOlwiXCIsXG4gICAgICAgIGZldGF1cmVzOlwiXCIsXG4gICAgICAgIGN1c3RvbWVyX2Nhc2Vfc3R1ZHk6XCJcIixcbiAgICAgICAgb3ZlcmFsbF9zY29vcjpcIlNjb3JlXCIsXG4gICAgICAgIGJveF9oZWFkZXI6XCJCb3hcIlxuXG4gICAgICB9LFxuICAgICAgY29sdW1EYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBib3hfaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkJveFwiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiZGF0YVwiXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG92ZXJhbGxfc2Nvb3I6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiT3ZlcmFsbCBTY29yZVwiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2NvcmVcIlxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlByb2R1Y3QgRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJveCBpcyBhIG1vZGVybiBjb250ZW50IG9mIG1hbmFnZW1lbnRcIixcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5kaW5nX2hpc3Rvcnk6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiRnVuZGluZyBIaXN0b3J5XCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUb3RhbCBGdW5kaW5nOiAkMTUwbVwiLFxuXG5cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc3ViaXRlbXM6IHtcbiAgICAgICAgICAgICAgRm91bmRlZDogW1wiMjAwNVwiXSxcbiAgICAgICAgICAgICAgS2V5SW52ZXN0b3JzOiBbXCJERkcsIHNjYWxlLCB2ZW50dXJlIHBhcnRuZXJzXCJdLFxuICAgICAgICAgICAgICBGb3VuZGVyczogW1wiQXJvbmUgTGV2aWUsIER5bG9uIHNtaXRoXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wYW55X2luZm86IHtcbiAgICAgICAgICAgIHRleHQ6IFwiQ29tcGFueSBJbmZvXCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJKb2huc29uXCJcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmZXRhdXJlczoge1xuICAgICAgICAgICAgdGV4dDogXCJGZXRhdXJlc1wiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR29vZFwiXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VzdG9tZXJfY2FzZV9zdHVkeToge1xuICAgICAgICAgICAgdGV4dDogXCJDb21wYW55IENhc2UgU3R1ZHlcIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdvb2QgQ2xpZW50XCJcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgaGlkZUNsYXNzOnRydWUsXG4gICAgfVxuXG5cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZSA9IHRoaXMub25DaGFuZ2VIYW5kbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZUNvbHVtICAgID0gIHRoaXMuZGVsZXRlQ29sdW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvb2dsZUNsYXNzID0gIHRoaXMudG9vZ2xlQ2xhc3MuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7IH1cblxuXG4gIG9uQ2hhbmdlSGFuZGxlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuZm9ybURhdGEsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvb2dsZUNsYXNzKCkge1xubGV0ICB7aGlkZUNsYXNzIH0gPSAgdGhpcy5zdGF0ZTtcbiAgICBoaWRlQ2xhc3MgPSFoaWRlQ2xhc3NcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoaWRlQ2xhc3NcbiAgICAgIH0pXG4gIH1cblxuICBkZWxldGVDb2x1bShpZCl7XG4gICAgbGV0ICB7IGNvbHVtRGF0YX0gPSB0aGlzLnN0YXRlO1xuICAgIFxuXG4gICAgc3dhbCh7XG4gICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgIHRvICBkZWxldGUgIHRoaXMgIGl0ZW0/XCIsXG4gICAgIFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBidXR0b25zOiB0cnVlLFxuICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICB9KVxuICAgIC50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICBpZiAod2lsbERlbGV0ZSkge1xuXG4gICAgICAgIGNvbHVtRGF0YS5tYXAoKGNkYXRhLCBpbmRleCk9PntcbiAgICAgICAgICBPYmplY3Qua2V5cyhjZGF0YSkubWFwKChvbmVLZXksIGkpID0+e1xuICAgICAgICAgICAgY2RhdGFbb25lS2V5XS5kYXRhPWNkYXRhW29uZUtleV0uZGF0YS5maWx0ZXIoKGRhdGEsaW5kZXgpPT5pZCE9aW5kZXgpXG4gICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY29sdW1EYXRhXG4gICAgICAgIH0sKCk9PntcbiAgICAgICAgICBzd2FsKFwiUG9vZiEgWW91ciBpdGVtaGFzIGJlZW4gZGVsZXRlZCFcIiwge1xuICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgIFxuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgbGV0ICB7Zm9ybURhdGEsIGNvbHVtRGF0YX0gPSB0aGlzLnN0YXRlO1xuICAgXG4gICBsZXR7b3ZlcmFsbF9zY29vcixib3hfaGVhZGVyLHByb2R1Y3RfZGVzY3JpcHRpb24sIGZ1bmRpbmdfaGlzdG9yeSwgZmV0YXVyZXMsIGN1c3RvbWVyX2Nhc2Vfc3R1ZHksY29tcGFueV9pbmZvfSA9IGZvcm1EYXRhO1xuXG5cbiAgIFxuICBcbiAgIGNvbHVtRGF0YS5tYXAoKGNkYXRhLGluZGV4KT0+e1xuICAgICBjb25zb2xlLmxvZyhjZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEubGVuZ3RoKTtcbiAgICAgaWYoY2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLmxlbmd0aD4yKXtcbiAgICAgIHN3YWwoe1xuICAgICAgICB0aXRsZTogXCJZb3UgY2FudCBhZGQgbW9yZSAgdGhhbiAgMyAgaXRlbXNcIixcbiAgICAgIFxuICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIH0pXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICAgIGZ1bmRpbmdfaGlzdG9yeTogXCJcIixcbiAgICAgICAgICBjb21wYW55X2luZm86XCJcIixcbiAgICAgICAgICBmZXRhdXJlczpcIlwiLFxuICAgICAgICAgIGN1c3RvbWVyX2Nhc2Vfc3R1ZHk6XCJcIixcbiAgICAgICAgICBvdmVyYWxsX3Njb29yOlwiU2NvcmVcIixcbiAgICAgICAgICBib3hfaGVhZGVyOlwiQm94XCJcbiAgXG4gICAgICAgIH1cbiAgXG4gIFxuICBcbiAgICAgIH0sKCk9PntcbiAgICAgICAgJChcIiNuZXdWZW5kb3JcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgfSlcbiAgICAgfVxuICAgICBlbHNle1xuICAgICAgY2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLnB1c2goe2Rlc2NyaXB0aW9uOnByb2R1Y3RfZGVzY3JpcHRpb259KTtcbiAgICAgIGNkYXRhLmZ1bmRpbmdfaGlzdG9yeS5kYXRhLnB1c2goe2Rlc2NyaXB0aW9uOmZ1bmRpbmdfaGlzdG9yeX0pO1xuICAgICAgY2RhdGEuZmV0YXVyZXMuZGF0YS5wdXNoKHtkZXNjcmlwdGlvbjpmZXRhdXJlc30pO1xuICAgICAgY2RhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeS5kYXRhLnB1c2goe2Rlc2NyaXB0aW9uOmN1c3RvbWVyX2Nhc2Vfc3R1ZHl9KTtcbiAgICAgIGNkYXRhLmNvbXBhbnlfaW5mby5kYXRhLnB1c2goe2Rlc2NyaXB0aW9uOmNvbXBhbnlfaW5mb30pO1xuICAgICAgY2RhdGEub3ZlcmFsbF9zY29vci5kYXRhLnB1c2goe2Rlc2NyaXB0aW9uOm92ZXJhbGxfc2Nvb3J9KTtcbiAgICAgIGNkYXRhLmJveF9oZWFkZXIuZGF0YS5wdXNoKHtkZXNjcmlwdGlvbjpib3hfaGVhZGVyfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sdW1EYXRhLFxuICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgZnVuZGluZ19oaXN0b3J5OiBcIlwiLFxuICAgICAgICAgIGNvbXBhbnlfaW5mbzpcIlwiLFxuICAgICAgICAgIGZldGF1cmVzOlwiXCIsXG4gICAgICAgICAgY3VzdG9tZXJfY2FzZV9zdHVkeTpcIlwiLFxuICAgICAgICAgIG92ZXJhbGxfc2Nvb3I6XCJTY29yZVwiLFxuICAgICAgICAgIGJveF9oZWFkZXI6XCJCb3hcIlxuICBcbiAgICAgICAgfVxuICBcbiAgXG4gIFxuICAgICAgfSwoKT0+e1xuICAgICAgICAkKFwiI25ld1ZlbmRvclwiKS5tb2RhbChcImhpZGVcIik7XG4gICAgICB9KVxuICAgICB9XG4gICAgXG4gICB9KVxuICAgXG4gICAgXG5cbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICghIXByb3BzLmRhdGEgJiYgISFwcm9wcy5kYXRhLmlzU3VjY2Vzcykge1xuXG4gICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kYXNoYm9hcmRcIjtcblxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBsZXQgZm9ybURhdGEgPSB0aGlzLnN0YXRlLmZvcm1EYXRhIHx8IHt9O1xuICAgIGxldCBlcnJvcnMgPSB7IC4uLnRoaXMuZGVmYXVsdEVycm9ycyB9O1xuICAgIGxldCBpc0Vycm9yID0gZmFsc2U7XG4gICAgaWYgKCEhIWZvcm1EYXRhLmVtYWlsKSB7XG4gICAgICBlcnJvcnMuZW1haWwgPSB0cnVlO1xuICAgICAgaXNFcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICghISFmb3JtRGF0YS5wYXNzd29yZCkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIGlzRXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoISFmb3JtRGF0YS5wYXNzd29yZCAmJiBmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGggPCA0KSB7XG4gICAgICBlcnJvcnMucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgaXNFcnJvciA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7IGlzRXJyb3I6IGlzRXJyb3IsIGVycm9yczogZXJyb3JzIH07XG4gIH1cblxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY29sdW1EYXRhICwgZm9ybURhdGEsIGhpZGVDbGFzc30gPSB0aGlzLnN0YXRlO1xuICAgIGxldCAgY29sU3BhbiA9IFwiXCI7XG4gICAgY29sdW1EYXRhLm1hcCgoZGF0YSxrZXkpPT57XG4gICAgICBpZihkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGg9PTEpe1xuICAgICAgICBjb2xTcGFuPSBcInR3b0NvbFwiXG4gICAgICB9XG4gICAgICBpZihkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGg9PTIpe1xuICAgICAgICBjb2xTcGFuPSBcInRocmVlQ29sXCJcbiAgICAgIH1cbiAgICAgIGlmKGRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLmxlbmd0aD09Myl7XG4gICAgICAgIGNvbFNwYW49IFwiZm91ckNvbFwiXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpbnBcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17YGNUYWJsZSAke2NvbFNwYW59YH0+XG4gICAgICAgICAgPHRyPlxuXG4gICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI25ld1ZlbmRvclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2FkZC1uZXcucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgTmV3IFZlbmRvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLmJveF9oZWFkZXIpID8gPD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmJveF9oZWFkZXIuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRoIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2JveC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qm94IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmJveF9oZWFkZXIuZGF0YS5sZW5ndGg+MT8gIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZUNvbHVtKGtleSl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT46XCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5vdmVyYWxsX3Njb29yKSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5vdmVyYWxsX3Njb29yLnRleHR9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm92ZXJhbGxfc2Nvb3IuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fSBjbGFzc05hbWU9XCJ0YWNcIj48aW1nIHNyYz1cImltZy9zY29yZS1iLnBuZ1wiIC8+PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24pID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24udGV4dH0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9PntzdWJkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuZnVuZGluZ19oaXN0b3J5KSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXsoKT0+dGhpcy50b29nbGVDbGFzcygpfT57ZGF0YS5mdW5kaW5nX2hpc3RvcnkudGV4dH0gPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mdW5kaW5nX2hpc3RvcnkuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG5cbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiM1wiIGNsYXNzTmFtZT17aGlkZUNsYXNzID9cInN0XCI6XCJzdCBzdE9wZW5cIiB9PlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic3ViVGFibGVcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zKS5tYXAoKG9uZUtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntvbmVLZXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zW29uZUtleV0ubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZD57aXRlbX08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgeyghIWRhdGEuY29tcGFueV9pbmZvKSA/IDw+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuY29tcGFueV9pbmZvLnRleHR9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5jb21wYW55X2luZm8uZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLmZldGF1cmVzKSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5mZXRhdXJlcy50ZXh0fSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mZXRhdXJlcy5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9PntzdWJkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5KSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5LnRleHR9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cblxuXG4gICAgICAgIHsvKiAgTW9kYWwgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwibmV3VmVuZG9yXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+QWRkIE5ldyBWZW5kb3I8L2g1PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2R1Y3RfZGVzY3JpcHRpb25cIj5Qcm9kdWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtmb3JtRGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGUpPT50aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBuYW1lPVwicHJvZHVjdF9kZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZnVuZGluZ19oaXN0b3J5XCI+RnVuZGluZyBIaXN0b3J5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5mdW5kaW5nX2hpc3Rvcnl9IG9uQ2hhbmdlPXsoZSk9PnRoaXMub25DaGFuZ2VIYW5kbGUoZSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmdW5kaW5nX2hpc3RvcnlcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbXBhbnlfaW5mb1wiPkNvbXBhbnkgSW5mbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEuY29tcGFueV9pbmZvfSBvbkNoYW5nZT17KGUpPT50aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY29tcGFueV9pbmZvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmZXRhdXJlc1wiPkZlYXR1cmVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5mZXRhdXJlc30gb25DaGFuZ2U9eyhlKT0+dGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZldGF1cmVzXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdXN0b21lcl9jYXNlX3N0dWR5XCI+Q3VzdG9tZXIgY2FzZSBzdHVkeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgdmFsdWU9e2Zvcm1EYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHl9IG9uQ2hhbmdlPXsoZSk9PnRoaXMub25DaGFuZ2VIYW5kbGUoZSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjdXN0b21lcl9jYXNlX3N0dWR5XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVTdWJtaXQoKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59IiwiaW1wb3J0IEFQSSBmcm9tICcuLi9BcGkvQXBpJztcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L2Jyb3dzZXInO1xuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uL1NlbnRyeS9zZW50cnlcIjtcblNlbnRyeUluaXRpYWxpemUoKTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRGbG9hdFR3b0RlY2ltYWwgPSBmdW5jdGlvbihudW0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0pLnRvRml4ZWQoMik7XG59XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0VHdvRGVjaW1hbFJvdW5kID0gZnVuY3Rpb24obnVtKSB7XG4gICAgcmV0dXJuICsoTWF0aC5yb3VuZChudW0gKyBcImUrMlwiKSArIFwiZS0yXCIpO1xufVxuXG5leHBvcnQgY29uc3QgbG9nRXJyb3JUb1NlcnZlciA9IGFzeW5jIGZ1bmN0aW9uKHBhcmFtcywgZXJyb3IpIHtcbiAgICBcbiAgICBpZihwYXJhbXMudHlwZSA9PT0gJ2NhdGNoJylcbiAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBjb25zdCBpbnZhbGlkVXJsICAgID0nL2ludmFsaWQtbGluayc7XG4gICAgbGV0IGFkZGl0aW9uYWxJbmZvICAgICAgPSAgIHt9O1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhXG4gICAgICAgICAqIHN0YXR1cyBjb2RlIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcbiAgICAgICAgICovXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmRhdGEgICAgID0gICBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5zdGF0dXMgICA9ICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5oZWFkZXJzICA9ICAgZXJyb3IucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRGF0YSA6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdTdGF0dXMgOiAnLCBlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdIZWFkZXJzIDogJywgZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWQsIGBlcnJvci5yZXF1ZXN0YFxuICAgICAgICAgKiBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2VcbiAgICAgICAgICogb2YgaHR0cC5DbGllbnRSZXF1ZXN0IGluIE5vZGUuanNcbiAgICAgICAgICovXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1JlcXVlc3QgOiAnLCBlcnJvci5yZXF1ZXN0KTtcbiAgICAgICAgYWRkaXRpb25hbEluZm8ucmVxdWVzdCAgICAgPSAgIGVycm9yLnJlcXVlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgYW5kIHRyaWdnZXJlZCBhbiBFcnJvclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdFcnJvciA6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5tZXNzYWdlICAgICA9ICAgZXJyb3IubWVzc2FnZTtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygnQ29uZmlnIDogJywgZXJyb3IuY29uZmlnKTtcbiAgICBpZighIWVycm9yLmNvbmZpZylcbiAgICAgICAgYWRkaXRpb25hbEluZm8uY29uZmlnICAgICA9ICAgZXJyb3IuY29uZmlnO1xuICAgIGNvbnN0IHJlcyAgICAgICAgICAgPSAgIGF3YWl0IEFQSS5wb3N0KCcvYXV0aC9jYXRjaC1pbnZhbGlkLWxpbmsnLCB7XG4gICAgICAgIFwicGFyYW1zXCIgICAgOiAgIHsuLi5wYXJhbXMsIGFkZGl0aW9uYWxJbmZvOiBKU09OLnN0cmluZ2lmeShhZGRpdGlvbmFsSW5mbyl9XG4gICAgfSlcbiAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVzLmRhdGEuZXJyb3IpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5lcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSAgID0+ICB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGludmFsaWRVcmxcbiAgICAgICAgfSwzMDAwKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgYWRkcmVzc0Zvcm1hdGVyID0gKG9iaikgPT4ge1xuICAgIHRyeXtcbiAgICAgIGxldCByZWdleCA9IC8oXFxkKykgKC4rPyksICguKz8pLCAoLis/KSAoWzAtOV17NX0pLztcbiAgXG4gICAgICBsZXQgYWRkcmVzcyA9IG9iai5tYXRjaChyZWdleCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGFkZHJlc3MpO1xuICAgICAgaWYoYWRkcmVzc1s0XS5pbmRleE9mKCcsJykgPiAtMSAmJiBhZGRyZXNzWzNdLmluZGV4T2YoJyAnKSA+IC0xKXtcbiAgICAgICAgbGV0IGZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzWzNdKycsICcrIGFkZHJlc3NbNF0gKyAnICcrIGFkZHJlc3NbYWRkcmVzcy5sZW5ndGggLTFdO1xuICAgICAgICBsZXQgbW9kQWRkcmVzcyA9IGZvcm1hdHRlZEFkZHJlc3MrJywgVVNBJztcbiAgICAgICAgaWYoLyhcXGQrKSAoLis/KSwgKC4rPyksICguKz8pIChbMC05XXs1fSkvZy50ZXN0KG1vZEFkZHJlc3MpKXtcbiAgICAgICAgICBsZXQgX2FkZHJlc3MgPSBtb2RBZGRyZXNzLm1hdGNoKHJlZ2V4KTtcbiAgXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkQWRyczogdHJ1ZSwgXG4gICAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiBmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgICAgYWRkcmVzczogbW9kQWRkcmVzcyxcbiAgICAgICAgICAgIG51bWJlcjogX2FkZHJlc3NbMF0sXG4gICAgICAgICAgICBzdHJlZXQ6IF9hZGRyZXNzWzFdLFxuICAgICAgICAgICAgY2l0eTogX2FkZHJlc3NbMl0sXG4gICAgICAgICAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgICAgICBzdGF0ZV9jb2RlOiBfYWRkcmVzc1s0XSxcbiAgICAgICAgICAgIHppcGNvZGU6IF9hZGRyZXNzW19hZGRyZXNzLmxlbmd0aCAtMV1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkQWRyczogZmFsc2UgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbMV0gKyAnICcgKyBhZGRyZXNzWzJdICsgJywgJysgYWRkcmVzc1szXSArICcsICcgKyBhZGRyZXNzWzRdICsgJyAnICsgYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsaWRBZHJzOiB0cnVlLCBcbiAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiBmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgIGFkZHJlc3M6IG9iaixcbiAgICAgICAgICBudW1iZXI6IGFkZHJlc3NbMV0sXG4gICAgICAgICAgc3RyZWV0OiBhZGRyZXNzWzJdLFxuICAgICAgICAgIGNpdHk6IGFkZHJlc3NbM10sXG4gICAgICAgICAgY291bnRyeTogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgICAgICAgIHN0YXRlX2NvZGU6IGFkZHJlc3NbNF0sXG4gICAgICAgICAgemlwY29kZTogYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZEFkcnM6IGZhbHNlIFxuICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW1haWwgPShlbWFpbCkgPT57XG4gIGNvbnN0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KFN0cmluZyhlbWFpbCkpO1xufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7Z2V0Q29va2llLCBzZXRMaWZldGltZUNvb2tpZX0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cblxuY29uc3QgQVBJX1VSTCAgICAgICAgICAgPSAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XG5cbmNvbnN0IEFQSSAgICAgICAgICAgICAgID0gICBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IEFQSV9VUkxcbn0pXG5BUEkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xubGV0IGF1dGggICAgICAgICAgICAgID0gICAnJztcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgbGV0IHVzZXJEYXRhICAgICAgICAgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSB8fCAne30nKTtcbiAgaWYoIV8uaXNFbXB0eSh1c2VyRGF0YSkpe1xuICAgIGF1dGggICAgICAgICAgICAgID0gICAgJ1Rva2VuICcgKyB1c2VyRGF0YS5rZXk7XG4gIH0gZWxzZXtcbiAgICBhdXRoICAgPSAgXCJcIlxuICB9XG4gXG4gIGNvbnNvbGUubG9nKGF1dGgpO1xuICBBUEkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGF1dGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG4vL3Byb2Nlc3MuZW52Lk5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JzsgLy8gc3RhZ2luZyB8IGRldmVsb3BtZW50IHwgcHJvZHVjdGlvblxuLy9wcm9jZXNzLmVudi5QT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwO1xuLy9jb25zdCBlbnYgICAgID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WKT9wcm9jZXNzLmVudi5OT0RFX0VOVjonZGV2ZWxvcG1lbnQnO1xuLy9jb25zdCBlbnYgICAgICAgPSAnc3RhZ2luZyc7XG5cbmxldCBlbnYgICA9ICcnO1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgID09PSAncHJvZHVjdGlvbicpXG4gIGVudiAgPSAncHJvZHVjdGlvbic7XG5lbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JylcbiAgZW52ICA9ICdzdGFnaW5nJztcbmVsc2VcbiAgZW52ICA9ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSB7XG4gIC8vZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnLFxuICBlbnY6ZW52LFxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODFcbn07XG4vL2NvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WLCBfLmV4dGVuZChjb25maWcsIHJlcXVpcmUoJy4vJyArIGVudiArICcuanMnKS5kZWZhdWx0IHx8IHt9KSlcbmV4cG9ydCBkZWZhdWx0IF8uZXh0ZW5kKGNvbmZpZywgcmVxdWlyZSgnLi8nICsgZW52ICsgJy5qcycpLmRlZmF1bHQgfHwge30pOyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc1wiOiA3MTksXG5cdFwiLi9pbmRleC5qc1wiOiA3MTVcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA3MTg7IiwiXG4gY29uc3QgY29uZmlnICAgID0gICB7XG4gICAgLy8gZm9yIGRldiAgICBcbiAgICBmb29kamV0c1VybCAgICAgICAgICAgICA6ICAgJycsXG4gICAgYXBpX2VuZCAgICAgICAgICAgICAgICAgOiAgICcvYXBpLycsXG4gICAgR1RNX2NvZGUgICAgICAgICAgICAgICAgOiAgICdHVE0tVEhOR1BINicsXG4gICAgR1NUTV9jb2RlICAgICAgICAgICAgICAgOiAgICdVQS02NTU1NDMwMS0zJyxcbiAgICBwYXlwYWwgICAgICAgICAgICAgICAgICA6ICAge1xuICAgICAgICBtb2RlICAgICAgICAgICAgICAgIDogICAnc2FuZGJveCdcbiAgICB9IFxufVxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L2Jyb3dzZXInO1xuXG5cblxuICBleHBvcnQgY29uc3QgU2VudHJ5SW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBTZW50cnkuaW5pdCh7XG4gICAgICAgIGRzbjogY29uZmlnLnNlbnRyeV9kc25cbiAgICAgIH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0IHsgZG9fbG9naW4gfSBmcm9tICcuL2F1dGgnOyIsImltcG9ydCBUWVBFIGZyb20gJy4uLy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi8uLi9BcGkvQXBpJztcbmltcG9ydCB7IGVycm9yIGFzIG5vdGlmeUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9ub3RpZnknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uLy4uLy4uL1NlbnRyeS9zZW50cnlcIlxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5TZW50cnlJbml0aWFsaXplKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb19sb2dpbihkYXRhKSB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgICAgICAgICAgICAgPT4gIHtcbiAgICAgICAgbGV0ICBzZW5kRGF0YSAgPSAge3VzZXJuYW1lOmRhdGEuZW1haWwsIHBhc3N3b3JkOmRhdGEucGFzc3dvcmR9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzICAgICAgICAgICAgICAgICAgID0gICBhd2FpdCBBUEkucG9zdCgncmVzdC1hdXRoL2xvZ2luLycsIHNlbmREYXRhKVxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IocmVzLmRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOX0VSUk9SIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJEYXRhICAgID0gICByZXMuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fU1VDQ0VTUywgZGF0YTogIHJlcy5kYXRhfSk7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5vdGlmeUVycm9yKCdJbnZhbGlkIHJlcXVlc3QgKDQwMSknKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fRVJST1IgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAYXV0aFR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFNJR05VUDogbnVsbCxcbiAgU0lHTlVQX1NVQ0NFU1M6IG51bGwsXG4gIFNJR05VUF9FUlJPUjogbnVsbCxcbiAgU0lHTklOOiBudWxsLFxuICBTSUdOSU5fU1VDQ0VTUzogbnVsbCxcbiAgU0lHTklOX0VSUk9SOiBudWxsLFxuICBBRERfREVMX0FERFI6IG51bGwsXG4gIEFERF9ERUxfQUREUl9TVUNDRVNTOiBudWxsLFxuICBBRERfREVMX0FERFJfRVJST1I6IG51bGwsXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHJlZHVjZSh0eXBlcywgKHJlc3VsdCwgdmFsdWUsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gYCR7cHJlZml4fS8ke2tleX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuIiwiaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAncmVhY3Qtbm90aWZ5LXRvYXN0JztcblxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3MgPSAobWVzc2FnZSkgPT4ge1xuICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnIzAwODAwMCcsIHRleHQ6IFwiI0ZGRkZGRlwiLCBcInotaW5kZXhcIjpcIjk5OTk5XCIgfTtcbiAgICBub3RpZnkuc2hvdyhtZXNzYWdlLCBcImN1c3RvbVwiLCA1MDAwLCBteUNvbG9yKTsgICAgXG59XG4vLyBleHBvcnQgY29uc3QgZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuLy8gICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnI0ZCNjA1NicsIHRleHQ6IFwiI0ZGRkZGRlwiIH07XG4vLyAgICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7XG4vLyB9XG5leHBvcnQgY29uc3QgZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnI0ZCNjA1NicsIHRleHQ6IFwiI0ZGRkZGRlwiIH07XG4gICAgbGV0IGggPVwieFwiXG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7XG59XG5leHBvcnQgY29uc3Qgd2FybmluZyA9IChtZXNzYWdlKSA9PiB7XG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJ3YXJuaW5nXCIsIDUwMDApO1xufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnI2ZmMDAwMCcsIHRleHQ6IFwiI0ZGRkZGRlwiIH07XG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNjAwMDAsIG15Q29sb3IpO1xufVxuXG5leHBvcnQgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICBub3RpZnkuaGlkZSgpO1xufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcic7XG5pbXBvcnQgcmVkdXhTdGF0ZSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycyc7XG5cbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSBjcmVhdGVMb2dnZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVkdXhTdG9yZSh7IHByZWxvYWRlZFN0YXRlLCBzZXJ2ZXIgfSA9IHt9KSB7XG4gIGxldCBlbmhhbmNlcjtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc2VydmVyKSB7XG4gICAgZW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlKTtcbiAgfSBlbHNlIHtcbiAgICBlbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHV4U3RhdGUsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcik7XG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cblxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgc2lnbnVwIGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuXG5cblxuY29uc3QgcmVkdXhTdGF0ZSA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgSG9tZSxcbiAgICBoZWFkZXIsXG4gICAgc2lnbnVwLFxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhTdGF0ZTsiLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVFlQRS5SRVFfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSwgSGVhZGVyZGF0YToge30gfTtcbiAgICBjYXNlIFRZUEUuUkVTX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEhlYWRlcmRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgSGVhZGVyZGF0YToge319O1xuXG4gICAgICBjYXNlIFRZUEUuUkVRX0FERFJFU1NfREFUQTpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlLCBBZHJlc3NkYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIFRZUEUuUkVTX0FERFJFU1NfREFUQTpcbiAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEFkcmVzc2RhdGE6IGFjdGlvbi5kYXRhfTtcblxuICAgICAgY2FzZSBUWVBFLkZBSUxfQUREUkVTU19EQVRBOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBBZHJlc3NkYXRhOiB7fX07XG4gICBcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNvbnN0IHByZWZpeCA9ICdAQGhlYWRlclR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFJFUV9EQVRBOiBudWxsLFxuICBSRVNfREFUQTogbnVsbCxcbiAgRkFJTF9EQVRBOiBudWxsLFxuICBSRVFfQUREUkVTU19EQVRBOiBudWxsLFxuICBSRVNfQUREUkVTU19EQVRBOiBudWxsLFxuICBGQUlMX0FERFJFU1NfREFUQTogbnVsbCxcblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmVmaXhlcih0eXBlcywgcHJlZml4KTsiLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9hdXRoJztcbmxldCB1c2VyRGF0YSAgICA9IHt9O1xuLy9pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gIHVzZXJEYXRhICAgICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9JykgOiB7fTtcbi8vfVxuY29uc29sZS5sb2codXNlckRhdGEpO1xubGV0IGluaXRpYWxTdGF0ZSAgICA9ICAge1xuICB1c2VyRGF0YTogey4uLnVzZXJEYXRhfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUWVBFLlNJR05VUDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogdHJ1ZSwgaXNTdWNjZXNzOiBmYWxzZX07XG4gICAgY2FzZSBUWVBFLlNJR05VUF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOmZhbHNlLCBpc1N1Y2Nlc3M6IHRydWUsIHVzZXJEYXRhOiBhY3Rpb24uZGF0YX07XG4gICAgY2FzZSBUWVBFLlNJR05VUF9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogZmFsc2UsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU46XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IHRydWUsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzpmYWxzZSwgaXNTdWNjZXNzOiB0cnVlLCB1c2VyRGF0YTogYWN0aW9uLmRhdGF9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU5fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IGZhbHNlLCBpc1N1Y2Nlc3M6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0FkZHJlc3NFcnJvcjogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5BRERfREVMX0FERFJfRVJST1I6XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IHRydWV9OyBcbiAgIFxuICAgIGRlZmF1bHQ6IHJldHVybiB7Li4uc3RhdGUsIC4uLmluaXRpYWxTdGF0ZX07XG4gIH1cbn0iLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9ob21lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRZUEUuUkVRX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIEhvbWVkYXRhOiB7fSB9O1xuICAgIGNhc2UgVFlQRS5SRVNfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzpmYWxzZSwgSG9tZWRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgSG9tZWRhdGE6IHt9fTtcbiAgIFxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAaG9tZVR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFJFUV9EQVRBOiBudWxsLFxuICBSRVNfREFUQTogbnVsbCxcbiAgRkFJTF9EQVRBOiBudWxsLFxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyJdLCJzb3VyY2VSb290IjoiIn0=