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
      if (!!props.data && !!props.data.isSuccess) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzPzE0MWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbm90LWZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ub3QtZm91bmQvTm90Rm91bmQuc2Nzcz84YzI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcz8xZGZkIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2hlbHBlcmZ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwaS9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIHN5bmMgXlxcLlxcLy4qXFwuanMkIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlbnRyeS9zZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmNzcz9lYjRkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL25vdGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NyZWF0ZVJlZHV4U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJwcmVsb2FkZWRTdGF0ZSIsIndpbmRvdyIsIl9fUFJFTE9BREVEX1NUQVRFX18iLCJzdG9yZSIsImNyZWF0ZVJlZHV4U3RvcmUiLCJoeWRyYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlNlbnRyeUluaXRpYWxpemUiLCJyb3V0ZXMiLCJwYXRoIiwiZXhhY3QiLCJjb21wb25lbnQiLCJIb21lIiwiTm90Rm91bmQiLCJwdWJsaWNyb3V0ZXMiLCJwcml2YXRlUm91dGVzIiwicHJvdGVjdGVkUm91dGVzIiwiUm91dGVyIiwiaGlkZUhlYWQiLCJ1cmwiLCJ1c2VyRGF0YSIsImN1cnJlbnRBZGRyZXNzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsIm1hcCIsInJvdXRlIiwiUHVibGljUm91dGUiLCJDb21wb25lbnQiLCJyZXN0Iiwib2JqIiwicHJldlBhdGgiLCJwcm9wcyIsIlByaXZhdGVSb3V0ZSIsIl8iLCJpc0VtcHR5IiwiY29uc29sZSIsImxvZyIsIlByb3RlY3RlZFJvdXRlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsIkFwcCIsInN0eWxlcyIsIlRvcEJhciIsIkxpbmsiLCJjaGlsZHJlbiIsIkZvb3RlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic2V0Q29va2llIiwiZGF0YSIsIm5hbWUiLCJDb29raWVzIiwic2V0Iiwic2V0TGlmZXRpbWVDb29raWUiLCJkYXkiLCJleHBpcmVzIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0SlNPTiIsInNpZ251cCIsImRvX2xvZ2luIiwiaG9tZSIsImRlZmF1bHRFcnJvcnMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmFxRGF0YSIsImlzTG9hZGluZyIsIm1vZGFsIiwidHlwZVBhc3MiLCJmb3JtRGF0YSIsInByb2R1Y3RfZGVzY3JpcHRpb24iLCJmdW5kaW5nX2hpc3RvcnkiLCJjb21wYW55X2luZm8iLCJmZXRhdXJlcyIsImN1c3RvbWVyX2Nhc2Vfc3R1ZHkiLCJvdmVyYWxsX3Njb29yIiwiYm94X2hlYWRlciIsImNvbHVtRGF0YSIsInRleHQiLCJkZXNjcmlwdGlvbiIsInN1Yml0ZW1zIiwiRm91bmRlZCIsIktleUludmVzdG9ycyIsIkZvdW5kZXJzIiwiaGlkZUNsYXNzIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsIm9uQ2hhbmdlSGFuZGxlIiwiZGVsZXRlQ29sdW0iLCJ0b29nbGVDbGFzcyIsImRlbGV0ZVJvdyIsInJvd25hbWUiLCJzd2FsIiwidGl0bGUiLCJpY29uIiwiYnV0dG9ucyIsImRhbmdlck1vZGUiLCJ0aGVuIiwid2lsbERlbGV0ZSIsImNkYXRhIiwiaW5kZXgiLCJPYmplY3QiLCJrZXlzIiwib25lS2V5IiwiaSIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaWQiLCJmaWx0ZXIiLCJsZW5ndGgiLCIkIiwidW5kZWZpbmVkIiwicHVzaCIsImlzU3VjY2VzcyIsImVycm9ycyIsImlzRXJyb3IiLCJjb2xTcGFuIiwiY29sU3BhblRkIiwia2V5Iiwic3ViZGF0YSIsIml0ZW0iLCJjb252ZXJ0RmxvYXRUd29EZWNpbWFsIiwibnVtIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjb252ZXJ0VHdvRGVjaW1hbFJvdW5kIiwiTWF0aCIsInJvdW5kIiwibG9nRXJyb3JUb1NlcnZlciIsInBhcmFtcyIsImVycm9yIiwidHlwZSIsIlNlbnRyeSIsImludmFsaWRVcmwiLCJhZGRpdGlvbmFsSW5mbyIsInJlc3BvbnNlIiwic3RhdHVzIiwiaGVhZGVycyIsInJlcXVlc3QiLCJtZXNzYWdlIiwiY29uZmlnIiwiQVBJIiwicG9zdCIsInN0cmluZ2lmeSIsInJlcyIsInNldFRpbWVvdXQiLCJocmVmIiwiYWRkcmVzc0Zvcm1hdGVyIiwicmVnZXgiLCJhZGRyZXNzIiwibWF0Y2giLCJpbmRleE9mIiwiZm9ybWF0dGVkQWRkcmVzcyIsIm1vZEFkZHJlc3MiLCJ0ZXN0IiwiX2FkZHJlc3MiLCJ2YWxpZEFkcnMiLCJudW1iZXIiLCJzdHJlZXQiLCJjaXR5IiwiY291bnRyeSIsInN0YXRlX2NvZGUiLCJ6aXBjb2RlIiwiaXNWYWxpZEVtYWlsIiwicGF0dGVybiIsIlN0cmluZyIsIkFQSV9VUkwiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJkZWZhdWx0cyIsImNvbW1vbiIsImF1dGgiLCJlbnYiLCJwcm9jZXNzIiwicG9ydCIsIlBPUlQiLCJleHRlbmQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImZvb2RqZXRzVXJsIiwiYXBpX2VuZCIsIkdUTV9jb2RlIiwiR1NUTV9jb2RlIiwicGF5cGFsIiwibW9kZSIsImRzbiIsInNlbnRyeV9kc24iLCJzZW5kRGF0YSIsInVzZXJuYW1lIiwiVFlQRSIsIlNJR05JTiIsIm5vdGlmeUVycm9yIiwiU0lHTklOX0VSUk9SIiwic2V0SXRlbSIsIlNJR05JTl9TVUNDRVNTIiwicHJlZml4IiwidHlwZXMiLCJTSUdOVVAiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9FUlJPUiIsIkFERF9ERUxfQUREUiIsIkFERF9ERUxfQUREUl9TVUNDRVNTIiwiQUREX0RFTF9BRERSX0VSUk9SIiwicHJlZml4ZXIiLCJyZWR1Y2UiLCJyZXN1bHQiLCJzdWNjZXNzIiwibXlDb2xvciIsImJhY2tncm91bmQiLCJub3RpZnkiLCJzaG93IiwiaCIsIndhcm5pbmciLCJjdXN0b21lcnJvciIsImhpZGUiLCJsb2dnZXJNaWRkbGV3YXJlIiwiY3JlYXRlTG9nZ2VyIiwic2VydmVyIiwiZW5oYW5jZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJlZHV4U3RhdGUiLCJjb21iaW5lUmVkdWNlcnMiLCJoZWFkZXIiLCJhY3Rpb24iLCJSRVFfREFUQSIsIkhlYWRlcmRhdGEiLCJSRVNfREFUQSIsIkZBSUxfREFUQSIsIlJFUV9BRERSRVNTX0RBVEEiLCJBZHJlc3NkYXRhIiwiUkVTX0FERFJFU1NfREFUQSIsIkZBSUxfQUREUkVTU19EQVRBIiwiaW5pdGlhbFN0YXRlIiwiaXNQcm9jZXNzaW5nIiwiaXNBZGRy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OztBQUVGO0FBQVMsYUFBT2pOLEtBQVA7QUFSWDtBQVVELEM7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUFBO0FBRUEsSUFBTXVLLE1BQU0sR0FBRyxhQUFmO0FBRUEsSUFBTUMsS0FBSyxHQUFHO0FBQ1o4QixVQUFRLEVBQUUsSUFERTtBQUVaRSxVQUFRLEVBQUUsSUFGRTtBQUdaQyxXQUFTLEVBQUU7QUFIQyxDQUFkO0FBUWUxQix3SEFBUSxDQUFDUCxLQUFELEVBQVFELE1BQVIsQ0FBdkIsRSIsImZpbGUiOiIuL21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL3VuaXZlcnNhbC9yb3V0ZXMnO1xuaW1wb3J0IGNyZWF0ZVJlZHV4U3RvcmUgZnJvbSAnLi4vdW5pdmVyc2FsL2NyZWF0ZVJlZHV4U3RvcmUnO1xuXG4vLyBHcmFiIHRoZSBzdGF0ZSBmcm9tIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGludG8gdGhlIHNlcnZlci1nZW5lcmF0ZWQgSFRNTFxuY29uc3QgcHJlbG9hZGVkU3RhdGUgPSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuXG4vLyBBbGxvdyB0aGUgcGFzc2VkIHN0YXRlIHRvIGJlIGdhcmJhZ2UtY29sbGVjdGVkXG5kZWxldGUgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcblxuLy8gQ3JlYXRlIFJlZHV4IHN0b3JlIHdpdGggaW5pdGlhbCBzdGF0ZVxuY29uc3Qgc3RvcmUgPSBjcmVhdGVSZWR1eFN0b3JlKHsgcHJlbG9hZGVkU3RhdGUgfSk7XG5cbmh5ZHJhdGUoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFJvdXRlciAvPlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb250YWluZXJzL0FwcCc7XG5pbXBvcnQge2dldENvb2tpZX0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcblxuLy9pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29udGFpbmVycy9BYm91dCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vY29udGFpbmVycy9Ob3RGb3VuZCc7XG5cbmltcG9ydCAnLi9nbG9iYWwuY3NzJ1xuLy9pbXBvcnQgeyBnZXRBYm91dERhdGEgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2Fib3V0JztcbmltcG9ydCBOb3RpZmljYXRpb25zLCB7bm90aWZ5fSBmcm9tICdyZWFjdC1ub3RpZnktdG9hc3QnO1xuXG5cblxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29udGFpbmVycy9Ib21lJztcblxuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uL1NlbnRyeS9zZW50cnlcIlxuU2VudHJ5SW5pdGlhbGl6ZSgpO1xuLy8gZm9yIG1vcmUgZGV0YWlscyBzZWUgaHR0cHM6Ly9yZWFjdHRyYWluaW5nLmNvbS9yZWFjdC1yb3V0ZXIvd2ViL2d1aWRlcy9zZXJ2ZXItcmVuZGVyaW5nXG4vLyBzcGVjaWZ5IHJvdXRlcyB3aXRoIHRoZSBhc255YyBmdW5jdGlvbiByZXF1aXJlZCB0byBmZXRjaCB0aGUgZGF0YSB0byByZW5kZXIgdGhlIHJvdXRlXG4vLyBJTVBPUlRBTlQ6IHRoZSBsb2FkRGF0YSBmdW5jdGlvbiBtdXN0IHJldHVybiBhIFByb21pc2VcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICcvJyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWVcbiAgfSwge1xuICAgIGNvbXBvbmVudDogTm90Rm91bmRcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHB1YmxpY3JvdXRlcyA9IFtcbiAgIHtcbiAgcGF0aDogJy9ob21lJyxcbiAgY29tcG9uZW50OiBIb21lICAgIFxufVxuXG5dO1xuXG5leHBvcnQgY29uc3QgcHJpdmF0ZVJvdXRlcyA9IFtcblxuXTtcblxuZXhwb3J0IGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3V0ZXIoKSB7XG4gIGxldCAgaGlkZUhlYWQgPSB0cnVlO1xuICBsZXQgdXJsICAgICAgICAgICAgICAgICAgID0gICAnJztcbiAgbGV0IHVzZXJEYXRhICAgID0ge307XG4gIGxldCBjdXJyZW50QWRkcmVzcyAgICA9IHt9O1xuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdXNlckRhdGEgICAgICAgICAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpIHx8ICd7fScpO1xuICBcbiAgfVxuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSkgeyAgICAgIFxuICAgIHVybCAgICAgICAgICAgICAgICAgICAgID0gICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgICBpZiAodXJsWzFdID09ICcnIHx8IHVybFsxXSA9PSAnbG9naW4nfHwgdXJsWzFdID09ICdzaWdudXAnKSB7XG4gICAgICBoaWRlSGVhZCAgICAgICAgID0gICBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHtcbiAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyBcbiAgICAgIDxkaXY+ICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICA8Tm90aWZpY2F0aW9ucyAvPlxuICAgICBcbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICB7cHJvdGVjdGVkUm91dGVzLm1hcCgocm91dGUpID0+IChcbiAgICAgICAgICAgIDxQcm90ZWN0ZWRSb3V0ZSBrZXk9e3JvdXRlLnBhdGh9IHBhdGg9e3JvdXRlLnBhdGh9IHJvdXRlPXtyb3V0ZX0gY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9IHVzZXJEYXRhPXt1c2VyRGF0YX0gcHJldlBhdGg9e3VybFsxXX0vPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtwcml2YXRlUm91dGVzLm1hcCgocm91dGUpID0+IChcbiAgICAgICAgICAgIDxQcml2YXRlUm91dGUga2V5PXtyb3V0ZS5wYXRofSBwYXRoPXtyb3V0ZS5wYXRofSByb3V0ZT17cm91dGV9IGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fSB1c2VyRGF0YT17dXNlckRhdGF9ICBwcmV2UGF0aD17dXJsWzFdfS8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3B1YmxpY3JvdXRlcy5tYXAocm91dGUgPT4oXG4gICAgICAgICAgICAgIDxQdWJsaWNSb3V0ZSBrZXk9e3JvdXRlLnBhdGh9IHBhdGg9e3JvdXRlLnBhdGh9IHJvdXRlPXtyb3V0ZX0gY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9IHByZXZQYXRoPXt1cmxbMV19Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICAgIHtyb3V0ZXMubWFwKHJvdXRlID0+KFxuICAgICAgICAgICAgICA8Um91dGUga2V5PXtgaW5kZXggJHtyb3V0ZS5wYXRofWB9IHsuLi5yb3V0ZX0vPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgIFxuICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICB9XG4gICAgICA8L2Rpdj4gICBcbiAgKTtcbn1cblxuZnVuY3Rpb24gUHVibGljUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XG4gIGxldCBvYmogPSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH07XG4gIGxldCBwcmV2UGF0aCAgPSByZXN0LnByZXZQYXRoIHx8ICcnO1xuICAgIHJldHVybiAoXG4gICAgPFJvdXRlIGtleT17YGluZGV4ICR7b2JqLnBhdGh9YH0gcGF0aD17b2JqLnBhdGh9IFxuICAgICAgICAvKiBjb21wb25lbnQ9e29iai5jb21wb25lbnR9ICovXG4gICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgICAgPG9iai5jb21wb25lbnQgey4uLnByb3BzfSBwcmV2UGF0aD17cHJldlBhdGh9IC8+XG4gICAgICAgICl9XG4gICAgLz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFByaXZhdGVSb3V0ZSh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pIHtcbiAgbGV0IG9iaiA9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfTtcbiAgLy9jb25zb2xlLmxvZygnTG9jYWwgU3RvcmFnZSA6ICcsIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICFfLmlzRW1wdHkobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZURhdGEnKSkpO1xuICBsZXQgY3VycmVudEFkZHJlc3MgID0gcmVzdC5jdXJyZW50QWRkcmVzcyB8fCB7fTtcbiAgbGV0IHVzZXJEYXRhICA9IHJlc3QudXNlckRhdGEgfHwge307XG4gIGxldCBwcmV2UGF0aCAgPSByZXN0LnByZXZQYXRoIHx8ICcnO1xuICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhXy5pc0VtcHR5KHVzZXJEYXRhKSkge1xuICAgIGNvbnNvbGUubG9nKCdSb3V0ZSBQUml2YXRlIDogJywgcmVzdC5yb3V0ZSk7XG4gICAgcmV0dXJuIChcbiAgICA8Um91dGUga2V5PXtgaW5kZXggJHtvYmoucGF0aH1gfSBwYXRoPXtvYmoucGF0aH0gXG4gICAgICAgIC8qIGNvbXBvbmVudD17b2JqLmNvbXBvbmVudH0gKi9cbiAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgICA8b2JqLmNvbXBvbmVudCB7Li4ucHJvcHN9IHVzZXJEYXRhPXt1c2VyRGF0YX0gcHJldlBhdGg9e3ByZXZQYXRofSAvPlxuICAgICAgICApfVxuICAgIC8+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVkaXJlY3RcbiAgICAgICAgdG89e3tcbiAgICAgICAgICBwYXRobmFtZTogXCIvXCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIFByb3RlY3RlZFJvdXRlKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkge1xuICBsZXQgb2JqID0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9O1xuICBsZXQgdXNlckRhdGEgID0gcmVzdC51c2VyRGF0YSB8fCB7fTtcbiAgbGV0IHByZXZQYXRoICA9IHJlc3QucHJldlBhdGggfHwgJyc7XG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICFfLmlzRW1wdHkodXNlckRhdGEpKSB7XG4gICAgcmV0dXJuIChcbiAgICA8Um91dGUga2V5PXtgaW5kZXggJHtvYmoucGF0aH1gfSBwYXRoPXtvYmoucGF0aH1cbiAgICAgIC8qIGNvbXBvbmVudD17b2JqLmNvbXBvbmVudH0gKi9cbiAgICAgIHJlbmRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgIDxvYmouY29tcG9uZW50IHsuLi5wcm9wc30gdXNlckRhdGE9e3VzZXJEYXRhfSBwcmV2UGF0aD17cHJldlBhdGh9Lz5cbiAgICAgICl9XG4gICAgLz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWRpcmVjdFxuICAgICAgICB0bz17e1xuICAgICAgICAgIHBhdGhuYW1lOiBcIi9sb2dpblwiXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxufSIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvYXBwJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge307XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7fSwgZGlzcGF0Y2gpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShBcHApO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQXBwJztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ub3BCYXJ9PlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9IHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30gdG89XCIvSW52YWxpZExpbmtcIj5JbnZhbGlkTGluazwvTGluaz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfSB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyfT5XaWxsaWFtIFdvb2RoZWFkIC0gTUlUIExpY2Vuc2U8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkFwcF9fQXBwX19fVnR3QnQge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbi5BcHBfX1RvcEJhcl9fXzN5dTlGIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uQXBwX19MaW5rX19fMjU0WXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAuQXBwX19MaW5rX19fMjU0WXIgKyAuQXBwX19MaW5rX19fMjU0WXIge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuXFxuLkFwcF9fRm9vdGVyX19fMTFmZnEge1xcbiAgY29sb3I6ICNBQUFBQUE7IH1cXG5cXG4uQXBwX19hbGlnbi1pdGVtcy1jZW50ZXJfX19CUjIwbiBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgNSU7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAuQXBwX19hbGlnbi1pdGVtcy1jZW50ZXJfX19CUjIwbiBoMiB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJBcHAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLGFBQWEsRUFBRTs7QUFFakI7RUFDRSxxQkFBcUIsRUFBRTtFQUN2QjtJQUNFLGdCQUFnQixFQUFFOztBQUV0QjtFQUNFLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBRTs7QUFFakI7RUFDRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVUsRUFBRSxFQUFFXCIsXCJmaWxlXCI6XCJBcHAuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQXBwIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IH1cXG5cXG4uVG9wQmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uTGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5MaW5rICsgLkxpbmsge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuXFxuLkZvb3RlciB7XFxuICBjb2xvcjogI0FBQUFBQTsgfVxcblxcbi5hbGlnbi1pdGVtcy1jZW50ZXIgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDUlOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLmFsaWduLWl0ZW1zLWNlbnRlciBoMiB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwOyB9IH1cXG5cIl19XSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIkFwcFwiOiBcIkFwcF9fQXBwX19fVnR3QnRcIixcblx0XCJUb3BCYXJcIjogXCJBcHBfX1RvcEJhcl9fXzN5dTlGXCIsXG5cdFwiTGlua1wiOiBcIkFwcF9fTGlua19fXzI1NFlyXCIsXG5cdFwiRm9vdGVyXCI6IFwiQXBwX19Gb290ZXJfX18xMWZmcVwiLFxuXHRcImFsaWduLWl0ZW1zLWNlbnRlclwiOiBcIkFwcF9fYWxpZ24taXRlbXMtY2VudGVyX19fQlIyMG5cIlxufTsiLCJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG4vL2NvbnNvbGUubG9nKCdDb29raWUgQ29uZmlnIDogJywgY29uZmlnLmNvb2tpZSk7XG5cbi8vIGV4cG9ydCBjb25zdCBnZXQgPSAobmFtZSA9ICdmb29kamV0c19uZXdfbWVyY2hhbnQnKSA9Pntcbi8vIFx0aWYoY29uZmlnLmNvb2tpZS5ob3N0bmFtZSA9PT0gJ2h0dHA6Ly9jb25zb2xlLmRldi5mb29kamV0cy5jb20nKSB7XG4vLyBcdFx0bmFtZSA9ICdkZXZfJytuYW1lXG4vLyBcdH1cblxuLy8gICBcdHJldHVybiBDb29raWVzLmdldEpTT04obmFtZSk7XG4vLyB9O1xuXG4vLyBleHBvcnQgY29uc3Qgc2V0ID0gKGRhdGEsIG5hbWUgPSAnZm9vZGpldHNfbmV3X21lcmNoYW50JykgPT57XG4vLyBcdGlmKGNvbmZpZy5jb29raWUuaG9zdG5hbWUgPT09ICdodHRwOi8vY29uc29sZS5kZXYuZm9vZGpldHMuY29tJykge1xuLy8gXHRcdG5hbWUgPSAnZGV2XycrbmFtZVxuLy8gXHR9XG4vLyBcdGlmKCEhY29uZmlnLmNvb2tpZS5kb21haW4pXG4vLyBcdFx0Q29va2llcy5zZXQobmFtZSwgZGF0YSwge2RvbWFpbjogY29uZmlnLmNvb2tpZS5kb21haW59KTtcbi8vIFx0ZWxzZVxuLy8gXHRcdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEpO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChuYW1lID0gJ2Zvb2RqZXRzX25ld19tZXJjaGFudCcpID0+e1xuLy8gXHRpZihjb25maWcuY29va2llLmhvc3RuYW1lID09PSAnaHR0cDovL2NvbnNvbGUuZGV2LmZvb2RqZXRzLmNvbScpIHtcbi8vIFx0XHRuYW1lID0gJ2Rldl8nK25hbWVcbi8vIFx0fVxuXG4vLyBcdGlmKCEhY29uZmlnLmNvb2tpZS5kb21haW4pXG4vLyBcdFx0Q29va2llcy5yZW1vdmUobmFtZSwge2RvbWFpbjogY29uZmlnLmNvb2tpZS5kb21haW59KTtcbi8vIFx0ZWxzZVxuLy8gXHRcdENvb2tpZXMucmVtb3ZlKG5hbWUpO1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChkYXRhLCBuYW1lKSA9PntcbiAgXHRDb29raWVzLnNldChuYW1lLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMaWZldGltZUNvb2tpZSA9IChkYXRhLCBuYW1lLGRheSkgPT57XG5cdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEsIHsgZXhwaXJlczogZGF5IH0pO1xufTtcblxuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKG5hbWUpID0+e1xuICBcdENvb2tpZXMucmVtb3ZlKG5hbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChuYW1lKSA9PntcbiAgXHRyZXR1cm4gQ29va2llcy5nZXRKU09OKG5hbWUpO1xufTsiLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvbm90LWZvdW5kJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge307XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7fSwgZGlzcGF0Y2gpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShOb3RGb3VuZCk7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ob3RGb3VuZCc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05vdEZvdW5kLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDB2aFwiPjxoMiBjbGFzc05hbWU9XCJtLTAgYmx1ZS1kZWZhdWx0XCI+Um91dGUgTm90IEZvdW5kPC9oMj48L2Rpdj4gICAgICBcbiAgICApO1xuICB9XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL05vdEZvdW5kLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL05vdEZvdW5kLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLk5vdEZvdW5kX19Ob3RGb3VuZF9fXzJ6Y3BCIHtcXG4gIGNvbG9yOiBpbmhlcml0OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiTm90Rm91bmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWMsRUFBRVwiLFwiZmlsZVwiOlwiTm90Rm91bmQuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTm90Rm91bmQge1xcbiAgY29sb3I6IGluaGVyaXQ7IH1cXG5cIl19XSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIk5vdEZvdW5kXCI6IFwiTm90Rm91bmRfX05vdEZvdW5kX19fMnpjcEJcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHl7ICBvdmVyZmxvdy14OiBoaWRkZW47IHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO31cXG4qe3BhZGRpbmc6IDA7IG1hcmdpbjogMDsgb3V0bGluZTogMDsgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBib3gtc2l6aW5nOiBib3JkZXItYm94O31cXG5ib2R5e2ZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNDAwOyBsaW5lLWhlaWdodDogMThweDsgY29sb3I6ICMzMzMzMzM7fVxcblxcbmltZ3ttYXgtd2lkdGg6IDEwMCU7fVxcbmZpZ3VyZXtwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGRpc3BsYXk6IGlubGluZS1ibG9jazt9XFxuYXtjb2xvcjogIzIwOURFMjt9XFxuYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiAjMjA5REUyO31cXG4gXFxuXFxuLmNUYWJsZSB7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgd2lkdGg6IDEwMCU7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO31cXG4uY1RhYmxlIHRoe3Bvc2l0aW9uOiByZWxhdGl2ZTt9XFxuLmNUYWJsZSB0aCBpe3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE1cHg7IHRvcDogMTVweDsgY3Vyc29yOiBwb2ludGVyO31cXG4uY1RhYmxlIHRoLCAuY1RhYmxlIHRkIHtwYWRkaW5nOiAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBib3JkZXItYm90dG9tOiBub25lOyBwb3NpdGlvbjogcmVsYXRpdmU7fVxcbi5jVGFibGUub25lQ29sIHRoLCAuY1RhYmxlLm9uZUNvbCB0ZCwgLmNUYWJsZS5vbmVDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiA3MiU7fVxcbi5jVGFibGUudHdvQ29sIHRoLCAuY1RhYmxlLnR3b0NvbCB0ZCwgLmNUYWJsZS50d29Db2wgLnN1YlRhYmxlIHRke3dpZHRoOiA1NCU7fVxcbi5jVGFibGUudGhyZWVDb2wgdGgsIC5jVGFibGUudGhyZWVDb2wgdGQsIC5jVGFibGUudGhyZWVDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiAzNiU7fVxcbi5jVGFibGUuZm91ckNvbCB0aCwgLmNUYWJsZS5mb3VyQ29sIHRkLCAuY1RhYmxlLmZvdXJDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiAxOCU7fVxcblxcbi5jVGFibGUgdGg6Zmlyc3QtY2hpbGQsIC5jVGFibGUgdGQ6Zmlyc3QtY2hpbGR7IHdpZHRoOiAyOCU7fVxcbi5jVGFibGUgdGh7dGV4dC1hbGlnbjogY2VudGVyO31cXG4uY1RhYmxlIHRoIHNwYW57ZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTJweDt9XFxuXFxuLmNsb3NlU2Vje3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE1cHg7IGNvbG9yOiAjRkI2MDU2OyBjdXJzb3I6IHBvaW50ZXI7fVxcblxcbi5jVGFibGUgdGQuc3R7cGFkZGluZzogMDsgYm9yZGVyLXRvcDogbm9uZTsgYm9yZGVyLWJvdHRvbTogbm9uZTt9IFxcbi5zdWJUYWJsZXt3aWR0aDogMTAwJTsgZGlzcGxheTogbm9uZTt9XFxuLnN0T3BlbiAuc3ViVGFibGV7IGRpc3BsYXk6dGFibGU7fVxcbi5zdWJUYWJsZSB0cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XFxuLnN1YlRhYmxlIHRke3dpZHRoOiAxOCU7fVxcbi5zdWJUYWJsZSB0ZDpmaXJzdC1jaGlsZHsgd2lkdGg6IDI4JSFpbXBvcnRhbnQ7fVxcblxcbi50YWN7dGV4dC1hbGlnbjogY2VudGVyO31cXG5cXG5cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lJztcbmltcG9ydCB7IGRvX2xvZ2luIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9hdXRoJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBzdGF0ZS5zaWdudXBcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHtcbiAgICBkb19sb2dpbjpkb19sb2dpbixcbiAgfSwgZGlzcGF0Y2gpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShIb21lKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9ob21lJzsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGlzVmFsaWRFbWFpbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVyZnVuYyc7XG5cbmltcG9ydCAnLi9ob21lLmNzcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmRlZmF1bHRFcnJvcnMgPSB7XG4gICAgICBlbWFpbDogZmFsc2UsXG4gICAgICBwYXNzd29yZDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZhcURhdGE6IFtdLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgdHlwZVBhc3M6ICdwYXNzd29yZCcsXG4gICAgICBmb3JtRGF0YToge1xuICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICBmdW5kaW5nX2hpc3Rvcnk6IFwiXCIsXG4gICAgICAgIGNvbXBhbnlfaW5mbzogXCJcIixcbiAgICAgICAgZmV0YXVyZXM6IFwiXCIsXG4gICAgICAgIGN1c3RvbWVyX2Nhc2Vfc3R1ZHk6IFwiXCIsXG4gICAgICAgIG92ZXJhbGxfc2Nvb3I6IFwiU2NvcmVcIixcbiAgICAgICAgYm94X2hlYWRlcjogXCJCb3hcIlxuXG4gICAgICB9LFxuICAgICAgY29sdW1EYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBib3hfaGVhZGVyOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkJveFwiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiZGF0YVwiXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG92ZXJhbGxfc2Nvb3I6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiT3ZlcmFsbCBTY29yZVwiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2NvcmVcIlxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIlByb2R1Y3QgRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJveCBpcyBhIG1vZGVybiBjb250ZW50IG9mIG1hbmFnZW1lbnRcIixcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5kaW5nX2hpc3Rvcnk6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiRnVuZGluZyBIaXN0b3J5XCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUb3RhbCBGdW5kaW5nOiAkMTUwbVwiLFxuXG5cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc3ViaXRlbXM6IHtcbiAgICAgICAgICAgICAgRm91bmRlZDogW1wiMjAwNVwiXSxcbiAgICAgICAgICAgICAgS2V5SW52ZXN0b3JzOiBbXCJERkcsIHNjYWxlLCB2ZW50dXJlIHBhcnRuZXJzXCJdLFxuICAgICAgICAgICAgICBGb3VuZGVyczogW1wiQXJvbmUgTGV2aWUsIER5bG9uIHNtaXRoXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wYW55X2luZm86IHtcbiAgICAgICAgICAgIHRleHQ6IFwiQ29tcGFueSBJbmZvXCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJKb2huc29uXCJcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmZXRhdXJlczoge1xuICAgICAgICAgICAgdGV4dDogXCJGZXRhdXJlc1wiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR29vZFwiXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VzdG9tZXJfY2FzZV9zdHVkeToge1xuICAgICAgICAgICAgdGV4dDogXCJDb21wYW55IENhc2UgU3R1ZHlcIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdvb2QgQ2xpZW50XCJcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgaGlkZUNsYXNzOiB0cnVlLFxuICAgIH1cblxuXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DaGFuZ2VIYW5kbGUgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVDb2x1bSA9IHRoaXMuZGVsZXRlQ29sdW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvb2dsZUNsYXNzID0gdGhpcy50b29nbGVDbGFzcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVsZXRlUm93ID0gdGhpcy5kZWxldGVSb3cuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7IH1cblxuICBkZWxldGVSb3cocm93bmFtZSkge1xuICAgIGxldCB7IGNvbHVtRGF0YSwgZm9ybURhdGEgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBzd2FsKHtcbiAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCAgdG8gIGRlbGV0ZSAgdGhpcyAgaXRlbT9cIixcblxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBidXR0b25zOiB0cnVlLFxuICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgICAgaWYgKHdpbGxEZWxldGUpIHtcblxuICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGNkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY2RhdGEpLm1hcCgob25lS2V5LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvbmVLZXkgPT0gcm93bmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjZGF0YVtvbmVLZXldXG4gICAgICAgICAgICAgICAgZGVsZXRlIGZvcm1EYXRhW3Jvd25hbWVdO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhLHJvd25hbWUsIGZvcm1EYXRhW3Jvd25hbWVdLCBmb3JtRGF0YVtcImNvbXBhbnlfaW5mb1wiXSk7XG4gICAgICAgICAgICAgICAgLy8gIGRlbGV0ZSBmb3JtRGF0YVtvbmVLZXldXG4gICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sdW1EYXRhLFxuICAgICAgICAgICAgZm9ybURhdGFcbiAgICAgICAgICB9LCAoKSA9PiB7XG5cbiAgICAgICAgICAgIHN3YWwoXCJQb29mISBZb3VyIGl0ZW1oYXMgYmVlbiBkZWxldGVkIVwiLCB7XG4gICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cbiAgfVxuICBvbkNoYW5nZUhhbmRsZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb3JtRGF0YToge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmZvcm1EYXRhLFxuICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0b29nbGVDbGFzcygpIHtcbiAgICBsZXQgeyBoaWRlQ2xhc3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgaGlkZUNsYXNzID0gIWhpZGVDbGFzc1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGlkZUNsYXNzXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZUNvbHVtKGlkKSB7XG4gICAgbGV0IHsgY29sdW1EYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG5cbiAgICBzd2FsKHtcbiAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCAgdG8gIGRlbGV0ZSAgdGhpcyAgaXRlbT9cIixcblxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBidXR0b25zOiB0cnVlLFxuICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgICAgaWYgKHdpbGxEZWxldGUpIHtcblxuICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGNkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY2RhdGEpLm1hcCgob25lS2V5LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNkYXRhW29uZUtleV0uZGF0YSA9IGNkYXRhW29uZUtleV0uZGF0YS5maWx0ZXIoKGRhdGEsIGluZGV4KSA9PiBpZCAhPSBpbmRleClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbHVtRGF0YVxuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHN3YWwoXCJQb29mISBZb3VyIGl0ZW1oYXMgYmVlbiBkZWxldGVkIVwiLCB7XG4gICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIGxldCB7IGZvcm1EYXRhLCBjb2x1bURhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuXG4gICAgbGV0IHsgb3ZlcmFsbF9zY29vciwgYm94X2hlYWRlciwgcHJvZHVjdF9kZXNjcmlwdGlvbiwgZnVuZGluZ19oaXN0b3J5LCBmZXRhdXJlcywgY3VzdG9tZXJfY2FzZV9zdHVkeSwgY29tcGFueV9pbmZvIH0gPSBmb3JtRGF0YTtcblxuXG5cblxuICAgIGNvbHVtRGF0YS5tYXAoKGNkYXRhLCBpbmRleCkgPT4ge1xuICAgIFxuICAgICAgaWYgKCAhIShjZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uKSAmJiBjZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEubGVuZ3RoID4gMikge1xuICAgICAgICBzd2FsKHtcbiAgICAgICAgICB0aXRsZTogXCJZb3UgY2FudCBhZGQgbW9yZSAgdGhhbiAgMyAgaXRlbXNcIixcblxuICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICAgIGZ1bmRpbmdfaGlzdG9yeTogXCJcIixcbiAgICAgICAgICAgIGNvbXBhbnlfaW5mbzogXCJcIixcbiAgICAgICAgICAgIGZldGF1cmVzOiBcIlwiLFxuICAgICAgICAgICAgY3VzdG9tZXJfY2FzZV9zdHVkeTogXCJcIixcbiAgICAgICAgICAgIG92ZXJhbGxfc2Nvb3I6IFwiU2NvcmVcIixcbiAgICAgICAgICAgIGJveF9oZWFkZXI6IFwiQm94XCJcblxuICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICQoXCIjbmV3VmVuZG9yXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChjZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5wdXNoKHsgZGVzY3JpcHRpb246IHByb2R1Y3RfZGVzY3JpcHRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNkYXRhLmZ1bmRpbmdfaGlzdG9yeSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjZGF0YS5mdW5kaW5nX2hpc3RvcnkuZGF0YS5wdXNoKHsgZGVzY3JpcHRpb246IGZ1bmRpbmdfaGlzdG9yeSB9KTtcbiAgICAgICAgICBPYmplY3Qua2V5cyhjZGF0YS5mdW5kaW5nX2hpc3Rvcnkuc3ViaXRlbXMpLm1hcCgob25lS2V5LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAob25lS2V5ID09IFwiRm91bmRlZFwiKSB7XG4gICAgICAgICAgICAgIGNkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtc1tvbmVLZXldLnB1c2goXCIyMDA1XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25lS2V5ID09IFwiS2V5SW52ZXN0b3JzXCIpIHtcbiAgICAgICAgICAgICAgY2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zW29uZUtleV0ucHVzaChcIkRGRywgc2NhbGUsIHZlbnR1cmUgcGFydG5lcnNcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbmVLZXkgPT0gXCJGb3VuZGVyc1wiKSB7XG4gICAgICAgICAgICAgIGNkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtc1tvbmVLZXldLnB1c2goXCJBcm9uZSBMZXZpZSwgRHlsb24gc21pdGhcIilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2RhdGEuZmV0YXVyZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2RhdGEuZmV0YXVyZXMuZGF0YS5wdXNoKHsgZGVzY3JpcHRpb246IGZldGF1cmVzIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNkYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkuZGF0YS5wdXNoKHsgZGVzY3JpcHRpb246IGN1c3RvbWVyX2Nhc2Vfc3R1ZHkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNkYXRhLmNvbXBhbnlfaW5mbyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjZGF0YS5jb21wYW55X2luZm8uZGF0YS5wdXNoKHsgZGVzY3JpcHRpb246IGNvbXBhbnlfaW5mbyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNkYXRhLm92ZXJhbGxfc2Nvb3IuZGF0YS5wdXNoKHsgZGVzY3JpcHRpb246IG92ZXJhbGxfc2Nvb3IgfSk7XG4gICAgICAgIGNkYXRhLmJveF9oZWFkZXIuZGF0YS5wdXNoKHsgZGVzY3JpcHRpb246IGJveF9oZWFkZXIgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNvbHVtRGF0YSxcbiAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICAgIGZ1bmRpbmdfaGlzdG9yeTogXCJcIixcbiAgICAgICAgICAgIGNvbXBhbnlfaW5mbzogXCJcIixcbiAgICAgICAgICAgIGZldGF1cmVzOiBcIlwiLFxuICAgICAgICAgICAgY3VzdG9tZXJfY2FzZV9zdHVkeTogXCJcIixcbiAgICAgICAgICAgIG92ZXJhbGxfc2Nvb3I6IFwiU2NvcmVcIixcbiAgICAgICAgICAgIGJveF9oZWFkZXI6IFwiQm94XCJcblxuICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICQoXCIjbmV3VmVuZG9yXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0pXG5cblxuXG4gIH1cblxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICBpZiAoISFwcm9wcy5kYXRhICYmICEhcHJvcHMuZGF0YS5pc1N1Y2Nlc3MpIHtcblxuXG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKCkge1xuICAgIGxldCBmb3JtRGF0YSA9IHRoaXMuc3RhdGUuZm9ybURhdGEgfHwge307XG4gICAgbGV0IGVycm9ycyA9IHsgLi4udGhpcy5kZWZhdWx0RXJyb3JzIH07XG4gICAgbGV0IGlzRXJyb3IgPSBmYWxzZTtcbiAgICBpZiAoISEhZm9ybURhdGEuZW1haWwpIHtcbiAgICAgIGVycm9ycy5lbWFpbCA9IHRydWU7XG4gICAgICBpc0Vycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCEhIWZvcm1EYXRhLnBhc3N3b3JkKSB7XG4gICAgICBlcnJvcnMucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgaXNFcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICghIWZvcm1EYXRhLnBhc3N3b3JkICYmIGZvcm1EYXRhLnBhc3N3b3JkLmxlbmd0aCA8IDQpIHtcbiAgICAgIGVycm9ycy5wYXNzd29yZCA9IHRydWU7XG4gICAgICBpc0Vycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaXNFcnJvcjogaXNFcnJvciwgZXJyb3JzOiBlcnJvcnMgfTtcbiAgfVxuXG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjb2x1bURhdGEsIGZvcm1EYXRhLCBoaWRlQ2xhc3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgIGxldCBjb2xTcGFuID0gXCJcIjtcbiAgICBsZXQgY29sU3BhblRkID0gMjtcbiAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgIGNvbFNwYW5UZCA9ICghIWRhdGEuZnVuZGluZ19oaXN0b3J5KT8gZGF0YS5mdW5kaW5nX2hpc3Rvcnkuc3ViaXRlbXMuRm91bmRlZC5sZW5ndGggKyAxOjI7XG5cbiAgICAgIGlmICghIWRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbiAmJiBkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGggPT0gMSkge1xuICAgICAgICBjb2xTcGFuID0gXCJ0d29Db2xcIlxuICAgICAgfVxuICAgICAgaWYgKCEhZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uICYmIGRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgIGNvbFNwYW4gPSBcInRocmVlQ29sXCJcbiAgICAgIH1cbiAgICAgIGlmICghIWRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbiAmJiBkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGggPT0gMykge1xuICAgICAgICBjb2xTcGFuID0gXCJmb3VyQ29sXCJcbiAgICAgIH1cbiAgICAgIC8vIGlmKGRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLmxlbmd0aD09NCl7XG4gICAgICAvLyAgIGNvbFNwYW49IFwiZm91ckNvbFwiXG4gICAgICAvLyB9XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpbnBcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17YGNUYWJsZSAke2NvbFNwYW59YH0+XG4gICAgICAgICAgPHRyPlxuXG4gICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI25ld1ZlbmRvclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2FkZC1uZXcucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5BZGQgTmV3IFZlbmRvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLmJveF9oZWFkZXIpID8gPD5cblxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ib3hfaGVhZGVyLmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0aCBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ib3gucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJveCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5ib3hfaGVhZGVyLmRhdGEubGVuZ3RoID4gMSA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVDb2x1bShrZXkpfSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEub3ZlcmFsbF9zY29vcikgPyA8PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEub3ZlcmFsbF9zY29vci50ZXh0fSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5vdmVyYWxsX3Njb29yLmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0gY2xhc3NOYW1lPVwidGFjXCI+PGltZyBzcmM9XCJpbWcvc2NvcmUtYi5wbmdcIiAvPjwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbikgPyA8PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi50ZXh0fSAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9PntzdWJkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuZnVuZGluZ19oaXN0b3J5KSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCA+e2RhdGEuZnVuZGluZ19oaXN0b3J5LnRleHR9PHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVSb3coXCJmdW5kaW5nX2hpc3RvcnlcIil9IGNsYXNzTmFtZT1cImNsb3NlU2VjXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPiA8aSBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvb2dsZUNsYXNzKCl9IGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZnVuZGluZ19oaXN0b3J5LmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNvbFNwYW49e2NvbFNwYW5UZH0gY2xhc3NOYW1lPXtoaWRlQ2xhc3MgPyBcInN0XCIgOiBcInN0IHN0T3BlblwifT5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN1YlRhYmxlXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAoZGF0YS5mdW5kaW5nX2hpc3Rvcnk9PXVuZGVmaW5lZCkpIHJldHVybiAgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zKS5tYXAoKG9uZUtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e29uZUtleX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mdW5kaW5nX2hpc3Rvcnkuc3ViaXRlbXNbb25lS2V5XS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkPntpdGVtfTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5jb21wYW55X2luZm8pID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmNvbXBhbnlfaW5mby50ZXh0fSA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZVJvdyhcImNvbXBhbnlfaW5mb1wiKX0gY2xhc3NOYW1lPVwiY2xvc2VTZWNcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuY29tcGFueV9pbmZvLmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLmZldGF1cmVzKSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5mZXRhdXJlcy50ZXh0fSA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZVJvdyhcImZldGF1cmVzXCIpfSBjbGFzc05hbWU9XCJjbG9zZVNlY1wiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZmV0YXVyZXMuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeSkgPyA8PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeS50ZXh0fSA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZVJvdyhcImN1c3RvbWVyX2Nhc2Vfc3R1ZHlcIil9IGNsYXNzTmFtZT1cImNsb3NlU2VjXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cblxuXG4gICAgICAgIHsvKiAgTW9kYWwgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwibmV3VmVuZG9yXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+QWRkIE5ldyBWZW5kb3I8L2g1PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7KGZvcm1EYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24gIT0gdW5kZWZpbmVkKSA/IDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2R1Y3RfZGVzY3JpcHRpb25cIj5Qcm9kdWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtmb3JtRGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VIYW5kbGUoZSl9IG5hbWU9XCJwcm9kdWN0X2Rlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwifVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChmb3JtRGF0YS5mdW5kaW5nX2hpc3RvcnkgIT0gdW5kZWZpbmVkKSA/IDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZnVuZGluZ19oaXN0b3J5XCI+RnVuZGluZyBIaXN0b3J5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLmZ1bmRpbmdfaGlzdG9yeX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZnVuZGluZ19oaXN0b3J5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgKGZvcm1EYXRhLmNvbXBhbnlfaW5mbyAhPSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbXBhbnlfaW5mb1wiPkNvbXBhbnkgSW5mbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLmNvbXBhbnlfaW5mb30gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY29tcGFueV9pbmZvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAoZm9ybURhdGEuZmV0YXVyZXMgIT0gdW5kZWZpbmVkKSA/IDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmV0YXVyZXNcIj5GZWF0dXJlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5mZXRhdXJlc30gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZmV0YXVyZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAoZm9ybURhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeSAhPSB1bmRlZmluZWQpID8gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdXN0b21lcl9jYXNlX3N0dWR5XCI+Q3VzdG9tZXIgY2FzZSBzdHVkeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5fSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VIYW5kbGUoZSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjdXN0b21lcl9jYXNlX3N0dWR5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgQVBJIGZyb20gJy4uL0FwaS9BcGknO1xuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvYnJvd3Nlcic7XG5pbXBvcnQge1NlbnRyeUluaXRpYWxpemUgfSBmcm9tIFwiLi4vU2VudHJ5L3NlbnRyeVwiO1xuU2VudHJ5SW5pdGlhbGl6ZSgpO1xuXG5leHBvcnQgY29uc3QgY29udmVydEZsb2F0VHdvRGVjaW1hbCA9IGZ1bmN0aW9uKG51bSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSkudG9GaXhlZCgyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRUd29EZWNpbWFsUm91bmQgPSBmdW5jdGlvbihudW0pIHtcbiAgICByZXR1cm4gKyhNYXRoLnJvdW5kKG51bSArIFwiZSsyXCIpICsgXCJlLTJcIik7XG59XG5cbmV4cG9ydCBjb25zdCBsb2dFcnJvclRvU2VydmVyID0gYXN5bmMgZnVuY3Rpb24ocGFyYW1zLCBlcnJvcikge1xuICAgIFxuICAgIGlmKHBhcmFtcy50eXBlID09PSAnY2F0Y2gnKVxuICAgICAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihlcnJvcik7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGNvbnN0IGludmFsaWRVcmwgICAgPScvaW52YWxpZC1saW5rJztcbiAgICBsZXQgYWRkaXRpb25hbEluZm8gICAgICA9ICAge307XG4gICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGFcbiAgICAgICAgICogc3RhdHVzIGNvZGUgdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxuICAgICAgICAgKi9cbiAgICAgICAgYWRkaXRpb25hbEluZm8uZGF0YSAgICAgPSAgIGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLnN0YXR1cyAgID0gICBlcnJvci5yZXNwb25zZS5zdGF0dXM7XG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmhlYWRlcnMgID0gICBlcnJvci5yZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdEYXRhIDogJywgZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ1N0YXR1cyA6ICcsIGVycm9yLnJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ0hlYWRlcnMgOiAnLCBlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZCwgYGVycm9yLnJlcXVlc3RgXG4gICAgICAgICAqIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZVxuICAgICAgICAgKiBvZiBodHRwLkNsaWVudFJlcXVlc3QgaW4gTm9kZS5qc1xuICAgICAgICAgKi9cbiAgICAgICAgLy9jb25zb2xlLmxvZygnUmVxdWVzdCA6ICcsIGVycm9yLnJlcXVlc3QpO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5yZXF1ZXN0ICAgICA9ICAgZXJyb3IucmVxdWVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCBhbmQgdHJpZ2dlcmVkIGFuIEVycm9yXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0Vycm9yIDogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLm1lc3NhZ2UgICAgID0gICBlcnJvci5tZXNzYWdlO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdDb25maWcgOiAnLCBlcnJvci5jb25maWcpO1xuICAgIGlmKCEhZXJyb3IuY29uZmlnKVxuICAgICAgICBhZGRpdGlvbmFsSW5mby5jb25maWcgICAgID0gICBlcnJvci5jb25maWc7XG4gICAgY29uc3QgcmVzICAgICAgICAgICA9ICAgYXdhaXQgQVBJLnBvc3QoJy9hdXRoL2NhdGNoLWludmFsaWQtbGluaycsIHtcbiAgICAgICAgXCJwYXJhbXNcIiAgICA6ICAgey4uLnBhcmFtcywgYWRkaXRpb25hbEluZm86IEpTT04uc3RyaW5naWZ5KGFkZGl0aW9uYWxJbmZvKX1cbiAgICB9KVxuICAgIGlmIChyZXMuZGF0YS5lcnJvcikge1xuICAgICAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihyZXMuZGF0YS5lcnJvcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpICAgPT4gIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaW52YWxpZFVybFxuICAgICAgICB9LDMwMDApO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBhZGRyZXNzRm9ybWF0ZXIgPSAob2JqKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgbGV0IHJlZ2V4ID0gLyhcXGQrKSAoLis/KSwgKC4rPyksICguKz8pIChbMC05XXs1fSkvO1xuICBcbiAgICAgIGxldCBhZGRyZXNzID0gb2JqLm1hdGNoKHJlZ2V4KTtcbiAgICAgIC8vY29uc29sZS5sb2coYWRkcmVzcyk7XG4gICAgICBpZihhZGRyZXNzWzRdLmluZGV4T2YoJywnKSA+IC0xICYmIGFkZHJlc3NbM10uaW5kZXhPZignICcpID4gLTEpe1xuICAgICAgICBsZXQgZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbM10rJywgJysgYWRkcmVzc1s0XSArICcgJysgYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV07XG4gICAgICAgIGxldCBtb2RBZGRyZXNzID0gZm9ybWF0dGVkQWRkcmVzcysnLCBVU0EnO1xuICAgICAgICBpZigvKFxcZCspICguKz8pLCAoLis/KSwgKC4rPykgKFswLTldezV9KS9nLnRlc3QobW9kQWRkcmVzcykpe1xuICAgICAgICAgIGxldCBfYWRkcmVzcyA9IG1vZEFkZHJlc3MubWF0Y2gocmVnZXgpO1xuICBcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsaWRBZHJzOiB0cnVlLCBcbiAgICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3M6IGZvcm1hdHRlZEFkZHJlc3MsXG4gICAgICAgICAgICBhZGRyZXNzOiBtb2RBZGRyZXNzLFxuICAgICAgICAgICAgbnVtYmVyOiBfYWRkcmVzc1swXSxcbiAgICAgICAgICAgIHN0cmVldDogX2FkZHJlc3NbMV0sXG4gICAgICAgICAgICBjaXR5OiBfYWRkcmVzc1syXSxcbiAgICAgICAgICAgIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzJyxcbiAgICAgICAgICAgIHN0YXRlX2NvZGU6IF9hZGRyZXNzWzRdLFxuICAgICAgICAgICAgemlwY29kZTogX2FkZHJlc3NbX2FkZHJlc3MubGVuZ3RoIC0xXVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsaWRBZHJzOiBmYWxzZSBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWRBZGRyZXNzID0gYWRkcmVzc1sxXSArICcgJyArIGFkZHJlc3NbMl0gKyAnLCAnKyBhZGRyZXNzWzNdICsgJywgJyArIGFkZHJlc3NbNF0gKyAnICcgKyBhZGRyZXNzW2FkZHJlc3MubGVuZ3RoIC0xXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWxpZEFkcnM6IHRydWUsIFxuICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3M6IGZvcm1hdHRlZEFkZHJlc3MsXG4gICAgICAgICAgYWRkcmVzczogb2JqLFxuICAgICAgICAgIG51bWJlcjogYWRkcmVzc1sxXSxcbiAgICAgICAgICBzdHJlZXQ6IGFkZHJlc3NbMl0sXG4gICAgICAgICAgY2l0eTogYWRkcmVzc1szXSxcbiAgICAgICAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgICAgc3RhdGVfY29kZTogYWRkcmVzc1s0XSxcbiAgICAgICAgICB6aXBjb2RlOiBhZGRyZXNzW2FkZHJlc3MubGVuZ3RoIC0xXSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbGlkQWRyczogZmFsc2UgXG4gICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRFbWFpbCA9KGVtYWlsKSA9PntcbiAgY29uc3QgcGF0dGVybiA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QoU3RyaW5nKGVtYWlsKSk7XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtnZXRDb29raWUsIHNldExpZmV0aW1lQ29va2llfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG5jb25zdCBBUElfVVJMICAgICAgICAgICA9ICAgXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcblxuY29uc3QgQVBJICAgICAgICAgICAgICAgPSAgIGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogQVBJX1VSTFxufSlcbkFQSS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5sZXQgYXV0aCAgICAgICAgICAgICAgPSAgICcnO1xuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICBsZXQgdXNlckRhdGEgICAgICAgICAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpIHx8ICd7fScpO1xuICBpZighXy5pc0VtcHR5KHVzZXJEYXRhKSl7XG4gICAgYXV0aCAgICAgICAgICAgICAgPSAgICAnVG9rZW4gJyArIHVzZXJEYXRhLmtleTtcbiAgfSBlbHNle1xuICAgIGF1dGggICA9ICBcIlwiXG4gIH1cbiBcbiAgY29uc29sZS5sb2coYXV0aCk7XG4gIEFQSS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYXV0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBJOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnOyAvLyBzdGFnaW5nIHwgZGV2ZWxvcG1lbnQgfCBwcm9kdWN0aW9uXG4vL3Byb2Nlc3MuZW52LlBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODA7XG4vL2NvbnN0IGVudiAgICAgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYpP3Byb2Nlc3MuZW52Lk5PREVfRU5WOidkZXZlbG9wbWVudCc7XG4vL2NvbnN0IGVudiAgICAgICA9ICdzdGFnaW5nJztcblxubGV0IGVudiAgID0gJyc7XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViAgPT09ICdwcm9kdWN0aW9uJylcbiAgZW52ICA9ICdwcm9kdWN0aW9uJztcbmVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKVxuICBlbnYgID0gJ3N0YWdpbmcnO1xuZWxzZVxuICBlbnYgID0gJ2RldmVsb3BtZW50JztcbmNvbnN0IGNvbmZpZyA9IHtcbiAgLy9lbnY6IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCcsXG4gIGVudjplbnYsXG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MVxufTtcbi8vY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYsIF8uZXh0ZW5kKGNvbmZpZywgcmVxdWlyZSgnLi8nICsgZW52ICsgJy5qcycpLmRlZmF1bHQgfHwge30pKVxuZXhwb3J0IGRlZmF1bHQgXy5leHRlbmQoY29uZmlnLCByZXF1aXJlKCcuLycgKyBlbnYgKyAnLmpzJykuZGVmYXVsdCB8fCB7fSk7IiwidmFyIG1hcCA9IHtcblx0XCIuL2RldmVsb3BtZW50LmpzXCI6IDcxOSxcblx0XCIuL2luZGV4LmpzXCI6IDcxNVxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDcxODsiLCJcbiBjb25zdCBjb25maWcgICAgPSAgIHtcbiAgICAvLyBmb3IgZGV2ICAgIFxuICAgIGZvb2RqZXRzVXJsICAgICAgICAgICAgIDogICAnJyxcbiAgICBhcGlfZW5kICAgICAgICAgICAgICAgICA6ICAgJy9hcGkvJyxcbiAgICBHVE1fY29kZSAgICAgICAgICAgICAgICA6ICAgJ0dUTS1USE5HUEg2JyxcbiAgICBHU1RNX2NvZGUgICAgICAgICAgICAgICA6ICAgJ1VBLTY1NTU0MzAxLTMnLFxuICAgIHBheXBhbCAgICAgICAgICAgICAgICAgIDogICB7XG4gICAgICAgIG1vZGUgICAgICAgICAgICAgICAgOiAgICdzYW5kYm94J1xuICAgIH0gXG59XG5leHBvcnQgZGVmYXVsdCBjb25maWc7IiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvYnJvd3Nlcic7XG5cblxuXG4gIGV4cG9ydCBjb25zdCBTZW50cnlJbml0aWFsaXplID0gKCkgPT4ge1xuICAgIFNlbnRyeS5pbml0KHtcbiAgICAgICAgZHNuOiBjb25maWcuc2VudHJ5X2RzblxuICAgICAgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4iLCJleHBvcnQgeyBkb19sb2dpbiB9IGZyb20gJy4vYXV0aCc7IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vLi4vdHlwZXMvYXV0aCc7XG5pbXBvcnQgQVBJIGZyb20gJy4uLy4uLy4uL0FwaS9BcGknO1xuaW1wb3J0IHsgZXJyb3IgYXMgbm90aWZ5RXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL25vdGlmeSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQge1NlbnRyeUluaXRpYWxpemUgfSBmcm9tIFwiLi4vLi4vLi4vU2VudHJ5L3NlbnRyeVwiXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcblNlbnRyeUluaXRpYWxpemUoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRvX2xvZ2luKGRhdGEpIHtcbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSAgICAgICAgICAgICA9PiAge1xuICAgICAgICBsZXQgIHNlbmREYXRhICA9ICB7dXNlcm5hbWU6ZGF0YS5lbWFpbCwgcGFzc3dvcmQ6ZGF0YS5wYXNzd29yZH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU4gfSk7XG4gICAgICAgICAgICBjb25zdCByZXMgICAgICAgICAgICAgICAgICAgPSAgIGF3YWl0IEFQSS5wb3N0KCdyZXN0LWF1dGgvbG9naW4vJywgc2VuZERhdGEpXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcihyZXMuZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fRVJST1IgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlckRhdGEgICAgPSAgIHJlcy5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRGF0YScsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBUWVBFLlNJR05JTl9TVUNDRVNTLCBkYXRhOiAgcmVzLmRhdGF9KTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgbm90aWZ5RXJyb3IoJ0ludmFsaWQgcmVxdWVzdCAoNDAxKScpO1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBUWVBFLlNJR05JTl9FUlJPUiB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xuXG5jb25zdCBwcmVmaXggPSAnQEBhdXRoVHlwZXMnO1xuXG5jb25zdCB0eXBlcyA9IHtcbiAgU0lHTlVQOiBudWxsLFxuICBTSUdOVVBfU1VDQ0VTUzogbnVsbCxcbiAgU0lHTlVQX0VSUk9SOiBudWxsLFxuICBTSUdOSU46IG51bGwsXG4gIFNJR05JTl9TVUNDRVNTOiBudWxsLFxuICBTSUdOSU5fRVJST1I6IG51bGwsXG4gIEFERF9ERUxfQUREUjogbnVsbCxcbiAgQUREX0RFTF9BRERSX1NVQ0NFU1M6IG51bGwsXG4gIEFERF9ERUxfQUREUl9FUlJPUjogbnVsbCxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJlZml4ZXIodHlwZXMsIHByZWZpeCk7IiwiaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlZml4ZXIodHlwZXMsIHByZWZpeCkge1xuICByZXR1cm4gcmVkdWNlKHR5cGVzLCAocmVzdWx0LCB2YWx1ZSwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBgJHtwcmVmaXh9LyR7a2V5fWA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG4iLCJpbXBvcnQgeyBub3RpZnkgfSBmcm9tICdyZWFjdC1ub3RpZnktdG9hc3QnO1xuXG5leHBvcnQgY29uc3Qgc3VjY2VzcyA9IChtZXNzYWdlKSA9PiB7XG4gICAgbGV0IG15Q29sb3IgPSB7IGJhY2tncm91bmQ6ICcjMDA4MDAwJywgdGV4dDogXCIjRkZGRkZGXCIsIFwiei1pbmRleFwiOlwiOTk5OTlcIiB9O1xuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDUwMDAsIG15Q29sb3IpOyAgICBcbn1cbi8vIGV4cG9ydCBjb25zdCBlcnJvciA9IChtZXNzYWdlKSA9PiB7XG4vLyAgICAgbGV0IG15Q29sb3IgPSB7IGJhY2tncm91bmQ6ICcjRkI2MDU2JywgdGV4dDogXCIjRkZGRkZGXCIgfTtcbi8vICAgICBub3RpZnkuc2hvdyhtZXNzYWdlLCBcImN1c3RvbVwiLCA1MDAwLCBteUNvbG9yKTtcbi8vIH1cbmV4cG9ydCBjb25zdCBlcnJvciA9IChtZXNzYWdlKSA9PiB7XG4gICAgbGV0IG15Q29sb3IgPSB7IGJhY2tncm91bmQ6ICcjRkI2MDU2JywgdGV4dDogXCIjRkZGRkZGXCIgfTtcbiAgICBsZXQgaCA9XCJ4XCJcbiAgICBub3RpZnkuc2hvdyhtZXNzYWdlLCBcImN1c3RvbVwiLCA1MDAwLCBteUNvbG9yKTtcbn1cbmV4cG9ydCBjb25zdCB3YXJuaW5nID0gKG1lc3NhZ2UpID0+IHtcbiAgICBub3RpZnkuc2hvdyhtZXNzYWdlLCBcIndhcm5pbmdcIiwgNTAwMCk7XG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21lcnJvciA9IChtZXNzYWdlKSA9PiB7XG4gICAgbGV0IG15Q29sb3IgPSB7IGJhY2tncm91bmQ6ICcjZmYwMDAwJywgdGV4dDogXCIjRkZGRkZGXCIgfTtcbiAgICBub3RpZnkuc2hvdyhtZXNzYWdlLCBcImN1c3RvbVwiLCA2MDAwMCwgbXlDb2xvcik7XG59XG5cbmV4cG9ydCBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgIG5vdGlmeS5oaWRlKCk7XG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJztcbmltcG9ydCByZWR1eFN0YXRlIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzJztcblxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9IGNyZWF0ZUxvZ2dlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWR1eFN0b3JlKHsgcHJlbG9hZGVkU3RhdGUsIHNlcnZlciB9ID0ge30pIHtcbiAgbGV0IGVuaGFuY2VyO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFzZXJ2ZXIpIHtcbiAgICBlbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmUpO1xuICB9IGVsc2Uge1xuICAgIGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdXhTdGF0ZSwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBzaWdudXAgZnJvbSAnLi9hdXRoJztcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSc7XG5cblxuXG5jb25zdCByZWR1eFN0YXRlID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBIb21lLFxuICAgIGhlYWRlcixcbiAgICBzaWdudXAsXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1eFN0YXRlOyIsImltcG9ydCBUWVBFIGZyb20gJy4uL3R5cGVzL2hlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IG51bGwsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUWVBFLlJFUV9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlLCBIZWFkZXJkYXRhOiB7fSB9O1xuICAgIGNhc2UgVFlQRS5SRVNfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzpmYWxzZSwgSGVhZGVyZGF0YTogYWN0aW9uLmRhdGF9O1xuICAgIGNhc2UgVFlQRS5GQUlMX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBIZWFkZXJkYXRhOiB7fX07XG5cbiAgICAgIGNhc2UgVFlQRS5SRVFfQUREUkVTU19EQVRBOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIEFkcmVzc2RhdGE6IHt9IH07XG4gICAgICAgIGNhc2UgVFlQRS5SRVNfQUREUkVTU19EQVRBOlxuICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzpmYWxzZSwgQWRyZXNzZGF0YTogYWN0aW9uLmRhdGF9O1xuXG4gICAgICBjYXNlIFRZUEUuRkFJTF9BRERSRVNTX0RBVEE6XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogZmFsc2UsIEFkcmVzc2RhdGE6IHt9fTtcbiAgIFxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAaGVhZGVyVHlwZXMnO1xuXG5jb25zdCB0eXBlcyA9IHtcbiAgUkVRX0RBVEE6IG51bGwsXG4gIFJFU19EQVRBOiBudWxsLFxuICBGQUlMX0RBVEE6IG51bGwsXG4gIFJFUV9BRERSRVNTX0RBVEE6IG51bGwsXG4gIFJFU19BRERSRVNTX0RBVEE6IG51bGwsXG4gIEZBSUxfQUREUkVTU19EQVRBOiBudWxsLFxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCBUWVBFIGZyb20gJy4uL3R5cGVzL2F1dGgnO1xubGV0IHVzZXJEYXRhICAgID0ge307XG4vL2lmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgdXNlckRhdGEgICAgICAgICAgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSB8fCAne30nKSA6IHt9O1xuLy99XG5jb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5sZXQgaW5pdGlhbFN0YXRlICAgID0gICB7XG4gIHVzZXJEYXRhOiB7Li4udXNlckRhdGF9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRZUEUuU0lHTlVQOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOiB0cnVlLCBpc1N1Y2Nlc3M6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuU0lHTlVQX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6ZmFsc2UsIGlzU3VjY2VzczogdHJ1ZSwgdXNlckRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuU0lHTlVQX0VSUk9SOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOiBmYWxzZSwgaXNTdWNjZXNzOiBmYWxzZX07XG4gICAgY2FzZSBUWVBFLlNJR05JTjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogdHJ1ZSwgaXNTdWNjZXNzOiBmYWxzZX07XG4gICAgY2FzZSBUWVBFLlNJR05JTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOmZhbHNlLCBpc1N1Y2Nlc3M6IHRydWUsIHVzZXJEYXRhOiBhY3Rpb24uZGF0YX07XG4gICAgY2FzZSBUWVBFLlNJR05JTl9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogZmFsc2UsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5BRERfREVMX0FERFI6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0FkZHJlc3NFcnJvcjogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5BRERfREVMX0FERFJfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzQWRkcmVzc0Vycm9yOiBmYWxzZX07XG4gICAgY2FzZSBUWVBFLkFERF9ERUxfQUREUl9FUlJPUjpcbiAgICByZXR1cm4gey4uLnN0YXRlLCBpc0FkZHJlc3NFcnJvcjogdHJ1ZX07IFxuICAgXG4gICAgZGVmYXVsdDogcmV0dXJuIHsuLi5zdGF0ZSwgLi4uaW5pdGlhbFN0YXRlfTtcbiAgfVxufSIsImltcG9ydCBUWVBFIGZyb20gJy4uL3R5cGVzL2hvbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVFlQRS5SRVFfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSwgSG9tZWRhdGE6IHt9IH07XG4gICAgY2FzZSBUWVBFLlJFU19EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOmZhbHNlLCBIb21lZGF0YTogYWN0aW9uLmRhdGF9O1xuICAgIGNhc2UgVFlQRS5GQUlMX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBIb21lZGF0YToge319O1xuICAgXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG59IiwiaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xuXG5jb25zdCBwcmVmaXggPSAnQEBob21lVHlwZXMnO1xuXG5jb25zdCB0eXBlcyA9IHtcbiAgUkVRX0RBVEE6IG51bGwsXG4gIFJFU19EQVRBOiBudWxsLFxuICBGQUlMX0RBVEE6IG51bGwsXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJlZml4ZXIodHlwZXMsIHByZWZpeCk7Il0sInNvdXJjZVJvb3QiOiIifQ==