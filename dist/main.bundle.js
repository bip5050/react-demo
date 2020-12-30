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
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(667);
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
  component: _containers_Home__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"]
}];
var publicroutes = [{
  path: '/home',
  component: _containers_Home__WEBPACK_IMPORTED_MODULE_11__["default"]
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
exports.push([module.i, "html, body{  overflow-x: hidden; scroll-behavior: smooth;}\n*{padding: 0; margin: 0; outline: 0;  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}\nbody{font-family: 'Source Sans Pro', sans-serif; font-size: 14px; font-weight: 400; line-height: 18px; color: #333333;}\n\nimg{max-width: 100%;}\nfigure{padding: 0; margin: 0; display: inline-block;}\na{color: #209DE2;}\na:hover{text-decoration: none; color: #209DE2;}\n \n\n.cTable {border-collapse: collapse; width: 100%; border-bottom: 1px solid #ccc;}\n.cTable th{position: relative;}\n.cTable th i{position: absolute; right: 15px; top: 15px; cursor: pointer;}\n.cTable th, .cTable td {padding: 15px; border: 1px solid #ccc; border-bottom: none; position: relative;}\n.cTable.oneCol th, .cTable.oneCol td, .cTable.oneCol .subTable td{width: 72%;}\n.cTable.twoCol th, .cTable.twoCol td, .cTable.twoCol .subTable td{width: 54%;}\n.cTable.threeCol th, .cTable.threeCol td, .cTable.threeCol .subTable td{width: 36%;}\n.cTable.fourCol th, .cTable.fourCol td, .cTable.fourCol .subTable td{width: 18%;}\n\n.cTable th:first-child, .cTable td:first-child{ width: 28%;}\n.cTable th{text-align: center;}\n.cTable th span{display: block; font-size: 12px;}\n\n.closeSec{position: absolute; right: 15px; color: #FB6056; cursor: pointer;}\n\n.cTable td.st{padding: 0; border-top: none; border-bottom: none;} \n.subTable{width: 100%; display: none;}\n.stOpen .subTable{ display:table;}\n.subTable tr:nth-child(odd) {background-color: #f2f2f2;}\n.subTable td{width: 18%;}\n.subTable td:first-child{ width: 28%!important;}\n\n.tac{text-align: center;}\n\n", ""]);



/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(620);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(668);
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_home__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
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
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(784);
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_12__);
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








var home = /*#__PURE__*/function (_Component) {
  _inherits(home, _Component);

  var _super = _createSuper(home);

  function home(props) {
    var _this;

    _classCallCheck(this, home);

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
    _this.deleteRow = _this.deleteRow.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(home, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "deleteRow",
    value: function deleteRow(rowname) {
      var _this2 = this;

      var _this$state = this.state,
          columData = _this$state.columData,
          formData = _this$state.formData;
      swal({
        title: "Are you sure you want  to  delete  this  item?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          columData.map(function (cdata, index) {
            Object.keys(cdata).map(function (oneKey, i) {
              if (oneKey == rowname) {
                delete cdata[oneKey];
                delete formData[rowname]; // console.log(formData,rowname, formData[rowname], formData["company_info"]);
                //  delete formData[oneKey]
              }
            });
          });

          _this2.setState({
            columData: columData,
            formData: formData
          }, function () {
            swal("Poof! Your itemhas been deleted!", {
              icon: "success"
            });
          });
        } else {}
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
      var _this3 = this;

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

          _this3.setState({
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
      var _this4 = this;

      var _this$state2 = this.state,
          formData = _this$state2.formData,
          columData = _this$state2.columData;
      console.log(formData);
      var overall_scoor = formData.overall_scoor,
          box_header = formData.box_header,
          product_description = formData.product_description,
          funding_history = formData.funding_history,
          fetaures = formData.fetaures,
          customer_case_study = formData.customer_case_study,
          company_info = formData.company_info;
      columData.map(function (cdata, index) {
        if (!!cdata.product_description && cdata.product_description.data.length > 2) {
          swal({
            title: "You cant add more  than  3  items",
            icon: "warning"
          });

          _this4.setState({
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
          if (cdata.product_description != undefined) {
            cdata.product_description.data.push({
              description: product_description
            });
          }

          if (cdata.funding_history != undefined) {
            cdata.funding_history.data.push({
              description: funding_history
            });
            Object.keys(cdata.funding_history.subitems).map(function (oneKey, i) {
              if (oneKey == "Founded") {
                cdata.funding_history.subitems[oneKey].push("2005");
              }

              if (oneKey == "KeyInvestors") {
                cdata.funding_history.subitems[oneKey].push("DFG, scale, venture partners");
              }

              if (oneKey == "Founders") {
                cdata.funding_history.subitems[oneKey].push("Arone Levie, Dylon smith");
              }
            });
          }

          if (cdata.fetaures != undefined) {
            cdata.fetaures.data.push({
              description: fetaures
            });
          }

          if (cdata.customer_case_study != undefined) {
            cdata.customer_case_study.data.push({
              description: customer_case_study
            });
          }

          if (cdata.company_info != undefined) {
            cdata.company_info.data.push({
              description: company_info
            });
          }

          cdata.overall_scoor.data.push({
            description: overall_scoor
          });
          cdata.box_header.data.push({
            description: box_header
          });

          _this4.setState({
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
      var _this5 = this;

      var _this$state3 = this.state,
          columData = _this$state3.columData,
          formData = _this$state3.formData,
          hideClass = _this$state3.hideClass;
      console.log(formData);
      var colSpan = "";
      var colSpanTd = 2;
      columData.map(function (data, key) {
        colSpanTd = !!data.funding_history ? data.funding_history.subitems.Founded.length + 1 : 2;

        if (!!data.product_description && data.product_description.data.length == 1) {
          colSpan = "twoCol";
        }

        if (!!data.product_description && data.product_description.data.length == 2) {
          colSpan = "threeCol";
        }

        if (!!data.product_description && data.product_description.data.length == 3) {
          colSpan = "fourCol";
        } // if(data.product_description.data.length==4){
        //   colSpan= "fourCol"
        // }

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
              return _this5.deleteColum(key);
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.product_description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.product_description.text, "  "), data.product_description.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.funding_history ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.funding_history.text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          onClick: function onClick() {
            return _this5.deleteRow("funding_history");
          },
          className: "closeSec"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          class: "fa fa-times-circle",
          "aria-hidden": "true"
        })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          onClick: function onClick() {
            return _this5.toogleClass();
          },
          className: "fa fa-angle-down",
          "aria-hidden": "true"
        })), data.funding_history.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        colSpan: colSpanTd,
        className: hideClass ? "st" : "st stOpen"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "subTable"
      }, columData.map(function (data, key) {
        if (data.funding_history == undefined) return null;
        return Object.keys(data.funding_history.subitems).map(function (oneKey, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
            key: i
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, oneKey), data.funding_history.subitems[oneKey].map(function (item, key) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, item);
          }));
        });
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.company_info ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.company_info.text, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          onClick: function onClick() {
            return _this5.deleteRow("company_info");
          },
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.fetaures ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.fetaures.text, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          onClick: function onClick() {
            return _this5.deleteRow("fetaures");
          },
          className: "closeSec"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          class: "fa fa-times-circle",
          "aria-hidden": "true"
        })), " "), data.fetaures.data.map(function (subdata, key) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            key: key
          }, subdata.description);
        })) : "");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, columData.map(function (data, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, !!data.customer_case_study ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, data.customer_case_study.text, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          onClick: function onClick() {
            return _this5.deleteRow("customer_case_study");
          },
          className: "closeSec"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          class: "fa fa-times-circle",
          "aria-hidden": "true"
        }))), data.customer_case_study.data.map(function (subdata, key) {
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
      }, formData.product_description != undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "product_description"
      }, "Product Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: formData.product_description,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        name: "product_description"
      })) : "", formData.funding_history != undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "funding_history"
      }, "Funding History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        value: formData.funding_history,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        className: "form-control",
        name: "funding_history"
      })) : "", formData.company_info != undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "company_info"
      }, "Company Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        value: formData.company_info,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        className: "form-control",
        name: "company_info"
      })) : "", formData.fetaures != undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "fetaures"
      }, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        value: formData.fetaures,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        className: "form-control",
        name: "fetaures"
      })) : "", formData.customer_case_study != undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        for: "customer_case_study"
      }, "Customer case study"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        value: formData.customer_case_study,
        onChange: function onChange(e) {
          return _this5.onChangeHandle(e);
        },
        className: "form-control",
        name: "customer_case_study"
      })) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this5.handleSubmit();
        },
        className: "btn btn-primary"
      }, "Submit"))))));
    }
  }]);

  return home;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzPzE0MWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbm90LWZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ub3QtZm91bmQvTm90Rm91bmQuc2Nzcz84YzI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcz8xZGZkIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2hlbHBlcmZ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwaS9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIHN5bmMgXlxcLlxcLy4qXFwuanMkIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbnRyeS9zZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmNzcz9lYjRkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL25vdGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NyZWF0ZVJlZHV4U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJwcmVsb2FkZWRTdGF0ZSIsIndpbmRvdyIsIl9fUFJFTE9BREVEX1NUQVRFX18iLCJzdG9yZSIsImNyZWF0ZVJlZHV4U3RvcmUiLCJoeWRyYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlNlbnRyeUluaXRpYWxpemUiLCJyb3V0ZXMiLCJwYXRoIiwiZXhhY3QiLCJjb21wb25lbnQiLCJIb21lIiwiTm90Rm91bmQiLCJwdWJsaWNyb3V0ZXMiLCJwcml2YXRlUm91dGVzIiwicHJvdGVjdGVkUm91dGVzIiwiUm91dGVyIiwiaGlkZUhlYWQiLCJ1cmwiLCJ1c2VyRGF0YSIsImN1cnJlbnRBZGRyZXNzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsIm1hcCIsInJvdXRlIiwiUHVibGljUm91dGUiLCJDb21wb25lbnQiLCJyZXN0Iiwib2JqIiwicHJldlBhdGgiLCJwcm9wcyIsIlByaXZhdGVSb3V0ZSIsIl8iLCJpc0VtcHR5IiwiY29uc29sZSIsImxvZyIsIlByb3RlY3RlZFJvdXRlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsIkFwcCIsInN0eWxlcyIsIlRvcEJhciIsIkxpbmsiLCJjaGlsZHJlbiIsIkZvb3RlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic2V0Q29va2llIiwiZGF0YSIsIm5hbWUiLCJDb29raWVzIiwic2V0Iiwic2V0TGlmZXRpbWVDb29raWUiLCJkYXkiLCJleHBpcmVzIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0SlNPTiIsInNpZ251cCIsImRvX2xvZ2luIiwiaG9tZSIsImRlZmF1bHRFcnJvcnMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmFxRGF0YSIsImlzTG9hZGluZyIsIm1vZGFsIiwidHlwZVBhc3MiLCJmb3JtRGF0YSIsInByb2R1Y3RfZGVzY3JpcHRpb24iLCJmdW5kaW5nX2hpc3RvcnkiLCJjb21wYW55X2luZm8iLCJmZXRhdXJlcyIsImN1c3RvbWVyX2Nhc2Vfc3R1ZHkiLCJvdmVyYWxsX3Njb29yIiwiYm94X2hlYWRlciIsImNvbHVtRGF0YSIsInRleHQiLCJkZXNjcmlwdGlvbiIsInN1Yml0ZW1zIiwiRm91bmRlZCIsIktleUludmVzdG9ycyIsIkZvdW5kZXJzIiwiaGlkZUNsYXNzIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsIm9uQ2hhbmdlSGFuZGxlIiwiZGVsZXRlQ29sdW0iLCJ0b29nbGVDbGFzcyIsImRlbGV0ZVJvdyIsInJvd25hbWUiLCJzd2FsIiwidGl0bGUiLCJpY29uIiwiYnV0dG9ucyIsImRhbmdlck1vZGUiLCJ0aGVuIiwid2lsbERlbGV0ZSIsImNkYXRhIiwiaW5kZXgiLCJPYmplY3QiLCJrZXlzIiwib25lS2V5IiwiaSIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaWQiLCJmaWx0ZXIiLCJsZW5ndGgiLCIkIiwidW5kZWZpbmVkIiwicHVzaCIsImlzU3VjY2VzcyIsImhyZWYiLCJlcnJvcnMiLCJpc0Vycm9yIiwiY29sU3BhbiIsImNvbFNwYW5UZCIsImtleSIsInN1YmRhdGEiLCJpdGVtIiwiY29udmVydEZsb2F0VHdvRGVjaW1hbCIsIm51bSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY29udmVydFR3b0RlY2ltYWxSb3VuZCIsIk1hdGgiLCJyb3VuZCIsImxvZ0Vycm9yVG9TZXJ2ZXIiLCJwYXJhbXMiLCJlcnJvciIsInR5cGUiLCJTZW50cnkiLCJpbnZhbGlkVXJsIiwiYWRkaXRpb25hbEluZm8iLCJyZXNwb25zZSIsInN0YXR1cyIsImhlYWRlcnMiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImNvbmZpZyIsIkFQSSIsInBvc3QiLCJzdHJpbmdpZnkiLCJyZXMiLCJzZXRUaW1lb3V0IiwiYWRkcmVzc0Zvcm1hdGVyIiwicmVnZXgiLCJhZGRyZXNzIiwibWF0Y2giLCJpbmRleE9mIiwiZm9ybWF0dGVkQWRkcmVzcyIsIm1vZEFkZHJlc3MiLCJ0ZXN0IiwiX2FkZHJlc3MiLCJ2YWxpZEFkcnMiLCJudW1iZXIiLCJzdHJlZXQiLCJjaXR5IiwiY291bnRyeSIsInN0YXRlX2NvZGUiLCJ6aXBjb2RlIiwiaXNWYWxpZEVtYWlsIiwicGF0dGVybiIsIlN0cmluZyIsIkFQSV9VUkwiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJkZWZhdWx0cyIsImNvbW1vbiIsImF1dGgiLCJlbnYiLCJwcm9jZXNzIiwicG9ydCIsIlBPUlQiLCJleHRlbmQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImZvb2RqZXRzVXJsIiwiYXBpX2VuZCIsIkdUTV9jb2RlIiwiR1NUTV9jb2RlIiwicGF5cGFsIiwibW9kZSIsImRzbiIsInNlbnRyeV9kc24iLCJzZW5kRGF0YSIsInVzZXJuYW1lIiwiVFlQRSIsIlNJR05JTiIsIm5vdGlmeUVycm9yIiwiU0lHTklOX0VSUk9SIiwic2V0SXRlbSIsIlNJR05JTl9TVUNDRVNTIiwicHJlZml4IiwidHlwZXMiLCJTSUdOVVAiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9FUlJPUiIsIkFERF9ERUxfQUREUiIsIkFERF9ERUxfQUREUl9TVUNDRVNTIiwiQUREX0RFTF9BRERSX0VSUk9SIiwicHJlZml4ZXIiLCJyZWR1Y2UiLCJyZXN1bHQiLCJzdWNjZXNzIiwibXlDb2xvciIsImJhY2tncm91bmQiLCJub3RpZnkiLCJzaG93IiwiaCIsIndhcm5pbmciLCJjdXN0b21lcnJvciIsImhpZGUiLCJsb2dnZXJNaWRkbGV3YXJlIiwiY3JlYXRlTG9nZ2VyIiwic2VydmVyIiwiZW5oYW5jZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJlZHV4U3RhdGUiLCJjb21iaW5lUmVkdWNlcnMiLCJoZWFkZXIiLCJhY3Rpb24iLCJSRVFfREFUQSIsIkhlYWRlcmRhdGEiLCJSRVNfREFUQSIsIkZBSUxfREFUQSIsIlJFUV9BRERSRVNTX0RBVEEiLCJBZHJlc3NkYXRhIiwiUkVTX0FERFJFU1NfREFUQSIsIkZBSUxfQUREUkVTU19EQVRBIiwiaW5pdGlhbFN0YXRlIiwiaXNQcm9jZXNzaW5nIiwiaXNBZGRyZXNzRXJyb3IiLCJIb21lZGF0YSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHQyxNQUFNLENBQUNDLG1CQUE5QixDLENBQW1EO0FBRW5EOztBQUNBLE9BQU9ELE1BQU0sQ0FBQ0MsbUJBQWQsQyxDQUFtQztBQUVuQzs7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLDJFQUFnQixDQUFDO0FBQUVKLGdCQUFjLEVBQWRBO0FBQUYsQ0FBRCxDQUE5QjtBQUVBSyx5REFBTyxlQUNMLDJEQUFDLG9EQUFEO0FBQVUsT0FBSyxFQUFFRjtBQUFqQixnQkFDRSwyREFBQyw4REFBRCxxQkFDRSwyREFBQyx5REFBRCxPQURGLENBREYsQ0FESyxFQU1MRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FOSyxDQUFQLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0NBR0E7O0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQUMsd0VBQWdCLEcsQ0FDaEI7QUFDQTtBQUNBOztBQUNPLElBQU1DLE1BQU0sR0FBRyxDQUFDO0FBQ25CQyxNQUFJLEVBQUUsR0FEYTtBQUVuQkMsT0FBSyxFQUFFLElBRlk7QUFHbkJDLFdBQVMsRUFBRUMseURBQUlBO0FBSEksQ0FBRCxFQUlqQjtBQUNERCxXQUFTLEVBQUVFLDREQUFRQTtBQURsQixDQUppQixDQUFmO0FBU0EsSUFBTUMsWUFBWSxHQUFHLENBQ3pCO0FBQ0RMLE1BQUksRUFBRSxPQURMO0FBRURFLFdBQVMsRUFBRUMseURBQUlBO0FBRmQsQ0FEeUIsQ0FBckI7QUFRQSxJQUFNRyxhQUFhLEdBQUcsRUFBdEI7QUFJQSxJQUFNQyxlQUFlLEdBQUcsRUFBeEI7QUFFUSxTQUFTQyxNQUFULEdBQWtCO0FBQy9CLE1BQUtDLFFBQVEsR0FBRyxJQUFoQjtBQUNBLE1BQUlDLEdBQUcsR0FBdUIsRUFBOUI7QUFDQSxNQUFJQyxRQUFRLEdBQU0sRUFBbEI7QUFDQSxNQUFJQyxjQUFjLEdBQU0sRUFBeEI7O0FBQ0EsTUFBRyxPQUFPckIsTUFBUCxLQUFrQixXQUFyQixFQUFpQztBQUMvQm9CLFlBQVEsR0FBWUUsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixLQUFvQyxJQUEvQyxDQUFwQjtBQUVEOztBQUNELE1BQUssT0FBT3pCLE1BQVAsS0FBa0IsV0FBdkIsRUFBcUM7QUFDbkNtQixPQUFHLEdBQXlCbkIsTUFBTSxDQUFDMEIsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLEdBQS9CLENBQTVCOztBQUNBLFFBQUlULEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxFQUFWLElBQWdCQSxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVUsT0FBMUIsSUFBb0NBLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVSxRQUFsRCxFQUE0RDtBQUMxREQsY0FBUSxHQUFhLEtBQXJCO0FBQ0Q7QUFDRjs7QUFDRCxzQkFDRSx3RUFFRyxPQUFPbEIsTUFBUCxLQUFrQixXQUFuQixnQkFDQSxxRkFFRSwyREFBQywwREFBRCxPQUZGLGVBSUUsMkRBQUMsbURBQUQsUUFDR2dCLGVBQWUsQ0FBQ2EsR0FBaEIsQ0FBb0IsVUFBQ0MsS0FBRDtBQUFBLHdCQUNuQiwyREFBQyxjQUFEO0FBQWdCLFNBQUcsRUFBRUEsS0FBSyxDQUFDckIsSUFBM0I7QUFBaUMsVUFBSSxFQUFFcUIsS0FBSyxDQUFDckIsSUFBN0M7QUFBbUQsV0FBSyxFQUFFcUIsS0FBMUQ7QUFBaUUsZUFBUyxFQUFFQSxLQUFLLENBQUNuQixTQUFsRjtBQUE2RixjQUFRLEVBQUVTLFFBQXZHO0FBQWlILGNBQVEsRUFBRUQsR0FBRyxDQUFDLENBQUQ7QUFBOUgsTUFEbUI7QUFBQSxHQUFwQixDQURILEVBSUdKLGFBQWEsQ0FBQ2MsR0FBZCxDQUFrQixVQUFDQyxLQUFEO0FBQUEsd0JBQ2pCLDJEQUFDLFlBQUQ7QUFBYyxTQUFHLEVBQUVBLEtBQUssQ0FBQ3JCLElBQXpCO0FBQStCLFVBQUksRUFBRXFCLEtBQUssQ0FBQ3JCLElBQTNDO0FBQWlELFdBQUssRUFBRXFCLEtBQXhEO0FBQStELGVBQVMsRUFBRUEsS0FBSyxDQUFDbkIsU0FBaEY7QUFBMkYsY0FBUSxFQUFFUyxRQUFyRztBQUFnSCxjQUFRLEVBQUVELEdBQUcsQ0FBQyxDQUFEO0FBQTdILE1BRGlCO0FBQUEsR0FBbEIsQ0FKSCxFQU9HTCxZQUFZLENBQUNlLEdBQWIsQ0FBaUIsVUFBQUMsS0FBSztBQUFBLHdCQUNuQiwyREFBQyxXQUFEO0FBQWEsU0FBRyxFQUFFQSxLQUFLLENBQUNyQixJQUF4QjtBQUE4QixVQUFJLEVBQUVxQixLQUFLLENBQUNyQixJQUExQztBQUFnRCxXQUFLLEVBQUVxQixLQUF2RDtBQUE4RCxlQUFTLEVBQUVBLEtBQUssQ0FBQ25CLFNBQS9FO0FBQTBGLGNBQVEsRUFBRVEsR0FBRyxDQUFDLENBQUQ7QUFBdkcsTUFEbUI7QUFBQSxHQUF0QixDQVBILEVBV0dYLE1BQU0sQ0FBQ3FCLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsd0JBQ2IsMkRBQUMsa0RBQUQ7QUFBTyxTQUFHLGtCQUFXQSxLQUFLLENBQUNyQixJQUFqQjtBQUFWLE9BQXVDcUIsS0FBdkMsRUFEYTtBQUFBLEdBQWhCLENBWEgsQ0FKRixDQURBLEdBc0JXLElBeEJiLENBREY7QUE2QkQ7O0FBRUQsU0FBU0MsV0FBVCxPQUF3RDtBQUFBLE1BQXRCQyxTQUFzQixRQUFqQ3JCLFNBQWlDO0FBQUEsTUFBUnNCLElBQVE7O0FBQ3RELE1BQUlDLEdBQUc7QUFBS3ZCLGFBQVMsRUFBRXFCO0FBQWhCLEtBQThCQyxJQUE5QixDQUFQOztBQUNBLE1BQUlFLFFBQVEsR0FBSUYsSUFBSSxDQUFDRSxRQUFMLElBQWlCLEVBQWpDO0FBQ0Usc0JBQ0EsMkRBQUMsa0RBQUQ7QUFBTyxPQUFHLGtCQUFXRCxHQUFHLENBQUN6QixJQUFmLENBQVY7QUFBaUMsUUFBSSxFQUFFeUIsR0FBRyxDQUFDekI7QUFDdkM7QUFESjtBQUVJLFVBQU0sRUFBRSxnQkFBQzJCLEtBQUQ7QUFBQSwwQkFDTiwyREFBQyxHQUFELENBQUssU0FBTCxlQUFtQkEsS0FBbkI7QUFBMEIsZ0JBQVEsRUFBRUQ7QUFBcEMsU0FETTtBQUFBO0FBRlosSUFEQTtBQVFIOztBQUVELFNBQVNFLFlBQVQsUUFBeUQ7QUFBQSxNQUF0QkwsU0FBc0IsU0FBakNyQixTQUFpQztBQUFBLE1BQVJzQixJQUFROztBQUN2RCxNQUFJQyxHQUFHO0FBQUt2QixhQUFTLEVBQUVxQjtBQUFoQixLQUE4QkMsSUFBOUIsQ0FBUCxDQUR1RCxDQUV2RDs7O0FBQ0EsTUFBSVosY0FBYyxHQUFJWSxJQUFJLENBQUNaLGNBQUwsSUFBdUIsRUFBN0M7QUFDQSxNQUFJRCxRQUFRLEdBQUlhLElBQUksQ0FBQ2IsUUFBTCxJQUFpQixFQUFqQztBQUNBLE1BQUllLFFBQVEsR0FBSUYsSUFBSSxDQUFDRSxRQUFMLElBQWlCLEVBQWpDOztBQUNBLE1BQUcsT0FBT25DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsQ0FBQ3NDLDhDQUFDLENBQUNDLE9BQUYsQ0FBVW5CLFFBQVYsQ0FBckMsRUFBMEQ7QUFDeERvQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ1IsSUFBSSxDQUFDSCxLQUFyQztBQUNBLHdCQUNBLDJEQUFDLGtEQUFEO0FBQU8sU0FBRyxrQkFBV0ksR0FBRyxDQUFDekIsSUFBZixDQUFWO0FBQWlDLFVBQUksRUFBRXlCLEdBQUcsQ0FBQ3pCO0FBQ3ZDO0FBREo7QUFFSSxZQUFNLEVBQUUsZ0JBQUMyQixLQUFEO0FBQUEsNEJBQ04sMkRBQUMsR0FBRCxDQUFLLFNBQUwsZUFBbUJBLEtBQW5CO0FBQTBCLGtCQUFRLEVBQUVoQixRQUFwQztBQUE4QyxrQkFBUSxFQUFFZTtBQUF4RCxXQURNO0FBQUE7QUFGWixNQURBO0FBUUQsR0FWRCxNQVVPO0FBQ0wsd0JBQ0UsMkRBQUMscURBQUQ7QUFDRSxRQUFFLEVBQUU7QUFDRlIsZ0JBQVEsRUFBRTtBQURSO0FBRE4sTUFERjtBQU9EO0FBQ0Y7O0FBRUQsU0FBU2UsY0FBVCxRQUEyRDtBQUFBLE1BQXRCVixTQUFzQixTQUFqQ3JCLFNBQWlDO0FBQUEsTUFBUnNCLElBQVE7O0FBQ3pELE1BQUlDLEdBQUc7QUFBS3ZCLGFBQVMsRUFBRXFCO0FBQWhCLEtBQThCQyxJQUE5QixDQUFQOztBQUNBLE1BQUliLFFBQVEsR0FBSWEsSUFBSSxDQUFDYixRQUFMLElBQWlCLEVBQWpDO0FBQ0EsTUFBSWUsUUFBUSxHQUFJRixJQUFJLENBQUNFLFFBQUwsSUFBaUIsRUFBakM7O0FBQ0EsTUFBRyxPQUFPbkMsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxDQUFDc0MsOENBQUMsQ0FBQ0MsT0FBRixDQUFVbkIsUUFBVixDQUFyQyxFQUEwRDtBQUN4RCx3QkFDQSwyREFBQyxrREFBRDtBQUFPLFNBQUcsa0JBQVdjLEdBQUcsQ0FBQ3pCLElBQWYsQ0FBVjtBQUFpQyxVQUFJLEVBQUV5QixHQUFHLENBQUN6QjtBQUN6QztBQURGO0FBRUUsWUFBTSxFQUFFLGdCQUFDMkIsS0FBRDtBQUFBLDRCQUNOLDJEQUFDLEdBQUQsQ0FBSyxTQUFMLGVBQW1CQSxLQUFuQjtBQUEwQixrQkFBUSxFQUFFaEIsUUFBcEM7QUFBOEMsa0JBQVEsRUFBRWU7QUFBeEQsV0FETTtBQUFBO0FBRlYsTUFEQTtBQVFELEdBVEQsTUFTTztBQUNMLHdCQUNFLDJEQUFDLHFEQUFEO0FBQ0UsUUFBRSxFQUFFO0FBQ0ZSLGdCQUFRLEVBQUU7QUFEUjtBQUROLE1BREY7QUFPRDtBQUNGLEM7Ozs7Ozs7O0FDMUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1nQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFxQjtBQUMzQyxTQUFPLEVBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFXRixRQUFYLEVBQXdCO0FBQ2pELFNBQU9HLGdFQUFrQixDQUFDLEVBQUQsRUFBS0QsUUFBTCxDQUF6QjtBQUNELENBRkQ7O0FBSWVFLDBIQUFPLENBQ3BCTixlQURvQixFQUVwQkcsa0JBRm9CLENBQVAsQ0FHYkksdURBSGEsQ0FBZixFOzs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFQyxnREFBTSxDQUFDRDtBQUF2QixzQkFDRTtBQUFLLGlCQUFTLEVBQUVDLGdEQUFNLENBQUNDO0FBQXZCLHNCQUNFLDJEQUFDLHFEQUFEO0FBQU0saUJBQVMsRUFBRUQsZ0RBQU0sQ0FBQ0UsSUFBeEI7QUFBOEIsVUFBRSxFQUFDO0FBQWpDLGdCQURGLGVBRUUsMkRBQUMscURBQUQ7QUFBTSxpQkFBUyxFQUFFRixnREFBTSxDQUFDRSxJQUF4QjtBQUE4QixVQUFFLEVBQUM7QUFBakMsdUJBRkYsZUFHRSwyREFBQyxxREFBRDtBQUFNLGlCQUFTLEVBQUVGLGdEQUFNLENBQUNFLElBQXhCO0FBQThCLFVBQUUsRUFBQztBQUFqQyxpQkFIRixDQURGLEVBTUcsS0FBS2pCLEtBQUwsQ0FBV2tCLFFBTmQsZUFPRTtBQUFLLGlCQUFTLEVBQUVILGdEQUFNLENBQUNJO0FBQXZCLDBDQVBGLENBREY7QUFXRDs7OztFQWI4QnZCLCtDOzs7QUFnQmpDa0IsR0FBRyxDQUFDTSxTQUFKLEdBQWdCO0FBQ2RGLFVBQVEsRUFBRUcsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURYLENBQWhCLEM7Ozs7Ozs7O0FDckJBLGNBQWMsbUJBQU8sQ0FBQyxHQUFtSDs7QUFFekksNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLEdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7O0FDbkJmLDJCQUEyQixtQkFBTyxDQUFDLEdBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixxQkFBcUIsRUFBRSwwQkFBMEIsa0JBQWtCLEVBQUUsd0JBQXdCLDBCQUEwQixFQUFFLDZDQUE2Qyx1QkFBdUIsRUFBRSwwQkFBMEIsbUJBQW1CLEVBQUUseUNBQXlDLHVCQUF1QixzQkFBc0Isa0JBQWtCLEVBQUUsZ0NBQWdDLHlDQUF5QyxxQkFBcUIseUJBQXlCLHdCQUF3QixpQkFBaUIsRUFBRSxFQUFFLFNBQVMsK0RBQStELGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLFlBQVksYUFBYSxpQkFBaUIsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGlFQUFpRSxxQkFBcUIsRUFBRSxhQUFhLGtCQUFrQixFQUFFLFdBQVcsMEJBQTBCLEVBQUUsbUJBQW1CLHVCQUF1QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsNEJBQTRCLHVCQUF1QixzQkFBc0Isa0JBQWtCLEVBQUUsZ0NBQWdDLDRCQUE0QixxQkFBcUIseUJBQXlCLHdCQUF3QixpQkFBaUIsRUFBRSxFQUFFLEtBQUs7O0FBRW55QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZTtBQUNyQ0Msa0RBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBQWtCRCxJQUFsQjtBQUNGLENBRk07QUFJQSxJQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNKLElBQUQsRUFBT0MsSUFBUCxFQUFZSSxHQUFaLEVBQW1CO0FBQ25ESCxrREFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFBa0JELElBQWxCLEVBQXdCO0FBQUVNLFdBQU8sRUFBRUQ7QUFBWCxHQUF4QjtBQUNBLENBRk07QUFLQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTixJQUFELEVBQVM7QUFDbENDLGtEQUFPLENBQUNNLE1BQVIsQ0FBZVAsSUFBZjtBQUNGLENBRk07QUFJQSxJQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUixJQUFELEVBQVM7QUFDL0IsU0FBT0MsZ0RBQU8sQ0FBQ1EsT0FBUixDQUFnQlQsSUFBaEIsQ0FBUDtBQUNGLENBRk0sQzs7Ozs7Ozs7QUM5Q1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTW5CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQzNDLFNBQU8sRUFBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQVdGLFFBQVgsRUFBd0I7QUFDakQsU0FBT0csZ0VBQWtCLENBQUMsRUFBRCxFQUFLRCxRQUFMLENBQXpCO0FBQ0QsQ0FGRDs7QUFJZUUsMEhBQU8sQ0FDcEJOLGVBRG9CLEVBRXBCRyxrQkFGb0IsQ0FBUCxDQUdiakMsNkRBSGEsQ0FBZixFOzs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQW1GO0FBQUksaUJBQVMsRUFBQztBQUFkLDJCQUFuRixDQURGO0FBR0Q7Ozs7RUFMbUNtQiwrQzs7Ozs7Ozs7OztBQ0Z0QyxjQUFjLG1CQUFPLENBQUMsR0FBd0g7O0FBRTlJLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7OztBQ25CZiwyQkFBMkIsbUJBQU8sQ0FBQyxHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxnQ0FBZ0MsbUJBQW1CLEVBQUUsU0FBUyxvRUFBb0UscUVBQXFFLG1CQUFtQixFQUFFLEtBQUs7O0FBRXhQO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLEdBQTBEOztBQUVoRiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7QUNuQmYsMkJBQTJCLG1CQUFPLENBQUMsR0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsY0FBYyxxQkFBcUIsMEJBQTBCLElBQUksV0FBVyxXQUFXLFlBQVksaUNBQWlDLDZCQUE2Qix5QkFBeUIsT0FBTywyQ0FBMkMsaUJBQWlCLGtCQUFrQixtQkFBbUIsaUJBQWlCLFFBQVEsaUJBQWlCLFNBQVMsV0FBVyxXQUFXLHdCQUF3QixJQUFJLGdCQUFnQixVQUFVLHNCQUFzQixpQkFBaUIsZ0JBQWdCLDBCQUEwQixhQUFhLGdDQUFnQyxhQUFhLG9CQUFvQixlQUFlLG1CQUFtQixhQUFhLFdBQVcsa0JBQWtCLDBCQUEwQixjQUFjLHdCQUF3QixxQkFBcUIscUJBQXFCLG9FQUFvRSxZQUFZLG9FQUFvRSxZQUFZLDBFQUEwRSxZQUFZLHVFQUF1RSxZQUFZLG1EQUFtRCxhQUFhLGFBQWEsb0JBQW9CLGtCQUFrQixlQUFlLGtCQUFrQixjQUFjLG1CQUFtQixhQUFhLGdCQUFnQixrQkFBa0Isa0JBQWtCLFdBQVcsa0JBQWtCLHNCQUFzQixhQUFhLFlBQVksZ0JBQWdCLG9CQUFvQixnQkFBZ0IsK0JBQStCLDJCQUEyQixlQUFlLFlBQVksMkJBQTJCLHVCQUF1QixTQUFTLG9CQUFvQjs7Ozs7Ozs7OztBQ0ZobkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQzNDTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWjtBQUNBLFNBQU87QUFDTGlCLFFBQUksRUFBRWpCLEtBQUssQ0FBQzRCO0FBRFAsR0FBUDtBQUdELENBTEQ7O0FBT0EsSUFBTTFCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFXRixRQUFYLEVBQXdCO0FBQ2pELFNBQU9HLGdFQUFrQixDQUFDO0FBQ3hCeUIsWUFBUSxFQUFDQSw0REFBUUE7QUFETyxHQUFELEVBRXRCMUIsUUFGc0IsQ0FBekI7QUFHRCxDQUpEOztBQU1lRSwwSEFBTyxDQUNwQk4sZUFEb0IsRUFFcEJHLGtCQUZvQixDQUFQLENBR2JsQyx3REFIYSxDQUFmLEU7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFHcUI4RCxJOzs7OztBQUNuQixnQkFBWXRDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLdUMsYUFBTCxHQUFxQjtBQUNuQkMsV0FBSyxFQUFFLEtBRFk7QUFFbkJDLGNBQVEsRUFBRTtBQUZTLEtBQXJCO0FBSUEsVUFBS2pDLEtBQUwsR0FBYTtBQUNYa0MsYUFBTyxFQUFFLEVBREU7QUFFWEMsZUFBUyxFQUFFLElBRkE7QUFHWEMsV0FBSyxFQUFFLEtBSEk7QUFJWEMsY0FBUSxFQUFFLFVBSkM7QUFLWEMsY0FBUSxFQUFFO0FBQ1JDLDJCQUFtQixFQUFFLEVBRGI7QUFFUkMsdUJBQWUsRUFBRSxFQUZUO0FBR1JDLG9CQUFZLEVBQUUsRUFITjtBQUlSQyxnQkFBUSxFQUFFLEVBSkY7QUFLUkMsMkJBQW1CLEVBQUUsRUFMYjtBQU1SQyxxQkFBYSxFQUFFLE9BTlA7QUFPUkMsa0JBQVUsRUFBRTtBQVBKLE9BTEM7QUFlWEMsZUFBUyxFQUFFLENBQ1Q7QUFDRUQsa0JBQVUsRUFBRTtBQUNWRSxjQUFJLEVBQUUsS0FESTtBQUVWOUIsY0FBSSxFQUFFLENBQUM7QUFDTCtCLHVCQUFXLEVBQUU7QUFEUixXQUFEO0FBRkksU0FEZDtBQU9FSixxQkFBYSxFQUFFO0FBQ2JHLGNBQUksRUFBRSxlQURPO0FBRWI5QixjQUFJLEVBQUUsQ0FBQztBQUNMK0IsdUJBQVcsRUFBRTtBQURSLFdBQUQ7QUFGTyxTQVBqQjtBQWFFVCwyQkFBbUIsRUFBRTtBQUNuQlEsY0FBSSxFQUFFLHFCQURhO0FBRW5COUIsY0FBSSxFQUFFLENBQUM7QUFDTCtCLHVCQUFXLEVBQUU7QUFEUixXQUFEO0FBRmEsU0FidkI7QUFtQkVSLHVCQUFlLEVBQUU7QUFDZk8sY0FBSSxFQUFFLGlCQURTO0FBRWY5QixjQUFJLEVBQUUsQ0FBQztBQUNMK0IsdUJBQVcsRUFBRTtBQURSLFdBQUQsQ0FGUztBQU9mQyxrQkFBUSxFQUFFO0FBQ1JDLG1CQUFPLEVBQUUsQ0FBQyxNQUFELENBREQ7QUFFUkMsd0JBQVksRUFBRSxDQUFDLDhCQUFELENBRk47QUFHUkMsb0JBQVEsRUFBRSxDQUFDLDBCQUFEO0FBSEY7QUFQSyxTQW5CbkI7QUFnQ0VYLG9CQUFZLEVBQUU7QUFDWk0sY0FBSSxFQUFFLGNBRE07QUFFWjlCLGNBQUksRUFBRSxDQUFDO0FBQ0wrQix1QkFBVyxFQUFFO0FBRFIsV0FBRDtBQUZNLFNBaENoQjtBQXNDRU4sZ0JBQVEsRUFBRTtBQUNSSyxjQUFJLEVBQUUsVUFERTtBQUVSOUIsY0FBSSxFQUFFLENBQUM7QUFDTCtCLHVCQUFXLEVBQUU7QUFEUixXQUFEO0FBRkUsU0F0Q1o7QUE0Q0VMLDJCQUFtQixFQUFFO0FBQ25CSSxjQUFJLEVBQUUsb0JBRGE7QUFFbkI5QixjQUFJLEVBQUUsQ0FBQztBQUNMK0IsdUJBQVcsRUFBRTtBQURSLFdBQUQ7QUFGYTtBQTVDdkIsT0FEUyxDQWZBO0FBb0VYSyxlQUFTLEVBQUU7QUFwRUEsS0FBYjtBQXdFQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsK0JBQXRCO0FBQ0EsVUFBS0UsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRixJQUFqQiwrQkFBbkI7QUFDQSxVQUFLRyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJILElBQWpCLCtCQUFuQjtBQUNBLFVBQUtJLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlSixJQUFmLCtCQUFqQjtBQWxGaUI7QUFvRmxCOzs7O3dDQUVtQixDQUFHOzs7OEJBRWJLLE8sRUFBUztBQUFBOztBQUFBLHdCQUNhLEtBQUs1RCxLQURsQjtBQUFBLFVBQ1g4QyxTQURXLGVBQ1hBLFNBRFc7QUFBQSxVQUNBUixRQURBLGVBQ0FBLFFBREE7QUFHakJ1QixVQUFJLENBQUM7QUFDSEMsYUFBSyxFQUFFLGdEQURKO0FBR0hDLFlBQUksRUFBRSxTQUhIO0FBSUhDLGVBQU8sRUFBRSxJQUpOO0FBS0hDLGtCQUFVLEVBQUU7QUFMVCxPQUFELENBQUosQ0FPR0MsSUFQSCxDQU9RLFVBQUNDLFVBQUQsRUFBZ0I7QUFDcEIsWUFBSUEsVUFBSixFQUFnQjtBQUVkckIsbUJBQVMsQ0FBQzdELEdBQVYsQ0FBYyxVQUFDbUYsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQzlCQyxrQkFBTSxDQUFDQyxJQUFQLENBQVlILEtBQVosRUFBbUJuRixHQUFuQixDQUF1QixVQUFDdUYsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDcEMsa0JBQUlELE1BQU0sSUFBSVosT0FBZCxFQUF1QjtBQUNyQix1QkFBT1EsS0FBSyxDQUFDSSxNQUFELENBQVo7QUFDQSx1QkFBT2xDLFFBQVEsQ0FBQ3NCLE9BQUQsQ0FBZixDQUZxQixDQUdyQjtBQUNBO0FBQ0Q7QUFHRixhQVREO0FBVUQsV0FYRDs7QUFZQSxnQkFBSSxDQUFDYyxRQUFMLENBQWM7QUFDWjVCLHFCQUFTLEVBQVRBLFNBRFk7QUFFWlIsb0JBQVEsRUFBUkE7QUFGWSxXQUFkLEVBR0csWUFBTTtBQUVQdUIsZ0JBQUksQ0FBQyxrQ0FBRCxFQUFxQztBQUN2Q0Usa0JBQUksRUFBRTtBQURpQyxhQUFyQyxDQUFKO0FBR0QsV0FSRDtBQVVELFNBeEJELE1Bd0JPLENBRU47QUFDRixPQW5DSDtBQXNDRDs7O21DQUNjWSxDLEVBQUc7QUFDaEIsV0FBS0QsUUFBTCxDQUFjO0FBQ1pwQyxnQkFBUSxrQ0FDSCxLQUFLdEMsS0FBTCxDQUFXc0MsUUFEUiwyQkFFTHFDLENBQUMsQ0FBQ0MsTUFBRixDQUFTMUQsSUFGSixFQUVXeUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBRnBCO0FBREksT0FBZDtBQU1EOzs7a0NBRWE7QUFBQSxVQUNOeEIsU0FETSxHQUNRLEtBQUtyRCxLQURiLENBQ05xRCxTQURNO0FBRVpBLGVBQVMsR0FBRyxDQUFDQSxTQUFiO0FBQ0EsV0FBS3FCLFFBQUwsQ0FBYztBQUNackIsaUJBQVMsRUFBVEE7QUFEWSxPQUFkO0FBR0Q7OztnQ0FFV3lCLEUsRUFBSTtBQUFBOztBQUFBLFVBQ1JoQyxTQURRLEdBQ00sS0FBSzlDLEtBRFgsQ0FDUjhDLFNBRFE7QUFJZGUsVUFBSSxDQUFDO0FBQ0hDLGFBQUssRUFBRSxnREFESjtBQUdIQyxZQUFJLEVBQUUsU0FISDtBQUlIQyxlQUFPLEVBQUUsSUFKTjtBQUtIQyxrQkFBVSxFQUFFO0FBTFQsT0FBRCxDQUFKLENBT0dDLElBUEgsQ0FPUSxVQUFDQyxVQUFELEVBQWdCO0FBQ3BCLFlBQUlBLFVBQUosRUFBZ0I7QUFFZHJCLG1CQUFTLENBQUM3RCxHQUFWLENBQWMsVUFBQ21GLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUM5QkMsa0JBQU0sQ0FBQ0MsSUFBUCxDQUFZSCxLQUFaLEVBQW1CbkYsR0FBbkIsQ0FBdUIsVUFBQ3VGLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3BDTCxtQkFBSyxDQUFDSSxNQUFELENBQUwsQ0FBY3ZELElBQWQsR0FBcUJtRCxLQUFLLENBQUNJLE1BQUQsQ0FBTCxDQUFjdkQsSUFBZCxDQUFtQjhELE1BQW5CLENBQTBCLFVBQUM5RCxJQUFELEVBQU9vRCxLQUFQO0FBQUEsdUJBQWlCUyxFQUFFLElBQUlULEtBQXZCO0FBQUEsZUFBMUIsQ0FBckI7QUFFRCxhQUhEO0FBSUQsV0FMRDs7QUFNQSxnQkFBSSxDQUFDSyxRQUFMLENBQWM7QUFDWjVCLHFCQUFTLEVBQVRBO0FBRFksV0FBZCxFQUVHLFlBQU07QUFDUGUsZ0JBQUksQ0FBQyxrQ0FBRCxFQUFxQztBQUN2Q0Usa0JBQUksRUFBRTtBQURpQyxhQUFyQyxDQUFKO0FBR0QsV0FORDtBQVFELFNBaEJELE1BZ0JPLENBRU47QUFDRixPQTNCSDtBQTZCRDs7O21DQUNjO0FBQUE7O0FBQUEseUJBQ2lCLEtBQUsvRCxLQUR0QjtBQUFBLFVBQ1BzQyxRQURPLGdCQUNQQSxRQURPO0FBQUEsVUFDR1EsU0FESCxnQkFDR0EsU0FESDtBQUVibEQsYUFBTyxDQUFDQyxHQUFSLENBQVl5QyxRQUFaO0FBRmEsVUFJUE0sYUFKTyxHQUkwR04sUUFKMUcsQ0FJUE0sYUFKTztBQUFBLFVBSVFDLFVBSlIsR0FJMEdQLFFBSjFHLENBSVFPLFVBSlI7QUFBQSxVQUlvQk4sbUJBSnBCLEdBSTBHRCxRQUoxRyxDQUlvQkMsbUJBSnBCO0FBQUEsVUFJeUNDLGVBSnpDLEdBSTBHRixRQUoxRyxDQUl5Q0UsZUFKekM7QUFBQSxVQUkwREUsUUFKMUQsR0FJMEdKLFFBSjFHLENBSTBESSxRQUoxRDtBQUFBLFVBSW9FQyxtQkFKcEUsR0FJMEdMLFFBSjFHLENBSW9FSyxtQkFKcEU7QUFBQSxVQUl5RkYsWUFKekYsR0FJMEdILFFBSjFHLENBSXlGRyxZQUp6RjtBQVNiSyxlQUFTLENBQUM3RCxHQUFWLENBQWMsVUFBQ21GLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUU5QixZQUFLLENBQUMsQ0FBRUQsS0FBSyxDQUFDN0IsbUJBQVQsSUFBaUM2QixLQUFLLENBQUM3QixtQkFBTixDQUEwQnRCLElBQTFCLENBQStCK0QsTUFBL0IsR0FBd0MsQ0FBOUUsRUFBaUY7QUFDL0VuQixjQUFJLENBQUM7QUFDSEMsaUJBQUssRUFBRSxtQ0FESjtBQUdIQyxnQkFBSSxFQUFFO0FBSEgsV0FBRCxDQUFKOztBQUtBLGdCQUFJLENBQUNXLFFBQUwsQ0FBYztBQUNacEMsb0JBQVEsRUFBRTtBQUNSQyxpQ0FBbUIsRUFBRSxFQURiO0FBRVJDLDZCQUFlLEVBQUUsRUFGVDtBQUdSQywwQkFBWSxFQUFFLEVBSE47QUFJUkMsc0JBQVEsRUFBRSxFQUpGO0FBS1JDLGlDQUFtQixFQUFFLEVBTGI7QUFNUkMsMkJBQWEsRUFBRSxPQU5QO0FBT1JDLHdCQUFVLEVBQUU7QUFQSjtBQURFLFdBQWQsRUFjRyxZQUFNO0FBQ1BvQyxhQUFDLENBQUMsWUFBRCxDQUFELENBQWdCN0MsS0FBaEIsQ0FBc0IsTUFBdEI7QUFDRCxXQWhCRDtBQWlCRCxTQXZCRCxNQXlCSztBQUNILGNBQUlnQyxLQUFLLENBQUM3QixtQkFBTixJQUE2QjJDLFNBQWpDLEVBQTRDO0FBQzFDZCxpQkFBSyxDQUFDN0IsbUJBQU4sQ0FBMEJ0QixJQUExQixDQUErQmtFLElBQS9CLENBQW9DO0FBQUVuQyx5QkFBVyxFQUFFVDtBQUFmLGFBQXBDO0FBQ0Q7O0FBQ0QsY0FBSTZCLEtBQUssQ0FBQzVCLGVBQU4sSUFBeUIwQyxTQUE3QixFQUF3QztBQUN0Q2QsaUJBQUssQ0FBQzVCLGVBQU4sQ0FBc0J2QixJQUF0QixDQUEyQmtFLElBQTNCLENBQWdDO0FBQUVuQyx5QkFBVyxFQUFFUjtBQUFmLGFBQWhDO0FBQ0E4QixrQkFBTSxDQUFDQyxJQUFQLENBQVlILEtBQUssQ0FBQzVCLGVBQU4sQ0FBc0JTLFFBQWxDLEVBQTRDaEUsR0FBNUMsQ0FBZ0QsVUFBQ3VGLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQzdELGtCQUFJRCxNQUFNLElBQUksU0FBZCxFQUF5QjtBQUN2QkoscUJBQUssQ0FBQzVCLGVBQU4sQ0FBc0JTLFFBQXRCLENBQStCdUIsTUFBL0IsRUFBdUNXLElBQXZDLENBQTRDLE1BQTVDO0FBQ0Q7O0FBQ0Qsa0JBQUlYLE1BQU0sSUFBSSxjQUFkLEVBQThCO0FBQzVCSixxQkFBSyxDQUFDNUIsZUFBTixDQUFzQlMsUUFBdEIsQ0FBK0J1QixNQUEvQixFQUF1Q1csSUFBdkMsQ0FBNEMsOEJBQTVDO0FBQ0Q7O0FBQ0Qsa0JBQUlYLE1BQU0sSUFBSSxVQUFkLEVBQTBCO0FBQ3hCSixxQkFBSyxDQUFDNUIsZUFBTixDQUFzQlMsUUFBdEIsQ0FBK0J1QixNQUEvQixFQUF1Q1csSUFBdkMsQ0FBNEMsMEJBQTVDO0FBQ0Q7QUFFRixhQVhEO0FBWUQ7O0FBRUQsY0FBSWYsS0FBSyxDQUFDMUIsUUFBTixJQUFrQndDLFNBQXRCLEVBQWlDO0FBQy9CZCxpQkFBSyxDQUFDMUIsUUFBTixDQUFlekIsSUFBZixDQUFvQmtFLElBQXBCLENBQXlCO0FBQUVuQyx5QkFBVyxFQUFFTjtBQUFmLGFBQXpCO0FBQ0Q7O0FBQ0QsY0FBSTBCLEtBQUssQ0FBQ3pCLG1CQUFOLElBQTZCdUMsU0FBakMsRUFBNEM7QUFDMUNkLGlCQUFLLENBQUN6QixtQkFBTixDQUEwQjFCLElBQTFCLENBQStCa0UsSUFBL0IsQ0FBb0M7QUFBRW5DLHlCQUFXLEVBQUVMO0FBQWYsYUFBcEM7QUFDRDs7QUFDRCxjQUFJeUIsS0FBSyxDQUFDM0IsWUFBTixJQUFzQnlDLFNBQTFCLEVBQXFDO0FBQ25DZCxpQkFBSyxDQUFDM0IsWUFBTixDQUFtQnhCLElBQW5CLENBQXdCa0UsSUFBeEIsQ0FBNkI7QUFBRW5DLHlCQUFXLEVBQUVQO0FBQWYsYUFBN0I7QUFDRDs7QUFFRDJCLGVBQUssQ0FBQ3hCLGFBQU4sQ0FBb0IzQixJQUFwQixDQUF5QmtFLElBQXpCLENBQThCO0FBQUVuQyx1QkFBVyxFQUFFSjtBQUFmLFdBQTlCO0FBQ0F3QixlQUFLLENBQUN2QixVQUFOLENBQWlCNUIsSUFBakIsQ0FBc0JrRSxJQUF0QixDQUEyQjtBQUFFbkMsdUJBQVcsRUFBRUg7QUFBZixXQUEzQjs7QUFDQSxnQkFBSSxDQUFDNkIsUUFBTCxDQUFjO0FBQ1o1QixxQkFBUyxFQUFUQSxTQURZO0FBRVpSLG9CQUFRLEVBQUU7QUFDUkMsaUNBQW1CLEVBQUUsRUFEYjtBQUVSQyw2QkFBZSxFQUFFLEVBRlQ7QUFHUkMsMEJBQVksRUFBRSxFQUhOO0FBSVJDLHNCQUFRLEVBQUUsRUFKRjtBQUtSQyxpQ0FBbUIsRUFBRSxFQUxiO0FBTVJDLDJCQUFhLEVBQUUsT0FOUDtBQU9SQyx3QkFBVSxFQUFFO0FBUEo7QUFGRSxXQUFkLEVBZUcsWUFBTTtBQUNQb0MsYUFBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjdDLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0QsV0FqQkQ7QUFrQkQ7QUFFRixPQS9FRDtBQW1GRDs7OzhDQUd5QjVDLEssRUFBTztBQUMvQixVQUFJLENBQUMsQ0FBQ0EsS0FBSyxDQUFDeUIsSUFBUixJQUFnQixDQUFDLENBQUN6QixLQUFLLENBQUN5QixJQUFOLENBQVdtRSxTQUFqQyxFQUE0QztBQUUxQztBQUNBaEksY0FBTSxDQUFDMEIsUUFBUCxDQUFnQnVHLElBQWhCLEdBQXVCLFlBQXZCO0FBRUQ7QUFDRjs7O21DQUVjO0FBQ2IsVUFBSS9DLFFBQVEsR0FBRyxLQUFLdEMsS0FBTCxDQUFXc0MsUUFBWCxJQUF1QixFQUF0Qzs7QUFDQSxVQUFJZ0QsTUFBTSxxQkFBUSxLQUFLdkQsYUFBYixDQUFWOztBQUNBLFVBQUl3RCxPQUFPLEdBQUcsS0FBZDs7QUFDQSxVQUFJLENBQUMsQ0FBQyxDQUFDakQsUUFBUSxDQUFDTixLQUFoQixFQUF1QjtBQUNyQnNELGNBQU0sQ0FBQ3RELEtBQVAsR0FBZSxJQUFmO0FBQ0F1RCxlQUFPLEdBQUcsSUFBVjtBQUNEOztBQUNELFVBQUksQ0FBQyxDQUFDLENBQUNqRCxRQUFRLENBQUNMLFFBQWhCLEVBQTBCO0FBQ3hCcUQsY0FBTSxDQUFDckQsUUFBUCxHQUFrQixJQUFsQjtBQUNBc0QsZUFBTyxHQUFHLElBQVY7QUFDRDs7QUFDRCxVQUFJLENBQUMsQ0FBQ2pELFFBQVEsQ0FBQ0wsUUFBWCxJQUF1QkssUUFBUSxDQUFDTCxRQUFULENBQWtCK0MsTUFBbEIsR0FBMkIsQ0FBdEQsRUFBeUQ7QUFDdkRNLGNBQU0sQ0FBQ3JELFFBQVAsR0FBa0IsSUFBbEI7QUFDQXNELGVBQU8sR0FBRyxJQUFWO0FBQ0Q7O0FBQ0QsYUFBTztBQUFFQSxlQUFPLEVBQUVBLE9BQVg7QUFBb0JELGNBQU0sRUFBRUE7QUFBNUIsT0FBUDtBQUNEOzs7NkJBS1E7QUFBQTs7QUFBQSx5QkFDa0MsS0FBS3RGLEtBRHZDO0FBQUEsVUFDRDhDLFNBREMsZ0JBQ0RBLFNBREM7QUFBQSxVQUNVUixRQURWLGdCQUNVQSxRQURWO0FBQUEsVUFDb0JlLFNBRHBCLGdCQUNvQkEsU0FEcEI7QUFFUHpELGFBQU8sQ0FBQ0MsR0FBUixDQUFZeUMsUUFBWjtBQUNBLFVBQUlrRCxPQUFPLEdBQUcsRUFBZDtBQUNBLFVBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBM0MsZUFBUyxDQUFDN0QsR0FBVixDQUFjLFVBQUNnQyxJQUFELEVBQU95RSxHQUFQLEVBQWU7QUFDM0JELGlCQUFTLEdBQUksQ0FBQyxDQUFDeEUsSUFBSSxDQUFDdUIsZUFBUixHQUEwQnZCLElBQUksQ0FBQ3VCLGVBQUwsQ0FBcUJTLFFBQXJCLENBQThCQyxPQUE5QixDQUFzQzhCLE1BQXRDLEdBQStDLENBQXpFLEdBQTJFLENBQXZGOztBQUVBLFlBQUksQ0FBQyxDQUFDL0QsSUFBSSxDQUFDc0IsbUJBQVAsSUFBOEJ0QixJQUFJLENBQUNzQixtQkFBTCxDQUF5QnRCLElBQXpCLENBQThCK0QsTUFBOUIsSUFBd0MsQ0FBMUUsRUFBNkU7QUFDM0VRLGlCQUFPLEdBQUcsUUFBVjtBQUNEOztBQUNELFlBQUksQ0FBQyxDQUFDdkUsSUFBSSxDQUFDc0IsbUJBQVAsSUFBOEJ0QixJQUFJLENBQUNzQixtQkFBTCxDQUF5QnRCLElBQXpCLENBQThCK0QsTUFBOUIsSUFBd0MsQ0FBMUUsRUFBNkU7QUFDM0VRLGlCQUFPLEdBQUcsVUFBVjtBQUNEOztBQUNELFlBQUksQ0FBQyxDQUFDdkUsSUFBSSxDQUFDc0IsbUJBQVAsSUFBOEJ0QixJQUFJLENBQUNzQixtQkFBTCxDQUF5QnRCLElBQXpCLENBQThCK0QsTUFBOUIsSUFBd0MsQ0FBMUUsRUFBNkU7QUFDM0VRLGlCQUFPLEdBQUcsU0FBVjtBQUNELFNBWDBCLENBWTNCO0FBQ0E7QUFDQTs7QUFDRCxPQWZEO0FBZ0JBLDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU8saUJBQVMsbUJBQVlBLE9BQVo7QUFBaEIsc0JBQ0Usb0ZBRUUsb0ZBQ0U7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFZLHVCQUFZLE9BQXhCO0FBQWdDLHVCQUFZO0FBQTVDLHNCQUNFO0FBQUssV0FBRyxFQUFDO0FBQVQsUUFERixlQUVFLDBGQUZGLENBREYsQ0FGRixFQVVJMUMsU0FBUyxDQUFDN0QsR0FBVixDQUFjLFVBQUNnQyxJQUFELEVBQU95RSxHQUFQLEVBQWU7QUFDM0IsNEJBQU8sd0hBQ0gsQ0FBQyxDQUFDekUsSUFBSSxDQUFDNEIsVUFBUixnQkFBc0Isd0hBRXBCNUIsSUFBSSxDQUFDNEIsVUFBTCxDQUFnQjVCLElBQWhCLENBQXFCaEMsR0FBckIsQ0FBeUIsVUFBQzBHLE9BQUQsRUFBVUQsR0FBVixFQUFrQjtBQUMxQyw4QkFBUTtBQUFJLGVBQUcsRUFBRUE7QUFBVCwwQkFDTjtBQUFLLGVBQUcsRUFBQztBQUFULFlBRE0sZUFFTixnRkFGTSxFQUdMekUsSUFBSSxDQUFDNEIsVUFBTCxDQUFnQjVCLElBQWhCLENBQXFCK0QsTUFBckIsR0FBOEIsQ0FBOUIsZ0JBQWtDO0FBQUcscUJBQVMsRUFBQyxhQUFiO0FBQTJCLG1CQUFPLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUN2QixXQUFMLENBQWlCaUMsR0FBakIsQ0FBTjtBQUFBLGFBQXBDO0FBQWlFLDJCQUFZO0FBQTdFLFlBQWxDLEdBQTZILEVBSHhILENBQVI7QUFNRCxTQVBBLENBRm9CLENBQXRCLEdBVUssRUFYRCxDQUFQO0FBY0QsT0FmRCxDQVZKLENBREYsZUErQkUsdUVBRUk1QyxTQUFTLENBQUM3RCxHQUFWLENBQWMsVUFBQ2dDLElBQUQsRUFBT3lFLEdBQVAsRUFBZTtBQUMzQiw0QkFBTyx3SEFDSCxDQUFDLENBQUN6RSxJQUFJLENBQUMyQixhQUFSLGdCQUF5QixxSUFDeEIsdUVBQUszQixJQUFJLENBQUMyQixhQUFMLENBQW1CRyxJQUF4QixNQUR3QixFQUV2QjlCLElBQUksQ0FBQzJCLGFBQUwsQ0FBbUIzQixJQUFuQixDQUF3QmhDLEdBQXhCLENBQTRCLFVBQUMwRyxPQUFELEVBQVVELEdBQVYsRUFBa0I7QUFDN0MsOEJBQVE7QUFBSSxlQUFHLEVBQUVBLEdBQVQ7QUFBYyxxQkFBUyxFQUFDO0FBQXhCLDBCQUE4QjtBQUFLLGVBQUcsRUFBQztBQUFULFlBQTlCLENBQVI7QUFDRCxTQUZBLENBRnVCLENBQXpCLEdBS0ssRUFORCxDQUFQO0FBU0QsT0FWRCxDQUZKLENBL0JGLGVBZ0RFLHVFQUVJNUMsU0FBUyxDQUFDN0QsR0FBVixDQUFjLFVBQUNnQyxJQUFELEVBQU95RSxHQUFQLEVBQWU7QUFDM0IsNEJBQU8sd0hBQ0gsQ0FBQyxDQUFDekUsSUFBSSxDQUFDc0IsbUJBQVIsZ0JBQStCLHFJQUM5Qix1RUFBS3RCLElBQUksQ0FBQ3NCLG1CQUFMLENBQXlCUSxJQUE5QixPQUQ4QixFQUU3QjlCLElBQUksQ0FBQ3NCLG1CQUFMLENBQXlCdEIsSUFBekIsQ0FBOEJoQyxHQUE5QixDQUFrQyxVQUFDMEcsT0FBRCxFQUFVRCxHQUFWLEVBQWtCO0FBQ25ELDhCQUFRO0FBQUksZUFBRyxFQUFFQTtBQUFULGFBQWVDLE9BQU8sQ0FBQzNDLFdBQXZCLENBQVI7QUFDRCxTQUZBLENBRjZCLENBQS9CLEdBS0ssRUFORCxDQUFQO0FBU0QsT0FWRCxDQUZKLENBaERGLGVBaUVFLHVFQUVJRixTQUFTLENBQUM3RCxHQUFWLENBQWMsVUFBQ2dDLElBQUQsRUFBT3lFLEdBQVAsRUFBZTtBQUMzQiw0QkFBTyx3SEFDSCxDQUFDLENBQUN6RSxJQUFJLENBQUN1QixlQUFSLGdCQUEyQixxSUFDMUIsdUVBQU12QixJQUFJLENBQUN1QixlQUFMLENBQXFCTyxJQUEzQixlQUFnQztBQUFNLGlCQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNZLFNBQUwsQ0FBZSxpQkFBZixDQUFOO0FBQUEsV0FBZjtBQUF3RCxtQkFBUyxFQUFDO0FBQWxFLHdCQUE2RTtBQUFHLGVBQUssRUFBQyxvQkFBVDtBQUE4Qix5QkFBWTtBQUExQyxVQUE3RSxDQUFoQyxvQkFBMEs7QUFBRyxpQkFBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDRCxXQUFMLEVBQU47QUFBQSxXQUFaO0FBQXNDLG1CQUFTLEVBQUMsa0JBQWhEO0FBQW1FLHlCQUFZO0FBQS9FLFVBQTFLLENBRDBCLEVBRXpCekMsSUFBSSxDQUFDdUIsZUFBTCxDQUFxQnZCLElBQXJCLENBQTBCaEMsR0FBMUIsQ0FBOEIsVUFBQzBHLE9BQUQsRUFBVUQsR0FBVixFQUFrQjtBQUMvQyw4QkFBUTtBQUFJLGVBQUcsRUFBRUE7QUFBVCxhQUFlQyxPQUFPLENBQUMzQyxXQUF2QixDQUFSO0FBQ0QsU0FGQSxDQUZ5QixDQUEzQixHQUtLLEVBTkQsQ0FBUDtBQVNELE9BVkQsQ0FGSixDQWpFRixlQWdGRSxvRkFDRTtBQUFJLGVBQU8sRUFBRXlDLFNBQWI7QUFBd0IsaUJBQVMsRUFBRXBDLFNBQVMsR0FBRyxJQUFILEdBQVU7QUFBdEQsc0JBQ0U7QUFBTyxpQkFBUyxFQUFDO0FBQWpCLFNBRUlQLFNBQVMsQ0FBQzdELEdBQVYsQ0FBYyxVQUFDZ0MsSUFBRCxFQUFPeUUsR0FBUCxFQUFlO0FBQzNCLFlBQUt6RSxJQUFJLENBQUN1QixlQUFMLElBQXNCMEMsU0FBM0IsRUFBdUMsT0FBUSxJQUFSO0FBQ3ZDLGVBQU9aLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEQsSUFBSSxDQUFDdUIsZUFBTCxDQUFxQlMsUUFBakMsRUFBMkNoRSxHQUEzQyxDQUErQyxVQUFDdUYsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFFbkUsOEJBQ0U7QUFBSSxlQUFHLEVBQUVBO0FBQVQsMEJBQ0UsdUVBQUtELE1BQUwsQ0FERixFQUVHdkQsSUFBSSxDQUFDdUIsZUFBTCxDQUFxQlMsUUFBckIsQ0FBOEJ1QixNQUE5QixFQUFzQ3ZGLEdBQXRDLENBQTBDLFVBQUMyRyxJQUFELEVBQU9GLEdBQVAsRUFBZTtBQUN4RCxnQ0FBUSx1RUFBS0UsSUFBTCxDQUFSO0FBQ0QsV0FGQSxDQUZILENBREY7QUFTRCxTQVhNLENBQVA7QUFZRCxPQWRELENBRkosQ0FERixDQURGLENBaEZGLGVBd0dFLHVFQUVJOUMsU0FBUyxDQUFDN0QsR0FBVixDQUFjLFVBQUNnQyxJQUFELEVBQU95RSxHQUFQLEVBQWU7QUFDM0IsNEJBQU8sd0hBQ0gsQ0FBQyxDQUFDekUsSUFBSSxDQUFDd0IsWUFBUixnQkFBd0IscUlBQ3ZCLHVFQUFLeEIsSUFBSSxDQUFDd0IsWUFBTCxDQUFrQk0sSUFBdkIsb0JBQTZCO0FBQU0saUJBQU8sRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ1ksU0FBTCxDQUFlLGNBQWYsQ0FBTjtBQUFBLFdBQWY7QUFBcUQsbUJBQVMsRUFBQztBQUEvRCx3QkFBMEU7QUFBRyxlQUFLLEVBQUMsb0JBQVQ7QUFBOEIseUJBQVk7QUFBMUMsVUFBMUUsQ0FBN0IsQ0FEdUIsRUFFdEIxQyxJQUFJLENBQUN3QixZQUFMLENBQWtCeEIsSUFBbEIsQ0FBdUJoQyxHQUF2QixDQUEyQixVQUFDMEcsT0FBRCxFQUFVRCxHQUFWLEVBQWtCO0FBQzVDLDhCQUFRO0FBQUksZUFBRyxFQUFFQTtBQUFULGFBQWVDLE9BQU8sQ0FBQzNDLFdBQXZCLENBQVI7QUFDRCxTQUZBLENBRnNCLENBQXhCLEdBS0ssRUFORCxDQUFQO0FBU0QsT0FWRCxDQUZKLENBeEdGLGVBdUhFLHVFQUVJRixTQUFTLENBQUM3RCxHQUFWLENBQWMsVUFBQ2dDLElBQUQsRUFBT3lFLEdBQVAsRUFBZTtBQUMzQiw0QkFBTyx3SEFDSCxDQUFDLENBQUN6RSxJQUFJLENBQUN5QixRQUFSLGdCQUFvQixxSUFDbkIsdUVBQUt6QixJQUFJLENBQUN5QixRQUFMLENBQWNLLElBQW5CLG9CQUF5QjtBQUFNLGlCQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNZLFNBQUwsQ0FBZSxVQUFmLENBQU47QUFBQSxXQUFmO0FBQWlELG1CQUFTLEVBQUM7QUFBM0Qsd0JBQXNFO0FBQUcsZUFBSyxFQUFDLG9CQUFUO0FBQThCLHlCQUFZO0FBQTFDLFVBQXRFLENBQXpCLE1BRG1CLEVBRWxCMUMsSUFBSSxDQUFDeUIsUUFBTCxDQUFjekIsSUFBZCxDQUFtQmhDLEdBQW5CLENBQXVCLFVBQUMwRyxPQUFELEVBQVVELEdBQVYsRUFBa0I7QUFDeEMsOEJBQVE7QUFBSSxlQUFHLEVBQUVBO0FBQVQsYUFBZUMsT0FBTyxDQUFDM0MsV0FBdkIsQ0FBUjtBQUNELFNBRkEsQ0FGa0IsQ0FBcEIsR0FLSyxFQU5ELENBQVA7QUFTRCxPQVZELENBRkosQ0F2SEYsZUFzSUUsdUVBRUlGLFNBQVMsQ0FBQzdELEdBQVYsQ0FBYyxVQUFDZ0MsSUFBRCxFQUFPeUUsR0FBUCxFQUFlO0FBQzNCLDRCQUFPLHdIQUNILENBQUMsQ0FBQ3pFLElBQUksQ0FBQzBCLG1CQUFSLGdCQUErQixxSUFDOUIsdUVBQUsxQixJQUFJLENBQUMwQixtQkFBTCxDQUF5QkksSUFBOUIsb0JBQW9DO0FBQU0saUJBQU8sRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ1ksU0FBTCxDQUFlLHFCQUFmLENBQU47QUFBQSxXQUFmO0FBQTRELG1CQUFTLEVBQUM7QUFBdEUsd0JBQWlGO0FBQUcsZUFBSyxFQUFDLG9CQUFUO0FBQThCLHlCQUFZO0FBQTFDLFVBQWpGLENBQXBDLENBRDhCLEVBRTdCMUMsSUFBSSxDQUFDMEIsbUJBQUwsQ0FBeUIxQixJQUF6QixDQUE4QmhDLEdBQTlCLENBQWtDLFVBQUMwRyxPQUFELEVBQVVELEdBQVYsRUFBa0I7QUFDbkQsOEJBQVE7QUFBSSxlQUFHLEVBQUVBO0FBQVQsYUFBZUMsT0FBTyxDQUFDM0MsV0FBdkIsQ0FBUjtBQUNELFNBRkEsQ0FGNkIsQ0FBL0IsR0FLSyxFQU5ELENBQVA7QUFTRCxPQVZELENBRkosQ0F0SUYsQ0FERixlQTBKRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUE0QixVQUFFLEVBQUMsV0FBL0I7QUFBMkMsZ0JBQVEsRUFBQyxJQUFwRDtBQUF5RCxZQUFJLEVBQUMsUUFBOUQ7QUFBdUUsMkJBQWdCLG1CQUF2RjtBQUEyRyx1QkFBWTtBQUF2SCxzQkFDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUE4QixZQUFJLEVBQUM7QUFBbkMsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBNEIsVUFBRSxFQUFDO0FBQS9CLDBCQURGLGVBRUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLE9BQWhDO0FBQXdDLHdCQUFhLE9BQXJEO0FBQTZELHNCQUFXO0FBQXhFLHNCQUNFO0FBQU0sdUJBQVk7QUFBbEIsZ0JBREYsQ0FGRixDQURGLGVBT0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSVYsUUFBUSxDQUFDQyxtQkFBVCxJQUFnQzJDLFNBQWpDLGdCQUE4QztBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDN0M7QUFBTyxXQUFHLEVBQUM7QUFBWCwrQkFENkMsZUFFN0M7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLGNBQTdCO0FBQTRDLGFBQUssRUFBRTVDLFFBQVEsQ0FBQ0MsbUJBQTVEO0FBQWlGLGdCQUFRLEVBQUUsa0JBQUNvQyxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDbkIsY0FBTCxDQUFvQm1CLENBQXBCLENBQVA7QUFBQSxTQUEzRjtBQUEwSCxZQUFJLEVBQUM7QUFBL0gsUUFGNkMsQ0FBOUMsR0FHUSxFQUpYLEVBTUtyQyxRQUFRLENBQUNFLGVBQVQsSUFBNEIwQyxTQUE3QixnQkFBMEM7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ3hDO0FBQU8sV0FBRyxFQUFDO0FBQVgsMkJBRHdDLGVBRXhDO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBSyxFQUFFNUMsUUFBUSxDQUFDRSxlQUFuQztBQUFvRCxnQkFBUSxFQUFFLGtCQUFDbUMsQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ25CLGNBQUwsQ0FBb0JtQixDQUFwQixDQUFQO0FBQUEsU0FBOUQ7QUFBNkYsaUJBQVMsRUFBQyxjQUF2RztBQUFzSCxZQUFJLEVBQUM7QUFBM0gsUUFGd0MsQ0FBMUMsR0FHUyxFQVRiLEVBWUtyQyxRQUFRLENBQUNHLFlBQVQsSUFBeUJ5QyxTQUExQixnQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFPLFdBQUcsRUFBQztBQUFYLHdCQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUU1QyxRQUFRLENBQUNHLFlBQW5DO0FBQWlELGdCQUFRLEVBQUUsa0JBQUNrQyxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDbkIsY0FBTCxDQUFvQm1CLENBQXBCLENBQVA7QUFBQSxTQUEzRDtBQUEwRixpQkFBUyxFQUFDLGNBQXBHO0FBQW1ILFlBQUksRUFBQztBQUF4SCxRQUZGLENBREYsR0FJVyxFQWhCZixFQW1CS3JDLFFBQVEsQ0FBQ0ksUUFBVCxJQUFxQndDLFNBQXRCLGdCQUFtQztBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDakM7QUFBTyxXQUFHLEVBQUM7QUFBWCxvQkFEaUMsZUFFakM7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUU1QyxRQUFRLENBQUNJLFFBQW5DO0FBQTZDLGdCQUFRLEVBQUUsa0JBQUNpQyxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDbkIsY0FBTCxDQUFvQm1CLENBQXBCLENBQVA7QUFBQSxTQUF2RDtBQUFzRixpQkFBUyxFQUFDLGNBQWhHO0FBQStHLFlBQUksRUFBQztBQUFwSCxRQUZpQyxDQUFuQyxHQUdTLEVBdEJiLEVBeUJLckMsUUFBUSxDQUFDSyxtQkFBVCxJQUFnQ3VDLFNBQWpDLGdCQUE4QztBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDNUM7QUFBTyxXQUFHLEVBQUM7QUFBWCwrQkFENEMsZUFFNUM7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUU1QyxRQUFRLENBQUNLLG1CQUFuQztBQUF3RCxnQkFBUSxFQUFFLGtCQUFDZ0MsQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ25CLGNBQUwsQ0FBb0JtQixDQUFwQixDQUFQO0FBQUEsU0FBbEU7QUFBaUcsaUJBQVMsRUFBQyxjQUEzRztBQUEwSCxZQUFJLEVBQUM7QUFBL0gsUUFGNEMsQ0FBOUMsR0FHUyxFQTVCYixlQWdDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ3JCLFlBQUwsRUFBTjtBQUFBLFNBQS9CO0FBQTBELGlCQUFTLEVBQUM7QUFBcEUsa0JBaENGLENBUEYsQ0FERixDQURGLENBMUpGLENBREY7QUEyTUQ7Ozs7RUFwaEIrQmxFLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbEM7QUFDQTtBQUNBO0FBQ0F6Qix3RUFBZ0I7QUFFVCxJQUFNa0ksc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFTQyxHQUFULEVBQWM7QUFDaEQsU0FBT0MsVUFBVSxDQUFDRCxHQUFELENBQVYsQ0FBZ0JFLE9BQWhCLENBQXdCLENBQXhCLENBQVA7QUFDSCxDQUZNO0FBSUEsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFTSCxHQUFULEVBQWM7QUFDaEQsU0FBTyxFQUFFSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsR0FBRyxHQUFHLEtBQWpCLElBQTBCLEtBQTVCLENBQVA7QUFDSCxDQUZNO0FBSUEsSUFBTU0sZ0JBQWdCO0FBQUEscUVBQUcsaUJBQWVDLE1BQWYsRUFBdUJDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUU1QixnQkFBR0QsTUFBTSxDQUFDRSxJQUFQLEtBQWdCLE9BQW5CLEVBQ0lDLGdFQUFBLENBQXdCRixLQUF4QjtBQUNKMUcsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZeUcsS0FBWjtBQUNNRyxzQkFMc0IsR0FLUCxlQUxPO0FBTXhCQywwQkFOd0IsR0FNQSxFQU5BOztBQU81QixnQkFBSUosS0FBSyxDQUFDSyxRQUFWLEVBQW9CO0FBQ2hCO0FBQ1I7QUFDQTtBQUNBO0FBQ1FELDRCQUFjLENBQUN6RixJQUFmLEdBQTRCcUYsS0FBSyxDQUFDSyxRQUFOLENBQWUxRixJQUEzQztBQUNBeUYsNEJBQWMsQ0FBQ0UsTUFBZixHQUE0Qk4sS0FBSyxDQUFDSyxRQUFOLENBQWVDLE1BQTNDO0FBQ0FGLDRCQUFjLENBQUNHLE9BQWYsR0FBNEJQLEtBQUssQ0FBQ0ssUUFBTixDQUFlRSxPQUEzQyxDQVBnQixDQVFoQjtBQUNBO0FBQ0E7QUFDSCxhQVhELE1BV08sSUFBSVAsS0FBSyxDQUFDUSxPQUFWLEVBQW1CO0FBQ3RCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNBSiw0QkFBYyxDQUFDSSxPQUFmLEdBQStCUixLQUFLLENBQUNRLE9BQXJDO0FBQ0gsYUFSTSxNQVFBO0FBQ0g7QUFDQTtBQUNBSiw0QkFBYyxDQUFDSyxPQUFmLEdBQStCVCxLQUFLLENBQUNTLE9BQXJDO0FBQ0gsYUE5QjJCLENBK0I1Qjs7O0FBQ0EsZ0JBQUcsQ0FBQyxDQUFDVCxLQUFLLENBQUNVLE1BQVgsRUFDSU4sY0FBYyxDQUFDTSxNQUFmLEdBQThCVixLQUFLLENBQUNVLE1BQXBDO0FBakN3QjtBQUFBLG1CQWtDRUMsZ0RBQUcsQ0FBQ0MsSUFBSixDQUFTLDBCQUFULEVBQXFDO0FBQy9ELHdEQUFvQmIsTUFBcEI7QUFBNEJLLDhCQUFjLEVBQUVoSSxJQUFJLENBQUN5SSxTQUFMLENBQWVULGNBQWY7QUFBNUM7QUFEK0QsYUFBckMsQ0FsQ0Y7O0FBQUE7QUFrQ3RCVSxlQWxDc0I7O0FBcUM1QixnQkFBSUEsR0FBRyxDQUFDbkcsSUFBSixDQUFTcUYsS0FBYixFQUFvQjtBQUNoQkUsOEVBQUEsQ0FBd0JZLEdBQUcsQ0FBQ25HLElBQUosQ0FBU3FGLEtBQWpDO0FBQ0ExRyxxQkFBTyxDQUFDQyxHQUFSLENBQVl1SCxHQUFHLENBQUNuRyxJQUFKLENBQVNxRixLQUFyQjtBQUNILGFBSEQsTUFHTztBQUNIZSx3QkFBVSxDQUFDLFlBQVM7QUFDaEJqSyxzQkFBTSxDQUFDMEIsUUFBUCxDQUFnQnVHLElBQWhCLEdBQXVCb0IsVUFBdkI7QUFDSCxlQUZTLEVBRVIsSUFGUSxDQUFWO0FBR0g7O0FBNUMyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQkwsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCO0FBOENBLElBQU1rQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNoSSxHQUFELEVBQVM7QUFDcEMsTUFBRztBQUNELFFBQUlpSSxLQUFLLEdBQUcsc0NBQVo7QUFFQSxRQUFJQyxPQUFPLEdBQUdsSSxHQUFHLENBQUNtSSxLQUFKLENBQVVGLEtBQVYsQ0FBZCxDQUhDLENBSUQ7O0FBQ0EsUUFBR0MsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxPQUFYLENBQW1CLEdBQW5CLElBQTBCLENBQUMsQ0FBM0IsSUFBZ0NGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsT0FBWCxDQUFtQixHQUFuQixJQUEwQixDQUFDLENBQTlELEVBQWdFO0FBQzlELFVBQUlDLGdCQUFnQixHQUFHSCxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQVcsSUFBWCxHQUFpQkEsT0FBTyxDQUFDLENBQUQsQ0FBeEIsR0FBOEIsR0FBOUIsR0FBbUNBLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDeEMsTUFBUixHQUFnQixDQUFqQixDQUFqRTtBQUNBLFVBQUk0QyxVQUFVLEdBQUdELGdCQUFnQixHQUFDLE9BQWxDOztBQUNBLFVBQUcsd0NBQXdDRSxJQUF4QyxDQUE2Q0QsVUFBN0MsQ0FBSCxFQUE0RDtBQUMxRCxZQUFJRSxRQUFRLEdBQUdGLFVBQVUsQ0FBQ0gsS0FBWCxDQUFpQkYsS0FBakIsQ0FBZjs7QUFFQSxlQUFPO0FBQ0xRLG1CQUFTLEVBQUUsSUFETjtBQUVMSiwwQkFBZ0IsRUFBRUEsZ0JBRmI7QUFHTEgsaUJBQU8sRUFBRUksVUFISjtBQUlMSSxnQkFBTSxFQUFFRixRQUFRLENBQUMsQ0FBRCxDQUpYO0FBS0xHLGdCQUFNLEVBQUVILFFBQVEsQ0FBQyxDQUFELENBTFg7QUFNTEksY0FBSSxFQUFFSixRQUFRLENBQUMsQ0FBRCxDQU5UO0FBT0xLLGlCQUFPLEVBQUUsZUFQSjtBQVFMQyxvQkFBVSxFQUFFTixRQUFRLENBQUMsQ0FBRCxDQVJmO0FBU0xPLGlCQUFPLEVBQUVQLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDOUMsTUFBVCxHQUFpQixDQUFsQjtBQVRaLFNBQVA7QUFXRCxPQWRELE1BY087QUFDTCxlQUFPO0FBQ0wrQyxtQkFBUyxFQUFFO0FBRE4sU0FBUDtBQUdEO0FBQ0YsS0F0QkQsTUFzQk87QUFDTCxVQUFJSixpQkFBZ0IsR0FBR0gsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLEdBQWIsR0FBbUJBLE9BQU8sQ0FBQyxDQUFELENBQTFCLEdBQWdDLElBQWhDLEdBQXNDQSxPQUFPLENBQUMsQ0FBRCxDQUE3QyxHQUFtRCxJQUFuRCxHQUEwREEsT0FBTyxDQUFDLENBQUQsQ0FBakUsR0FBdUUsR0FBdkUsR0FBNkVBLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDeEMsTUFBUixHQUFnQixDQUFqQixDQUEzRzs7QUFDQSxhQUFPO0FBQ0wrQyxpQkFBUyxFQUFFLElBRE47QUFFTEosd0JBQWdCLEVBQUVBLGlCQUZiO0FBR0xILGVBQU8sRUFBRWxJLEdBSEo7QUFJTDBJLGNBQU0sRUFBRVIsT0FBTyxDQUFDLENBQUQsQ0FKVjtBQUtMUyxjQUFNLEVBQUVULE9BQU8sQ0FBQyxDQUFELENBTFY7QUFNTFUsWUFBSSxFQUFFVixPQUFPLENBQUMsQ0FBRCxDQU5SO0FBT0xXLGVBQU8sRUFBRSxlQVBKO0FBUUxDLGtCQUFVLEVBQUVaLE9BQU8sQ0FBQyxDQUFELENBUmQ7QUFTTGEsZUFBTyxFQUFFYixPQUFPLENBQUNBLE9BQU8sQ0FBQ3hDLE1BQVIsR0FBZ0IsQ0FBakI7QUFUWCxPQUFQO0FBV0Q7QUFDRixHQXpDRCxDQXlDRSxPQUFNTCxDQUFOLEVBQVE7QUFDUi9FLFdBQU8sQ0FBQ0MsR0FBUixDQUFZOEUsQ0FBWjtBQUNBLFdBQU87QUFDTG9ELGVBQVMsRUFBRTtBQUROLEtBQVA7QUFHRDtBQUNKLENBaERNO0FBa0RBLElBQU1PLFlBQVksR0FBRSxTQUFkQSxZQUFjLENBQUN0RyxLQUFELEVBQVU7QUFDbkMsTUFBTXVHLE9BQU8sR0FBRyx5SkFBaEI7QUFDQSxTQUFPQSxPQUFPLENBQUNWLElBQVIsQ0FBYVcsTUFBTSxDQUFDeEcsS0FBRCxDQUFuQixDQUFQO0FBQ0QsQ0FITSxDOzs7Ozs7OztBQzdHUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU15RyxPQUFPLEdBQWUsdUJBQTVCO0FBRUEsSUFBTXhCLEdBQUcsR0FBbUJ5Qiw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDckNDLFNBQU8sRUFBRUg7QUFENEIsQ0FBYixDQUE1QjtBQUdBeEIsR0FBRyxDQUFDNEIsUUFBSixDQUFhaEMsT0FBYixDQUFxQmlDLE1BQXJCLENBQTRCLGNBQTVCLElBQThDLGtCQUE5QztBQUNBLElBQUlDLElBQUksR0FBa0IsRUFBMUI7O0FBQ0EsSUFBRyxPQUFPM0wsTUFBUCxLQUFrQixXQUFyQixFQUFpQztBQUMvQixNQUFJb0IsUUFBUSxHQUFZRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEtBQW9DLElBQS9DLENBQXhCOztBQUNBLE1BQUcsQ0FBQ2EsNkNBQUMsQ0FBQ0MsT0FBRixDQUFVbkIsUUFBVixDQUFKLEVBQXdCO0FBQ3RCdUssUUFBSSxHQUFtQixXQUFXdkssUUFBUSxDQUFDa0gsR0FBM0M7QUFDRCxHQUZELE1BRU07QUFDSnFELFFBQUksR0FBTSxFQUFWO0FBQ0Q7O0FBRURuSixTQUFPLENBQUNDLEdBQVIsQ0FBWWtKLElBQVo7QUFDQTlCLEtBQUcsQ0FBQzRCLFFBQUosQ0FBYWhDLE9BQWIsQ0FBcUJpQyxNQUFyQixDQUE0QixlQUE1QixJQUErQ0MsSUFBL0M7QUFDRDs7QUFFYzlCLGtFQUFmLEU7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtDQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUkrQixHQUFHLEdBQUssRUFBWjtBQUNBLElBQUdDLEtBQUgsRUFDRUQsRUFERixLQUVLLElBQUlDLEtBQUosRUFDSEQsRUFERyxLQUdIQSxHQUFHLEdBQUksYUFBUDtBQUNGLElBQU1oQyxNQUFNLEdBQUc7QUFDYjtBQUNBZ0MsS0FBRyxFQUFDQSxHQUZTO0FBR2JFLE1BQUksRUFBRUQsT0FBTyxDQUFDRCxHQUFSLENBQVlHLElBQVosSUFBb0I7QUFIYixDQUFmLEMsQ0FLQTs7QUFDZXpKLDRHQUFDLENBQUMwSixNQUFGLENBQVNwQyxNQUFULEVBQWlCcUMseUJBQVEsSUFBSSxHQUFHTCxHQUFQLEdBQWEsS0FBZCxDQUFQLENBQTRCTSxPQUE1QixJQUF1QyxFQUF4RCxDQUFmLEU7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7Ozs7Ozs7O0FDdEJDO0FBQUEsSUFBTXRDLE1BQU0sR0FBUTtBQUNqQjtBQUNBdUMsYUFBVyxFQUFpQixFQUZYO0FBR2pCQyxTQUFPLEVBQXFCLE9BSFg7QUFJakJDLFVBQVEsRUFBb0IsYUFKWDtBQUtqQkMsV0FBUyxFQUFtQixlQUxYO0FBTWpCQyxRQUFNLEVBQXNCO0FBQ3hCQyxRQUFJLEVBQW9CO0FBREE7QUFOWCxDQUFwQjtBQVVjNUMscUVBQWYsRTs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJUyxJQUFNckosZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQ3BDNkksc0RBQUEsQ0FBWTtBQUNScUQsT0FBRyxFQUFFN0MsK0NBQU0sQ0FBQzhDO0FBREosR0FBWjtBQUdILENBSlEsQzs7Ozs7Ozs7QUNKVCxjQUFjLG1CQUFPLENBQUMsR0FBMkQ7O0FBRWpGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7OztBQ25CZiwyQkFBMkIsbUJBQU8sQ0FBQyxHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUzs7Ozs7Ozs7OztBQ0Z2QjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQW5NLHVFQUFnQjtBQUVULFNBQVNrRSxRQUFULENBQWtCWixJQUFsQixFQUF3QjtBQUMzQjtBQUFBLHVFQUFPLGlCQUFPZCxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFNEosc0JBREYsR0FDZTtBQUFDQyx3QkFBUSxFQUFDL0ksSUFBSSxDQUFDZSxLQUFmO0FBQXNCQyx3QkFBUSxFQUFDaEIsSUFBSSxDQUFDZ0I7QUFBcEMsZUFEZjtBQUFBO0FBR0M5QixzQkFBUSxDQUFDO0FBQUVvRyxvQkFBSSxFQUFFMEQsbURBQUksQ0FBQ0M7QUFBYixlQUFELENBQVI7QUFIRDtBQUFBLHFCQUl1Q2pELGdEQUFHLENBQUNDLElBQUosQ0FBUyxrQkFBVCxFQUE2QjZDLFFBQTdCLENBSnZDOztBQUFBO0FBSU8zQyxpQkFKUDs7QUFLQyxrQkFBSUEsR0FBRyxDQUFDbkcsSUFBSixDQUFTcUYsS0FBYixFQUFvQjtBQUNoQjZELDBFQUFXLENBQUMvQyxHQUFHLENBQUNuRyxJQUFKLENBQVNxRixLQUFWLENBQVg7QUFDQTFHLHVCQUFPLENBQUNDLEdBQVIsQ0FBWXVILEdBQUcsQ0FBQ25HLElBQUosQ0FBU3FGLEtBQXJCO0FBQ0FuRyx3QkFBUSxDQUFDO0FBQUVvRyxzQkFBSSxFQUFFMEQsbURBQUksQ0FBQ0c7QUFBYixpQkFBRCxDQUFSO0FBQ0gsZUFKRCxNQUtLO0FBQ0c1TCx3QkFESCxHQUNtQjRJLEdBQUcsQ0FBQ25HLElBQUosSUFBWSxFQUQvQjtBQUVEckMsNEJBQVksQ0FBQ3lMLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUMzTCxJQUFJLENBQUN5SSxTQUFMLENBQWUzSSxRQUFmLENBQWpDO0FBQ0EyQix3QkFBUSxDQUFDO0FBQUVvRyxzQkFBSSxFQUFFMEQsbURBQUksQ0FBQ0ssY0FBYjtBQUE2QnJKLHNCQUFJLEVBQUdtRyxHQUFHLENBQUNuRztBQUF4QyxpQkFBRCxDQUFSO0FBQ0g7O0FBZEY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQkNyQixxQkFBTyxDQUFDQyxHQUFSO0FBQ0FzSyx3RUFBVyxDQUFDLHVCQUFELENBQVg7QUFDQWhLLHNCQUFRLENBQUM7QUFBRW9HLG9CQUFJLEVBQUUwRCxtREFBSSxDQUFDRztBQUFiLGVBQUQsQ0FBUjs7QUFsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCSCxDOzs7Ozs7OztBQzlCRDtBQUFBO0FBQUE7QUFFQSxJQUFNRyxNQUFNLEdBQUcsYUFBZjtBQUVBLElBQU1DLEtBQUssR0FBRztBQUNaQyxRQUFNLEVBQUUsSUFESTtBQUVaQyxnQkFBYyxFQUFFLElBRko7QUFHWkMsY0FBWSxFQUFFLElBSEY7QUFJWlQsUUFBTSxFQUFFLElBSkk7QUFLWkksZ0JBQWMsRUFBRSxJQUxKO0FBTVpGLGNBQVksRUFBRSxJQU5GO0FBT1pRLGNBQVksRUFBRSxJQVBGO0FBUVpDLHNCQUFvQixFQUFFLElBUlY7QUFTWkMsb0JBQWtCLEVBQUU7QUFUUixDQUFkO0FBYWVDLHdIQUFRLENBQUNQLEtBQUQsRUFBUUQsTUFBUixDQUF2QixFOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFZSxTQUFTUSxRQUFULENBQWtCUCxLQUFsQixFQUF5QkQsTUFBekIsRUFBaUM7QUFDOUMsU0FBT1Msb0RBQU0sQ0FBQ1IsS0FBRCxFQUFRLFVBQUNTLE1BQUQsRUFBU3BHLEtBQVQsRUFBZ0JhLEdBQWhCLEVBQXdCO0FBQzNDdUYsVUFBTSxDQUFDdkYsR0FBRCxDQUFOLGFBQWlCNkUsTUFBakIsY0FBMkI3RSxHQUEzQixFQUQyQyxDQUNUOztBQUNsQyxXQUFPdUYsTUFBUDtBQUNELEdBSFksRUFHVixFQUhVLENBQWI7QUFJRCxDOzs7Ozs7OztBQ1BEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNuRSxPQUFELEVBQWE7QUFDaEMsTUFBSW9FLE9BQU8sR0FBRztBQUFFQyxjQUFVLEVBQUUsU0FBZDtBQUF5QnJJLFFBQUksRUFBRSxTQUEvQjtBQUEwQyxlQUFVO0FBQXBELEdBQWQ7QUFDQXNJLDJEQUFNLENBQUNDLElBQVAsQ0FBWXZFLE9BQVosRUFBcUIsUUFBckIsRUFBK0IsSUFBL0IsRUFBcUNvRSxPQUFyQztBQUNILENBSE0sQyxDQUlQO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU03RSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDUyxPQUFELEVBQWE7QUFDOUIsTUFBSW9FLE9BQU8sR0FBRztBQUFFQyxjQUFVLEVBQUUsU0FBZDtBQUF5QnJJLFFBQUksRUFBRTtBQUEvQixHQUFkO0FBQ0EsTUFBSXdJLENBQUMsR0FBRSxHQUFQO0FBQ0FGLDJEQUFNLENBQUNDLElBQVAsQ0FBWXZFLE9BQVosRUFBcUIsUUFBckIsRUFBK0IsSUFBL0IsRUFBcUNvRSxPQUFyQztBQUNILENBSk07QUFLQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDekUsT0FBRCxFQUFhO0FBQ2hDc0UsMkRBQU0sQ0FBQ0MsSUFBUCxDQUFZdkUsT0FBWixFQUFxQixTQUFyQixFQUFnQyxJQUFoQztBQUNILENBRk07QUFJQSxJQUFNMEUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzFFLE9BQUQsRUFBYTtBQUNwQyxNQUFJb0UsT0FBTyxHQUFHO0FBQUVDLGNBQVUsRUFBRSxTQUFkO0FBQXlCckksUUFBSSxFQUFFO0FBQS9CLEdBQWQ7QUFDQXNJLDJEQUFNLENBQUNDLElBQVAsQ0FBWXZFLE9BQVosRUFBcUIsUUFBckIsRUFBK0IsS0FBL0IsRUFBc0NvRSxPQUF0QztBQUNILENBSE07QUFLQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ3RCTCwyREFBTSxDQUFDSyxJQUFQO0FBQ0gsQ0FGTSxDOzs7Ozs7OztBQ3hCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUdDLGlFQUFZLEVBQXJDO0FBRWUsU0FBU3JPLGdCQUFULEdBQTJEO0FBQUEsaUZBQUosRUFBSTtBQUFBLE1BQS9CSixjQUErQixRQUEvQkEsY0FBK0I7QUFBQSxNQUFmME8sTUFBZSxRQUFmQSxNQUFlOztBQUN4RSxNQUFJQyxRQUFKOztBQUVBLE1BQUk3QyxLQUFBLElBQXlDLENBQUM0QyxNQUE5QyxFQUFzRDtBQUNwREMsWUFBUSxHQUFHQyw2REFBZSxDQUFDQyxtREFBRCxFQUFrQkwsZ0JBQWxCLENBQTFCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xHLFlBQVEsR0FBR0MsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBMUI7QUFDRDs7QUFFRCxTQUFPQyx5REFBVyxDQUFDQyx1REFBRCxFQUFhL08sY0FBYixFQUE2QjJPLFFBQTdCLENBQWxCO0FBQ0QsQzs7Ozs7Ozs7QUNqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSUEsSUFBTUksVUFBVSxHQUFHQyw2REFBZSxDQUFDO0FBQy9Cbk8sTUFBSSxFQUFKQSw2Q0FEK0I7QUFFL0JvTyxRQUFNLEVBQU5BLCtDQUYrQjtBQUcvQnhLLFFBQU0sRUFBTkEsNkNBQU1BO0FBSHlCLENBQUQsQ0FBbEM7QUFPZXNLLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFZSwyRUFBZ0M7QUFBQSxNQUF0QmxNLEtBQXNCLHVFQUFkLElBQWM7QUFBQSxNQUFScU0sTUFBUTs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDOUYsSUFBZjtBQUNFLFNBQUswRCxxREFBSSxDQUFDcUMsUUFBVjtBQUNFLDZDQUFXdE0sS0FBWDtBQUFrQm1DLGlCQUFTLEVBQUUsSUFBN0I7QUFBbUNvSyxrQkFBVSxFQUFFO0FBQS9DOztBQUNGLFNBQUt0QyxxREFBSSxDQUFDdUMsUUFBVjtBQUNFLDZDQUFXeE0sS0FBWDtBQUFrQm1DLGlCQUFTLEVBQUMsS0FBNUI7QUFBbUNvSyxrQkFBVSxFQUFFRixNQUFNLENBQUNwTDtBQUF0RDs7QUFDRixTQUFLZ0oscURBQUksQ0FBQ3dDLFNBQVY7QUFDRSw2Q0FBV3pNLEtBQVg7QUFBa0JtQyxpQkFBUyxFQUFFLEtBQTdCO0FBQW9Db0ssa0JBQVUsRUFBRTtBQUFoRDs7QUFFQSxTQUFLdEMscURBQUksQ0FBQ3lDLGdCQUFWO0FBQ0UsNkNBQVcxTSxLQUFYO0FBQWtCbUMsaUJBQVMsRUFBRSxJQUE3QjtBQUFtQ3dLLGtCQUFVLEVBQUU7QUFBL0M7O0FBQ0EsU0FBSzFDLHFEQUFJLENBQUMyQyxnQkFBVjtBQUNFLDZDQUFXNU0sS0FBWDtBQUFrQm1DLGlCQUFTLEVBQUMsS0FBNUI7QUFBbUN3SyxrQkFBVSxFQUFFTixNQUFNLENBQUNwTDtBQUF0RDs7QUFFSixTQUFLZ0oscURBQUksQ0FBQzRDLGlCQUFWO0FBQ0UsNkNBQVc3TSxLQUFYO0FBQWtCbUMsaUJBQVMsRUFBRSxLQUE3QjtBQUFvQ3dLLGtCQUFVLEVBQUU7QUFBaEQ7O0FBRUo7QUFBUyxhQUFPM00sS0FBUDtBQWhCWDtBQWtCRCxDOzs7Ozs7OztBQ3JCRDtBQUFBO0FBQUE7QUFFQSxJQUFNdUssTUFBTSxHQUFHLGVBQWY7QUFFQSxJQUFNQyxLQUFLLEdBQUc7QUFDWjhCLFVBQVEsRUFBRSxJQURFO0FBRVpFLFVBQVEsRUFBRSxJQUZFO0FBR1pDLFdBQVMsRUFBRSxJQUhDO0FBSVpDLGtCQUFnQixFQUFFLElBSk47QUFLWkUsa0JBQWdCLEVBQUUsSUFMTjtBQU1aQyxtQkFBaUIsRUFBRTtBQU5QLENBQWQ7QUFXZTlCLHdIQUFRLENBQUNQLEtBQUQsRUFBUUQsTUFBUixDQUF2QixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQSxJQUFJL0wsUUFBUSxHQUFNLEVBQWxCLEMsQ0FDQTs7QUFDRUEsUUFBUSxHQUFhLE9BQU9wQixNQUFQLEtBQWtCLFdBQW5CLEdBQWtDc0IsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixLQUFvQyxJQUEvQyxDQUFsQyxHQUF5RixFQUE3RyxDLENBQ0Y7O0FBQ0FlLE9BQU8sQ0FBQ0MsR0FBUixDQUFZckIsUUFBWjtBQUNBLElBQUlzTyxZQUFZLEdBQVE7QUFDdEJ0TyxVQUFRLG9CQUFNQSxRQUFOO0FBRGMsQ0FBeEI7QUFJZSwyRUFBd0M7QUFBQSxNQUE5QndCLEtBQThCLHVFQUF0QjhNLFlBQXNCO0FBQUEsTUFBUlQsTUFBUTs7QUFDckQsVUFBUUEsTUFBTSxDQUFDOUYsSUFBZjtBQUNFLFNBQUswRCxtREFBSSxDQUFDUSxNQUFWO0FBQ0UsNkNBQVd6SyxLQUFYO0FBQWtCK00sb0JBQVksRUFBRSxJQUFoQztBQUFzQzNILGlCQUFTLEVBQUU7QUFBakQ7O0FBQ0YsU0FBSzZFLG1EQUFJLENBQUNTLGNBQVY7QUFDRSw2Q0FBVzFLLEtBQVg7QUFBa0IrTSxvQkFBWSxFQUFDLEtBQS9CO0FBQXNDM0gsaUJBQVMsRUFBRSxJQUFqRDtBQUF1RDVHLGdCQUFRLEVBQUU2TixNQUFNLENBQUNwTDtBQUF4RTs7QUFDRixTQUFLZ0osbURBQUksQ0FBQ1UsWUFBVjtBQUNFLDZDQUFXM0ssS0FBWDtBQUFrQitNLG9CQUFZLEVBQUUsS0FBaEM7QUFBdUMzSCxpQkFBUyxFQUFFO0FBQWxEOztBQUNGLFNBQUs2RSxtREFBSSxDQUFDQyxNQUFWO0FBQ0UsNkNBQVdsSyxLQUFYO0FBQWtCK00sb0JBQVksRUFBRSxJQUFoQztBQUFzQzNILGlCQUFTLEVBQUU7QUFBakQ7O0FBQ0YsU0FBSzZFLG1EQUFJLENBQUNLLGNBQVY7QUFDRSw2Q0FBV3RLLEtBQVg7QUFBa0IrTSxvQkFBWSxFQUFDLEtBQS9CO0FBQXNDM0gsaUJBQVMsRUFBRSxJQUFqRDtBQUF1RDVHLGdCQUFRLEVBQUU2TixNQUFNLENBQUNwTDtBQUF4RTs7QUFDRixTQUFLZ0osbURBQUksQ0FBQ0csWUFBVjtBQUNFLDZDQUFXcEssS0FBWDtBQUFrQitNLG9CQUFZLEVBQUUsS0FBaEM7QUFBdUMzSCxpQkFBUyxFQUFFO0FBQWxEOztBQUNGLFNBQUs2RSxtREFBSSxDQUFDVyxZQUFWO0FBQ0UsNkNBQVc1SyxLQUFYO0FBQWtCZ04sc0JBQWMsRUFBRTtBQUFsQzs7QUFDRixTQUFLL0MsbURBQUksQ0FBQ1ksb0JBQVY7QUFDRSw2Q0FBVzdLLEtBQVg7QUFBa0JnTixzQkFBYyxFQUFFO0FBQWxDOztBQUNGLFNBQUsvQyxtREFBSSxDQUFDYSxrQkFBVjtBQUNBLDZDQUFXOUssS0FBWDtBQUFrQmdOLHNCQUFjLEVBQUU7QUFBbEM7O0FBRUE7QUFBUyw2Q0FBV2hOLEtBQVgsR0FBcUI4TSxZQUFyQjtBQXBCWDtBQXNCRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNEO0FBRWUsMkVBQWdDO0FBQUEsTUFBdEI5TSxLQUFzQix1RUFBZCxJQUFjO0FBQUEsTUFBUnFNLE1BQVE7O0FBQzdDLFVBQVFBLE1BQU0sQ0FBQzlGLElBQWY7QUFDRSxTQUFLMEQsbURBQUksQ0FBQ3FDLFFBQVY7QUFDRSw2Q0FBV3RNLEtBQVg7QUFBa0JtQyxpQkFBUyxFQUFFLElBQTdCO0FBQW1DOEssZ0JBQVEsRUFBRTtBQUE3Qzs7QUFDRixTQUFLaEQsbURBQUksQ0FBQ3VDLFFBQVY7QUFDRSw2Q0FBV3hNLEtBQVg7QUFBa0JtQyxpQkFBUyxFQUFDLEtBQTVCO0FBQW1DOEssZ0JBQVEsRUFBRVosTUFBTSxDQUFDcEw7QUFBcEQ7O0FBQ0YsU0FBS2dKLG1EQUFJLENBQUN3QyxTQUFWO0FBQ0UsNkNBQVd6TSxLQUFYO0FBQWtCbUMsaUJBQVMsRUFBRSxLQUE3QjtBQUFvQzhLLGdCQUFRLEVBQUU7QUFBOUM7O0FBRUY7QUFBUyxhQUFPak4sS0FBUDtBQVJYO0FBVUQsQzs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFFQSxJQUFNdUssTUFBTSxHQUFHLGFBQWY7QUFFQSxJQUFNQyxLQUFLLEdBQUc7QUFDWjhCLFVBQVEsRUFBRSxJQURFO0FBRVpFLFVBQVEsRUFBRSxJQUZFO0FBR1pDLFdBQVMsRUFBRTtBQUhDLENBQWQ7QUFRZTFCLHdIQUFRLENBQUNQLEtBQUQsRUFBUUQsTUFBUixDQUF2QixFIiwiZmlsZSI6Ii4vbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsMV0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vdW5pdmVyc2FsL3JvdXRlcyc7XG5pbXBvcnQgY3JlYXRlUmVkdXhTdG9yZSBmcm9tICcuLi91bml2ZXJzYWwvY3JlYXRlUmVkdXhTdG9yZSc7XG5cbi8vIEdyYWIgdGhlIHN0YXRlIGZyb20gYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgaW50byB0aGUgc2VydmVyLWdlbmVyYXRlZCBIVE1MXG5jb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG5cbi8vIEFsbG93IHRoZSBwYXNzZWQgc3RhdGUgdG8gYmUgZ2FyYmFnZS1jb2xsZWN0ZWRcbmRlbGV0ZSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuXG4vLyBDcmVhdGUgUmVkdXggc3RvcmUgd2l0aCBpbml0aWFsIHN0YXRlXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVJlZHV4U3RvcmUoeyBwcmVsb2FkZWRTdGF0ZSB9KTtcblxuaHlkcmF0ZShcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8Um91dGVyIC8+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwJztcbmltcG9ydCB7Z2V0Q29va2llfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuXG4vL2ltcG9ydCBBYm91dCBmcm9tICcuLi9jb250YWluZXJzL0Fib3V0JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb250YWluZXJzL05vdEZvdW5kJztcblxuaW1wb3J0ICcuL2dsb2JhbC5jc3MnXG4vL2ltcG9ydCB7IGdldEFib3V0RGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWJvdXQnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMsIHtub3RpZnl9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XG5cblxuXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb250YWluZXJzL0hvbWUnO1xuXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1NlbnRyeUluaXRpYWxpemUgfSBmcm9tIFwiLi4vU2VudHJ5L3NlbnRyeVwiXG5TZW50cnlJbml0aWFsaXplKCk7XG4vLyBmb3IgbW9yZSBkZXRhaWxzIHNlZSBodHRwczovL3JlYWN0dHJhaW5pbmcuY29tL3JlYWN0LXJvdXRlci93ZWIvZ3VpZGVzL3NlcnZlci1yZW5kZXJpbmdcbi8vIHNwZWNpZnkgcm91dGVzIHdpdGggdGhlIGFzbnljIGZ1bmN0aW9uIHJlcXVpcmVkIHRvIGZldGNoIHRoZSBkYXRhIHRvIHJlbmRlciB0aGUgcm91dGVcbi8vIElNUE9SVEFOVDogdGhlIGxvYWREYXRhIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgUHJvbWlzZVxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFt7XG4gICAgcGF0aDogJy8nLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZVxuICB9LCB7XG4gICAgY29tcG9uZW50OiBOb3RGb3VuZFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgcHVibGljcm91dGVzID0gW1xuICAge1xuICBwYXRoOiAnL2hvbWUnLFxuICBjb21wb25lbnQ6IEhvbWUgICAgXG59XG5cbl07XG5cbmV4cG9ydCBjb25zdCBwcml2YXRlUm91dGVzID0gW1xuXG5dO1xuXG5leHBvcnQgY29uc3QgcHJvdGVjdGVkUm91dGVzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgbGV0ICBoaWRlSGVhZCA9IHRydWU7XG4gIGxldCB1cmwgICAgICAgICAgICAgICAgICAgPSAgICcnO1xuICBsZXQgdXNlckRhdGEgICAgPSB7fTtcbiAgbGV0IGN1cnJlbnRBZGRyZXNzICAgID0ge307XG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICB1c2VyRGF0YSAgICAgICAgICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9Jyk7XG4gIFxuICB9XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpKSB7ICAgICAgXG4gICAgdXJsICAgICAgICAgICAgICAgICAgICAgPSAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xuICAgIGlmICh1cmxbMV0gPT0gJycgfHwgdXJsWzFdID09ICdsb2dpbid8fCB1cmxbMV0gPT0gJ3NpZ251cCcpIHtcbiAgICAgIGhpZGVIZWFkICAgICAgICAgPSAgIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAge1xuICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IFxuICAgICAgPGRpdj4gICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIDxOb3RpZmljYXRpb25zIC8+XG4gICAgIFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIHtwcm90ZWN0ZWRSb3V0ZXMubWFwKChyb3V0ZSkgPT4gKFxuICAgICAgICAgICAgPFByb3RlY3RlZFJvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gdXNlckRhdGE9e3VzZXJEYXRhfSBwcmV2UGF0aD17dXJsWzFdfS8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3ByaXZhdGVSb3V0ZXMubWFwKChyb3V0ZSkgPT4gKFxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBrZXk9e3JvdXRlLnBhdGh9IHBhdGg9e3JvdXRlLnBhdGh9IHJvdXRlPXtyb3V0ZX0gY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9IHVzZXJEYXRhPXt1c2VyRGF0YX0gIHByZXZQYXRoPXt1cmxbMV19Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7cHVibGljcm91dGVzLm1hcChyb3V0ZSA9PihcbiAgICAgICAgICAgICAgPFB1YmxpY1JvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gcHJldlBhdGg9e3VybFsxXX0vPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgICAge3JvdXRlcy5tYXAocm91dGUgPT4oXG4gICAgICAgICAgICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke3JvdXRlLnBhdGh9YH0gey4uLnJvdXRlfS8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgXG4gICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgIH1cbiAgICAgIDwvZGl2PiAgIFxuICApO1xufVxuXG5mdW5jdGlvbiBQdWJsaWNSb3V0ZSh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pIHtcbiAgbGV0IG9iaiA9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfTtcbiAgbGV0IHByZXZQYXRoICA9IHJlc3QucHJldlBhdGggfHwgJyc7XG4gICAgcmV0dXJuIChcbiAgICA8Um91dGUga2V5PXtgaW5kZXggJHtvYmoucGF0aH1gfSBwYXRoPXtvYmoucGF0aH0gXG4gICAgICAgIC8qIGNvbXBvbmVudD17b2JqLmNvbXBvbmVudH0gKi9cbiAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgICA8b2JqLmNvbXBvbmVudCB7Li4ucHJvcHN9IHByZXZQYXRoPXtwcmV2UGF0aH0gLz5cbiAgICAgICAgKX1cbiAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUHJpdmF0ZVJvdXRlKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkge1xuICBsZXQgb2JqID0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9O1xuICAvL2NvbnNvbGUubG9nKCdMb2NhbCBTdG9yYWdlIDogJywgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlRGF0YScpKSk7XG4gIGxldCBjdXJyZW50QWRkcmVzcyAgPSByZXN0LmN1cnJlbnRBZGRyZXNzIHx8IHt9O1xuICBsZXQgdXNlckRhdGEgID0gcmVzdC51c2VyRGF0YSB8fCB7fTtcbiAgbGV0IHByZXZQYXRoICA9IHJlc3QucHJldlBhdGggfHwgJyc7XG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICFfLmlzRW1wdHkodXNlckRhdGEpKSB7XG4gICAgY29uc29sZS5sb2coJ1JvdXRlIFBSaXZhdGUgOiAnLCByZXN0LnJvdXRlKTtcbiAgICByZXR1cm4gKFxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofSBcbiAgICAgICAgLyogY29tcG9uZW50PXtvYmouY29tcG9uZW50fSAqL1xuICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAgIDxvYmouY29tcG9uZW50IHsuLi5wcm9wc30gdXNlckRhdGE9e3VzZXJEYXRhfSBwcmV2UGF0aD17cHJldlBhdGh9IC8+XG4gICAgICAgICl9XG4gICAgLz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWRpcmVjdFxuICAgICAgICB0bz17e1xuICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIlxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gUHJvdGVjdGVkUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XG4gIGxldCBvYmogPSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH07XG4gIGxldCB1c2VyRGF0YSAgPSByZXN0LnVzZXJEYXRhIHx8IHt9O1xuICBsZXQgcHJldlBhdGggID0gcmVzdC5wcmV2UGF0aCB8fCAnJztcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eSh1c2VyRGF0YSkpIHtcbiAgICByZXR1cm4gKFxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofVxuICAgICAgLyogY29tcG9uZW50PXtvYmouY29tcG9uZW50fSAqL1xuICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgPG9iai5jb21wb25lbnQgey4uLnByb3BzfSB1c2VyRGF0YT17dXNlckRhdGF9IHByZXZQYXRoPXtwcmV2UGF0aH0vPlxuICAgICAgKX1cbiAgICAvPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlZGlyZWN0XG4gICAgICAgIHRvPXt7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL2xvZ2luXCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9hcHAnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiB7fTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHt9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEFwcCk7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BcHAnO1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcHAuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRvcEJhcn0+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30gdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfSB0bz1cIi9JbnZhbGlkTGlua1wiPkludmFsaWRMaW5rPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9IHRvPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJ9PldpbGxpYW0gV29vZGhlYWQgLSBNSVQgTGljZW5zZTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQXBwX19BcHBfX19WdHdCdCB7XFxuICBmb250LXNpemU6IDEuNWVtOyB9XFxuXFxuLkFwcF9fVG9wQmFyX19fM3l1OUYge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5BcHBfX0xpbmtfX18yNTRZciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5BcHBfX0xpbmtfX18yNTRZciArIC5BcHBfX0xpbmtfX18yNTRZciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7IH1cXG5cXG4uQXBwX19Gb290ZXJfX18xMWZmcSB7XFxuICBjb2xvcjogI0FBQUFBQTsgfVxcblxcbi5BcHBfX2FsaWduLWl0ZW1zLWNlbnRlcl9fX0JSMjBuIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCA1JTsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5BcHBfX2FsaWduLWl0ZW1zLWNlbnRlcl9fX0JSMjBuIGgyIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDA7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkFwcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0UsYUFBYSxFQUFFOztBQUVqQjtFQUNFLHFCQUFxQixFQUFFO0VBQ3ZCO0lBQ0UsZ0JBQWdCLEVBQUU7O0FBRXRCO0VBQ0UsY0FBYyxFQUFFOztBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYSxFQUFFOztBQUVqQjtFQUNFO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVSxFQUFFLEVBQUVcIixcImZpbGVcIjpcIkFwcC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BcHAge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbi5Ub3BCYXIge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5MaW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLkxpbmsgKyAuTGluayB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7IH1cXG5cXG4uRm9vdGVyIHtcXG4gIGNvbG9yOiAjQUFBQUFBOyB9XFxuXFxuLmFsaWduLWl0ZW1zLWNlbnRlciBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgNSU7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAuYWxpZ24taXRlbXMtY2VudGVyIGgyIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDA7IH0gfVxcblwiXX1dKTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiQXBwXCI6IFwiQXBwX19BcHBfX19WdHdCdFwiLFxuXHRcIlRvcEJhclwiOiBcIkFwcF9fVG9wQmFyX19fM3l1OUZcIixcblx0XCJMaW5rXCI6IFwiQXBwX19MaW5rX19fMjU0WXJcIixcblx0XCJGb290ZXJcIjogXCJBcHBfX0Zvb3Rlcl9fXzExZmZxXCIsXG5cdFwiYWxpZ24taXRlbXMtY2VudGVyXCI6IFwiQXBwX19hbGlnbi1pdGVtcy1jZW50ZXJfX19CUjIwblwiXG59OyIsImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbi8vY29uc29sZS5sb2coJ0Nvb2tpZSBDb25maWcgOiAnLCBjb25maWcuY29va2llKTtcblxuLy8gZXhwb3J0IGNvbnN0IGdldCA9IChuYW1lID0gJ2Zvb2RqZXRzX25ld19tZXJjaGFudCcpID0+e1xuLy8gXHRpZihjb25maWcuY29va2llLmhvc3RuYW1lID09PSAnaHR0cDovL2NvbnNvbGUuZGV2LmZvb2RqZXRzLmNvbScpIHtcbi8vIFx0XHRuYW1lID0gJ2Rldl8nK25hbWVcbi8vIFx0fVxuXG4vLyAgIFx0cmV0dXJuIENvb2tpZXMuZ2V0SlNPTihuYW1lKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBjb25zdCBzZXQgPSAoZGF0YSwgbmFtZSA9ICdmb29kamV0c19uZXdfbWVyY2hhbnQnKSA9Pntcbi8vIFx0aWYoY29uZmlnLmNvb2tpZS5ob3N0bmFtZSA9PT0gJ2h0dHA6Ly9jb25zb2xlLmRldi5mb29kamV0cy5jb20nKSB7XG4vLyBcdFx0bmFtZSA9ICdkZXZfJytuYW1lXG4vLyBcdH1cbi8vIFx0aWYoISFjb25maWcuY29va2llLmRvbWFpbilcbi8vIFx0XHRDb29raWVzLnNldChuYW1lLCBkYXRhLCB7ZG9tYWluOiBjb25maWcuY29va2llLmRvbWFpbn0pO1xuLy8gXHRlbHNlXG4vLyBcdFx0Q29va2llcy5zZXQobmFtZSwgZGF0YSk7XG4vLyB9O1xuXG4vLyBleHBvcnQgY29uc3QgcmVtb3ZlID0gKG5hbWUgPSAnZm9vZGpldHNfbmV3X21lcmNoYW50JykgPT57XG4vLyBcdGlmKGNvbmZpZy5jb29raWUuaG9zdG5hbWUgPT09ICdodHRwOi8vY29uc29sZS5kZXYuZm9vZGpldHMuY29tJykge1xuLy8gXHRcdG5hbWUgPSAnZGV2XycrbmFtZVxuLy8gXHR9XG5cbi8vIFx0aWYoISFjb25maWcuY29va2llLmRvbWFpbilcbi8vIFx0XHRDb29raWVzLnJlbW92ZShuYW1lLCB7ZG9tYWluOiBjb25maWcuY29va2llLmRvbWFpbn0pO1xuLy8gXHRlbHNlXG4vLyBcdFx0Q29va2llcy5yZW1vdmUobmFtZSk7XG4vLyB9O1xuXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKGRhdGEsIG5hbWUpID0+e1xuICBcdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldExpZmV0aW1lQ29va2llID0gKGRhdGEsIG5hbWUsZGF5KSA9Pntcblx0Q29va2llcy5zZXQobmFtZSwgZGF0YSwgeyBleHBpcmVzOiBkYXkgfSk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAobmFtZSkgPT57XG4gIFx0Q29va2llcy5yZW1vdmUobmFtZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKG5hbWUpID0+e1xuICBcdHJldHVybiBDb29raWVzLmdldEpTT04obmFtZSk7XG59OyIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9ub3QtZm91bmQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiB7fTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHt9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKE5vdEZvdW5kKTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL05vdEZvdW5kJztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTm90Rm91bmQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMHZoXCI+PGgyIGNsYXNzTmFtZT1cIm0tMCBibHVlLWRlZmF1bHRcIj5Sb3V0ZSBOb3QgRm91bmQ8L2gyPjwvZGl2PiAgICAgIFxuICAgICk7XG4gIH1cbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90Rm91bmQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL05vdEZvdW5kLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90Rm91bmQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTm90Rm91bmRfX05vdEZvdW5kX19fMnpjcEIge1xcbiAgY29sb3I6IGluaGVyaXQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJOb3RGb3VuZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYyxFQUFFXCIsXCJmaWxlXCI6XCJOb3RGb3VuZC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Ob3RGb3VuZCB7XFxuICBjb2xvcjogaW5oZXJpdDsgfVxcblwiXX1dKTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiTm90Rm91bmRcIjogXCJOb3RGb3VuZF9fTm90Rm91bmRfX18yemNwQlwiXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keXsgIG92ZXJmbG93LXg6IGhpZGRlbjsgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7fVxcbip7cGFkZGluZzogMDsgbWFyZ2luOiAwOyBvdXRsaW5lOiAwOyAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7fVxcbmJvZHl7Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA0MDA7IGxpbmUtaGVpZ2h0OiAxOHB4OyBjb2xvcjogIzMzMzMzMzt9XFxuXFxuaW1ne21heC13aWR0aDogMTAwJTt9XFxuZmlndXJle3BhZGRpbmc6IDA7IG1hcmdpbjogMDsgZGlzcGxheTogaW5saW5lLWJsb2NrO31cXG5he2NvbG9yOiAjMjA5REUyO31cXG5hOmhvdmVye3RleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6ICMyMDlERTI7fVxcbiBcXG5cXG4uY1RhYmxlIHtib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB3aWR0aDogMTAwJTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7fVxcbi5jVGFibGUgdGh7cG9zaXRpb246IHJlbGF0aXZlO31cXG4uY1RhYmxlIHRoIGl7cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTVweDsgdG9wOiAxNXB4OyBjdXJzb3I6IHBvaW50ZXI7fVxcbi5jVGFibGUgdGgsIC5jVGFibGUgdGQge3BhZGRpbmc6IDE1cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IGJvcmRlci1ib3R0b206IG5vbmU7IHBvc2l0aW9uOiByZWxhdGl2ZTt9XFxuLmNUYWJsZS5vbmVDb2wgdGgsIC5jVGFibGUub25lQ29sIHRkLCAuY1RhYmxlLm9uZUNvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDcyJTt9XFxuLmNUYWJsZS50d29Db2wgdGgsIC5jVGFibGUudHdvQ29sIHRkLCAuY1RhYmxlLnR3b0NvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDU0JTt9XFxuLmNUYWJsZS50aHJlZUNvbCB0aCwgLmNUYWJsZS50aHJlZUNvbCB0ZCwgLmNUYWJsZS50aHJlZUNvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDM2JTt9XFxuLmNUYWJsZS5mb3VyQ29sIHRoLCAuY1RhYmxlLmZvdXJDb2wgdGQsIC5jVGFibGUuZm91ckNvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDE4JTt9XFxuXFxuLmNUYWJsZSB0aDpmaXJzdC1jaGlsZCwgLmNUYWJsZSB0ZDpmaXJzdC1jaGlsZHsgd2lkdGg6IDI4JTt9XFxuLmNUYWJsZSB0aHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxcbi5jVGFibGUgdGggc3BhbntkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxMnB4O31cXG5cXG4uY2xvc2VTZWN7cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTVweDsgY29sb3I6ICNGQjYwNTY7IGN1cnNvcjogcG9pbnRlcjt9XFxuXFxuLmNUYWJsZSB0ZC5zdHtwYWRkaW5nOiAwOyBib3JkZXItdG9wOiBub25lOyBib3JkZXItYm90dG9tOiBub25lO30gXFxuLnN1YlRhYmxle3dpZHRoOiAxMDAlOyBkaXNwbGF5OiBub25lO31cXG4uc3RPcGVuIC5zdWJUYWJsZXsgZGlzcGxheTp0YWJsZTt9XFxuLnN1YlRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cXG4uc3ViVGFibGUgdGR7d2lkdGg6IDE4JTt9XFxuLnN1YlRhYmxlIHRkOmZpcnN0LWNoaWxkeyB3aWR0aDogMjglIWltcG9ydGFudDt9XFxuXFxuLnRhY3t0ZXh0LWFsaWduOiBjZW50ZXI7fVxcblxcblwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUnO1xuaW1wb3J0IHsgZG9fbG9naW4gfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2F1dGgnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICByZXR1cm4ge1xuICAgIGRhdGE6IHN0YXRlLnNpZ251cFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xuICAgIGRvX2xvZ2luOmRvX2xvZ2luLFxuICB9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEhvbWUpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2hvbWUnOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgaXNWYWxpZEVtYWlsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJmdW5jJztcblxuaW1wb3J0ICcuL2hvbWUuY3NzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZGVmYXVsdEVycm9ycyA9IHtcbiAgICAgIGVtYWlsOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmFxRGF0YTogW10sXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICB0eXBlUGFzczogJ3Bhc3N3b3JkJyxcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGZ1bmRpbmdfaGlzdG9yeTogXCJcIixcbiAgICAgICAgY29tcGFueV9pbmZvOiBcIlwiLFxuICAgICAgICBmZXRhdXJlczogXCJcIixcbiAgICAgICAgY3VzdG9tZXJfY2FzZV9zdHVkeTogXCJcIixcbiAgICAgICAgb3ZlcmFsbF9zY29vcjogXCJTY29yZVwiLFxuICAgICAgICBib3hfaGVhZGVyOiBcIkJveFwiXG5cbiAgICAgIH0sXG4gICAgICBjb2x1bURhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJveF9oZWFkZXI6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiQm94XCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJkYXRhXCJcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3ZlcmFsbF9zY29vcjoge1xuICAgICAgICAgICAgdGV4dDogXCJPdmVyYWxsIFNjb3JlXCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTY29yZVwiXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIHRleHQ6IFwiUHJvZHVjdCBEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQm94IGlzIGEgbW9kZXJuIGNvbnRlbnQgb2YgbWFuYWdlbWVudFwiLFxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmRpbmdfaGlzdG9yeToge1xuICAgICAgICAgICAgdGV4dDogXCJGdW5kaW5nIEhpc3RvcnlcIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRvdGFsIEZ1bmRpbmc6ICQxNTBtXCIsXG5cblxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBzdWJpdGVtczoge1xuICAgICAgICAgICAgICBGb3VuZGVkOiBbXCIyMDA1XCJdLFxuICAgICAgICAgICAgICBLZXlJbnZlc3RvcnM6IFtcIkRGRywgc2NhbGUsIHZlbnR1cmUgcGFydG5lcnNcIl0sXG4gICAgICAgICAgICAgIEZvdW5kZXJzOiBbXCJBcm9uZSBMZXZpZSwgRHlsb24gc21pdGhcIl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBhbnlfaW5mbzoge1xuICAgICAgICAgICAgdGV4dDogXCJDb21wYW55IEluZm9cIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkpvaG5zb25cIlxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZldGF1cmVzOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkZldGF1cmVzXCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHb29kXCJcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXN0b21lcl9jYXNlX3N0dWR5OiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkNvbXBhbnkgQ2FzZSBTdHVkeVwiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR29vZCBDbGllbnRcIlxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBoaWRlQ2xhc3M6IHRydWUsXG4gICAgfVxuXG5cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZSA9IHRoaXMub25DaGFuZ2VIYW5kbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZUNvbHVtID0gdGhpcy5kZWxldGVDb2x1bS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9vZ2xlQ2xhc3MgPSB0aGlzLnRvb2dsZUNsYXNzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVSb3cgPSB0aGlzLmRlbGV0ZVJvdy5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHsgfVxuXG4gIGRlbGV0ZVJvdyhyb3duYW1lKSB7XG4gICAgbGV0IHsgY29sdW1EYXRhLCBmb3JtRGF0YSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHN3YWwoe1xuICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50ICB0byAgZGVsZXRlICB0aGlzICBpdGVtP1wiLFxuXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICBkYW5nZXJNb2RlOiB0cnVlLFxuICAgIH0pXG4gICAgICAudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgICBpZiAod2lsbERlbGV0ZSkge1xuXG4gICAgICAgICAgY29sdW1EYXRhLm1hcCgoY2RhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjZGF0YSkubWFwKChvbmVLZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9uZUtleSA9PSByb3duYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNkYXRhW29uZUtleV1cbiAgICAgICAgICAgICAgICBkZWxldGUgZm9ybURhdGFbcm93bmFtZV07XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEscm93bmFtZSwgZm9ybURhdGFbcm93bmFtZV0sIGZvcm1EYXRhW1wiY29tcGFueV9pbmZvXCJdKTtcbiAgICAgICAgICAgICAgICAvLyAgZGVsZXRlIGZvcm1EYXRhW29uZUtleV1cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2x1bURhdGEsXG4gICAgICAgICAgICBmb3JtRGF0YVxuICAgICAgICAgIH0sICgpID0+IHtcblxuICAgICAgICAgICAgc3dhbChcIlBvb2YhIFlvdXIgaXRlbWhhcyBiZWVuIGRlbGV0ZWQhXCIsIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuICB9XG4gIG9uQ2hhbmdlSGFuZGxlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuZm9ybURhdGEsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvb2dsZUNsYXNzKCkge1xuICAgIGxldCB7IGhpZGVDbGFzcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBoaWRlQ2xhc3MgPSAhaGlkZUNsYXNzXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoaWRlQ2xhc3NcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlQ29sdW0oaWQpIHtcbiAgICBsZXQgeyBjb2x1bURhdGEgfSA9IHRoaXMuc3RhdGU7XG5cblxuICAgIHN3YWwoe1xuICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50ICB0byAgZGVsZXRlICB0aGlzICBpdGVtP1wiLFxuXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICBkYW5nZXJNb2RlOiB0cnVlLFxuICAgIH0pXG4gICAgICAudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgICBpZiAod2lsbERlbGV0ZSkge1xuXG4gICAgICAgICAgY29sdW1EYXRhLm1hcCgoY2RhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjZGF0YSkubWFwKChvbmVLZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgY2RhdGFbb25lS2V5XS5kYXRhID0gY2RhdGFbb25lS2V5XS5kYXRhLmZpbHRlcigoZGF0YSwgaW5kZXgpID0+IGlkICE9IGluZGV4KVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sdW1EYXRhXG4gICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgc3dhbChcIlBvb2YhIFlvdXIgaXRlbWhhcyBiZWVuIGRlbGV0ZWQhXCIsIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgfVxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgbGV0IHsgZm9ybURhdGEsIGNvbHVtRGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG5cbiAgICBsZXQgeyBvdmVyYWxsX3Njb29yLCBib3hfaGVhZGVyLCBwcm9kdWN0X2Rlc2NyaXB0aW9uLCBmdW5kaW5nX2hpc3RvcnksIGZldGF1cmVzLCBjdXN0b21lcl9jYXNlX3N0dWR5LCBjb21wYW55X2luZm8gfSA9IGZvcm1EYXRhO1xuXG5cblxuXG4gICAgY29sdW1EYXRhLm1hcCgoY2RhdGEsIGluZGV4KSA9PiB7XG4gICAgXG4gICAgICBpZiAoICEhKGNkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24pICYmIGNkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHN3YWwoe1xuICAgICAgICAgIHRpdGxlOiBcIllvdSBjYW50IGFkZCBtb3JlICB0aGFuICAzICBpdGVtc1wiLFxuXG4gICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICAgICAgZnVuZGluZ19oaXN0b3J5OiBcIlwiLFxuICAgICAgICAgICAgY29tcGFueV9pbmZvOiBcIlwiLFxuICAgICAgICAgICAgZmV0YXVyZXM6IFwiXCIsXG4gICAgICAgICAgICBjdXN0b21lcl9jYXNlX3N0dWR5OiBcIlwiLFxuICAgICAgICAgICAgb3ZlcmFsbF9zY29vcjogXCJTY29yZVwiLFxuICAgICAgICAgICAgYm94X2hlYWRlcjogXCJCb3hcIlxuXG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgJChcIiNuZXdWZW5kb3JcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGNkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogcHJvZHVjdF9kZXNjcmlwdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2RhdGEuZnVuZGluZ19oaXN0b3J5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNkYXRhLmZ1bmRpbmdfaGlzdG9yeS5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogZnVuZGluZ19oaXN0b3J5IH0pO1xuICAgICAgICAgIE9iamVjdC5rZXlzKGNkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtcykubWFwKChvbmVLZXksIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChvbmVLZXkgPT0gXCJGb3VuZGVkXCIpIHtcbiAgICAgICAgICAgICAgY2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zW29uZUtleV0ucHVzaChcIjIwMDVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbmVLZXkgPT0gXCJLZXlJbnZlc3RvcnNcIikge1xuICAgICAgICAgICAgICBjZGF0YS5mdW5kaW5nX2hpc3Rvcnkuc3ViaXRlbXNbb25lS2V5XS5wdXNoKFwiREZHLCBzY2FsZSwgdmVudHVyZSBwYXJ0bmVyc1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uZUtleSA9PSBcIkZvdW5kZXJzXCIpIHtcbiAgICAgICAgICAgICAgY2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zW29uZUtleV0ucHVzaChcIkFyb25lIExldmllLCBEeWxvbiBzbWl0aFwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjZGF0YS5mZXRhdXJlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjZGF0YS5mZXRhdXJlcy5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogZmV0YXVyZXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNkYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2RhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeS5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogY3VzdG9tZXJfY2FzZV9zdHVkeSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2RhdGEuY29tcGFueV9pbmZvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNkYXRhLmNvbXBhbnlfaW5mby5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogY29tcGFueV9pbmZvIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2RhdGEub3ZlcmFsbF9zY29vci5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogb3ZlcmFsbF9zY29vciB9KTtcbiAgICAgICAgY2RhdGEuYm94X2hlYWRlci5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogYm94X2hlYWRlciB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY29sdW1EYXRhLFxuICAgICAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICAgICAgZnVuZGluZ19oaXN0b3J5OiBcIlwiLFxuICAgICAgICAgICAgY29tcGFueV9pbmZvOiBcIlwiLFxuICAgICAgICAgICAgZmV0YXVyZXM6IFwiXCIsXG4gICAgICAgICAgICBjdXN0b21lcl9jYXNlX3N0dWR5OiBcIlwiLFxuICAgICAgICAgICAgb3ZlcmFsbF9zY29vcjogXCJTY29yZVwiLFxuICAgICAgICAgICAgYm94X2hlYWRlcjogXCJCb3hcIlxuXG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgJChcIiNuZXdWZW5kb3JcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSlcblxuXG5cbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICghIXByb3BzLmRhdGEgJiYgISFwcm9wcy5kYXRhLmlzU3VjY2Vzcykge1xuXG4gICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kYXNoYm9hcmRcIjtcblxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBsZXQgZm9ybURhdGEgPSB0aGlzLnN0YXRlLmZvcm1EYXRhIHx8IHt9O1xuICAgIGxldCBlcnJvcnMgPSB7IC4uLnRoaXMuZGVmYXVsdEVycm9ycyB9O1xuICAgIGxldCBpc0Vycm9yID0gZmFsc2U7XG4gICAgaWYgKCEhIWZvcm1EYXRhLmVtYWlsKSB7XG4gICAgICBlcnJvcnMuZW1haWwgPSB0cnVlO1xuICAgICAgaXNFcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICghISFmb3JtRGF0YS5wYXNzd29yZCkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIGlzRXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoISFmb3JtRGF0YS5wYXNzd29yZCAmJiBmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGggPCA0KSB7XG4gICAgICBlcnJvcnMucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgaXNFcnJvciA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7IGlzRXJyb3I6IGlzRXJyb3IsIGVycm9yczogZXJyb3JzIH07XG4gIH1cblxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY29sdW1EYXRhLCBmb3JtRGF0YSwgaGlkZUNsYXNzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICBsZXQgY29sU3BhbiA9IFwiXCI7XG4gICAgbGV0IGNvbFNwYW5UZCA9IDI7XG4gICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICBjb2xTcGFuVGQgPSAoISFkYXRhLmZ1bmRpbmdfaGlzdG9yeSk/IGRhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zLkZvdW5kZWQubGVuZ3RoICsgMToyO1xuXG4gICAgICBpZiAoISFkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24gJiYgZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEubGVuZ3RoID09IDEpIHtcbiAgICAgICAgY29sU3BhbiA9IFwidHdvQ29sXCJcbiAgICAgIH1cbiAgICAgIGlmICghIWRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbiAmJiBkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGggPT0gMikge1xuICAgICAgICBjb2xTcGFuID0gXCJ0aHJlZUNvbFwiXG4gICAgICB9XG4gICAgICBpZiAoISFkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24gJiYgZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEubGVuZ3RoID09IDMpIHtcbiAgICAgICAgY29sU3BhbiA9IFwiZm91ckNvbFwiXG4gICAgICB9XG4gICAgICAvLyBpZihkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGg9PTQpe1xuICAgICAgLy8gICBjb2xTcGFuPSBcImZvdXJDb2xcIlxuICAgICAgLy8gfVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5wXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2BjVGFibGUgJHtjb2xTcGFufWB9PlxuICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNuZXdWZW5kb3JcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hZGQtbmV3LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+QWRkIE5ldyBWZW5kb3I8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvdGg+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5ib3hfaGVhZGVyKSA/IDw+XG5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuYm94X2hlYWRlci5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGgga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYm94LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb3ggPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYm94X2hlYWRlci5kYXRhLmxlbmd0aCA+IDEgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlQ29sdW0oa2V5KX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLm92ZXJhbGxfc2Nvb3IpID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLm92ZXJhbGxfc2Nvb3IudGV4dH0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEub3ZlcmFsbF9zY29vci5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9IGNsYXNzTmFtZT1cInRhY1wiPjxpbWcgc3JjPVwiaW1nL3Njb3JlLWIucG5nXCIgLz48L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24pID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24udGV4dH0gIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLmZ1bmRpbmdfaGlzdG9yeSkgPyA8PlxuICAgICAgICAgICAgICAgICAgICA8dGQgPntkYXRhLmZ1bmRpbmdfaGlzdG9yeS50ZXh0fTxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlUm93KFwiZnVuZGluZ19oaXN0b3J5XCIpfSBjbGFzc05hbWU9XCJjbG9zZVNlY1wiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj4gPGkgb25DbGljaz17KCkgPT4gdGhpcy50b29nbGVDbGFzcygpfSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZ1bmRpbmdfaGlzdG9yeS5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9PntzdWJkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXtjb2xTcGFuVGR9IGNsYXNzTmFtZT17aGlkZUNsYXNzID8gXCJzdFwiIDogXCJzdCBzdE9wZW5cIn0+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdWJUYWJsZVwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiggKGRhdGEuZnVuZGluZ19oaXN0b3J5PT11bmRlZmluZWQpKSByZXR1cm4gIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtcykubWFwKChvbmVLZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntvbmVLZXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zW29uZUtleV0ubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZD57aXRlbX08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuY29tcGFueV9pbmZvKSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5jb21wYW55X2luZm8udGV4dH0gPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVSb3coXCJjb21wYW55X2luZm9cIil9IGNsYXNzTmFtZT1cImNsb3NlU2VjXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmNvbXBhbnlfaW5mby5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9PntzdWJkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5mZXRhdXJlcykgPyA8PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmV0YXVyZXMudGV4dH0gPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVSb3coXCJmZXRhdXJlc1wiKX0gY2xhc3NOYW1lPVwiY2xvc2VTZWNcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZldGF1cmVzLmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkpID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkudGV4dH0gPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVSb3coXCJjdXN0b21lcl9jYXNlX3N0dWR5XCIpfSBjbGFzc05hbWU9XCJjbG9zZVNlY1wiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5LmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG5cblxuICAgICAgICB7LyogIE1vZGFsICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cIm5ld1ZlbmRvclwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkFkZCBOZXcgVmVuZG9yPC9oNT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgeyhmb3JtRGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uICE9IHVuZGVmaW5lZCkgPyA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9kdWN0X2Rlc2NyaXB0aW9uXCI+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17Zm9ybURhdGEucHJvZHVjdF9kZXNjcmlwdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBuYW1lPVwicHJvZHVjdF9kZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIn1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAoZm9ybURhdGEuZnVuZGluZ19oaXN0b3J5ICE9IHVuZGVmaW5lZCkgPyA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZ1bmRpbmdfaGlzdG9yeVwiPkZ1bmRpbmcgSGlzdG9yeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5mdW5kaW5nX2hpc3Rvcnl9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZ1bmRpbmdfaGlzdG9yeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChmb3JtRGF0YS5jb21wYW55X2luZm8gIT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb21wYW55X2luZm9cIj5Db21wYW55IEluZm88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5jb21wYW55X2luZm99IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImNvbXBhbnlfaW5mb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgKGZvcm1EYXRhLmZldGF1cmVzICE9IHVuZGVmaW5lZCkgPyA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZldGF1cmVzXCI+RmVhdHVyZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEuZmV0YXVyZXN9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZldGF1cmVzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgKGZvcm1EYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkgIT0gdW5kZWZpbmVkKSA/IDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3VzdG9tZXJfY2FzZV9zdHVkeVwiPkN1c3RvbWVyIGNhc2Ugc3R1ZHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY3VzdG9tZXJfY2FzZV9zdHVkeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59IiwiaW1wb3J0IEFQSSBmcm9tICcuLi9BcGkvQXBpJztcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L2Jyb3dzZXInO1xuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uL1NlbnRyeS9zZW50cnlcIjtcblNlbnRyeUluaXRpYWxpemUoKTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRGbG9hdFR3b0RlY2ltYWwgPSBmdW5jdGlvbihudW0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0pLnRvRml4ZWQoMik7XG59XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0VHdvRGVjaW1hbFJvdW5kID0gZnVuY3Rpb24obnVtKSB7XG4gICAgcmV0dXJuICsoTWF0aC5yb3VuZChudW0gKyBcImUrMlwiKSArIFwiZS0yXCIpO1xufVxuXG5leHBvcnQgY29uc3QgbG9nRXJyb3JUb1NlcnZlciA9IGFzeW5jIGZ1bmN0aW9uKHBhcmFtcywgZXJyb3IpIHtcbiAgICBcbiAgICBpZihwYXJhbXMudHlwZSA9PT0gJ2NhdGNoJylcbiAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBjb25zdCBpbnZhbGlkVXJsICAgID0nL2ludmFsaWQtbGluayc7XG4gICAgbGV0IGFkZGl0aW9uYWxJbmZvICAgICAgPSAgIHt9O1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhXG4gICAgICAgICAqIHN0YXR1cyBjb2RlIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcbiAgICAgICAgICovXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmRhdGEgICAgID0gICBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5zdGF0dXMgICA9ICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5oZWFkZXJzICA9ICAgZXJyb3IucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRGF0YSA6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdTdGF0dXMgOiAnLCBlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdIZWFkZXJzIDogJywgZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWQsIGBlcnJvci5yZXF1ZXN0YFxuICAgICAgICAgKiBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2VcbiAgICAgICAgICogb2YgaHR0cC5DbGllbnRSZXF1ZXN0IGluIE5vZGUuanNcbiAgICAgICAgICovXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1JlcXVlc3QgOiAnLCBlcnJvci5yZXF1ZXN0KTtcbiAgICAgICAgYWRkaXRpb25hbEluZm8ucmVxdWVzdCAgICAgPSAgIGVycm9yLnJlcXVlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgYW5kIHRyaWdnZXJlZCBhbiBFcnJvclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdFcnJvciA6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5tZXNzYWdlICAgICA9ICAgZXJyb3IubWVzc2FnZTtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygnQ29uZmlnIDogJywgZXJyb3IuY29uZmlnKTtcbiAgICBpZighIWVycm9yLmNvbmZpZylcbiAgICAgICAgYWRkaXRpb25hbEluZm8uY29uZmlnICAgICA9ICAgZXJyb3IuY29uZmlnO1xuICAgIGNvbnN0IHJlcyAgICAgICAgICAgPSAgIGF3YWl0IEFQSS5wb3N0KCcvYXV0aC9jYXRjaC1pbnZhbGlkLWxpbmsnLCB7XG4gICAgICAgIFwicGFyYW1zXCIgICAgOiAgIHsuLi5wYXJhbXMsIGFkZGl0aW9uYWxJbmZvOiBKU09OLnN0cmluZ2lmeShhZGRpdGlvbmFsSW5mbyl9XG4gICAgfSlcbiAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVzLmRhdGEuZXJyb3IpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5lcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSAgID0+ICB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGludmFsaWRVcmxcbiAgICAgICAgfSwzMDAwKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgYWRkcmVzc0Zvcm1hdGVyID0gKG9iaikgPT4ge1xuICAgIHRyeXtcbiAgICAgIGxldCByZWdleCA9IC8oXFxkKykgKC4rPyksICguKz8pLCAoLis/KSAoWzAtOV17NX0pLztcbiAgXG4gICAgICBsZXQgYWRkcmVzcyA9IG9iai5tYXRjaChyZWdleCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGFkZHJlc3MpO1xuICAgICAgaWYoYWRkcmVzc1s0XS5pbmRleE9mKCcsJykgPiAtMSAmJiBhZGRyZXNzWzNdLmluZGV4T2YoJyAnKSA+IC0xKXtcbiAgICAgICAgbGV0IGZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzWzNdKycsICcrIGFkZHJlc3NbNF0gKyAnICcrIGFkZHJlc3NbYWRkcmVzcy5sZW5ndGggLTFdO1xuICAgICAgICBsZXQgbW9kQWRkcmVzcyA9IGZvcm1hdHRlZEFkZHJlc3MrJywgVVNBJztcbiAgICAgICAgaWYoLyhcXGQrKSAoLis/KSwgKC4rPyksICguKz8pIChbMC05XXs1fSkvZy50ZXN0KG1vZEFkZHJlc3MpKXtcbiAgICAgICAgICBsZXQgX2FkZHJlc3MgPSBtb2RBZGRyZXNzLm1hdGNoKHJlZ2V4KTtcbiAgXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkQWRyczogdHJ1ZSwgXG4gICAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiBmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgICAgYWRkcmVzczogbW9kQWRkcmVzcyxcbiAgICAgICAgICAgIG51bWJlcjogX2FkZHJlc3NbMF0sXG4gICAgICAgICAgICBzdHJlZXQ6IF9hZGRyZXNzWzFdLFxuICAgICAgICAgICAgY2l0eTogX2FkZHJlc3NbMl0sXG4gICAgICAgICAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgICAgICBzdGF0ZV9jb2RlOiBfYWRkcmVzc1s0XSxcbiAgICAgICAgICAgIHppcGNvZGU6IF9hZGRyZXNzW19hZGRyZXNzLmxlbmd0aCAtMV1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkQWRyczogZmFsc2UgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbMV0gKyAnICcgKyBhZGRyZXNzWzJdICsgJywgJysgYWRkcmVzc1szXSArICcsICcgKyBhZGRyZXNzWzRdICsgJyAnICsgYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsaWRBZHJzOiB0cnVlLCBcbiAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiBmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgIGFkZHJlc3M6IG9iaixcbiAgICAgICAgICBudW1iZXI6IGFkZHJlc3NbMV0sXG4gICAgICAgICAgc3RyZWV0OiBhZGRyZXNzWzJdLFxuICAgICAgICAgIGNpdHk6IGFkZHJlc3NbM10sXG4gICAgICAgICAgY291bnRyeTogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgICAgICAgIHN0YXRlX2NvZGU6IGFkZHJlc3NbNF0sXG4gICAgICAgICAgemlwY29kZTogYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZEFkcnM6IGZhbHNlIFxuICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW1haWwgPShlbWFpbCkgPT57XG4gIGNvbnN0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KFN0cmluZyhlbWFpbCkpO1xufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7Z2V0Q29va2llLCBzZXRMaWZldGltZUNvb2tpZX0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cblxuY29uc3QgQVBJX1VSTCAgICAgICAgICAgPSAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XG5cbmNvbnN0IEFQSSAgICAgICAgICAgICAgID0gICBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IEFQSV9VUkxcbn0pXG5BUEkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xubGV0IGF1dGggICAgICAgICAgICAgID0gICAnJztcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgbGV0IHVzZXJEYXRhICAgICAgICAgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSB8fCAne30nKTtcbiAgaWYoIV8uaXNFbXB0eSh1c2VyRGF0YSkpe1xuICAgIGF1dGggICAgICAgICAgICAgID0gICAgJ1Rva2VuICcgKyB1c2VyRGF0YS5rZXk7XG4gIH0gZWxzZXtcbiAgICBhdXRoICAgPSAgXCJcIlxuICB9XG4gXG4gIGNvbnNvbGUubG9nKGF1dGgpO1xuICBBUEkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGF1dGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG4vL3Byb2Nlc3MuZW52Lk5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JzsgLy8gc3RhZ2luZyB8IGRldmVsb3BtZW50IHwgcHJvZHVjdGlvblxuLy9wcm9jZXNzLmVudi5QT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwO1xuLy9jb25zdCBlbnYgICAgID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WKT9wcm9jZXNzLmVudi5OT0RFX0VOVjonZGV2ZWxvcG1lbnQnO1xuLy9jb25zdCBlbnYgICAgICAgPSAnc3RhZ2luZyc7XG5cbmxldCBlbnYgICA9ICcnO1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgID09PSAncHJvZHVjdGlvbicpXG4gIGVudiAgPSAncHJvZHVjdGlvbic7XG5lbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JylcbiAgZW52ICA9ICdzdGFnaW5nJztcbmVsc2VcbiAgZW52ICA9ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSB7XG4gIC8vZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnLFxuICBlbnY6ZW52LFxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODFcbn07XG4vL2NvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WLCBfLmV4dGVuZChjb25maWcsIHJlcXVpcmUoJy4vJyArIGVudiArICcuanMnKS5kZWZhdWx0IHx8IHt9KSlcbmV4cG9ydCBkZWZhdWx0IF8uZXh0ZW5kKGNvbmZpZywgcmVxdWlyZSgnLi8nICsgZW52ICsgJy5qcycpLmRlZmF1bHQgfHwge30pOyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc1wiOiA3MTksXG5cdFwiLi9pbmRleC5qc1wiOiA3MTVcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA3MTg7IiwiXG4gY29uc3QgY29uZmlnICAgID0gICB7XG4gICAgLy8gZm9yIGRldiAgICBcbiAgICBmb29kamV0c1VybCAgICAgICAgICAgICA6ICAgJycsXG4gICAgYXBpX2VuZCAgICAgICAgICAgICAgICAgOiAgICcvYXBpLycsXG4gICAgR1RNX2NvZGUgICAgICAgICAgICAgICAgOiAgICdHVE0tVEhOR1BINicsXG4gICAgR1NUTV9jb2RlICAgICAgICAgICAgICAgOiAgICdVQS02NTU1NDMwMS0zJyxcbiAgICBwYXlwYWwgICAgICAgICAgICAgICAgICA6ICAge1xuICAgICAgICBtb2RlICAgICAgICAgICAgICAgIDogICAnc2FuZGJveCdcbiAgICB9IFxufVxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L2Jyb3dzZXInO1xuXG5cblxuICBleHBvcnQgY29uc3QgU2VudHJ5SW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBTZW50cnkuaW5pdCh7XG4gICAgICAgIGRzbjogY29uZmlnLnNlbnRyeV9kc25cbiAgICAgIH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0IHsgZG9fbG9naW4gfSBmcm9tICcuL2F1dGgnOyIsImltcG9ydCBUWVBFIGZyb20gJy4uLy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi8uLi9BcGkvQXBpJztcbmltcG9ydCB7IGVycm9yIGFzIG5vdGlmeUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9ub3RpZnknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uLy4uLy4uL1NlbnRyeS9zZW50cnlcIlxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5TZW50cnlJbml0aWFsaXplKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb19sb2dpbihkYXRhKSB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgICAgICAgICAgICAgPT4gIHtcbiAgICAgICAgbGV0ICBzZW5kRGF0YSAgPSAge3VzZXJuYW1lOmRhdGEuZW1haWwsIHBhc3N3b3JkOmRhdGEucGFzc3dvcmR9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzICAgICAgICAgICAgICAgICAgID0gICBhd2FpdCBBUEkucG9zdCgncmVzdC1hdXRoL2xvZ2luLycsIHNlbmREYXRhKVxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IocmVzLmRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOX0VSUk9SIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJEYXRhICAgID0gICByZXMuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fU1VDQ0VTUywgZGF0YTogIHJlcy5kYXRhfSk7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5vdGlmeUVycm9yKCdJbnZhbGlkIHJlcXVlc3QgKDQwMSknKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fRVJST1IgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAYXV0aFR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFNJR05VUDogbnVsbCxcbiAgU0lHTlVQX1NVQ0NFU1M6IG51bGwsXG4gIFNJR05VUF9FUlJPUjogbnVsbCxcbiAgU0lHTklOOiBudWxsLFxuICBTSUdOSU5fU1VDQ0VTUzogbnVsbCxcbiAgU0lHTklOX0VSUk9SOiBudWxsLFxuICBBRERfREVMX0FERFI6IG51bGwsXG4gIEFERF9ERUxfQUREUl9TVUNDRVNTOiBudWxsLFxuICBBRERfREVMX0FERFJfRVJST1I6IG51bGwsXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHJlZHVjZSh0eXBlcywgKHJlc3VsdCwgdmFsdWUsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gYCR7cHJlZml4fS8ke2tleX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuIiwiaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAncmVhY3Qtbm90aWZ5LXRvYXN0JztcblxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3MgPSAobWVzc2FnZSkgPT4ge1xuICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnIzAwODAwMCcsIHRleHQ6IFwiI0ZGRkZGRlwiLCBcInotaW5kZXhcIjpcIjk5OTk5XCIgfTtcbiAgICBub3RpZnkuc2hvdyhtZXNzYWdlLCBcImN1c3RvbVwiLCA1MDAwLCBteUNvbG9yKTsgICAgXG59XG4vLyBleHBvcnQgY29uc3QgZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuLy8gICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnI0ZCNjA1NicsIHRleHQ6IFwiI0ZGRkZGRlwiIH07XG4vLyAgICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7XG4vLyB9XG5leHBvcnQgY29uc3QgZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnI0ZCNjA1NicsIHRleHQ6IFwiI0ZGRkZGRlwiIH07XG4gICAgbGV0IGggPVwieFwiXG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7XG59XG5leHBvcnQgY29uc3Qgd2FybmluZyA9IChtZXNzYWdlKSA9PiB7XG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJ3YXJuaW5nXCIsIDUwMDApO1xufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICAgIGxldCBteUNvbG9yID0geyBiYWNrZ3JvdW5kOiAnI2ZmMDAwMCcsIHRleHQ6IFwiI0ZGRkZGRlwiIH07XG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNjAwMDAsIG15Q29sb3IpO1xufVxuXG5leHBvcnQgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICBub3RpZnkuaGlkZSgpO1xufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcic7XG5pbXBvcnQgcmVkdXhTdGF0ZSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycyc7XG5cbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSBjcmVhdGVMb2dnZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVkdXhTdG9yZSh7IHByZWxvYWRlZFN0YXRlLCBzZXJ2ZXIgfSA9IHt9KSB7XG4gIGxldCBlbmhhbmNlcjtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc2VydmVyKSB7XG4gICAgZW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlKTtcbiAgfSBlbHNlIHtcbiAgICBlbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHV4U3RhdGUsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcik7XG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cblxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgc2lnbnVwIGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuXG5cblxuY29uc3QgcmVkdXhTdGF0ZSA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgSG9tZSxcbiAgICBoZWFkZXIsXG4gICAgc2lnbnVwLFxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhTdGF0ZTsiLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVFlQRS5SRVFfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSwgSGVhZGVyZGF0YToge30gfTtcbiAgICBjYXNlIFRZUEUuUkVTX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEhlYWRlcmRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgSGVhZGVyZGF0YToge319O1xuXG4gICAgICBjYXNlIFRZUEUuUkVRX0FERFJFU1NfREFUQTpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlLCBBZHJlc3NkYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIFRZUEUuUkVTX0FERFJFU1NfREFUQTpcbiAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEFkcmVzc2RhdGE6IGFjdGlvbi5kYXRhfTtcblxuICAgICAgY2FzZSBUWVBFLkZBSUxfQUREUkVTU19EQVRBOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBBZHJlc3NkYXRhOiB7fX07XG4gICBcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNvbnN0IHByZWZpeCA9ICdAQGhlYWRlclR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFJFUV9EQVRBOiBudWxsLFxuICBSRVNfREFUQTogbnVsbCxcbiAgRkFJTF9EQVRBOiBudWxsLFxuICBSRVFfQUREUkVTU19EQVRBOiBudWxsLFxuICBSRVNfQUREUkVTU19EQVRBOiBudWxsLFxuICBGQUlMX0FERFJFU1NfREFUQTogbnVsbCxcblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmVmaXhlcih0eXBlcywgcHJlZml4KTsiLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9hdXRoJztcbmxldCB1c2VyRGF0YSAgICA9IHt9O1xuLy9pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gIHVzZXJEYXRhICAgICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9JykgOiB7fTtcbi8vfVxuY29uc29sZS5sb2codXNlckRhdGEpO1xubGV0IGluaXRpYWxTdGF0ZSAgICA9ICAge1xuICB1c2VyRGF0YTogey4uLnVzZXJEYXRhfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUWVBFLlNJR05VUDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogdHJ1ZSwgaXNTdWNjZXNzOiBmYWxzZX07XG4gICAgY2FzZSBUWVBFLlNJR05VUF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOmZhbHNlLCBpc1N1Y2Nlc3M6IHRydWUsIHVzZXJEYXRhOiBhY3Rpb24uZGF0YX07XG4gICAgY2FzZSBUWVBFLlNJR05VUF9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogZmFsc2UsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU46XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IHRydWUsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzpmYWxzZSwgaXNTdWNjZXNzOiB0cnVlLCB1c2VyRGF0YTogYWN0aW9uLmRhdGF9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU5fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IGZhbHNlLCBpc1N1Y2Nlc3M6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0FkZHJlc3NFcnJvcjogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5BRERfREVMX0FERFJfRVJST1I6XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IHRydWV9OyBcbiAgIFxuICAgIGRlZmF1bHQ6IHJldHVybiB7Li4uc3RhdGUsIC4uLmluaXRpYWxTdGF0ZX07XG4gIH1cbn0iLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9ob21lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRZUEUuUkVRX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIEhvbWVkYXRhOiB7fSB9O1xuICAgIGNhc2UgVFlQRS5SRVNfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzpmYWxzZSwgSG9tZWRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgSG9tZWRhdGE6IHt9fTtcbiAgIFxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAaG9tZVR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFJFUV9EQVRBOiBudWxsLFxuICBSRVNfREFUQTogbnVsbCxcbiAgRkFJTF9EQVRBOiBudWxsLFxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyJdLCJzb3VyY2VSb290IjoiIn0=