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
/******/ 		"main": 0
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
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/home/home.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/home/home.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/universal/global.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/universal/global.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html, body{  overflow-x: hidden; scroll-behavior: smooth;}\n*{padding: 0; margin: 0; outline: 0;  -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}\nbody{font-family: 'Source Sans Pro', sans-serif; font-size: 14px; font-weight: 400; line-height: 18px; color: #333333;}\n\nimg{max-width: 100%;}\nfigure{padding: 0; margin: 0; display: inline-block;}\na{color: #209DE2;}\na:hover{text-decoration: none; color: #209DE2;}\n \n\n.cTable {border-collapse: collapse; width: 100%; border-bottom: 1px solid #ccc;}\n.cTable th{position: relative;}\n.cTable th i{position: absolute; right: 15px; top: 15px; cursor: pointer;}\n.cTable th, .cTable td {padding: 15px; border: 1px solid #ccc; border-bottom: none; position: relative;}\n.cTable.oneCol th, .cTable.oneCol td, .cTable.oneCol .subTable td{width: 72%;}\n.cTable.twoCol th, .cTable.twoCol td, .cTable.twoCol .subTable td{width: 54%;}\n.cTable.threeCol th, .cTable.threeCol td, .cTable.threeCol .subTable td{width: 36%;}\n.cTable.fourCol th, .cTable.fourCol td, .cTable.fourCol .subTable td{width: 18%;}\n\n.cTable th:first-child, .cTable td:first-child{ width: 28%;}\n.cTable th{text-align: center;}\n.cTable th span{display: block; font-size: 12px;}\n\n.closeSec{position: absolute; right: 15px; color: #FB6056; cursor: pointer;}\n\n.cTable td.st{padding: 0; border-top: none; border-bottom: none;} \n.subTable{width: 100%; display: none;}\n.stOpen .subTable{ display:table;}\n.subTable tr:nth-child(odd) {background-color: #f2f2f2;}\n.subTable td{width: 18%;}\n.subTable td:first-child{ width: 28%!important;}\n\n.tac{text-align: center;}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/app/App.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/components/app/App.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/not-found/NotFound.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/components/not-found/NotFound.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".NotFound__NotFound___2zcpB {\n  color: inherit; }\n", "",{"version":3,"sources":["NotFound.scss"],"names":[],"mappings":"AAAA;EACE,cAAc,EAAE","file":"NotFound.scss","sourcesContent":[".NotFound {\n  color: inherit; }\n"]}]);

// Exports
exports.locals = {
	"NotFound": "NotFound__NotFound___2zcpB"
};

/***/ }),

/***/ "./src/Api/Api.js":
/*!************************!*\
  !*** ./src/Api/Api.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cookies */ "./src/util/cookies.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
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

/***/ "./src/Sentry/sentry.js":
/*!******************************!*\
  !*** ./src/Sentry/sentry.js ***!
  \******************************/
/*! exports provided: SentryInitialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryInitialize", function() { return SentryInitialize; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");


var SentryInitialize = function SentryInitialize() {
  _sentry_browser__WEBPACK_IMPORTED_MODULE_1__["init"]({
    dsn: _config__WEBPACK_IMPORTED_MODULE_0__["default"].sentry_dsn
  });
};

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _universal_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../universal/routes */ "./src/universal/routes.js");
/* harmony import */ var _universal_createReduxStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../universal/createReduxStore */ "./src/universal/createReduxStore.js");





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

/***/ "./src/components/app/App.js":
/*!***********************************!*\
  !*** ./src/components/app/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.scss */ "./src/components/app/App.scss");
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

/***/ "./src/components/app/App.scss":
/*!*************************************!*\
  !*** ./src/components/app/App.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/app/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/app/index.js":
/*!*************************************!*\
  !*** ./src/components/app/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/components/app/App.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _App__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/home/home.css":
/*!**************************************!*\
  !*** ./src/components/home/home.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/home/home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/home/home.js":
/*!*************************************!*\
  !*** ./src/components/home/home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _util_helperfunc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/helperfunc */ "./src/util/helperfunc.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home.css */ "./src/components/home/home.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
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

/***/ "./src/components/home/index.js":
/*!**************************************!*\
  !*** ./src/components/home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/components/home/home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/not-found/NotFound.js":
/*!**********************************************!*\
  !*** ./src/components/not-found/NotFound.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NotFound_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotFound.scss */ "./src/components/not-found/NotFound.scss");
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

/***/ "./src/components/not-found/NotFound.scss":
/*!************************************************!*\
  !*** ./src/components/not-found/NotFound.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js!./NotFound.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/components/not-found/NotFound.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/not-found/index.js":
/*!*******************************************!*\
  !*** ./src/components/not-found/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound */ "./src/components/not-found/NotFound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NotFound__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/config sync recursive ^\\.\\/.*\\.js$":
/*!**************************************!*\
  !*** ./src/config sync ^\.\/.*\.js$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.js": "./src/config/development.js",
	"./index.js": "./src/config/index.js",
	"./staging.js": "./src/config/staging.js"
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
webpackContext.id = "./src/config sync recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./src/config/development.js":
/*!***********************************!*\
  !*** ./src/config/development.js ***!
  \***********************************/
/*! exports provided: default */
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

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 //process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // staging | development | production
//process.env.PORT = process.env.PORT || 8080;
//const env     = (process.env.NODE_ENV)?process.env.NODE_ENV:'development';
//const env       = 'staging';

var env = '';
if (false) {}else if (true) env = 'staging';else {}
var config = {
  //env: process.env.NODE_ENV || 'development',
  env: env,
  port: process.env.PORT || 8081
}; //console.log(process.env.NODE_ENV, _.extend(config, require('./' + env + '.js').default || {}))

/* harmony default export */ __webpack_exports__["default"] = (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(config, __webpack_require__("./src/config sync recursive ^\\.\\/.*\\.js$")("./" + env + ".js").default || {}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/config/staging.js":
/*!*******************************!*\
  !*** ./src/config/staging.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  foodjetsUrl: 'http://dev.foodjets.com',
  api_end: '/api/',
  GTM_code: 'GTM-THNGPH6',
  GSTM_code: 'UA-65554301-3',
  sentry_dsn: 'https://2b2029ae283e4a6aa9e72ec5979ff585@sentry.io/1546471',
  firebase: {
    apiKey: "AIzaSyBo2UVHKB2honDutQGN_tyYSsG4lZ5BMi4",
    authDomain: "foodjets-dev.firebaseapp.com",
    databaseURL: "https://foodjets-dev.firebaseio.com",
    projectId: "foodjets-dev",
    storageBucket: "foodjets-dev.appspot.com",
    messagingSenderId: "687940236129"
  },
  paypal: {
    mode: 'sandbox'
  }
}; //console.log('Staging : ', config);

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/containers/App.js":
/*!*******************************!*\
  !*** ./src/containers/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/app */ "./src/components/app/index.js");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({}, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_app__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/containers/Home.js":
/*!********************************!*\
  !*** ./src/containers/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home */ "./src/components/home/index.js");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/auth */ "./src/redux/actions/auth/index.js");





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

/***/ "./src/containers/NotFound.js":
/*!************************************!*\
  !*** ./src/containers/NotFound.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/not-found */ "./src/components/not-found/index.js");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])({}, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_not_found__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/redux/actions/auth/auth.js":
/*!****************************************!*\
  !*** ./src/redux/actions/auth/auth.js ***!
  \****************************************/
/*! exports provided: do_login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "do_login", function() { return do_login; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/auth */ "./src/redux/types/auth.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Api/Api */ "./src/Api/Api.js");
/* harmony import */ var _util_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/notify */ "./src/util/notify.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config */ "./src/config/index.js");
/* harmony import */ var _Sentry_sentry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Sentry/sentry */ "./src/Sentry/sentry.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
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

/***/ "./src/redux/actions/auth/index.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/auth/index.js ***!
  \*****************************************/
/*! exports provided: do_login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/redux/actions/auth/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "do_login", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["do_login"]; });



/***/ }),

/***/ "./src/redux/reducers/auth.js":
/*!************************************!*\
  !*** ./src/redux/reducers/auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/auth */ "./src/redux/types/auth.js");
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

/***/ "./src/redux/reducers/header.js":
/*!**************************************!*\
  !*** ./src/redux/reducers/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/header */ "./src/redux/types/header.js");
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

/***/ "./src/redux/reducers/home.js":
/*!************************************!*\
  !*** ./src/redux/reducers/home.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/home */ "./src/redux/types/home.js");
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

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/redux/reducers/header.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/redux/reducers/auth.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/redux/reducers/home.js");




var reduxState = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  Home: _home__WEBPACK_IMPORTED_MODULE_3__["default"],
  header: _header__WEBPACK_IMPORTED_MODULE_1__["default"],
  signup: _auth__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reduxState);

/***/ }),

/***/ "./src/redux/types/auth.js":
/*!*********************************!*\
  !*** ./src/redux/types/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefixer */ "./src/redux/types/prefixer.js");

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

/***/ "./src/redux/types/header.js":
/*!***********************************!*\
  !*** ./src/redux/types/header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefixer */ "./src/redux/types/prefixer.js");

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

/***/ "./src/redux/types/home.js":
/*!*********************************!*\
  !*** ./src/redux/types/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefixer */ "./src/redux/types/prefixer.js");

var prefix = '@@homeTypes';
var types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_prefixer__WEBPACK_IMPORTED_MODULE_0__["default"])(types, prefix));

/***/ }),

/***/ "./src/redux/types/prefixer.js":
/*!*************************************!*\
  !*** ./src/redux/types/prefixer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixer; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);


function prefixer(types, prefix) {
  return lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()(types, function (result, value, key) {
    result[key] = "".concat(prefix, "/").concat(key); // eslint-disable-line no-param-reassign

    return result;
  }, {});
}

/***/ }),

/***/ "./src/universal/createReduxStore.js":
/*!*******************************************!*\
  !*** ./src/universal/createReduxStore.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReduxStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers */ "./src/redux/reducers/index.js");




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

/***/ "./src/universal/global.css":
/*!**********************************!*\
  !*** ./src/universal/global.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/universal/global.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/universal/routes.js":
/*!*********************************!*\
  !*** ./src/universal/routes.js ***!
  \*********************************/
/*! exports provided: routes, publicroutes, privateRoutes, protectedRoutes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicroutes", function() { return publicroutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privateRoutes", function() { return privateRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protectedRoutes", function() { return protectedRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/App */ "./src/containers/App.js");
/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/cookies */ "./src/util/cookies.js");
/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../containers/NotFound */ "./src/containers/NotFound.js");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global.css */ "./src/universal/global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_notify_toast__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/Home */ "./src/containers/Home.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Sentry_sentry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Sentry/sentry */ "./src/Sentry/sentry.js");





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

/***/ "./src/util/cookies.js":
/*!*****************************!*\
  !*** ./src/util/cookies.js ***!
  \*****************************/
/*! exports provided: setCookie, setLifetimeCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLifetimeCookie", function() { return setLifetimeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
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

/***/ "./src/util/helperfunc.js":
/*!********************************!*\
  !*** ./src/util/helperfunc.js ***!
  \********************************/
/*! exports provided: convertFloatTwoDecimal, convertTwoDecimalRound, logErrorToServer, addressFormater, isValidEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFloatTwoDecimal", function() { return convertFloatTwoDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTwoDecimalRound", function() { return convertTwoDecimalRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logErrorToServer", function() { return logErrorToServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressFormater", function() { return addressFormater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEmail", function() { return isValidEmail; });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Api/Api */ "./src/Api/Api.js");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _Sentry_sentry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Sentry/sentry */ "./src/Sentry/sentry.js");









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

/***/ "./src/util/notify.js":
/*!****************************!*\
  !*** ./src/util/notify.js ***!
  \****************************/
/*! exports provided: success, error, warning, customerror, hide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerror", function() { return customerror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony import */ var react_notify_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-notify-toast */ "./node_modules/react-notify-toast/bin/notify.js");
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

/***/ 0:
/*!*******************************************!*\
  !*** multi core-js ./src/client/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js */"./node_modules/core-js/index.js");
module.exports = __webpack_require__(/*! ./src/client/index.js */"./src/client/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9BcGkvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9TZW50cnkvc2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvQXBwLnNjc3M/MTQxYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmNzcz9lYjRkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ub3QtZm91bmQvTm90Rm91bmQuc2Nzcz84YzI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIHN5bmMgXlxcLlxcLy4qXFwuanMkIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3N0YWdpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aC9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvdHlwZXMvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jcmVhdGVSZWR1eFN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvZ2xvYmFsLmNzcz8xZGZkIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaGVscGVyZnVuYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9ub3RpZnkuanMiXSwibmFtZXMiOlsiQVBJX1VSTCIsIkFQSSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImF1dGgiLCJ3aW5kb3ciLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfIiwiaXNFbXB0eSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJTZW50cnlJbml0aWFsaXplIiwiU2VudHJ5IiwiZHNuIiwiY29uZmlnIiwic2VudHJ5X2RzbiIsInByZWxvYWRlZFN0YXRlIiwiX19QUkVMT0FERURfU1RBVEVfXyIsInN0b3JlIiwiY3JlYXRlUmVkdXhTdG9yZSIsImh5ZHJhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXBwIiwic3R5bGVzIiwiVG9wQmFyIiwiTGluayIsInByb3BzIiwiY2hpbGRyZW4iLCJGb290ZXIiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImhvbWUiLCJkZWZhdWx0RXJyb3JzIiwiZW1haWwiLCJwYXNzd29yZCIsInN0YXRlIiwiZmFxRGF0YSIsImlzTG9hZGluZyIsIm1vZGFsIiwidHlwZVBhc3MiLCJmb3JtRGF0YSIsInByb2R1Y3RfZGVzY3JpcHRpb24iLCJmdW5kaW5nX2hpc3RvcnkiLCJjb21wYW55X2luZm8iLCJmZXRhdXJlcyIsImN1c3RvbWVyX2Nhc2Vfc3R1ZHkiLCJvdmVyYWxsX3Njb29yIiwiYm94X2hlYWRlciIsImNvbHVtRGF0YSIsInRleHQiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJzdWJpdGVtcyIsIkZvdW5kZWQiLCJLZXlJbnZlc3RvcnMiLCJGb3VuZGVycyIsImhpZGVDbGFzcyIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJvbkNoYW5nZUhhbmRsZSIsImRlbGV0ZUNvbHVtIiwidG9vZ2xlQ2xhc3MiLCJkZWxldGVSb3ciLCJyb3duYW1lIiwic3dhbCIsInRpdGxlIiwiaWNvbiIsImJ1dHRvbnMiLCJkYW5nZXJNb2RlIiwidGhlbiIsIndpbGxEZWxldGUiLCJtYXAiLCJjZGF0YSIsImluZGV4IiwiT2JqZWN0Iiwia2V5cyIsIm9uZUtleSIsImkiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJpZCIsImZpbHRlciIsImxlbmd0aCIsIiQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiaXNTdWNjZXNzIiwiZXJyb3JzIiwiaXNFcnJvciIsImNvbFNwYW4iLCJjb2xTcGFuVGQiLCJzdWJkYXRhIiwiaXRlbSIsIk5vdEZvdW5kIiwiZm9vZGpldHNVcmwiLCJhcGlfZW5kIiwiR1RNX2NvZGUiLCJHU1RNX2NvZGUiLCJwYXlwYWwiLCJtb2RlIiwiZW52IiwicHJvY2VzcyIsInBvcnQiLCJQT1JUIiwiZXh0ZW5kIiwicmVxdWlyZSIsImRlZmF1bHQiLCJmaXJlYmFzZSIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0Iiwic2lnbnVwIiwiZG9fbG9naW4iLCJIb21lIiwic2VuZERhdGEiLCJ1c2VybmFtZSIsInR5cGUiLCJUWVBFIiwiU0lHTklOIiwicG9zdCIsInJlcyIsImVycm9yIiwibm90aWZ5RXJyb3IiLCJTSUdOSU5fRVJST1IiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiU0lHTklOX1NVQ0NFU1MiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJTSUdOVVAiLCJpc1Byb2Nlc3NpbmciLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9FUlJPUiIsIkFERF9ERUxfQUREUiIsImlzQWRkcmVzc0Vycm9yIiwiQUREX0RFTF9BRERSX1NVQ0NFU1MiLCJBRERfREVMX0FERFJfRVJST1IiLCJSRVFfREFUQSIsIkhlYWRlcmRhdGEiLCJSRVNfREFUQSIsIkZBSUxfREFUQSIsIlJFUV9BRERSRVNTX0RBVEEiLCJBZHJlc3NkYXRhIiwiUkVTX0FERFJFU1NfREFUQSIsIkZBSUxfQUREUkVTU19EQVRBIiwiSG9tZWRhdGEiLCJyZWR1eFN0YXRlIiwiY29tYmluZVJlZHVjZXJzIiwiaGVhZGVyIiwicHJlZml4IiwidHlwZXMiLCJwcmVmaXhlciIsInJlZHVjZSIsInJlc3VsdCIsImxvZ2dlck1pZGRsZXdhcmUiLCJjcmVhdGVMb2dnZXIiLCJzZXJ2ZXIiLCJlbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicm91dGVzIiwicGF0aCIsImV4YWN0IiwiY29tcG9uZW50IiwicHVibGljcm91dGVzIiwicHJpdmF0ZVJvdXRlcyIsInByb3RlY3RlZFJvdXRlcyIsIlJvdXRlciIsImhpZGVIZWFkIiwidXJsIiwiY3VycmVudEFkZHJlc3MiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJyb3V0ZSIsIlB1YmxpY1JvdXRlIiwicmVzdCIsIm9iaiIsInByZXZQYXRoIiwiUHJpdmF0ZVJvdXRlIiwiUHJvdGVjdGVkUm91dGUiLCJzZXRDb29raWUiLCJDb29raWVzIiwic2V0Iiwic2V0TGlmZXRpbWVDb29raWUiLCJkYXkiLCJleHBpcmVzIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0SlNPTiIsImNvbnZlcnRGbG9hdFR3b0RlY2ltYWwiLCJudW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNvbnZlcnRUd29EZWNpbWFsUm91bmQiLCJNYXRoIiwicm91bmQiLCJsb2dFcnJvclRvU2VydmVyIiwicGFyYW1zIiwiaW52YWxpZFVybCIsImFkZGl0aW9uYWxJbmZvIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZXF1ZXN0IiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJocmVmIiwiYWRkcmVzc0Zvcm1hdGVyIiwicmVnZXgiLCJhZGRyZXNzIiwibWF0Y2giLCJpbmRleE9mIiwiZm9ybWF0dGVkQWRkcmVzcyIsIm1vZEFkZHJlc3MiLCJ0ZXN0IiwiX2FkZHJlc3MiLCJ2YWxpZEFkcnMiLCJudW1iZXIiLCJzdHJlZXQiLCJjaXR5IiwiY291bnRyeSIsInN0YXRlX2NvZGUiLCJ6aXBjb2RlIiwiaXNWYWxpZEVtYWlsIiwicGF0dGVybiIsIlN0cmluZyIsInN1Y2Nlc3MiLCJteUNvbG9yIiwiYmFja2dyb3VuZCIsIm5vdGlmeSIsInNob3ciLCJoIiwid2FybmluZyIsImN1c3RvbWVycm9yIiwiaGlkZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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U09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keXsgIG92ZXJmbG93LXg6IGhpZGRlbjsgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7fVxcbip7cGFkZGluZzogMDsgbWFyZ2luOiAwOyBvdXRsaW5lOiAwOyAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7fVxcbmJvZHl7Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA0MDA7IGxpbmUtaGVpZ2h0OiAxOHB4OyBjb2xvcjogIzMzMzMzMzt9XFxuXFxuaW1ne21heC13aWR0aDogMTAwJTt9XFxuZmlndXJle3BhZGRpbmc6IDA7IG1hcmdpbjogMDsgZGlzcGxheTogaW5saW5lLWJsb2NrO31cXG5he2NvbG9yOiAjMjA5REUyO31cXG5hOmhvdmVye3RleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6ICMyMDlERTI7fVxcbiBcXG5cXG4uY1RhYmxlIHtib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB3aWR0aDogMTAwJTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7fVxcbi5jVGFibGUgdGh7cG9zaXRpb246IHJlbGF0aXZlO31cXG4uY1RhYmxlIHRoIGl7cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTVweDsgdG9wOiAxNXB4OyBjdXJzb3I6IHBvaW50ZXI7fVxcbi5jVGFibGUgdGgsIC5jVGFibGUgdGQge3BhZGRpbmc6IDE1cHg7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IGJvcmRlci1ib3R0b206IG5vbmU7IHBvc2l0aW9uOiByZWxhdGl2ZTt9XFxuLmNUYWJsZS5vbmVDb2wgdGgsIC5jVGFibGUub25lQ29sIHRkLCAuY1RhYmxlLm9uZUNvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDcyJTt9XFxuLmNUYWJsZS50d29Db2wgdGgsIC5jVGFibGUudHdvQ29sIHRkLCAuY1RhYmxlLnR3b0NvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDU0JTt9XFxuLmNUYWJsZS50aHJlZUNvbCB0aCwgLmNUYWJsZS50aHJlZUNvbCB0ZCwgLmNUYWJsZS50aHJlZUNvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDM2JTt9XFxuLmNUYWJsZS5mb3VyQ29sIHRoLCAuY1RhYmxlLmZvdXJDb2wgdGQsIC5jVGFibGUuZm91ckNvbCAuc3ViVGFibGUgdGR7d2lkdGg6IDE4JTt9XFxuXFxuLmNUYWJsZSB0aDpmaXJzdC1jaGlsZCwgLmNUYWJsZSB0ZDpmaXJzdC1jaGlsZHsgd2lkdGg6IDI4JTt9XFxuLmNUYWJsZSB0aHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxcbi5jVGFibGUgdGggc3BhbntkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxMnB4O31cXG5cXG4uY2xvc2VTZWN7cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTVweDsgY29sb3I6ICNGQjYwNTY7IGN1cnNvcjogcG9pbnRlcjt9XFxuXFxuLmNUYWJsZSB0ZC5zdHtwYWRkaW5nOiAwOyBib3JkZXItdG9wOiBub25lOyBib3JkZXItYm90dG9tOiBub25lO30gXFxuLnN1YlRhYmxle3dpZHRoOiAxMDAlOyBkaXNwbGF5OiBub25lO31cXG4uc3RPcGVuIC5zdWJUYWJsZXsgZGlzcGxheTp0YWJsZTt9XFxuLnN1YlRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cXG4uc3ViVGFibGUgdGR7d2lkdGg6IDE4JTt9XFxuLnN1YlRhYmxlIHRkOmZpcnN0LWNoaWxkeyB3aWR0aDogMjglIWltcG9ydGFudDt9XFxuXFxuLnRhY3t0ZXh0LWFsaWduOiBjZW50ZXI7fVxcblxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQXBwX19BcHBfX19WdHdCdCB7XFxuICBmb250LXNpemU6IDEuNWVtOyB9XFxuXFxuLkFwcF9fVG9wQmFyX19fM3l1OUYge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5BcHBfX0xpbmtfX18yNTRZciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5BcHBfX0xpbmtfX18yNTRZciArIC5BcHBfX0xpbmtfX18yNTRZciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7IH1cXG5cXG4uQXBwX19Gb290ZXJfX18xMWZmcSB7XFxuICBjb2xvcjogI0FBQUFBQTsgfVxcblxcbi5BcHBfX2FsaWduLWl0ZW1zLWNlbnRlcl9fX0JSMjBuIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCA1JTsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5BcHBfX2FsaWduLWl0ZW1zLWNlbnRlcl9fX0JSMjBuIGgyIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDA7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkFwcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUU7O0FBRXBCO0VBQ0UsYUFBYSxFQUFFOztBQUVqQjtFQUNFLHFCQUFxQixFQUFFO0VBQ3ZCO0lBQ0UsZ0JBQWdCLEVBQUU7O0FBRXRCO0VBQ0UsY0FBYyxFQUFFOztBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYSxFQUFFOztBQUVqQjtFQUNFO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVSxFQUFFLEVBQUVcIixcImZpbGVcIjpcIkFwcC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5BcHAge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbi5Ub3BCYXIge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5MaW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLkxpbmsgKyAuTGluayB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7IH1cXG5cXG4uRm9vdGVyIHtcXG4gIGNvbG9yOiAjQUFBQUFBOyB9XFxuXFxuLmFsaWduLWl0ZW1zLWNlbnRlciBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgNSU7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAuYWxpZ24taXRlbXMtY2VudGVyIGgyIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgIHBhZGRpbmc6IDA7IH0gfVxcblwiXX1dKTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiQXBwXCI6IFwiQXBwX19BcHBfX19WdHdCdFwiLFxuXHRcIlRvcEJhclwiOiBcIkFwcF9fVG9wQmFyX19fM3l1OUZcIixcblx0XCJMaW5rXCI6IFwiQXBwX19MaW5rX19fMjU0WXJcIixcblx0XCJGb290ZXJcIjogXCJBcHBfX0Zvb3Rlcl9fXzExZmZxXCIsXG5cdFwiYWxpZ24taXRlbXMtY2VudGVyXCI6IFwiQXBwX19hbGlnbi1pdGVtcy1jZW50ZXJfX19CUjIwblwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTm90Rm91bmRfX05vdEZvdW5kX19fMnpjcEIge1xcbiAgY29sb3I6IGluaGVyaXQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJOb3RGb3VuZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYyxFQUFFXCIsXCJmaWxlXCI6XCJOb3RGb3VuZC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5Ob3RGb3VuZCB7XFxuICBjb2xvcjogaW5oZXJpdDsgfVxcblwiXX1dKTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiTm90Rm91bmRcIjogXCJOb3RGb3VuZF9fTm90Rm91bmRfX18yemNwQlwiXG59OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7Z2V0Q29va2llLCBzZXRMaWZldGltZUNvb2tpZX0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cblxuY29uc3QgQVBJX1VSTCAgICAgICAgICAgPSAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCI7XG5cbmNvbnN0IEFQSSAgICAgICAgICAgICAgID0gICBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IEFQSV9VUkxcbn0pXG5BUEkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xubGV0IGF1dGggICAgICAgICAgICAgID0gICAnJztcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgbGV0IHVzZXJEYXRhICAgICAgICAgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSB8fCAne30nKTtcbiAgaWYoIV8uaXNFbXB0eSh1c2VyRGF0YSkpe1xuICAgIGF1dGggICAgICAgICAgICAgID0gICAgJ1Rva2VuICcgKyB1c2VyRGF0YS5rZXk7XG4gIH0gZWxzZXtcbiAgICBhdXRoICAgPSAgXCJcIlxuICB9XG4gXG4gIGNvbnNvbGUubG9nKGF1dGgpO1xuICBBUEkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGF1dGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSTsiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9icm93c2VyJztcblxuXG5cbiAgZXhwb3J0IGNvbnN0IFNlbnRyeUluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgU2VudHJ5LmluaXQoe1xuICAgICAgICBkc246IGNvbmZpZy5zZW50cnlfZHNuXG4gICAgICB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vdW5pdmVyc2FsL3JvdXRlcyc7XG5pbXBvcnQgY3JlYXRlUmVkdXhTdG9yZSBmcm9tICcuLi91bml2ZXJzYWwvY3JlYXRlUmVkdXhTdG9yZSc7XG5cbi8vIEdyYWIgdGhlIHN0YXRlIGZyb20gYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgaW50byB0aGUgc2VydmVyLWdlbmVyYXRlZCBIVE1MXG5jb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG5cbi8vIEFsbG93IHRoZSBwYXNzZWQgc3RhdGUgdG8gYmUgZ2FyYmFnZS1jb2xsZWN0ZWRcbmRlbGV0ZSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuXG4vLyBDcmVhdGUgUmVkdXggc3RvcmUgd2l0aCBpbml0aWFsIHN0YXRlXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVJlZHV4U3RvcmUoeyBwcmVsb2FkZWRTdGF0ZSB9KTtcblxuaHlkcmF0ZShcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8Um91dGVyIC8+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ub3BCYXJ9PlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9IHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30gdG89XCIvSW52YWxpZExpbmtcIj5JbnZhbGlkTGluazwvTGluaz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfSB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyfT5XaWxsaWFtIFdvb2RoZWFkIC0gTUlUIExpY2Vuc2U8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BcHAnO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBpc1ZhbGlkRW1haWwgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcmZ1bmMnO1xuXG5pbXBvcnQgJy4vaG9tZS5jc3MnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5kZWZhdWx0RXJyb3JzID0ge1xuICAgICAgZW1haWw6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmYXFEYXRhOiBbXSxcbiAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgIHR5cGVQYXNzOiAncGFzc3dvcmQnLFxuICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgZnVuZGluZ19oaXN0b3J5OiBcIlwiLFxuICAgICAgICBjb21wYW55X2luZm86IFwiXCIsXG4gICAgICAgIGZldGF1cmVzOiBcIlwiLFxuICAgICAgICBjdXN0b21lcl9jYXNlX3N0dWR5OiBcIlwiLFxuICAgICAgICBvdmVyYWxsX3Njb29yOiBcIlNjb3JlXCIsXG4gICAgICAgIGJveF9oZWFkZXI6IFwiQm94XCJcblxuICAgICAgfSxcbiAgICAgIGNvbHVtRGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgYm94X2hlYWRlcjoge1xuICAgICAgICAgICAgdGV4dDogXCJCb3hcIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImRhdGFcIlxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvdmVyYWxsX3Njb29yOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIk92ZXJhbGwgU2NvcmVcIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjb3JlXCJcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvZHVjdF9kZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgdGV4dDogXCJQcm9kdWN0IERlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCb3ggaXMgYSBtb2Rlcm4gY29udGVudCBvZiBtYW5hZ2VtZW50XCIsXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuZGluZ19oaXN0b3J5OiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkZ1bmRpbmcgSGlzdG9yeVwiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVG90YWwgRnVuZGluZzogJDE1MG1cIixcblxuXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHN1Yml0ZW1zOiB7XG4gICAgICAgICAgICAgIEZvdW5kZWQ6IFtcIjIwMDVcIl0sXG4gICAgICAgICAgICAgIEtleUludmVzdG9yczogW1wiREZHLCBzY2FsZSwgdmVudHVyZSBwYXJ0bmVyc1wiXSxcbiAgICAgICAgICAgICAgRm91bmRlcnM6IFtcIkFyb25lIExldmllLCBEeWxvbiBzbWl0aFwiXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGFueV9pbmZvOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkNvbXBhbnkgSW5mb1wiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSm9obnNvblwiXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmV0YXVyZXM6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiRmV0YXVyZXNcIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkdvb2RcIlxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1c3RvbWVyX2Nhc2Vfc3R1ZHk6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiQ29tcGFueSBDYXNlIFN0dWR5XCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHb29kIENsaWVudFwiXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGhpZGVDbGFzczogdHJ1ZSxcbiAgICB9XG5cblxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlID0gdGhpcy5vbkNoYW5nZUhhbmRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVsZXRlQ29sdW0gPSB0aGlzLmRlbGV0ZUNvbHVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b29nbGVDbGFzcyA9IHRoaXMudG9vZ2xlQ2xhc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZVJvdyA9IHRoaXMuZGVsZXRlUm93LmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkgeyB9XG5cbiAgZGVsZXRlUm93KHJvd25hbWUpIHtcbiAgICBsZXQgeyBjb2x1bURhdGEsIGZvcm1EYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgc3dhbCh7XG4gICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgIHRvICBkZWxldGUgIHRoaXMgIGl0ZW0/XCIsXG5cbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgIGRhbmdlck1vZGU6IHRydWUsXG4gICAgfSlcbiAgICAgIC50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICAgIGlmICh3aWxsRGVsZXRlKSB7XG5cbiAgICAgICAgICBjb2x1bURhdGEubWFwKChjZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNkYXRhKS5tYXAoKG9uZUtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob25lS2V5ID09IHJvd25hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgY2RhdGFbb25lS2V5XVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmb3JtRGF0YVtyb3duYW1lXTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSxyb3duYW1lLCBmb3JtRGF0YVtyb3duYW1lXSwgZm9ybURhdGFbXCJjb21wYW55X2luZm9cIl0pO1xuICAgICAgICAgICAgICAgIC8vICBkZWxldGUgZm9ybURhdGFbb25lS2V5XVxuICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbHVtRGF0YSxcbiAgICAgICAgICAgIGZvcm1EYXRhXG4gICAgICAgICAgfSwgKCkgPT4ge1xuXG4gICAgICAgICAgICBzd2FsKFwiUG9vZiEgWW91ciBpdGVtaGFzIGJlZW4gZGVsZXRlZCFcIiwge1xuICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG4gIH1cbiAgb25DaGFuZ2VIYW5kbGUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5mb3JtRGF0YSxcbiAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9vZ2xlQ2xhc3MoKSB7XG4gICAgbGV0IHsgaGlkZUNsYXNzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGhpZGVDbGFzcyA9ICFoaWRlQ2xhc3NcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhpZGVDbGFzc1xuICAgIH0pXG4gIH1cblxuICBkZWxldGVDb2x1bShpZCkge1xuICAgIGxldCB7IGNvbHVtRGF0YSB9ID0gdGhpcy5zdGF0ZTtcblxuXG4gICAgc3dhbCh7XG4gICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgIHRvICBkZWxldGUgIHRoaXMgIGl0ZW0/XCIsXG5cbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgIGRhbmdlck1vZGU6IHRydWUsXG4gICAgfSlcbiAgICAgIC50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICAgIGlmICh3aWxsRGVsZXRlKSB7XG5cbiAgICAgICAgICBjb2x1bURhdGEubWFwKChjZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNkYXRhKS5tYXAoKG9uZUtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICBjZGF0YVtvbmVLZXldLmRhdGEgPSBjZGF0YVtvbmVLZXldLmRhdGEuZmlsdGVyKChkYXRhLCBpbmRleCkgPT4gaWQgIT0gaW5kZXgpXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2x1bURhdGFcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBzd2FsKFwiUG9vZiEgWW91ciBpdGVtaGFzIGJlZW4gZGVsZXRlZCFcIiwge1xuICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG4gICAgICB9KTtcblxuICB9XG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBsZXQgeyBmb3JtRGF0YSwgY29sdW1EYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcblxuICAgIGxldCB7IG92ZXJhbGxfc2Nvb3IsIGJveF9oZWFkZXIsIHByb2R1Y3RfZGVzY3JpcHRpb24sIGZ1bmRpbmdfaGlzdG9yeSwgZmV0YXVyZXMsIGN1c3RvbWVyX2Nhc2Vfc3R1ZHksIGNvbXBhbnlfaW5mbyB9ID0gZm9ybURhdGE7XG5cblxuXG5cbiAgICBjb2x1bURhdGEubWFwKChjZGF0YSwgaW5kZXgpID0+IHtcbiAgICBcbiAgICAgIGlmICggISEoY2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbikgJiYgY2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgc3dhbCh7XG4gICAgICAgICAgdGl0bGU6IFwiWW91IGNhbnQgYWRkIG1vcmUgIHRoYW4gIDMgIGl0ZW1zXCIsXG5cbiAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgICBmdW5kaW5nX2hpc3Rvcnk6IFwiXCIsXG4gICAgICAgICAgICBjb21wYW55X2luZm86IFwiXCIsXG4gICAgICAgICAgICBmZXRhdXJlczogXCJcIixcbiAgICAgICAgICAgIGN1c3RvbWVyX2Nhc2Vfc3R1ZHk6IFwiXCIsXG4gICAgICAgICAgICBvdmVyYWxsX3Njb29yOiBcIlNjb3JlXCIsXG4gICAgICAgICAgICBib3hfaGVhZGVyOiBcIkJveFwiXG5cbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAkKFwiI25ld1ZlbmRvclwiKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoY2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEucHVzaCh7IGRlc2NyaXB0aW9uOiBwcm9kdWN0X2Rlc2NyaXB0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZGF0YS5mdW5kaW5nX2hpc3RvcnkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2RhdGEuZnVuZGluZ19oaXN0b3J5LmRhdGEucHVzaCh7IGRlc2NyaXB0aW9uOiBmdW5kaW5nX2hpc3RvcnkgfSk7XG4gICAgICAgICAgT2JqZWN0LmtleXMoY2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zKS5tYXAoKG9uZUtleSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uZUtleSA9PSBcIkZvdW5kZWRcIikge1xuICAgICAgICAgICAgICBjZGF0YS5mdW5kaW5nX2hpc3Rvcnkuc3ViaXRlbXNbb25lS2V5XS5wdXNoKFwiMjAwNVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uZUtleSA9PSBcIktleUludmVzdG9yc1wiKSB7XG4gICAgICAgICAgICAgIGNkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtc1tvbmVLZXldLnB1c2goXCJERkcsIHNjYWxlLCB2ZW50dXJlIHBhcnRuZXJzXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25lS2V5ID09IFwiRm91bmRlcnNcIikge1xuICAgICAgICAgICAgICBjZGF0YS5mdW5kaW5nX2hpc3Rvcnkuc3ViaXRlbXNbb25lS2V5XS5wdXNoKFwiQXJvbmUgTGV2aWUsIER5bG9uIHNtaXRoXCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNkYXRhLmZldGF1cmVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNkYXRhLmZldGF1cmVzLmRhdGEucHVzaCh7IGRlc2NyaXB0aW9uOiBmZXRhdXJlcyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2RhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjZGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5LmRhdGEucHVzaCh7IGRlc2NyaXB0aW9uOiBjdXN0b21lcl9jYXNlX3N0dWR5IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZGF0YS5jb21wYW55X2luZm8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2RhdGEuY29tcGFueV9pbmZvLmRhdGEucHVzaCh7IGRlc2NyaXB0aW9uOiBjb21wYW55X2luZm8gfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjZGF0YS5vdmVyYWxsX3Njb29yLmRhdGEucHVzaCh7IGRlc2NyaXB0aW9uOiBvdmVyYWxsX3Njb29yIH0pO1xuICAgICAgICBjZGF0YS5ib3hfaGVhZGVyLmRhdGEucHVzaCh7IGRlc2NyaXB0aW9uOiBib3hfaGVhZGVyIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjb2x1bURhdGEsXG4gICAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgICBmdW5kaW5nX2hpc3Rvcnk6IFwiXCIsXG4gICAgICAgICAgICBjb21wYW55X2luZm86IFwiXCIsXG4gICAgICAgICAgICBmZXRhdXJlczogXCJcIixcbiAgICAgICAgICAgIGN1c3RvbWVyX2Nhc2Vfc3R1ZHk6IFwiXCIsXG4gICAgICAgICAgICBvdmVyYWxsX3Njb29yOiBcIlNjb3JlXCIsXG4gICAgICAgICAgICBib3hfaGVhZGVyOiBcIkJveFwiXG5cbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAkKFwiI25ld1ZlbmRvclwiKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9KVxuXG5cblxuICB9XG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgaWYgKCEhcHJvcHMuZGF0YSAmJiAhIXByb3BzLmRhdGEuaXNTdWNjZXNzKSB7XG5cblxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBsZXQgZm9ybURhdGEgPSB0aGlzLnN0YXRlLmZvcm1EYXRhIHx8IHt9O1xuICAgIGxldCBlcnJvcnMgPSB7IC4uLnRoaXMuZGVmYXVsdEVycm9ycyB9O1xuICAgIGxldCBpc0Vycm9yID0gZmFsc2U7XG4gICAgaWYgKCEhIWZvcm1EYXRhLmVtYWlsKSB7XG4gICAgICBlcnJvcnMuZW1haWwgPSB0cnVlO1xuICAgICAgaXNFcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICghISFmb3JtRGF0YS5wYXNzd29yZCkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIGlzRXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoISFmb3JtRGF0YS5wYXNzd29yZCAmJiBmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGggPCA0KSB7XG4gICAgICBlcnJvcnMucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgaXNFcnJvciA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7IGlzRXJyb3I6IGlzRXJyb3IsIGVycm9yczogZXJyb3JzIH07XG4gIH1cblxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY29sdW1EYXRhLCBmb3JtRGF0YSwgaGlkZUNsYXNzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICBsZXQgY29sU3BhbiA9IFwiXCI7XG4gICAgbGV0IGNvbFNwYW5UZCA9IDI7XG4gICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICBjb2xTcGFuVGQgPSAoISFkYXRhLmZ1bmRpbmdfaGlzdG9yeSk/IGRhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zLkZvdW5kZWQubGVuZ3RoICsgMToyO1xuXG4gICAgICBpZiAoISFkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24gJiYgZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEubGVuZ3RoID09IDEpIHtcbiAgICAgICAgY29sU3BhbiA9IFwidHdvQ29sXCJcbiAgICAgIH1cbiAgICAgIGlmICghIWRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbiAmJiBkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGggPT0gMikge1xuICAgICAgICBjb2xTcGFuID0gXCJ0aHJlZUNvbFwiXG4gICAgICB9XG4gICAgICBpZiAoISFkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24gJiYgZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEubGVuZ3RoID09IDMpIHtcbiAgICAgICAgY29sU3BhbiA9IFwiZm91ckNvbFwiXG4gICAgICB9XG4gICAgICAvLyBpZihkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGg9PTQpe1xuICAgICAgLy8gICBjb2xTcGFuPSBcImZvdXJDb2xcIlxuICAgICAgLy8gfVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5wXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2BjVGFibGUgJHtjb2xTcGFufWB9PlxuICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNuZXdWZW5kb3JcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hZGQtbmV3LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+QWRkIE5ldyBWZW5kb3I8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvdGg+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5ib3hfaGVhZGVyKSA/IDw+XG5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuYm94X2hlYWRlci5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGgga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYm94LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb3ggPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYm94X2hlYWRlci5kYXRhLmxlbmd0aCA+IDEgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlQ29sdW0oa2V5KX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLm92ZXJhbGxfc2Nvb3IpID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLm92ZXJhbGxfc2Nvb3IudGV4dH0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEub3ZlcmFsbF9zY29vci5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9IGNsYXNzTmFtZT1cInRhY1wiPjxpbWcgc3JjPVwiaW1nL3Njb3JlLWIucG5nXCIgLz48L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24pID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24udGV4dH0gIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLmZ1bmRpbmdfaGlzdG9yeSkgPyA8PlxuICAgICAgICAgICAgICAgICAgICA8dGQgPntkYXRhLmZ1bmRpbmdfaGlzdG9yeS50ZXh0fTxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlUm93KFwiZnVuZGluZ19oaXN0b3J5XCIpfSBjbGFzc05hbWU9XCJjbG9zZVNlY1wiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj4gPGkgb25DbGljaz17KCkgPT4gdGhpcy50b29nbGVDbGFzcygpfSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZ1bmRpbmdfaGlzdG9yeS5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9PntzdWJkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXtjb2xTcGFuVGR9IGNsYXNzTmFtZT17aGlkZUNsYXNzID8gXCJzdFwiIDogXCJzdCBzdE9wZW5cIn0+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdWJUYWJsZVwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiggKGRhdGEuZnVuZGluZ19oaXN0b3J5PT11bmRlZmluZWQpKSByZXR1cm4gIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtcykubWFwKChvbmVLZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntvbmVLZXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zW29uZUtleV0ubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZD57aXRlbX08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuY29tcGFueV9pbmZvKSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5jb21wYW55X2luZm8udGV4dH0gPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVSb3coXCJjb21wYW55X2luZm9cIil9IGNsYXNzTmFtZT1cImNsb3NlU2VjXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmNvbXBhbnlfaW5mby5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9PntzdWJkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5mZXRhdXJlcykgPyA8PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmV0YXVyZXMudGV4dH0gPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVSb3coXCJmZXRhdXJlc1wiKX0gY2xhc3NOYW1lPVwiY2xvc2VTZWNcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmZldGF1cmVzLmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkpID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkudGV4dH0gPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVSb3coXCJjdXN0b21lcl9jYXNlX3N0dWR5XCIpfSBjbGFzc05hbWU9XCJjbG9zZVNlY1wiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5LmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG5cblxuICAgICAgICB7LyogIE1vZGFsICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cIm5ld1ZlbmRvclwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkFkZCBOZXcgVmVuZG9yPC9oNT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgeyhmb3JtRGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uICE9IHVuZGVmaW5lZCkgPyA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9kdWN0X2Rlc2NyaXB0aW9uXCI+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17Zm9ybURhdGEucHJvZHVjdF9kZXNjcmlwdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBuYW1lPVwicHJvZHVjdF9kZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIn1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAoZm9ybURhdGEuZnVuZGluZ19oaXN0b3J5ICE9IHVuZGVmaW5lZCkgPyA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZ1bmRpbmdfaGlzdG9yeVwiPkZ1bmRpbmcgSGlzdG9yeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5mdW5kaW5nX2hpc3Rvcnl9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZ1bmRpbmdfaGlzdG9yeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChmb3JtRGF0YS5jb21wYW55X2luZm8gIT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb21wYW55X2luZm9cIj5Db21wYW55IEluZm88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5jb21wYW55X2luZm99IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImNvbXBhbnlfaW5mb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgKGZvcm1EYXRhLmZldGF1cmVzICE9IHVuZGVmaW5lZCkgPyA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZldGF1cmVzXCI+RmVhdHVyZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEuZmV0YXVyZXN9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZldGF1cmVzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgKGZvcm1EYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkgIT0gdW5kZWZpbmVkKSA/IDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3VzdG9tZXJfY2FzZV9zdHVkeVwiPkN1c3RvbWVyIGNhc2Ugc3R1ZHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlSGFuZGxlKGUpfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY3VzdG9tZXJfY2FzZV9zdHVkeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vaG9tZSc7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ob3RGb3VuZC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMTAwdmhcIj48aDIgY2xhc3NOYW1lPVwibS0wIGJsdWUtZGVmYXVsdFwiPlJvdXRlIE5vdCBGb3VuZDwvaDI+PC9kaXY+ICAgICAgXG4gICAgKTtcbiAgfVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90Rm91bmQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ob3RGb3VuZC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTm90Rm91bmQnO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2RldmVsb3BtZW50LmpzXCI6IFwiLi9zcmMvY29uZmlnL2RldmVsb3BtZW50LmpzXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcIi4vc3JjL2NvbmZpZy9pbmRleC5qc1wiLFxuXHRcIi4vc3RhZ2luZy5qc1wiOiBcIi4vc3JjL2NvbmZpZy9zdGFnaW5nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbmZpZyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qcyRcIjsiLCJcbiBjb25zdCBjb25maWcgICAgPSAgIHtcbiAgICAvLyBmb3IgZGV2ICAgIFxuICAgIGZvb2RqZXRzVXJsICAgICAgICAgICAgIDogICAnJyxcbiAgICBhcGlfZW5kICAgICAgICAgICAgICAgICA6ICAgJy9hcGkvJyxcbiAgICBHVE1fY29kZSAgICAgICAgICAgICAgICA6ICAgJ0dUTS1USE5HUEg2JyxcbiAgICBHU1RNX2NvZGUgICAgICAgICAgICAgICA6ICAgJ1VBLTY1NTU0MzAxLTMnLFxuICAgIHBheXBhbCAgICAgICAgICAgICAgICAgIDogICB7XG4gICAgICAgIG1vZGUgICAgICAgICAgICAgICAgOiAgICdzYW5kYm94J1xuICAgIH0gXG59XG5leHBvcnQgZGVmYXVsdCBjb25maWc7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuLy9wcm9jZXNzLmVudi5OT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIHN0YWdpbmcgfCBkZXZlbG9wbWVudCB8IHByb2R1Y3Rpb25cbi8vcHJvY2Vzcy5lbnYuUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcbi8vY29uc3QgZW52ICAgICA9IChwcm9jZXNzLmVudi5OT0RFX0VOVik/cHJvY2Vzcy5lbnYuTk9ERV9FTlY6J2RldmVsb3BtZW50Jztcbi8vY29uc3QgZW52ICAgICAgID0gJ3N0YWdpbmcnO1xuXG5sZXQgZW52ICAgPSAnJztcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WICA9PT0gJ3Byb2R1Y3Rpb24nKVxuICBlbnYgID0gJ3Byb2R1Y3Rpb24nO1xuZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpXG4gIGVudiAgPSAnc3RhZ2luZyc7XG5lbHNlXG4gIGVudiAgPSAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0ge1xuICAvL2VudjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JyxcbiAgZW52OmVudixcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgxXG59O1xuLy9jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOViwgXy5leHRlbmQoY29uZmlnLCByZXF1aXJlKCcuLycgKyBlbnYgKyAnLmpzJykuZGVmYXVsdCB8fCB7fSkpXG5leHBvcnQgZGVmYXVsdCBfLmV4dGVuZChjb25maWcsIHJlcXVpcmUoJy4vJyArIGVudiArICcuanMnKS5kZWZhdWx0IHx8IHt9KTsiLCJjb25zdCBjb25maWcgICAgPSAgIHtcbiAgICBmb29kamV0c1VybCAgICAgICAgICAgICA6ICAgJ2h0dHA6Ly9kZXYuZm9vZGpldHMuY29tJyxcbiAgICBhcGlfZW5kICAgICAgICAgICAgICAgICA6ICAgJy9hcGkvJyxcbiAgICBHVE1fY29kZSAgICAgICAgICAgICAgICA6ICAgJ0dUTS1USE5HUEg2JyxcbiAgICBHU1RNX2NvZGUgICAgICAgICAgICAgICA6ICAgJ1VBLTY1NTU0MzAxLTMnLFxuICAgIHNlbnRyeV9kc24gICAgICAgICAgICAgIDogICAnaHR0cHM6Ly8yYjIwMjlhZTI4M2U0YTZhYTllNzJlYzU5NzlmZjU4NUBzZW50cnkuaW8vMTU0NjQ3MScsXG4gICAgZmlyZWJhc2UgICAgICAgICAgICAgICAgOiAgIHtcbiAgICAgICAgYXBpS2V5ICAgICAgICAgICAgICA6ICAgXCJBSXphU3lCbzJVVkhLQjJob25EdXRRR05fdHlZU3NHNGxaNUJNaTRcIixcbiAgICAgICAgYXV0aERvbWFpbiAgICAgICAgICA6ICAgXCJmb29kamV0cy1kZXYuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgIGRhdGFiYXNlVVJMICAgICAgICAgOiAgIFwiaHR0cHM6Ly9mb29kamV0cy1kZXYuZmlyZWJhc2Vpby5jb21cIixcbiAgICAgICAgcHJvamVjdElkICAgICAgICAgICA6ICAgXCJmb29kamV0cy1kZXZcIixcbiAgICAgICAgc3RvcmFnZUJ1Y2tldCAgICAgICA6ICAgXCJmb29kamV0cy1kZXYuYXBwc3BvdC5jb21cIixcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQgICA6ICAgXCI2ODc5NDAyMzYxMjlcIlxuXG4gICAgfSxcbiAgICBwYXlwYWwgICAgICAgICAgICAgICAgICA6ICAge1xuICAgICAgICBtb2RlICAgICAgICAgICAgICAgIDogICAnc2FuZGJveCdcbiAgICB9XG59XG4vL2NvbnNvbGUubG9nKCdTdGFnaW5nIDogJywgY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2FwcCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe30sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQXBwKTtcbiIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUnO1xuaW1wb3J0IHsgZG9fbG9naW4gfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2F1dGgnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICByZXR1cm4ge1xuICAgIGRhdGE6IHN0YXRlLnNpZ251cFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xuICAgIGRvX2xvZ2luOmRvX2xvZ2luLFxuICB9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEhvbWUpOyIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9ub3QtZm91bmQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiB7fTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHt9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKE5vdEZvdW5kKTtcbiIsImltcG9ydCBUWVBFIGZyb20gJy4uLy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi8uLi9BcGkvQXBpJztcbmltcG9ydCB7IGVycm9yIGFzIG5vdGlmeUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9ub3RpZnknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uLy4uLy4uL1NlbnRyeS9zZW50cnlcIlxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5TZW50cnlJbml0aWFsaXplKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb19sb2dpbihkYXRhKSB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgICAgICAgICAgICAgPT4gIHtcbiAgICAgICAgbGV0ICBzZW5kRGF0YSAgPSAge3VzZXJuYW1lOmRhdGEuZW1haWwsIHBhc3N3b3JkOmRhdGEucGFzc3dvcmR9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzICAgICAgICAgICAgICAgICAgID0gICBhd2FpdCBBUEkucG9zdCgncmVzdC1hdXRoL2xvZ2luLycsIHNlbmREYXRhKVxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IocmVzLmRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOX0VSUk9SIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJEYXRhICAgID0gICByZXMuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fU1VDQ0VTUywgZGF0YTogIHJlcy5kYXRhfSk7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5vdGlmeUVycm9yKCdJbnZhbGlkIHJlcXVlc3QgKDQwMSknKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fRVJST1IgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiIsImV4cG9ydCB7IGRvX2xvZ2luIH0gZnJvbSAnLi9hdXRoJzsiLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9hdXRoJztcbmxldCB1c2VyRGF0YSAgICA9IHt9O1xuLy9pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gIHVzZXJEYXRhICAgICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9JykgOiB7fTtcbi8vfVxuY29uc29sZS5sb2codXNlckRhdGEpO1xubGV0IGluaXRpYWxTdGF0ZSAgICA9ICAge1xuICB1c2VyRGF0YTogey4uLnVzZXJEYXRhfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUWVBFLlNJR05VUDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogdHJ1ZSwgaXNTdWNjZXNzOiBmYWxzZX07XG4gICAgY2FzZSBUWVBFLlNJR05VUF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOmZhbHNlLCBpc1N1Y2Nlc3M6IHRydWUsIHVzZXJEYXRhOiBhY3Rpb24uZGF0YX07XG4gICAgY2FzZSBUWVBFLlNJR05VUF9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogZmFsc2UsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU46XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IHRydWUsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzpmYWxzZSwgaXNTdWNjZXNzOiB0cnVlLCB1c2VyRGF0YTogYWN0aW9uLmRhdGF9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU5fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IGZhbHNlLCBpc1N1Y2Nlc3M6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0FkZHJlc3NFcnJvcjogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5BRERfREVMX0FERFJfRVJST1I6XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IHRydWV9OyBcbiAgIFxuICAgIGRlZmF1bHQ6IHJldHVybiB7Li4uc3RhdGUsIC4uLmluaXRpYWxTdGF0ZX07XG4gIH1cbn0iLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVFlQRS5SRVFfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSwgSGVhZGVyZGF0YToge30gfTtcbiAgICBjYXNlIFRZUEUuUkVTX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEhlYWRlcmRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgSGVhZGVyZGF0YToge319O1xuXG4gICAgICBjYXNlIFRZUEUuUkVRX0FERFJFU1NfREFUQTpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlLCBBZHJlc3NkYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIFRZUEUuUkVTX0FERFJFU1NfREFUQTpcbiAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEFkcmVzc2RhdGE6IGFjdGlvbi5kYXRhfTtcblxuICAgICAgY2FzZSBUWVBFLkZBSUxfQUREUkVTU19EQVRBOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBBZHJlc3NkYXRhOiB7fX07XG4gICBcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9ob21lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRZUEUuUkVRX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIEhvbWVkYXRhOiB7fSB9O1xuICAgIGNhc2UgVFlQRS5SRVNfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzpmYWxzZSwgSG9tZWRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgSG9tZWRhdGE6IHt9fTtcbiAgIFxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBzaWdudXAgZnJvbSAnLi9hdXRoJztcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSc7XG5cblxuXG5jb25zdCByZWR1eFN0YXRlID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBIb21lLFxuICAgIGhlYWRlcixcbiAgICBzaWdudXAsXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1eFN0YXRlOyIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAYXV0aFR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFNJR05VUDogbnVsbCxcbiAgU0lHTlVQX1NVQ0NFU1M6IG51bGwsXG4gIFNJR05VUF9FUlJPUjogbnVsbCxcbiAgU0lHTklOOiBudWxsLFxuICBTSUdOSU5fU1VDQ0VTUzogbnVsbCxcbiAgU0lHTklOX0VSUk9SOiBudWxsLFxuICBBRERfREVMX0FERFI6IG51bGwsXG4gIEFERF9ERUxfQUREUl9TVUNDRVNTOiBudWxsLFxuICBBRERfREVMX0FERFJfRVJST1I6IG51bGwsXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAaGVhZGVyVHlwZXMnO1xuXG5jb25zdCB0eXBlcyA9IHtcbiAgUkVRX0RBVEE6IG51bGwsXG4gIFJFU19EQVRBOiBudWxsLFxuICBGQUlMX0RBVEE6IG51bGwsXG4gIFJFUV9BRERSRVNTX0RBVEE6IG51bGwsXG4gIFJFU19BRERSRVNTX0RBVEE6IG51bGwsXG4gIEZBSUxfQUREUkVTU19EQVRBOiBudWxsLFxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAaG9tZVR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFJFUV9EQVRBOiBudWxsLFxuICBSRVNfREFUQTogbnVsbCxcbiAgRkFJTF9EQVRBOiBudWxsLFxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHJlZHVjZSh0eXBlcywgKHJlc3VsdCwgdmFsdWUsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gYCR7cHJlZml4fS8ke2tleX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJztcbmltcG9ydCByZWR1eFN0YXRlIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzJztcblxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9IGNyZWF0ZUxvZ2dlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWR1eFN0b3JlKHsgcHJlbG9hZGVkU3RhdGUsIHNlcnZlciB9ID0ge30pIHtcbiAgbGV0IGVuaGFuY2VyO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFzZXJ2ZXIpIHtcbiAgICBlbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmUpO1xuICB9IGVsc2Uge1xuICAgIGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdXhTdGF0ZSwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwJztcbmltcG9ydCB7Z2V0Q29va2llfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuXG4vL2ltcG9ydCBBYm91dCBmcm9tICcuLi9jb250YWluZXJzL0Fib3V0JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb250YWluZXJzL05vdEZvdW5kJztcblxuaW1wb3J0ICcuL2dsb2JhbC5jc3MnXG4vL2ltcG9ydCB7IGdldEFib3V0RGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWJvdXQnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMsIHtub3RpZnl9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XG5cblxuXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb250YWluZXJzL0hvbWUnO1xuXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1NlbnRyeUluaXRpYWxpemUgfSBmcm9tIFwiLi4vU2VudHJ5L3NlbnRyeVwiXG5TZW50cnlJbml0aWFsaXplKCk7XG4vLyBmb3IgbW9yZSBkZXRhaWxzIHNlZSBodHRwczovL3JlYWN0dHJhaW5pbmcuY29tL3JlYWN0LXJvdXRlci93ZWIvZ3VpZGVzL3NlcnZlci1yZW5kZXJpbmdcbi8vIHNwZWNpZnkgcm91dGVzIHdpdGggdGhlIGFzbnljIGZ1bmN0aW9uIHJlcXVpcmVkIHRvIGZldGNoIHRoZSBkYXRhIHRvIHJlbmRlciB0aGUgcm91dGVcbi8vIElNUE9SVEFOVDogdGhlIGxvYWREYXRhIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgUHJvbWlzZVxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFt7XG4gICAgcGF0aDogJy8nLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZVxuICB9LCB7XG4gICAgY29tcG9uZW50OiBOb3RGb3VuZFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgcHVibGljcm91dGVzID0gW1xuICAge1xuICBwYXRoOiAnL2hvbWUnLFxuICBjb21wb25lbnQ6IEhvbWUgICAgXG59XG5cbl07XG5cbmV4cG9ydCBjb25zdCBwcml2YXRlUm91dGVzID0gW1xuXG5dO1xuXG5leHBvcnQgY29uc3QgcHJvdGVjdGVkUm91dGVzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgbGV0ICBoaWRlSGVhZCA9IHRydWU7XG4gIGxldCB1cmwgICAgICAgICAgICAgICAgICAgPSAgICcnO1xuICBsZXQgdXNlckRhdGEgICAgPSB7fTtcbiAgbGV0IGN1cnJlbnRBZGRyZXNzICAgID0ge307XG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICB1c2VyRGF0YSAgICAgICAgICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9Jyk7XG4gIFxuICB9XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpKSB7ICAgICAgXG4gICAgdXJsICAgICAgICAgICAgICAgICAgICAgPSAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xuICAgIGlmICh1cmxbMV0gPT0gJycgfHwgdXJsWzFdID09ICdsb2dpbid8fCB1cmxbMV0gPT0gJ3NpZ251cCcpIHtcbiAgICAgIGhpZGVIZWFkICAgICAgICAgPSAgIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAge1xuICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IFxuICAgICAgPGRpdj4gICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIDxOb3RpZmljYXRpb25zIC8+XG4gICAgIFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIHtwcm90ZWN0ZWRSb3V0ZXMubWFwKChyb3V0ZSkgPT4gKFxuICAgICAgICAgICAgPFByb3RlY3RlZFJvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gdXNlckRhdGE9e3VzZXJEYXRhfSBwcmV2UGF0aD17dXJsWzFdfS8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3ByaXZhdGVSb3V0ZXMubWFwKChyb3V0ZSkgPT4gKFxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBrZXk9e3JvdXRlLnBhdGh9IHBhdGg9e3JvdXRlLnBhdGh9IHJvdXRlPXtyb3V0ZX0gY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9IHVzZXJEYXRhPXt1c2VyRGF0YX0gIHByZXZQYXRoPXt1cmxbMV19Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7cHVibGljcm91dGVzLm1hcChyb3V0ZSA9PihcbiAgICAgICAgICAgICAgPFB1YmxpY1JvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gcHJldlBhdGg9e3VybFsxXX0vPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgICAge3JvdXRlcy5tYXAocm91dGUgPT4oXG4gICAgICAgICAgICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke3JvdXRlLnBhdGh9YH0gey4uLnJvdXRlfS8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgXG4gICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgIH1cbiAgICAgIDwvZGl2PiAgIFxuICApO1xufVxuXG5mdW5jdGlvbiBQdWJsaWNSb3V0ZSh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pIHtcbiAgbGV0IG9iaiA9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfTtcbiAgbGV0IHByZXZQYXRoICA9IHJlc3QucHJldlBhdGggfHwgJyc7XG4gICAgcmV0dXJuIChcbiAgICA8Um91dGUga2V5PXtgaW5kZXggJHtvYmoucGF0aH1gfSBwYXRoPXtvYmoucGF0aH0gXG4gICAgICAgIC8qIGNvbXBvbmVudD17b2JqLmNvbXBvbmVudH0gKi9cbiAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgICA8b2JqLmNvbXBvbmVudCB7Li4ucHJvcHN9IHByZXZQYXRoPXtwcmV2UGF0aH0gLz5cbiAgICAgICAgKX1cbiAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUHJpdmF0ZVJvdXRlKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkge1xuICBsZXQgb2JqID0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9O1xuICAvL2NvbnNvbGUubG9nKCdMb2NhbCBTdG9yYWdlIDogJywgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlRGF0YScpKSk7XG4gIGxldCBjdXJyZW50QWRkcmVzcyAgPSByZXN0LmN1cnJlbnRBZGRyZXNzIHx8IHt9O1xuICBsZXQgdXNlckRhdGEgID0gcmVzdC51c2VyRGF0YSB8fCB7fTtcbiAgbGV0IHByZXZQYXRoICA9IHJlc3QucHJldlBhdGggfHwgJyc7XG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICFfLmlzRW1wdHkodXNlckRhdGEpKSB7XG4gICAgY29uc29sZS5sb2coJ1JvdXRlIFBSaXZhdGUgOiAnLCByZXN0LnJvdXRlKTtcbiAgICByZXR1cm4gKFxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofSBcbiAgICAgICAgLyogY29tcG9uZW50PXtvYmouY29tcG9uZW50fSAqL1xuICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAgIDxvYmouY29tcG9uZW50IHsuLi5wcm9wc30gdXNlckRhdGE9e3VzZXJEYXRhfSBwcmV2UGF0aD17cHJldlBhdGh9IC8+XG4gICAgICAgICl9XG4gICAgLz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWRpcmVjdFxuICAgICAgICB0bz17e1xuICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIlxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gUHJvdGVjdGVkUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XG4gIGxldCBvYmogPSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH07XG4gIGxldCB1c2VyRGF0YSAgPSByZXN0LnVzZXJEYXRhIHx8IHt9O1xuICBsZXQgcHJldlBhdGggID0gcmVzdC5wcmV2UGF0aCB8fCAnJztcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eSh1c2VyRGF0YSkpIHtcbiAgICByZXR1cm4gKFxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofVxuICAgICAgLyogY29tcG9uZW50PXtvYmouY29tcG9uZW50fSAqL1xuICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgPG9iai5jb21wb25lbnQgey4uLnByb3BzfSB1c2VyRGF0YT17dXNlckRhdGF9IHByZXZQYXRoPXtwcmV2UGF0aH0vPlxuICAgICAgKX1cbiAgICAvPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlZGlyZWN0XG4gICAgICAgIHRvPXt7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL2xvZ2luXCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuLy9jb25zb2xlLmxvZygnQ29va2llIENvbmZpZyA6ICcsIGNvbmZpZy5jb29raWUpO1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0ID0gKG5hbWUgPSAnZm9vZGpldHNfbmV3X21lcmNoYW50JykgPT57XG4vLyBcdGlmKGNvbmZpZy5jb29raWUuaG9zdG5hbWUgPT09ICdodHRwOi8vY29uc29sZS5kZXYuZm9vZGpldHMuY29tJykge1xuLy8gXHRcdG5hbWUgPSAnZGV2XycrbmFtZVxuLy8gXHR9XG5cbi8vICAgXHRyZXR1cm4gQ29va2llcy5nZXRKU09OKG5hbWUpO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IHNldCA9IChkYXRhLCBuYW1lID0gJ2Zvb2RqZXRzX25ld19tZXJjaGFudCcpID0+e1xuLy8gXHRpZihjb25maWcuY29va2llLmhvc3RuYW1lID09PSAnaHR0cDovL2NvbnNvbGUuZGV2LmZvb2RqZXRzLmNvbScpIHtcbi8vIFx0XHRuYW1lID0gJ2Rldl8nK25hbWVcbi8vIFx0fVxuLy8gXHRpZighIWNvbmZpZy5jb29raWUuZG9tYWluKVxuLy8gXHRcdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEsIHtkb21haW46IGNvbmZpZy5jb29raWUuZG9tYWlufSk7XG4vLyBcdGVsc2Vcbi8vIFx0XHRDb29raWVzLnNldChuYW1lLCBkYXRhKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBjb25zdCByZW1vdmUgPSAobmFtZSA9ICdmb29kamV0c19uZXdfbWVyY2hhbnQnKSA9Pntcbi8vIFx0aWYoY29uZmlnLmNvb2tpZS5ob3N0bmFtZSA9PT0gJ2h0dHA6Ly9jb25zb2xlLmRldi5mb29kamV0cy5jb20nKSB7XG4vLyBcdFx0bmFtZSA9ICdkZXZfJytuYW1lXG4vLyBcdH1cblxuLy8gXHRpZighIWNvbmZpZy5jb29raWUuZG9tYWluKVxuLy8gXHRcdENvb2tpZXMucmVtb3ZlKG5hbWUsIHtkb21haW46IGNvbmZpZy5jb29raWUuZG9tYWlufSk7XG4vLyBcdGVsc2Vcbi8vIFx0XHRDb29raWVzLnJlbW92ZShuYW1lKTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoZGF0YSwgbmFtZSkgPT57XG4gIFx0Q29va2llcy5zZXQobmFtZSwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TGlmZXRpbWVDb29raWUgPSAoZGF0YSwgbmFtZSxkYXkpID0+e1xuXHRDb29raWVzLnNldChuYW1lLCBkYXRhLCB7IGV4cGlyZXM6IGRheSB9KTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChuYW1lKSA9PntcbiAgXHRDb29raWVzLnJlbW92ZShuYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT57XG4gIFx0cmV0dXJuIENvb2tpZXMuZ2V0SlNPTihuYW1lKTtcbn07IiwiaW1wb3J0IEFQSSBmcm9tICcuLi9BcGkvQXBpJztcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L2Jyb3dzZXInO1xuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uL1NlbnRyeS9zZW50cnlcIjtcblNlbnRyeUluaXRpYWxpemUoKTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRGbG9hdFR3b0RlY2ltYWwgPSBmdW5jdGlvbihudW0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0pLnRvRml4ZWQoMik7XG59XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0VHdvRGVjaW1hbFJvdW5kID0gZnVuY3Rpb24obnVtKSB7XG4gICAgcmV0dXJuICsoTWF0aC5yb3VuZChudW0gKyBcImUrMlwiKSArIFwiZS0yXCIpO1xufVxuXG5leHBvcnQgY29uc3QgbG9nRXJyb3JUb1NlcnZlciA9IGFzeW5jIGZ1bmN0aW9uKHBhcmFtcywgZXJyb3IpIHtcbiAgICBcbiAgICBpZihwYXJhbXMudHlwZSA9PT0gJ2NhdGNoJylcbiAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBjb25zdCBpbnZhbGlkVXJsICAgID0nL2ludmFsaWQtbGluayc7XG4gICAgbGV0IGFkZGl0aW9uYWxJbmZvICAgICAgPSAgIHt9O1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhXG4gICAgICAgICAqIHN0YXR1cyBjb2RlIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcbiAgICAgICAgICovXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmRhdGEgICAgID0gICBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5zdGF0dXMgICA9ICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5oZWFkZXJzICA9ICAgZXJyb3IucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRGF0YSA6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdTdGF0dXMgOiAnLCBlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdIZWFkZXJzIDogJywgZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWQsIGBlcnJvci5yZXF1ZXN0YFxuICAgICAgICAgKiBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2VcbiAgICAgICAgICogb2YgaHR0cC5DbGllbnRSZXF1ZXN0IGluIE5vZGUuanNcbiAgICAgICAgICovXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1JlcXVlc3QgOiAnLCBlcnJvci5yZXF1ZXN0KTtcbiAgICAgICAgYWRkaXRpb25hbEluZm8ucmVxdWVzdCAgICAgPSAgIGVycm9yLnJlcXVlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgYW5kIHRyaWdnZXJlZCBhbiBFcnJvclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdFcnJvciA6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5tZXNzYWdlICAgICA9ICAgZXJyb3IubWVzc2FnZTtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygnQ29uZmlnIDogJywgZXJyb3IuY29uZmlnKTtcbiAgICBpZighIWVycm9yLmNvbmZpZylcbiAgICAgICAgYWRkaXRpb25hbEluZm8uY29uZmlnICAgICA9ICAgZXJyb3IuY29uZmlnO1xuICAgIGNvbnN0IHJlcyAgICAgICAgICAgPSAgIGF3YWl0IEFQSS5wb3N0KCcvYXV0aC9jYXRjaC1pbnZhbGlkLWxpbmsnLCB7XG4gICAgICAgIFwicGFyYW1zXCIgICAgOiAgIHsuLi5wYXJhbXMsIGFkZGl0aW9uYWxJbmZvOiBKU09OLnN0cmluZ2lmeShhZGRpdGlvbmFsSW5mbyl9XG4gICAgfSlcbiAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVzLmRhdGEuZXJyb3IpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5lcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSAgID0+ICB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGludmFsaWRVcmxcbiAgICAgICAgfSwzMDAwKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgYWRkcmVzc0Zvcm1hdGVyID0gKG9iaikgPT4ge1xuICAgIHRyeXtcbiAgICAgIGxldCByZWdleCA9IC8oXFxkKykgKC4rPyksICguKz8pLCAoLis/KSAoWzAtOV17NX0pLztcbiAgXG4gICAgICBsZXQgYWRkcmVzcyA9IG9iai5tYXRjaChyZWdleCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGFkZHJlc3MpO1xuICAgICAgaWYoYWRkcmVzc1s0XS5pbmRleE9mKCcsJykgPiAtMSAmJiBhZGRyZXNzWzNdLmluZGV4T2YoJyAnKSA+IC0xKXtcbiAgICAgICAgbGV0IGZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzWzNdKycsICcrIGFkZHJlc3NbNF0gKyAnICcrIGFkZHJlc3NbYWRkcmVzcy5sZW5ndGggLTFdO1xuICAgICAgICBsZXQgbW9kQWRkcmVzcyA9IGZvcm1hdHRlZEFkZHJlc3MrJywgVVNBJztcbiAgICAgICAgaWYoLyhcXGQrKSAoLis/KSwgKC4rPyksICguKz8pIChbMC05XXs1fSkvZy50ZXN0KG1vZEFkZHJlc3MpKXtcbiAgICAgICAgICBsZXQgX2FkZHJlc3MgPSBtb2RBZGRyZXNzLm1hdGNoKHJlZ2V4KTtcbiAgXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkQWRyczogdHJ1ZSwgXG4gICAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiBmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgICAgYWRkcmVzczogbW9kQWRkcmVzcyxcbiAgICAgICAgICAgIG51bWJlcjogX2FkZHJlc3NbMF0sXG4gICAgICAgICAgICBzdHJlZXQ6IF9hZGRyZXNzWzFdLFxuICAgICAgICAgICAgY2l0eTogX2FkZHJlc3NbMl0sXG4gICAgICAgICAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgICAgICBzdGF0ZV9jb2RlOiBfYWRkcmVzc1s0XSxcbiAgICAgICAgICAgIHppcGNvZGU6IF9hZGRyZXNzW19hZGRyZXNzLmxlbmd0aCAtMV1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkQWRyczogZmFsc2UgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbMV0gKyAnICcgKyBhZGRyZXNzWzJdICsgJywgJysgYWRkcmVzc1szXSArICcsICcgKyBhZGRyZXNzWzRdICsgJyAnICsgYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsaWRBZHJzOiB0cnVlLCBcbiAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiBmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgIGFkZHJlc3M6IG9iaixcbiAgICAgICAgICBudW1iZXI6IGFkZHJlc3NbMV0sXG4gICAgICAgICAgc3RyZWV0OiBhZGRyZXNzWzJdLFxuICAgICAgICAgIGNpdHk6IGFkZHJlc3NbM10sXG4gICAgICAgICAgY291bnRyeTogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgICAgICAgIHN0YXRlX2NvZGU6IGFkZHJlc3NbNF0sXG4gICAgICAgICAgemlwY29kZTogYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZEFkcnM6IGZhbHNlIFxuICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW1haWwgPShlbWFpbCkgPT57XG4gIGNvbnN0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KFN0cmluZyhlbWFpbCkpO1xufSIsImltcG9ydCB7IG5vdGlmeSB9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XG5cbmV4cG9ydCBjb25zdCBzdWNjZXNzID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyMwMDgwMDAnLCB0ZXh0OiBcIiNGRkZGRkZcIiwgXCJ6LWluZGV4XCI6XCI5OTk5OVwiIH07XG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7ICAgIFxufVxuLy8gZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcbi8vICAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNGQjYwNTYnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xuLy8gICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDUwMDAsIG15Q29sb3IpO1xuLy8gfVxuZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNGQjYwNTYnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xuICAgIGxldCBoID1cInhcIlxuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDUwMDAsIG15Q29sb3IpO1xufVxuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSAobWVzc2FnZSkgPT4ge1xuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwid2FybmluZ1wiLCA1MDAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbWVycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNmZjAwMDAnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDYwMDAwLCBteUNvbG9yKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgbm90aWZ5LmhpZGUoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9