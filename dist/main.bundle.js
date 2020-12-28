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
exports.push([module.i, "html, body{  overflow-x: hidden; scroll-behavior: smooth;}\n*{padding: 0; margin: 0; outline: 0;  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}\nbody{font-family: 'Source Sans Pro', sans-serif; font-size: 14px; font-weight: 400; line-height: 18px; color: #333333;}\n\nimg{max-width: 100%;}\nfigure{padding: 0; margin: 0; display: inline-block;}\na{color: #209DE2;}\na:hover{text-decoration: none; color: #209DE2;}\n\n\n/* Loder */\n.loader,\n.loader:before,\n.loader:after {\n  background: #209de0;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.loader {\n  color: #209de0;\n  text-indent: -9999em;\n  margin: 150px auto;\n  position: relative;\n  font-size: 8px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loader:before,\n.loader:after {\n  position: absolute;\n  top: 0;\n  content: '';\n}\n.loader:before {\n  left: -1.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loader:after {\n  left: 1.5em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n\n.Loginp{\n  background: #f1f1f1; \n  padding: 10% 0 0 0; \n  min-height: 100vh;\n}\n.Loginp .expWrapper{\n  width: 30%;\n  max-width: 500px;\n  margin: 0 auto ;\n  background: #fff;\n  padding: 30px;\n  -webkit-box-shadow: 0 0 10px 0 #707070;\n  box-shadow: 0 0 10px 0 #707070;\n}\n\n.input-group{margin-bottom: 10px;}\n.ltbox{\n  width: 100%; \n  height: 32px; \n  border: 1px solid #ccc;\n  padding: 0 8px;\n  border-radius:4px;\n}\n.ltbox.t-pass{padding-right: 24px;}\n.pass_wrap{width: 100%; position: relative;}\n.pass_wrap a{position: absolute; right: 5px; top: 5px;}\n\n.submitBtn{width: 100%; cursor: pointer; height: 32px; border-radius:4px; font-size: 16px; margin:5px 0 10px; background: #209de0; color: #fff; border: none;}\n\n.header{ background: #001529; color: #a6adb4; height: 50px;}\n.header .wapper{width: 96%; height: 100%; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;}\n.header nav{height: 100%;}\n.header nav a{display: inline-block; padding: 0 18px; font-size: 16px; height: 100%;  line-height: 42px; cursor: pointer;}\n.header nav a.active, .header nav a:hover{background: #1890ff; color: #fff!important;}\n.uPan{display: flex; cursor: pointer; height: 103%; align-items: center;  position: relative;}\n.uPan >span{background: #a6adb4; height: 25px;}\n.uPan ul{position: absolute; top: 52px; list-style: none; display: none; width: 150px; right: 0;}\n.uPan ul li a{padding: 5px; display: block; background: #333; color:#a6adb4;}\n.uPan:hover ul{display: block;}\n\n\n.dPage{ min-height: 100vh;}\n.dPage .wrapper{ width: 100%; display: flex;}\n.dPage .wrapper aside{width: 20%; background: #f6f6f6; min-height: 100vh;}\n.dPage .wrapper aside .lmHeader{display: block; padding: 15px; font-size: 16px; color: #1890ff; font-weight: 600;}\n.dPage .wrapper aside .lmHeader img{display: inline-block; vertical-align: middle;}\n.dPage .wrapper aside .sideNav {list-style: none; }\n.dPage .wrapper aside .sideNav >li >span{display: block; border-bottom: 1px solid #ccc; padding: 15px; font-size: 16px; color: #1890ff; font-weight: 600;}\n.dPage .wrapper aside .lNav{ background: #fff; list-style: none; display: none;}\n\n.dPage .wrapper aside .lNav li a{padding: 15px 15px 15px 45px; font-size: 16px; border-right: 3px solid transparent; display: block; color: #262626;}\n.dPage .wrapper aside .lNav li.active a{background:aliceblue; border-right: 3px solid #1890ff; }\n.dPage .wrapper aside .lNav li:hover a{background: #e6f7ff;}\n\n.dPage .wrapper aside .sideNav >li.openChild .lNav{display: block;}\n\n\n\n\n\n\n.dPage .wrapper main{width: 80%; padding: 20px;}\n\n.dPage .wrapper main .topPan{ margin-bottom: 15px; display: flex; align-items: center;}\n.dPage .wrapper main .topPan a, .dPage .wrapper main .topPan span{padding:10px 15px; display: inline-block;}\n.dPage .wrapper main .topPan a.active{ background: #1890ff; color: #fff;}\n/* .dPage .wrapper main .topPan .searchpan{margin-left: auto;} */\n.dPage .wrapper main .topPan .searchpan input{height:34px; border: 1px solid #ccc; padding: 0 10px;}\n.dPage .wrapper main .topPan .searchpan button{border: none; color: #fff; background:#1890ff; padding: 0 10px; height:34px;}\n.dPage .wrapper main .topPan .shortBy{margin-left: auto;}\n.dPage .wrapper main .topPan .shortBy select{margin-left: 10px; height: 34px; padding: 0 5px;}\n\n.filterby{display: flex; align-items: center; justify-content: flex-end; padding: 0 0 15px 0;}\n.filterby span{display: inline-block; margin-left: 25px;}\n.filterby span input[type=\"checkbox\"]{margin-left: 10px;}\n.bline{border-bottom: 1px solid #ddd;}\n\n.sTable{\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sTable th{\n  padding: 10px;\n  text-align: left;\n  background: #f1f1f1;\n  font-weight: 900;\n  border-bottom: 1px solid #ddd;\n}\n.sTable td {\n  padding: 10px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n.sTable tr:hover {background: #fafafa; cursor: pointer;} \n.sTable .aRow td {background: #e6f7ff;}\n.sTable .cpan {display: none;}\n.sTable .cpan.show{display: table-row;}\n\n\ninput[type=\"checkbox\"]{width: 16px; height: 16px; border : 1px solid #f1f1f1; cursor: pointer;display: inline-block; vertical-align: bottom; }\n\n.cBoxAll input{ display: none;}\n.cBoxAll label{width: 16px; cursor: pointer; height: 16px; border: 1px solid #666; border-radius: 2px; margin: 0; background: #fff; position: relative;}\n.cBoxAll input[type=\"checkbox\"]:checked +label:after{ content: ''; position: absolute; top: 2px; left: 2px; width: 10px; height: 10px;  background: #1890ff;}\n\n.pagiBar{display: block; text-align: right;}\n.pagination{ display: inline-flex; margin-top: 20px; }\n.pagination li{ width: 26px; height: 26px; cursor: pointer; line-height: 22px; text-align: center; margin-left: 6px; border:1px solid #d9d9d9; border-radius: 2px;}\n.pagination li.active{ border: 1px solid #1890ff; background: #e6f7ff;}\n\n\n.hPan{position: relative;}\n.hPan .tTipBox{background: #fff; width: 400px; display: none; z-index: -9; opacity: 0; position: absolute; top: -50px; left:60%;-webkit-box-shadow: 0 0 5px 0 #9E9E9E; box-shadow: 0 0 5px 0 #9E9E9E;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out; }\n.hPan .tTipBox h5{font-size: 16px; font-weight: 600;}\n.hPan .tTipBox::before{content: ''; position: absolute; left: -10px; top: 58px; -webkit-box-shadow: 0 0 5px 0 #9E9E9E; box-shadow: 0 0 5px 0 #9E9E9E; z-index: 1; width: 20px; height: 20px; transform: rotate(-45deg); background: #fff;}\n.hPan .tTipBox .tWrap{padding: 10px; background: #fff; position: relative; z-index: 2;}\n\n.hPan:hover .tTipBox{ z-index: 5; opacity: 1; left:45%; display: block;}\n\n.iMethod table{width: 100%;}\n.iMethod table th{font-weight: 600; padding: 8px;}\n.iMethod table td{ padding: 8px;}\n.iMethod strong{display: block; margin:15px 0 5px;}\n.iMethod p{margin-bottom: 15px;}\n.iMethod textarea{width: 100%; border: none; resize: none;}\n.expMod .mark{ background: #1890ff; padding: 8px 15px; color: #fff;}\n.expMod .closeb{background: none; border: none; font-weight: 600; padding: 8px 15px;}\n\n\n.tabWrap {width: 100%;  margin: 5px 15px;}\n.tabWrap .nav-tabs {border-bottom: none;}\n.tabWrap .nav-tabs li a{ padding: 10px 15px; background:rgba(0,0,0,.03); display: inline-block; margin-right: 3px; color: #000; font-size: 14px;}\n.tabWrap .nav-tabs li a.active{background: #ccc;}\n.tabWrap .tab-content{padding: 15px; border: 1px solid #ccc;}\n.tabWrap .table thead th{border: none;}\n.tabWrap .bgRow{background:rgba(0,0,0,.03);}\n\n.uploadFile{cursor: pointer;}\n\n\n@media only screen and (max-width: 370px){\n \n\n}", ""]);



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
      }, "home  page");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzPzE0MWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbm90LWZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ub3QtZm91bmQvTm90Rm91bmQuc2Nzcz84YzI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcz8xZGZkIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9oZWxwZXJmdW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9BcGkvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZyBzeW5jIF5cXC5cXC8uKlxcLmpzJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9TZW50cnkvc2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNzcz9hY2Y5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGgvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbm90aWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY3JlYXRlUmVkdXhTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC90eXBlcy9ob21lLmpzIl0sIm5hbWVzIjpbInByZWxvYWRlZFN0YXRlIiwid2luZG93IiwiX19QUkVMT0FERURfU1RBVEVfXyIsInN0b3JlIiwiY3JlYXRlUmVkdXhTdG9yZSIsImh5ZHJhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiU2VudHJ5SW5pdGlhbGl6ZSIsInJvdXRlcyIsInBhdGgiLCJleGFjdCIsImNvbXBvbmVudCIsIkxvZ2luIiwiTm90Rm91bmQiLCJwdWJsaWNyb3V0ZXMiLCJwcml2YXRlUm91dGVzIiwicHJvdGVjdGVkUm91dGVzIiwiUm91dGVyIiwiaGlkZUhlYWQiLCJ1cmwiLCJ1c2VyRGF0YSIsImN1cnJlbnRBZGRyZXNzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsIm1hcCIsInJvdXRlIiwiUHVibGljUm91dGUiLCJDb21wb25lbnQiLCJyZXN0Iiwib2JqIiwicHJldlBhdGgiLCJwcm9wcyIsIlByaXZhdGVSb3V0ZSIsIl8iLCJpc0VtcHR5IiwiY29uc29sZSIsImxvZyIsIlByb3RlY3RlZFJvdXRlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsIkFwcCIsInN0eWxlcyIsIlRvcEJhciIsIkxpbmsiLCJjaGlsZHJlbiIsIkZvb3RlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic2V0Q29va2llIiwiZGF0YSIsIm5hbWUiLCJDb29raWVzIiwic2V0Iiwic2V0TGlmZXRpbWVDb29raWUiLCJkYXkiLCJleHBpcmVzIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0SlNPTiIsInNpZ251cCIsImRvX2xvZ2luIiwibG9naW4iLCJkZWZhdWx0RXJyb3JzIiwiZW1haWwiLCJwYXNzd29yZCIsImZhcURhdGEiLCJpc0xvYWRpbmciLCJtb2RhbCIsInR5cGVQYXNzIiwiZm9ybURhdGEiLCJ0b2dnbGVTaG93cGFzcyIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJvbkNoYW5nZUhhbmRsZSIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpc1N1Y2Nlc3MiLCJocmVmIiwiZXJyb3JzIiwiaXNFcnJvciIsImxlbmd0aCIsImNvbnZlcnRGbG9hdFR3b0RlY2ltYWwiLCJudW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNvbnZlcnRUd29EZWNpbWFsUm91bmQiLCJNYXRoIiwicm91bmQiLCJsb2dFcnJvclRvU2VydmVyIiwicGFyYW1zIiwiZXJyb3IiLCJ0eXBlIiwiU2VudHJ5IiwiaW52YWxpZFVybCIsImFkZGl0aW9uYWxJbmZvIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJoZWFkZXJzIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJjb25maWciLCJBUEkiLCJwb3N0Iiwic3RyaW5naWZ5IiwicmVzIiwic2V0VGltZW91dCIsImFkZHJlc3NGb3JtYXRlciIsInJlZ2V4IiwiYWRkcmVzcyIsIm1hdGNoIiwiaW5kZXhPZiIsImZvcm1hdHRlZEFkZHJlc3MiLCJtb2RBZGRyZXNzIiwidGVzdCIsIl9hZGRyZXNzIiwidmFsaWRBZHJzIiwibnVtYmVyIiwic3RyZWV0IiwiY2l0eSIsImNvdW50cnkiLCJzdGF0ZV9jb2RlIiwiemlwY29kZSIsImlzVmFsaWRFbWFpbCIsInBhdHRlcm4iLCJTdHJpbmciLCJBUElfVVJMIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiZGVmYXVsdHMiLCJjb21tb24iLCJhdXRoIiwia2V5IiwiZW52IiwicHJvY2VzcyIsInBvcnQiLCJQT1JUIiwiZXh0ZW5kIiwicmVxdWlyZSIsImRlZmF1bHQiLCJmb29kamV0c1VybCIsImFwaV9lbmQiLCJHVE1fY29kZSIsIkdTVE1fY29kZSIsInBheXBhbCIsIm1vZGUiLCJkc24iLCJzZW50cnlfZHNuIiwic2VuZERhdGEiLCJ1c2VybmFtZSIsIlRZUEUiLCJTSUdOSU4iLCJub3RpZnlFcnJvciIsIlNJR05JTl9FUlJPUiIsInNldEl0ZW0iLCJTSUdOSU5fU1VDQ0VTUyIsInByZWZpeCIsInR5cGVzIiwiU0lHTlVQIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRVJST1IiLCJBRERfREVMX0FERFIiLCJBRERfREVMX0FERFJfU1VDQ0VTUyIsIkFERF9ERUxfQUREUl9FUlJPUiIsInByZWZpeGVyIiwicmVkdWNlIiwicmVzdWx0Iiwic3VjY2VzcyIsIm15Q29sb3IiLCJiYWNrZ3JvdW5kIiwidGV4dCIsIm5vdGlmeSIsInNob3ciLCJoIiwid2FybmluZyIsImN1c3RvbWVycm9yIiwiaGlkZSIsImxvZ2dlck1pZGRsZXdhcmUiLCJjcmVhdGVMb2dnZXIiLCJzZXJ2ZXIiLCJlbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdXhTdGF0ZSIsImNvbWJpbmVSZWR1Y2VycyIsIkhvbWUiLCJoZWFkZXIiLCJhY3Rpb24iLCJSRVFfREFUQSIsIkhlYWRlcmRhdGEiLCJSRVNfREFUQSIsIkZBSUxfREFUQSIsIlJFUV9BRERSRVNTX0RBVEEiLCJBZHJlc3NkYXRhIiwiUkVTX0FERFJFU1NfREFUQSIsIkZBSUxfQUREUkVTU19EQVRBIiwiaW5pdGlhbFN0YXRlIiwiaXNQcm9jZXNzaW5nIiwiaXNBZGRyZXNzRXJyb3IiLCJIb21lZGF0YSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QUFBcEQ7O0FBQ0YsU0FBS3lHLG1EQUFJLENBQUMwQyxTQUFWO0FBQ0UsNkNBQVdwSyxLQUFYO0FBQWtCbUMsaUJBQVMsRUFBRSxLQUE3QjtBQUFvQ3lJLGdCQUFRLEVBQUU7QUFBOUM7O0FBRUY7QUFBUyxhQUFPNUssS0FBUDtBQVJYO0FBVUQsQzs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFFQSxJQUFNZ0ksTUFBTSxHQUFHLGFBQWY7QUFFQSxJQUFNQyxLQUFLLEdBQUc7QUFDWmdDLFVBQVEsRUFBRSxJQURFO0FBRVpFLFVBQVEsRUFBRSxJQUZFO0FBR1pDLFdBQVMsRUFBRTtBQUhDLENBQWQ7QUFRZTVCLHdIQUFRLENBQUNQLEtBQUQsRUFBUUQsTUFBUixDQUF2QixFIiwiZmlsZSI6Ii4vbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsMV0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vdW5pdmVyc2FsL3JvdXRlcyc7XG5pbXBvcnQgY3JlYXRlUmVkdXhTdG9yZSBmcm9tICcuLi91bml2ZXJzYWwvY3JlYXRlUmVkdXhTdG9yZSc7XG5cbi8vIEdyYWIgdGhlIHN0YXRlIGZyb20gYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgaW50byB0aGUgc2VydmVyLWdlbmVyYXRlZCBIVE1MXG5jb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG5cbi8vIEFsbG93IHRoZSBwYXNzZWQgc3RhdGUgdG8gYmUgZ2FyYmFnZS1jb2xsZWN0ZWRcbmRlbGV0ZSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuXG4vLyBDcmVhdGUgUmVkdXggc3RvcmUgd2l0aCBpbml0aWFsIHN0YXRlXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVJlZHV4U3RvcmUoeyBwcmVsb2FkZWRTdGF0ZSB9KTtcblxuaHlkcmF0ZShcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8Um91dGVyIC8+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwJztcbmltcG9ydCB7Z2V0Q29va2llfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuXG4vL2ltcG9ydCBBYm91dCBmcm9tICcuLi9jb250YWluZXJzL0Fib3V0JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb250YWluZXJzL05vdEZvdW5kJztcblxuaW1wb3J0ICcuL2dsb2JhbC5jc3MnXG4vL2ltcG9ydCB7IGdldEFib3V0RGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWJvdXQnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMsIHtub3RpZnl9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XG5cblxuXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29udGFpbmVycy9Mb2dpbic7XG5cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7U2VudHJ5SW5pdGlhbGl6ZSB9IGZyb20gXCIuLi9TZW50cnkvc2VudHJ5XCJcblNlbnRyeUluaXRpYWxpemUoKTtcbi8vIGZvciBtb3JlIGRldGFpbHMgc2VlIGh0dHBzOi8vcmVhY3R0cmFpbmluZy5jb20vcmVhY3Qtcm91dGVyL3dlYi9ndWlkZXMvc2VydmVyLXJlbmRlcmluZ1xuLy8gc3BlY2lmeSByb3V0ZXMgd2l0aCB0aGUgYXNueWMgZnVuY3Rpb24gcmVxdWlyZWQgdG8gZmV0Y2ggdGhlIGRhdGEgdG8gcmVuZGVyIHRoZSByb3V0ZVxuLy8gSU1QT1JUQU5UOiB0aGUgbG9hZERhdGEgZnVuY3Rpb24gbXVzdCByZXR1cm4gYSBQcm9taXNlXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW3tcbiAgICBwYXRoOiAnLycsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBMb2dpblxuICB9LCB7XG4gICAgY29tcG9uZW50OiBOb3RGb3VuZFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgcHVibGljcm91dGVzID0gW1xuICAge1xuICBwYXRoOiAnL2xvZ2luJyxcbiAgY29tcG9uZW50OiBMb2dpbiAgICBcbn1cblxuXTtcblxuZXhwb3J0IGNvbnN0IHByaXZhdGVSb3V0ZXMgPSBbXG5cbl07XG5cbmV4cG9ydCBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVyKCkge1xuICBsZXQgIGhpZGVIZWFkID0gdHJ1ZTtcbiAgbGV0IHVybCAgICAgICAgICAgICAgICAgICA9ICAgJyc7XG4gIGxldCB1c2VyRGF0YSAgICA9IHt9O1xuICBsZXQgY3VycmVudEFkZHJlc3MgICAgPSB7fTtcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHVzZXJEYXRhICAgICAgICAgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSB8fCAne30nKTtcbiAgXG4gIH1cbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykpIHsgICAgICBcbiAgICB1cmwgICAgICAgICAgICAgICAgICAgICA9ICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgaWYgKHVybFsxXSA9PSAnJyB8fCB1cmxbMV0gPT0gJ2xvZ2luJ3x8IHVybFsxXSA9PSAnc2lnbnVwJykge1xuICAgICAgaGlkZUhlYWQgICAgICAgICA9ICAgZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICB7XG4gICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gXG4gICAgICA8ZGl2PiAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgPE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAge3Byb3RlY3RlZFJvdXRlcy5tYXAoKHJvdXRlKSA9PiAoXG4gICAgICAgICAgICA8UHJvdGVjdGVkUm91dGUga2V5PXtyb3V0ZS5wYXRofSBwYXRoPXtyb3V0ZS5wYXRofSByb3V0ZT17cm91dGV9IGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fSB1c2VyRGF0YT17dXNlckRhdGF9IHByZXZQYXRoPXt1cmxbMV19Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7cHJpdmF0ZVJvdXRlcy5tYXAoKHJvdXRlKSA9PiAoXG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gdXNlckRhdGE9e3VzZXJEYXRhfSAgcHJldlBhdGg9e3VybFsxXX0vPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtwdWJsaWNyb3V0ZXMubWFwKHJvdXRlID0+KFxuICAgICAgICAgICAgICA8UHVibGljUm91dGUga2V5PXtyb3V0ZS5wYXRofSBwYXRoPXtyb3V0ZS5wYXRofSByb3V0ZT17cm91dGV9IGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fSBwcmV2UGF0aD17dXJsWzFdfS8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cm91dGVzLm1hcChyb3V0ZSA9PihcbiAgICAgICAgICAgICAgPFJvdXRlIGtleT17YGluZGV4ICR7cm91dGUucGF0aH1gfSB7Li4ucm91dGV9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICBcbiAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgfVxuICAgICAgPC9kaXY+ICAgXG4gICk7XG59XG5cbmZ1bmN0aW9uIFB1YmxpY1JvdXRlKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkge1xuICBsZXQgb2JqID0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9O1xuICBsZXQgcHJldlBhdGggID0gcmVzdC5wcmV2UGF0aCB8fCAnJztcbiAgICByZXR1cm4gKFxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofSBcbiAgICAgICAgLyogY29tcG9uZW50PXtvYmouY29tcG9uZW50fSAqL1xuICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAgIDxvYmouY29tcG9uZW50IHsuLi5wcm9wc30gcHJldlBhdGg9e3ByZXZQYXRofSAvPlxuICAgICAgICApfVxuICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBQcml2YXRlUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XG4gIGxldCBvYmogPSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH07XG4gIC8vY29uc29sZS5sb2coJ0xvY2FsIFN0b3JhZ2UgOiAnLCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhXy5pc0VtcHR5KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZW9wbGVEYXRhJykpKTtcbiAgbGV0IGN1cnJlbnRBZGRyZXNzICA9IHJlc3QuY3VycmVudEFkZHJlc3MgfHwge307XG4gIGxldCB1c2VyRGF0YSAgPSByZXN0LnVzZXJEYXRhIHx8IHt9O1xuICBsZXQgcHJldlBhdGggID0gcmVzdC5wcmV2UGF0aCB8fCAnJztcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eSh1c2VyRGF0YSkpIHtcbiAgICBjb25zb2xlLmxvZygnUm91dGUgUFJpdmF0ZSA6ICcsIHJlc3Qucm91dGUpO1xuICAgIHJldHVybiAoXG4gICAgPFJvdXRlIGtleT17YGluZGV4ICR7b2JqLnBhdGh9YH0gcGF0aD17b2JqLnBhdGh9IFxuICAgICAgICAvKiBjb21wb25lbnQ9e29iai5jb21wb25lbnR9ICovXG4gICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgICAgPG9iai5jb21wb25lbnQgey4uLnByb3BzfSB1c2VyRGF0YT17dXNlckRhdGF9IHByZXZQYXRoPXtwcmV2UGF0aH0gLz5cbiAgICAgICAgKX1cbiAgICAvPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlZGlyZWN0XG4gICAgICAgIHRvPXt7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL1wiXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBQcm90ZWN0ZWRSb3V0ZSh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pIHtcbiAgbGV0IG9iaiA9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfTtcbiAgbGV0IHVzZXJEYXRhICA9IHJlc3QudXNlckRhdGEgfHwge307XG4gIGxldCBwcmV2UGF0aCAgPSByZXN0LnByZXZQYXRoIHx8ICcnO1xuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhXy5pc0VtcHR5KHVzZXJEYXRhKSkge1xuICAgIHJldHVybiAoXG4gICAgPFJvdXRlIGtleT17YGluZGV4ICR7b2JqLnBhdGh9YH0gcGF0aD17b2JqLnBhdGh9XG4gICAgICAvKiBjb21wb25lbnQ9e29iai5jb21wb25lbnR9ICovXG4gICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICA8b2JqLmNvbXBvbmVudCB7Li4ucHJvcHN9IHVzZXJEYXRhPXt1c2VyRGF0YX0gcHJldlBhdGg9e3ByZXZQYXRofS8+XG4gICAgICApfVxuICAgIC8+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVkaXJlY3RcbiAgICAgICAgdG89e3tcbiAgICAgICAgICBwYXRobmFtZTogXCIvbG9naW5cIlxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2FwcCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe30sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQXBwKTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FwcCc7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVG9wQmFyfT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfSB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9IHRvPVwiL0ludmFsaWRMaW5rXCI+SW52YWxpZExpbms8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30gdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlcn0+V2lsbGlhbSBXb29kaGVhZCAtIE1JVCBMaWNlbnNlPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5BcHBfX0FwcF9fX1Z0d0J0IHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IH1cXG5cXG4uQXBwX19Ub3BCYXJfX18zeXU5RiB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLkFwcF9fTGlua19fXzI1NFlyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLkFwcF9fTGlua19fXzI1NFlyICsgLkFwcF9fTGlua19fXzI1NFlyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcblxcbi5BcHBfX0Zvb3Rlcl9fXzExZmZxIHtcXG4gIGNvbG9yOiAjQUFBQUFBOyB9XFxuXFxuLkFwcF9fYWxpZ24taXRlbXMtY2VudGVyX19fQlIyMG4gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDUlOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLkFwcF9fYWxpZ24taXRlbXMtY2VudGVyX19fQlIyMG4gaDIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMDsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0IsRUFBRTs7QUFFcEI7RUFDRSxhQUFhLEVBQUU7O0FBRWpCO0VBQ0UscUJBQXFCLEVBQUU7RUFDdkI7SUFDRSxnQkFBZ0IsRUFBRTs7QUFFdEI7RUFDRSxjQUFjLEVBQUU7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUU7O0FBRWpCO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVLEVBQUUsRUFBRVwiLFwiZmlsZVwiOlwiQXBwLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFwcCB7XFxuICBmb250LXNpemU6IDEuNWVtOyB9XFxuXFxuLlRvcEJhciB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLkxpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAuTGluayArIC5MaW5rIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxcblxcbi5Gb290ZXIge1xcbiAgY29sb3I6ICNBQUFBQUE7IH1cXG5cXG4uYWxpZ24taXRlbXMtY2VudGVyIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCA1JTsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5hbGlnbi1pdGVtcy1jZW50ZXIgaDIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMDsgfSB9XFxuXCJdfV0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJBcHBcIjogXCJBcHBfX0FwcF9fX1Z0d0J0XCIsXG5cdFwiVG9wQmFyXCI6IFwiQXBwX19Ub3BCYXJfX18zeXU5RlwiLFxuXHRcIkxpbmtcIjogXCJBcHBfX0xpbmtfX18yNTRZclwiLFxuXHRcIkZvb3RlclwiOiBcIkFwcF9fRm9vdGVyX19fMTFmZnFcIixcblx0XCJhbGlnbi1pdGVtcy1jZW50ZXJcIjogXCJBcHBfX2FsaWduLWl0ZW1zLWNlbnRlcl9fX0JSMjBuXCJcbn07IiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuLy9jb25zb2xlLmxvZygnQ29va2llIENvbmZpZyA6ICcsIGNvbmZpZy5jb29raWUpO1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0ID0gKG5hbWUgPSAnZm9vZGpldHNfbmV3X21lcmNoYW50JykgPT57XG4vLyBcdGlmKGNvbmZpZy5jb29raWUuaG9zdG5hbWUgPT09ICdodHRwOi8vY29uc29sZS5kZXYuZm9vZGpldHMuY29tJykge1xuLy8gXHRcdG5hbWUgPSAnZGV2XycrbmFtZVxuLy8gXHR9XG5cbi8vICAgXHRyZXR1cm4gQ29va2llcy5nZXRKU09OKG5hbWUpO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IHNldCA9IChkYXRhLCBuYW1lID0gJ2Zvb2RqZXRzX25ld19tZXJjaGFudCcpID0+e1xuLy8gXHRpZihjb25maWcuY29va2llLmhvc3RuYW1lID09PSAnaHR0cDovL2NvbnNvbGUuZGV2LmZvb2RqZXRzLmNvbScpIHtcbi8vIFx0XHRuYW1lID0gJ2Rldl8nK25hbWVcbi8vIFx0fVxuLy8gXHRpZighIWNvbmZpZy5jb29raWUuZG9tYWluKVxuLy8gXHRcdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEsIHtkb21haW46IGNvbmZpZy5jb29raWUuZG9tYWlufSk7XG4vLyBcdGVsc2Vcbi8vIFx0XHRDb29raWVzLnNldChuYW1lLCBkYXRhKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBjb25zdCByZW1vdmUgPSAobmFtZSA9ICdmb29kamV0c19uZXdfbWVyY2hhbnQnKSA9Pntcbi8vIFx0aWYoY29uZmlnLmNvb2tpZS5ob3N0bmFtZSA9PT0gJ2h0dHA6Ly9jb25zb2xlLmRldi5mb29kamV0cy5jb20nKSB7XG4vLyBcdFx0bmFtZSA9ICdkZXZfJytuYW1lXG4vLyBcdH1cblxuLy8gXHRpZighIWNvbmZpZy5jb29raWUuZG9tYWluKVxuLy8gXHRcdENvb2tpZXMucmVtb3ZlKG5hbWUsIHtkb21haW46IGNvbmZpZy5jb29raWUuZG9tYWlufSk7XG4vLyBcdGVsc2Vcbi8vIFx0XHRDb29raWVzLnJlbW92ZShuYW1lKTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoZGF0YSwgbmFtZSkgPT57XG4gIFx0Q29va2llcy5zZXQobmFtZSwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TGlmZXRpbWVDb29raWUgPSAoZGF0YSwgbmFtZSxkYXkpID0+e1xuXHRDb29raWVzLnNldChuYW1lLCBkYXRhLCB7IGV4cGlyZXM6IGRheSB9KTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChuYW1lKSA9PntcbiAgXHRDb29raWVzLnJlbW92ZShuYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT57XG4gIFx0cmV0dXJuIENvb2tpZXMuZ2V0SlNPTihuYW1lKTtcbn07IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL25vdC1mb3VuZCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe30sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoTm90Rm91bmQpO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTm90Rm91bmQnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ob3RGb3VuZC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMTAwdmhcIj48aDIgY2xhc3NOYW1lPVwibS0wIGJsdWUtZGVmYXVsdFwiPlJvdXRlIE5vdCBGb3VuZDwvaDI+PC9kaXY+ICAgICAgXG4gICAgKTtcbiAgfVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90Rm91bmQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Ob3RGb3VuZF9fTm90Rm91bmRfX18yemNwQiB7XFxuICBjb2xvcjogaW5oZXJpdDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIk5vdEZvdW5kLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjLEVBQUVcIixcImZpbGVcIjpcIk5vdEZvdW5kLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLk5vdEZvdW5kIHtcXG4gIGNvbG9yOiBpbmhlcml0OyB9XFxuXCJdfV0pO1xuXG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJOb3RGb3VuZFwiOiBcIk5vdEZvdW5kX19Ob3RGb3VuZF9fXzJ6Y3BCXCJcbn07IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5eyAgb3ZlcmZsb3cteDogaGlkZGVuOyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDt9XFxuKntwYWRkaW5nOiAwOyBtYXJnaW46IDA7IG91dGxpbmU6IDA7ICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgYm94LXNpemluZzogYm9yZGVyLWJveDt9XFxuYm9keXtmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDQwMDsgbGluZS1oZWlnaHQ6IDE4cHg7IGNvbG9yOiAjMzMzMzMzO31cXG5cXG5pbWd7bWF4LXdpZHRoOiAxMDAlO31cXG5maWd1cmV7cGFkZGluZzogMDsgbWFyZ2luOiAwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxcbmF7Y29sb3I6ICMyMDlERTI7fVxcbmE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzIwOURFMjt9XFxuXFxuXFxuLyogTG9kZXIgKi9cXG4ubG9hZGVyLFxcbi5sb2FkZXI6YmVmb3JlLFxcbi5sb2FkZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogIzIwOWRlMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxufVxcbi5sb2FkZXIge1xcbiAgY29sb3I6ICMyMDlkZTA7XFxuICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gIG1hcmdpbjogMTUwcHggYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogOHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xcbn1cXG4ubG9hZGVyOmJlZm9yZSxcXG4ubG9hZGVyOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG4ubG9hZGVyOmJlZm9yZSB7XFxuICBsZWZ0OiAtMS41ZW07XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XFxufVxcbi5sb2FkZXI6YWZ0ZXIge1xcbiAgbGVmdDogMS41ZW07XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XFxuICAwJSxcXG4gIDgwJSxcXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDA7XFxuICAgIGhlaWdodDogNGVtO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAtMmVtO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsb2FkMSB7XFxuICAwJSxcXG4gIDgwJSxcXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiAwIDA7XFxuICAgIGhlaWdodDogNGVtO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAtMmVtO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gIH1cXG59XFxuXFxuLkxvZ2lucHtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7IFxcbiAgcGFkZGluZzogMTAlIDAgMCAwOyBcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4uTG9naW5wIC5leHBXcmFwcGVye1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0byA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggMCAjNzA3MDcwO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjNzA3MDcwO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXB7bWFyZ2luLWJvdHRvbTogMTBweDt9XFxuLmx0Ym94e1xcbiAgd2lkdGg6IDEwMCU7IFxcbiAgaGVpZ2h0OiAzMnB4OyBcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBwYWRkaW5nOiAwIDhweDtcXG4gIGJvcmRlci1yYWRpdXM6NHB4O1xcbn1cXG4ubHRib3gudC1wYXNze3BhZGRpbmctcmlnaHQ6IDI0cHg7fVxcbi5wYXNzX3dyYXB7d2lkdGg6IDEwMCU7IHBvc2l0aW9uOiByZWxhdGl2ZTt9XFxuLnBhc3Nfd3JhcCBhe3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiA1cHg7fVxcblxcbi5zdWJtaXRCdG57d2lkdGg6IDEwMCU7IGN1cnNvcjogcG9pbnRlcjsgaGVpZ2h0OiAzMnB4OyBib3JkZXItcmFkaXVzOjRweDsgZm9udC1zaXplOiAxNnB4OyBtYXJnaW46NXB4IDAgMTBweDsgYmFja2dyb3VuZDogIzIwOWRlMDsgY29sb3I6ICNmZmY7IGJvcmRlcjogbm9uZTt9XFxuXFxuLmhlYWRlcnsgYmFja2dyb3VuZDogIzAwMTUyOTsgY29sb3I6ICNhNmFkYjQ7IGhlaWdodDogNTBweDt9XFxuLmhlYWRlciAud2FwcGVye3dpZHRoOiA5NiU7IGhlaWdodDogMTAwJTsgbWFyZ2luOiAwIGF1dG87IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjt9XFxuLmhlYWRlciBuYXZ7aGVpZ2h0OiAxMDAlO31cXG4uaGVhZGVyIG5hdiBhe2Rpc3BsYXk6IGlubGluZS1ibG9jazsgcGFkZGluZzogMCAxOHB4OyBmb250LXNpemU6IDE2cHg7IGhlaWdodDogMTAwJTsgIGxpbmUtaGVpZ2h0OiA0MnB4OyBjdXJzb3I6IHBvaW50ZXI7fVxcbi5oZWFkZXIgbmF2IGEuYWN0aXZlLCAuaGVhZGVyIG5hdiBhOmhvdmVye2JhY2tncm91bmQ6ICMxODkwZmY7IGNvbG9yOiAjZmZmIWltcG9ydGFudDt9XFxuLnVQYW57ZGlzcGxheTogZmxleDsgY3Vyc29yOiBwb2ludGVyOyBoZWlnaHQ6IDEwMyU7IGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBwb3NpdGlvbjogcmVsYXRpdmU7fVxcbi51UGFuID5zcGFue2JhY2tncm91bmQ6ICNhNmFkYjQ7IGhlaWdodDogMjVweDt9XFxuLnVQYW4gdWx7cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUycHg7IGxpc3Qtc3R5bGU6IG5vbmU7IGRpc3BsYXk6IG5vbmU7IHdpZHRoOiAxNTBweDsgcmlnaHQ6IDA7fVxcbi51UGFuIHVsIGxpIGF7cGFkZGluZzogNXB4OyBkaXNwbGF5OiBibG9jazsgYmFja2dyb3VuZDogIzMzMzsgY29sb3I6I2E2YWRiNDt9XFxuLnVQYW46aG92ZXIgdWx7ZGlzcGxheTogYmxvY2s7fVxcblxcblxcbi5kUGFnZXsgbWluLWhlaWdodDogMTAwdmg7fVxcbi5kUGFnZSAud3JhcHBlcnsgd2lkdGg6IDEwMCU7IGRpc3BsYXk6IGZsZXg7fVxcbi5kUGFnZSAud3JhcHBlciBhc2lkZXt3aWR0aDogMjAlOyBiYWNrZ3JvdW5kOiAjZjZmNmY2OyBtaW4taGVpZ2h0OiAxMDB2aDt9XFxuLmRQYWdlIC53cmFwcGVyIGFzaWRlIC5sbUhlYWRlcntkaXNwbGF5OiBibG9jazsgcGFkZGluZzogMTVweDsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzE4OTBmZjsgZm9udC13ZWlnaHQ6IDYwMDt9XFxuLmRQYWdlIC53cmFwcGVyIGFzaWRlIC5sbUhlYWRlciBpbWd7ZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cXG4uZFBhZ2UgLndyYXBwZXIgYXNpZGUgLnNpZGVOYXYge2xpc3Qtc3R5bGU6IG5vbmU7IH1cXG4uZFBhZ2UgLndyYXBwZXIgYXNpZGUgLnNpZGVOYXYgPmxpID5zcGFue2Rpc3BsYXk6IGJsb2NrOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzsgcGFkZGluZzogMTVweDsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzE4OTBmZjsgZm9udC13ZWlnaHQ6IDYwMDt9XFxuLmRQYWdlIC53cmFwcGVyIGFzaWRlIC5sTmF2eyBiYWNrZ3JvdW5kOiAjZmZmOyBsaXN0LXN0eWxlOiBub25lOyBkaXNwbGF5OiBub25lO31cXG5cXG4uZFBhZ2UgLndyYXBwZXIgYXNpZGUgLmxOYXYgbGkgYXtwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA0NXB4OyBmb250LXNpemU6IDE2cHg7IGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50OyBkaXNwbGF5OiBibG9jazsgY29sb3I6ICMyNjI2MjY7fVxcbi5kUGFnZSAud3JhcHBlciBhc2lkZSAubE5hdiBsaS5hY3RpdmUgYXtiYWNrZ3JvdW5kOmFsaWNlYmx1ZTsgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzE4OTBmZjsgfVxcbi5kUGFnZSAud3JhcHBlciBhc2lkZSAubE5hdiBsaTpob3ZlciBhe2JhY2tncm91bmQ6ICNlNmY3ZmY7fVxcblxcbi5kUGFnZSAud3JhcHBlciBhc2lkZSAuc2lkZU5hdiA+bGkub3BlbkNoaWxkIC5sTmF2e2Rpc3BsYXk6IGJsb2NrO31cXG5cXG5cXG5cXG5cXG5cXG5cXG4uZFBhZ2UgLndyYXBwZXIgbWFpbnt3aWR0aDogODAlOyBwYWRkaW5nOiAyMHB4O31cXG5cXG4uZFBhZ2UgLndyYXBwZXIgbWFpbiAudG9wUGFueyBtYXJnaW4tYm90dG9tOiAxNXB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO31cXG4uZFBhZ2UgLndyYXBwZXIgbWFpbiAudG9wUGFuIGEsIC5kUGFnZSAud3JhcHBlciBtYWluIC50b3BQYW4gc3BhbntwYWRkaW5nOjEwcHggMTVweDsgZGlzcGxheTogaW5saW5lLWJsb2NrO31cXG4uZFBhZ2UgLndyYXBwZXIgbWFpbiAudG9wUGFuIGEuYWN0aXZleyBiYWNrZ3JvdW5kOiAjMTg5MGZmOyBjb2xvcjogI2ZmZjt9XFxuLyogLmRQYWdlIC53cmFwcGVyIG1haW4gLnRvcFBhbiAuc2VhcmNocGFue21hcmdpbi1sZWZ0OiBhdXRvO30gKi9cXG4uZFBhZ2UgLndyYXBwZXIgbWFpbiAudG9wUGFuIC5zZWFyY2hwYW4gaW5wdXR7aGVpZ2h0OjM0cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IHBhZGRpbmc6IDAgMTBweDt9XFxuLmRQYWdlIC53cmFwcGVyIG1haW4gLnRvcFBhbiAuc2VhcmNocGFuIGJ1dHRvbntib3JkZXI6IG5vbmU7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiMxODkwZmY7IHBhZGRpbmc6IDAgMTBweDsgaGVpZ2h0OjM0cHg7fVxcbi5kUGFnZSAud3JhcHBlciBtYWluIC50b3BQYW4gLnNob3J0Qnl7bWFyZ2luLWxlZnQ6IGF1dG87fVxcbi5kUGFnZSAud3JhcHBlciBtYWluIC50b3BQYW4gLnNob3J0Qnkgc2VsZWN0e21hcmdpbi1sZWZ0OiAxMHB4OyBoZWlnaHQ6IDM0cHg7IHBhZGRpbmc6IDAgNXB4O31cXG5cXG4uZmlsdGVyYnl7ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgcGFkZGluZzogMCAwIDE1cHggMDt9XFxuLmZpbHRlcmJ5IHNwYW57ZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW4tbGVmdDogMjVweDt9XFxuLmZpbHRlcmJ5IHNwYW4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXttYXJnaW4tbGVmdDogMTBweDt9XFxuLmJsaW5le2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO31cXG5cXG4uc1RhYmxle1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc1RhYmxlIHRoe1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbn1cXG4uc1RhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxufVxcbi5zVGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQ6ICNmYWZhZmE7IGN1cnNvcjogcG9pbnRlcjt9IFxcbi5zVGFibGUgLmFSb3cgdGQge2JhY2tncm91bmQ6ICNlNmY3ZmY7fVxcbi5zVGFibGUgLmNwYW4ge2Rpc3BsYXk6IG5vbmU7fVxcbi5zVGFibGUgLmNwYW4uc2hvd3tkaXNwbGF5OiB0YWJsZS1yb3c7fVxcblxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17d2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgYm9yZGVyIDogMXB4IHNvbGlkICNmMWYxZjE7IGN1cnNvcjogcG9pbnRlcjtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cXG5cXG4uY0JveEFsbCBpbnB1dHsgZGlzcGxheTogbm9uZTt9XFxuLmNCb3hBbGwgbGFiZWx7d2lkdGg6IDE2cHg7IGN1cnNvcjogcG9pbnRlcjsgaGVpZ2h0OiAxNnB4OyBib3JkZXI6IDFweCBzb2xpZCAjNjY2OyBib3JkZXItcmFkaXVzOiAycHg7IG1hcmdpbjogMDsgYmFja2dyb3VuZDogI2ZmZjsgcG9zaXRpb246IHJlbGF0aXZlO31cXG4uY0JveEFsbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgK2xhYmVsOmFmdGVyeyBjb250ZW50OiAnJzsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDJweDsgbGVmdDogMnB4OyB3aWR0aDogMTBweDsgaGVpZ2h0OiAxMHB4OyAgYmFja2dyb3VuZDogIzE4OTBmZjt9XFxuXFxuLnBhZ2lCYXJ7ZGlzcGxheTogYmxvY2s7IHRleHQtYWxpZ246IHJpZ2h0O31cXG4ucGFnaW5hdGlvbnsgZGlzcGxheTogaW5saW5lLWZsZXg7IG1hcmdpbi10b3A6IDIwcHg7IH1cXG4ucGFnaW5hdGlvbiBsaXsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjZweDsgY3Vyc29yOiBwb2ludGVyOyBsaW5lLWhlaWdodDogMjJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tbGVmdDogNnB4OyBib3JkZXI6MXB4IHNvbGlkICNkOWQ5ZDk7IGJvcmRlci1yYWRpdXM6IDJweDt9XFxuLnBhZ2luYXRpb24gbGkuYWN0aXZleyBib3JkZXI6IDFweCBzb2xpZCAjMTg5MGZmOyBiYWNrZ3JvdW5kOiAjZTZmN2ZmO31cXG5cXG5cXG4uaFBhbntwb3NpdGlvbjogcmVsYXRpdmU7fVxcbi5oUGFuIC50VGlwQm94e2JhY2tncm91bmQ6ICNmZmY7IHdpZHRoOiA0MDBweDsgZGlzcGxheTogbm9uZTsgei1pbmRleDogLTk7IG9wYWNpdHk6IDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtNTBweDsgbGVmdDo2MCU7LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDAgIzlFOUU5RTsgYm94LXNoYWRvdzogMCAwIDVweCAwICM5RTlFOUU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4uaFBhbiAudFRpcEJveCBoNXtmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7fVxcbi5oUGFuIC50VGlwQm94OjpiZWZvcmV7Y29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTEwcHg7IHRvcDogNThweDsgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDAgIzlFOUU5RTsgYm94LXNoYWRvdzogMCAwIDVweCAwICM5RTlFOUU7IHotaW5kZXg6IDE7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IGJhY2tncm91bmQ6ICNmZmY7fVxcbi5oUGFuIC50VGlwQm94IC50V3JhcHtwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kOiAjZmZmOyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDI7fVxcblxcbi5oUGFuOmhvdmVyIC50VGlwQm94eyB6LWluZGV4OiA1OyBvcGFjaXR5OiAxOyBsZWZ0OjQ1JTsgZGlzcGxheTogYmxvY2s7fVxcblxcbi5pTWV0aG9kIHRhYmxle3dpZHRoOiAxMDAlO31cXG4uaU1ldGhvZCB0YWJsZSB0aHtmb250LXdlaWdodDogNjAwOyBwYWRkaW5nOiA4cHg7fVxcbi5pTWV0aG9kIHRhYmxlIHRkeyBwYWRkaW5nOiA4cHg7fVxcbi5pTWV0aG9kIHN0cm9uZ3tkaXNwbGF5OiBibG9jazsgbWFyZ2luOjE1cHggMCA1cHg7fVxcbi5pTWV0aG9kIHB7bWFyZ2luLWJvdHRvbTogMTVweDt9XFxuLmlNZXRob2QgdGV4dGFyZWF7d2lkdGg6IDEwMCU7IGJvcmRlcjogbm9uZTsgcmVzaXplOiBub25lO31cXG4uZXhwTW9kIC5tYXJreyBiYWNrZ3JvdW5kOiAjMTg5MGZmOyBwYWRkaW5nOiA4cHggMTVweDsgY29sb3I6ICNmZmY7fVxcbi5leHBNb2QgLmNsb3NlYntiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDhweCAxNXB4O31cXG5cXG5cXG4udGFiV3JhcCB7d2lkdGg6IDEwMCU7ICBtYXJnaW46IDVweCAxNXB4O31cXG4udGFiV3JhcCAubmF2LXRhYnMge2JvcmRlci1ib3R0b206IG5vbmU7fVxcbi50YWJXcmFwIC5uYXYtdGFicyBsaSBheyBwYWRkaW5nOiAxMHB4IDE1cHg7IGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDMpOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi1yaWdodDogM3B4OyBjb2xvcjogIzAwMDsgZm9udC1zaXplOiAxNHB4O31cXG4udGFiV3JhcCAubmF2LXRhYnMgbGkgYS5hY3RpdmV7YmFja2dyb3VuZDogI2NjYzt9XFxuLnRhYldyYXAgLnRhYi1jb250ZW50e3BhZGRpbmc6IDE1cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7fVxcbi50YWJXcmFwIC50YWJsZSB0aGVhZCB0aHtib3JkZXI6IG5vbmU7fVxcbi50YWJXcmFwIC5iZ1Jvd3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjAzKTt9XFxuXFxuLnVwbG9hZEZpbGV7Y3Vyc29yOiBwb2ludGVyO31cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KXtcXG4gXFxuXFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbic7XG5pbXBvcnQgeyBkb19sb2dpbiB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYXV0aCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coc3RhdGUpXG4gIHJldHVybiB7XG4gICAgZGF0YTogc3RhdGUuc2lnbnVwXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgZG9fbG9naW46ZG9fbG9naW4sXG4gIH0sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoTG9naW4pOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2xvZ2luJzsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge2lzVmFsaWRFbWFpbH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJmdW5jJztcblxuaW1wb3J0ICcuL2xvZ2luLmNzcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5kZWZhdWx0RXJyb3JzICAgID0ge1xuICAgICAgZW1haWw6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgICAgICAgICAgICAgICAgICAgICAgPSB7XG4gICAgICBmYXFEYXRhICAgICAgICAgOiBbXSxcbiAgICAgIGlzTG9hZGluZyAgICAgICA6IHRydWUsXG4gICAgICBtb2RhbCAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICB0eXBlUGFzczogJ3Bhc3N3b3JkJyxcbiAgICAgIGZvcm1EYXRhICAgICAgICAgIDoge1xuICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICAgIH1cbiAgICB9XG5cblxuICAgdGhpcy50b2dnbGVTaG93cGFzcyAgPSB0aGlzLnRvZ2dsZVNob3dwYXNzLmJpbmQodGhpcyk7XG4gICB0aGlzLmhhbmRsZVN1Ym1pdCAgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgdGhpcy4gb25DaGFuZ2VIYW5kbGUgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlLmJpbmQodGhpcyk7XG4gIFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7ICB9XG4gIHRvZ2dsZVNob3dwYXNzKCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgIHR5cGVQYXNzOiB0aGlzLnN0YXRlLnR5cGVQYXNzID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1xuICAgICAgfSlcbiAgfVxuXG4gIG9uQ2hhbmdlSGFuZGxlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1EYXRhIDoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmZvcm1EYXRhLFxuICAgICAgICBbZS50YXJnZXQubmFtZV0gOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZm9ybURhdGEgID0gdGhpcy5zdGF0ZS5mb3JtRGF0YSB8fCB7fTtcbiAgICB0aGlzLnByb3BzLmRvX2xvZ2luKGZvcm1EYXRhKTtcbiAgfVxuICBcbiAgXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHsgICAgXG4gICAgaWYoISFwcm9wcy5kYXRhICYmICEhcHJvcHMuZGF0YS5pc1N1Y2Nlc3MpIHtcbiAgICAgIFxuICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL2Rhc2hib2FyZFwiO1xuICAgICBcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgbGV0IGZvcm1EYXRhXHQ9XHR0aGlzLnN0YXRlLmZvcm1EYXRhIHx8IHt9O1xuXHRcdGxldCBlcnJvcnNcdFx0PVx0ey4uLnRoaXMuZGVmYXVsdEVycm9yc307XG5cdFx0bGV0IGlzRXJyb3JcdFx0PVx0ZmFsc2U7XG4gICAgaWYoISEhZm9ybURhdGEuZW1haWwpIHtcbiAgICAgICAgZXJyb3JzLmVtYWlsICAgICAgICA9XHR0cnVlO1xuICAgICAgICBpc0Vycm9yXHRcdFx0XHQ9XHR0cnVlO1xuICAgIH1cblx0XHRpZighISFmb3JtRGF0YS5wYXNzd29yZCkge1xuXHRcdFx0ZXJyb3JzLnBhc3N3b3JkXHRcdD1cdHRydWU7XG5cdFx0XHRpc0Vycm9yXHRcdFx0XHQ9XHR0cnVlO1xuICAgIH0gXG4gICAgaWYoISFmb3JtRGF0YS5wYXNzd29yZCAmJiBmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGg8NCkge1xuICAgICAgICBlcnJvcnMucGFzc3dvcmRcdFx0PVx0dHJ1ZTtcbiAgICAgICAgaXNFcnJvclx0XHQgICAgICAgID1cdHRydWU7XG4gICAgfVxuXHRcdHJldHVybiB7aXNFcnJvcjogaXNFcnJvciwgZXJyb3JzOiBlcnJvcnN9O1xuICB9XG5cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5wXCI+XG4gICAgICBob21lICBwYWdlXG4gICAgICA8L2Rpdj4gXG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBBUEkgZnJvbSAnLi4vQXBpL0FwaSc7XG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9icm93c2VyJztcbmltcG9ydCB7U2VudHJ5SW5pdGlhbGl6ZSB9IGZyb20gXCIuLi9TZW50cnkvc2VudHJ5XCI7XG5TZW50cnlJbml0aWFsaXplKCk7XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0RmxvYXRUd29EZWNpbWFsID0gZnVuY3Rpb24obnVtKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtKS50b0ZpeGVkKDIpO1xufVxuXG5leHBvcnQgY29uc3QgY29udmVydFR3b0RlY2ltYWxSb3VuZCA9IGZ1bmN0aW9uKG51bSkge1xuICAgIHJldHVybiArKE1hdGgucm91bmQobnVtICsgXCJlKzJcIikgKyBcImUtMlwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ0Vycm9yVG9TZXJ2ZXIgPSBhc3luYyBmdW5jdGlvbihwYXJhbXMsIGVycm9yKSB7XG4gICAgXG4gICAgaWYocGFyYW1zLnR5cGUgPT09ICdjYXRjaCcpXG4gICAgICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKGVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgY29uc3QgaW52YWxpZFVybCAgICA9Jy9pbnZhbGlkLWxpbmsnO1xuICAgIGxldCBhZGRpdGlvbmFsSW5mbyAgICAgID0gICB7fTtcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYVxuICAgICAgICAgKiBzdGF0dXMgY29kZSB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XG4gICAgICAgICAqL1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5kYXRhICAgICA9ICAgZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgYWRkaXRpb25hbEluZm8uc3RhdHVzICAgPSAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgYWRkaXRpb25hbEluZm8uaGVhZGVycyAgPSAgIGVycm9yLnJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ0RhdGEgOiAnLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnU3RhdHVzIDogJywgZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnSGVhZGVycyA6ICcsIGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgcmVxdWVzdCB3YXMgbWFkZSBidXQgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLCBgZXJyb3IucmVxdWVzdGBcbiAgICAgICAgICogaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlXG4gICAgICAgICAqIG9mIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBOb2RlLmpzXG4gICAgICAgICAqL1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdSZXF1ZXN0IDogJywgZXJyb3IucmVxdWVzdCk7XG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLnJlcXVlc3QgICAgID0gICBlcnJvci5yZXF1ZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IGFuZCB0cmlnZ2VyZWQgYW4gRXJyb3JcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRXJyb3IgOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgYWRkaXRpb25hbEluZm8ubWVzc2FnZSAgICAgPSAgIGVycm9yLm1lc3NhZ2U7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ0NvbmZpZyA6ICcsIGVycm9yLmNvbmZpZyk7XG4gICAgaWYoISFlcnJvci5jb25maWcpXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmNvbmZpZyAgICAgPSAgIGVycm9yLmNvbmZpZztcbiAgICBjb25zdCByZXMgICAgICAgICAgID0gICBhd2FpdCBBUEkucG9zdCgnL2F1dGgvY2F0Y2gtaW52YWxpZC1saW5rJywge1xuICAgICAgICBcInBhcmFtc1wiICAgIDogICB7Li4ucGFyYW1zLCBhZGRpdGlvbmFsSW5mbzogSlNPTi5zdHJpbmdpZnkoYWRkaXRpb25hbEluZm8pfVxuICAgIH0pXG4gICAgaWYgKHJlcy5kYXRhLmVycm9yKSB7XG4gICAgICAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKHJlcy5kYXRhLmVycm9yKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgICA9PiAge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBpbnZhbGlkVXJsXG4gICAgICAgIH0sMzAwMCk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGFkZHJlc3NGb3JtYXRlciA9IChvYmopID0+IHtcbiAgICB0cnl7XG4gICAgICBsZXQgcmVnZXggPSAvKFxcZCspICguKz8pLCAoLis/KSwgKC4rPykgKFswLTldezV9KS87XG4gIFxuICAgICAgbGV0IGFkZHJlc3MgPSBvYmoubWF0Y2gocmVnZXgpO1xuICAgICAgLy9jb25zb2xlLmxvZyhhZGRyZXNzKTtcbiAgICAgIGlmKGFkZHJlc3NbNF0uaW5kZXhPZignLCcpID4gLTEgJiYgYWRkcmVzc1szXS5pbmRleE9mKCcgJykgPiAtMSl7XG4gICAgICAgIGxldCBmb3JtYXR0ZWRBZGRyZXNzID0gYWRkcmVzc1szXSsnLCAnKyBhZGRyZXNzWzRdICsgJyAnKyBhZGRyZXNzW2FkZHJlc3MubGVuZ3RoIC0xXTtcbiAgICAgICAgbGV0IG1vZEFkZHJlc3MgPSBmb3JtYXR0ZWRBZGRyZXNzKycsIFVTQSc7XG4gICAgICAgIGlmKC8oXFxkKykgKC4rPyksICguKz8pLCAoLis/KSAoWzAtOV17NX0pL2cudGVzdChtb2RBZGRyZXNzKSl7XG4gICAgICAgICAgbGV0IF9hZGRyZXNzID0gbW9kQWRkcmVzcy5tYXRjaChyZWdleCk7XG4gIFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWxpZEFkcnM6IHRydWUsIFxuICAgICAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogZm9ybWF0dGVkQWRkcmVzcyxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1vZEFkZHJlc3MsXG4gICAgICAgICAgICBudW1iZXI6IF9hZGRyZXNzWzBdLFxuICAgICAgICAgICAgc3RyZWV0OiBfYWRkcmVzc1sxXSxcbiAgICAgICAgICAgIGNpdHk6IF9hZGRyZXNzWzJdLFxuICAgICAgICAgICAgY291bnRyeTogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgICAgICAgICAgc3RhdGVfY29kZTogX2FkZHJlc3NbNF0sXG4gICAgICAgICAgICB6aXBjb2RlOiBfYWRkcmVzc1tfYWRkcmVzcy5sZW5ndGggLTFdXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWxpZEFkcnM6IGZhbHNlIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzWzFdICsgJyAnICsgYWRkcmVzc1syXSArICcsICcrIGFkZHJlc3NbM10gKyAnLCAnICsgYWRkcmVzc1s0XSArICcgJyArIGFkZHJlc3NbYWRkcmVzcy5sZW5ndGggLTFdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbGlkQWRyczogdHJ1ZSwgXG4gICAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogZm9ybWF0dGVkQWRkcmVzcyxcbiAgICAgICAgICBhZGRyZXNzOiBvYmosXG4gICAgICAgICAgbnVtYmVyOiBhZGRyZXNzWzFdLFxuICAgICAgICAgIHN0cmVldDogYWRkcmVzc1syXSxcbiAgICAgICAgICBjaXR5OiBhZGRyZXNzWzNdLFxuICAgICAgICAgIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzJyxcbiAgICAgICAgICBzdGF0ZV9jb2RlOiBhZGRyZXNzWzRdLFxuICAgICAgICAgIHppcGNvZGU6IGFkZHJlc3NbYWRkcmVzcy5sZW5ndGggLTFdLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsaWRBZHJzOiBmYWxzZSBcbiAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZEVtYWlsID0oZW1haWwpID0+e1xuICBjb25zdCBwYXR0ZXJuID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgcmV0dXJuIHBhdHRlcm4udGVzdChTdHJpbmcoZW1haWwpKTtcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge2dldENvb2tpZSwgc2V0TGlmZXRpbWVDb29raWV9IGZyb20gJy4uL3V0aWwvY29va2llcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmNvbnN0IEFQSV9VUkwgICAgICAgICAgID0gICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiO1xuXG5jb25zdCBBUEkgICAgICAgICAgICAgICA9ICAgYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBBUElfVVJMXG59KVxuQVBJLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbmxldCBhdXRoICAgICAgICAgICAgICA9ICAgJyc7XG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gIGxldCB1c2VyRGF0YSAgICAgICAgICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9Jyk7XG4gIGlmKCFfLmlzRW1wdHkodXNlckRhdGEpKXtcbiAgICBhdXRoICAgICAgICAgICAgICA9ICAgICdUb2tlbiAnICsgdXNlckRhdGEua2V5O1xuICB9IGVsc2V7XG4gICAgYXV0aCAgID0gIFwiXCJcbiAgfVxuIFxuICBjb25zb2xlLmxvZyhhdXRoKTtcbiAgQVBJLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBhdXRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuLy9wcm9jZXNzLmVudi5OT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIHN0YWdpbmcgfCBkZXZlbG9wbWVudCB8IHByb2R1Y3Rpb25cbi8vcHJvY2Vzcy5lbnYuUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcbi8vY29uc3QgZW52ICAgICA9IChwcm9jZXNzLmVudi5OT0RFX0VOVik/cHJvY2Vzcy5lbnYuTk9ERV9FTlY6J2RldmVsb3BtZW50Jztcbi8vY29uc3QgZW52ICAgICAgID0gJ3N0YWdpbmcnO1xuXG5sZXQgZW52ICAgPSAnJztcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WICA9PT0gJ3Byb2R1Y3Rpb24nKVxuICBlbnYgID0gJ3Byb2R1Y3Rpb24nO1xuZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpXG4gIGVudiAgPSAnc3RhZ2luZyc7XG5lbHNlXG4gIGVudiAgPSAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0ge1xuICAvL2VudjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JyxcbiAgZW52OmVudixcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgxXG59O1xuLy9jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOViwgXy5leHRlbmQoY29uZmlnLCByZXF1aXJlKCcuLycgKyBlbnYgKyAnLmpzJykuZGVmYXVsdCB8fCB7fSkpXG5leHBvcnQgZGVmYXVsdCBfLmV4dGVuZChjb25maWcsIHJlcXVpcmUoJy4vJyArIGVudiArICcuanMnKS5kZWZhdWx0IHx8IHt9KTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGV2ZWxvcG1lbnQuanNcIjogNzE5LFxuXHRcIi4vaW5kZXguanNcIjogNzE1XG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNzE4OyIsIlxuIGNvbnN0IGNvbmZpZyAgICA9ICAge1xuICAgIC8vIGZvciBkZXYgICAgXG4gICAgZm9vZGpldHNVcmwgICAgICAgICAgICAgOiAgICcnLFxuICAgIGFwaV9lbmQgICAgICAgICAgICAgICAgIDogICAnL2FwaS8nLFxuICAgIEdUTV9jb2RlICAgICAgICAgICAgICAgIDogICAnR1RNLVRITkdQSDYnLFxuICAgIEdTVE1fY29kZSAgICAgICAgICAgICAgIDogICAnVUEtNjU1NTQzMDEtMycsXG4gICAgcGF5cGFsICAgICAgICAgICAgICAgICAgOiAgIHtcbiAgICAgICAgbW9kZSAgICAgICAgICAgICAgICA6ICAgJ3NhbmRib3gnXG4gICAgfSBcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9icm93c2VyJztcblxuXG5cbiAgZXhwb3J0IGNvbnN0IFNlbnRyeUluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgU2VudHJ5LmluaXQoe1xuICAgICAgICBkc246IGNvbmZpZy5zZW50cnlfZHNuXG4gICAgICB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9naW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2dpbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydCB7IGRvX2xvZ2luIH0gZnJvbSAnLi9hdXRoJzsiLCJpbXBvcnQgVFlQRSBmcm9tICcuLi8uLi90eXBlcy9hdXRoJztcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vLi4vQXBpL0FwaSc7XG5pbXBvcnQgeyBlcnJvciBhcyBub3RpZnlFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvbm90aWZ5JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCB7U2VudHJ5SW5pdGlhbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9TZW50cnkvc2VudHJ5XCJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuU2VudHJ5SW5pdGlhbGl6ZSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9fbG9naW4oZGF0YSkge1xuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpICAgICAgICAgICAgID0+ICB7XG4gICAgICAgIGxldCAgc2VuZERhdGEgID0gIHt1c2VybmFtZTpkYXRhLmVtYWlsLCBwYXNzd29yZDpkYXRhLnBhc3N3b3JkfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBUWVBFLlNJR05JTiB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyAgICAgICAgICAgICAgICAgICA9ICAgYXdhaXQgQVBJLnBvc3QoJ3Jlc3QtYXV0aC9sb2dpbi8nLCBzZW5kRGF0YSlcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgIG5vdGlmeUVycm9yKHJlcy5kYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBUWVBFLlNJR05JTl9FUlJPUiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyRGF0YSAgICA9ICAgcmVzLmRhdGEgfHwge307XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOX1NVQ0NFU1MsIGRhdGE6ICByZXMuZGF0YX0pO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBub3RpZnlFcnJvcignSW52YWxpZCByZXF1ZXN0ICg0MDEpJyk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOX0VSUk9SIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNvbnN0IHByZWZpeCA9ICdAQGF1dGhUeXBlcyc7XG5cbmNvbnN0IHR5cGVzID0ge1xuICBTSUdOVVA6IG51bGwsXG4gIFNJR05VUF9TVUNDRVNTOiBudWxsLFxuICBTSUdOVVBfRVJST1I6IG51bGwsXG4gIFNJR05JTjogbnVsbCxcbiAgU0lHTklOX1NVQ0NFU1M6IG51bGwsXG4gIFNJR05JTl9FUlJPUjogbnVsbCxcbiAgQUREX0RFTF9BRERSOiBudWxsLFxuICBBRERfREVMX0FERFJfU1VDQ0VTUzogbnVsbCxcbiAgQUREX0RFTF9BRERSX0VSUk9SOiBudWxsLFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmVmaXhlcih0eXBlcywgcHJlZml4KTsiLCJpbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVmaXhlcih0eXBlcywgcHJlZml4KSB7XG4gIHJldHVybiByZWR1Y2UodHlwZXMsIChyZXN1bHQsIHZhbHVlLCBrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IGAke3ByZWZpeH0vJHtrZXl9YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn1cbiIsImltcG9ydCB7IG5vdGlmeSB9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XG5cbmV4cG9ydCBjb25zdCBzdWNjZXNzID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyMwMDgwMDAnLCB0ZXh0OiBcIiNGRkZGRkZcIiwgXCJ6LWluZGV4XCI6XCI5OTk5OVwiIH07XG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7ICAgIFxufVxuLy8gZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcbi8vICAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNGQjYwNTYnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xuLy8gICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDUwMDAsIG15Q29sb3IpO1xuLy8gfVxuZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNGQjYwNTYnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xuICAgIGxldCBoID1cInhcIlxuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDUwMDAsIG15Q29sb3IpO1xufVxuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSAobWVzc2FnZSkgPT4ge1xuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwid2FybmluZ1wiLCA1MDAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbWVycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNmZjAwMDAnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDYwMDAwLCBteUNvbG9yKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgbm90aWZ5LmhpZGUoKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xuaW1wb3J0IHJlZHV4U3RhdGUgZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMnO1xuXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gY3JlYXRlTG9nZ2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlZHV4U3RvcmUoeyBwcmVsb2FkZWRTdGF0ZSwgc2VydmVyIH0gPSB7fSkge1xuICBsZXQgZW5oYW5jZXI7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXNlcnZlcikge1xuICAgIGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZSk7XG4gIH0gZWxzZSB7XG4gICAgZW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1eFN0YXRlLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHNpZ251cCBmcm9tICcuL2F1dGgnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJztcblxuXG5cbmNvbnN0IHJlZHV4U3RhdGUgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIEhvbWUsXG4gICAgaGVhZGVyLFxuICAgIHNpZ251cCxcblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4U3RhdGU7IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vdHlwZXMvaGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRZUEUuUkVRX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIEhlYWRlcmRhdGE6IHt9IH07XG4gICAgY2FzZSBUWVBFLlJFU19EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOmZhbHNlLCBIZWFkZXJkYXRhOiBhY3Rpb24uZGF0YX07XG4gICAgY2FzZSBUWVBFLkZBSUxfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogZmFsc2UsIEhlYWRlcmRhdGE6IHt9fTtcblxuICAgICAgY2FzZSBUWVBFLlJFUV9BRERSRVNTX0RBVEE6XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSwgQWRyZXNzZGF0YToge30gfTtcbiAgICAgICAgY2FzZSBUWVBFLlJFU19BRERSRVNTX0RBVEE6XG4gICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOmZhbHNlLCBBZHJlc3NkYXRhOiBhY3Rpb24uZGF0YX07XG5cbiAgICAgIGNhc2UgVFlQRS5GQUlMX0FERFJFU1NfREFUQTpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgQWRyZXNzZGF0YToge319O1xuICAgXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xuXG5jb25zdCBwcmVmaXggPSAnQEBoZWFkZXJUeXBlcyc7XG5cbmNvbnN0IHR5cGVzID0ge1xuICBSRVFfREFUQTogbnVsbCxcbiAgUkVTX0RBVEE6IG51bGwsXG4gIEZBSUxfREFUQTogbnVsbCxcbiAgUkVRX0FERFJFU1NfREFUQTogbnVsbCxcbiAgUkVTX0FERFJFU1NfREFUQTogbnVsbCxcbiAgRkFJTF9BRERSRVNTX0RBVEE6IG51bGwsXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJlZml4ZXIodHlwZXMsIHByZWZpeCk7IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vdHlwZXMvYXV0aCc7XG5sZXQgdXNlckRhdGEgICAgPSB7fTtcbi8vaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICB1c2VyRGF0YSAgICAgICAgICA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpIHx8ICd7fScpIDoge307XG4vL31cbmNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbmxldCBpbml0aWFsU3RhdGUgICAgPSAgIHtcbiAgdXNlckRhdGE6IHsuLi51c2VyRGF0YX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVFlQRS5TSUdOVVA6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IHRydWUsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5TSUdOVVBfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzpmYWxzZSwgaXNTdWNjZXNzOiB0cnVlLCB1c2VyRGF0YTogYWN0aW9uLmRhdGF9O1xuICAgIGNhc2UgVFlQRS5TSUdOVVBfRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IGZhbHNlLCBpc1N1Y2Nlc3M6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuU0lHTklOOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOiB0cnVlLCBpc1N1Y2Nlc3M6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuU0lHTklOX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6ZmFsc2UsIGlzU3VjY2VzczogdHJ1ZSwgdXNlckRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuU0lHTklOX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOiBmYWxzZSwgaXNTdWNjZXNzOiBmYWxzZX07XG4gICAgY2FzZSBUWVBFLkFERF9ERUxfQUREUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzQWRkcmVzc0Vycm9yOiBmYWxzZX07XG4gICAgY2FzZSBUWVBFLkFERF9ERUxfQUREUl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSX0VSUk9SOlxuICAgIHJldHVybiB7Li4uc3RhdGUsIGlzQWRkcmVzc0Vycm9yOiB0cnVlfTsgXG4gICBcbiAgICBkZWZhdWx0OiByZXR1cm4gey4uLnN0YXRlLCAuLi5pbml0aWFsU3RhdGV9O1xuICB9XG59IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vdHlwZXMvaG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IG51bGwsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUWVBFLlJFUV9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlLCBIb21lZGF0YToge30gfTtcbiAgICBjYXNlIFRZUEUuUkVTX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEhvbWVkYXRhOiBhY3Rpb24uZGF0YX07XG4gICAgY2FzZSBUWVBFLkZBSUxfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogZmFsc2UsIEhvbWVkYXRhOiB7fX07XG4gICBcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNvbnN0IHByZWZpeCA9ICdAQGhvbWVUeXBlcyc7XG5cbmNvbnN0IHR5cGVzID0ge1xuICBSRVFfREFUQTogbnVsbCxcbiAgUkVTX0RBVEE6IG51bGwsXG4gIEZBSUxfREFUQTogbnVsbCxcblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmVmaXhlcih0eXBlcywgcHJlZml4KTsiXSwic291cmNlUm9vdCI6IiJ9