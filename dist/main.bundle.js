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
	"./production.js": "./src/config/production.js",
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

/***/ "./src/config/production.js":
/*!**********************************!*\
  !*** ./src/config/production.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var config = {
  //for production
  foodjetsUrl: 'https://foodjets.com',
  api_end: '/mbp-service/',
  GTM_code: 'GTM-THNGPH6',
  GSTM_code: 'UA-65554301-3',
  sentry_dsn: 'https://0931dde1b233432b95b706ef105cb284@sentry.io/1546472',
  firebase: {
    apiKey: "AIzaSyBxv2NuRYUB9SWlHKVNl-4dAoHtaEyHAKc",
    authDomain: "foodjets-4bc9f.firebaseapp.com",
    databaseURL: "https://foodjets-4bc9f.firebaseio.com",
    projectId: "foodjets-4bc9f",
    storageBucket: "foodjets-4bc9f.appspot.com",
    messagingSenderId: "644501783160",
    appId: "1:644501783160:web:e4d8c6cf0cf83c82"
  },
  paypal: {
    mode: 'production'
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9BcGkvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9TZW50cnkvc2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvQXBwLnNjc3M/MTQxYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9ob21lLmNzcz9lYjRkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ub3QtZm91bmQvTm90Rm91bmQuc2Nzcz84YzI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25vdC1mb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnIHN5bmMgXlxcLlxcLy4qXFwuanMkIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Byb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9zdGFnaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL05vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGgvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC90eXBlcy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC90eXBlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY3JlYXRlUmVkdXhTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2dsb2JhbC5jc3M/MWRmZCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb29raWVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2hlbHBlcmZ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbm90aWZ5LmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJBUEkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhdXRoIiwid2luZG93IiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiXyIsImlzRW1wdHkiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiU2VudHJ5SW5pdGlhbGl6ZSIsIlNlbnRyeSIsImRzbiIsImNvbmZpZyIsInNlbnRyeV9kc24iLCJwcmVsb2FkZWRTdGF0ZSIsIl9fUFJFTE9BREVEX1NUQVRFX18iLCJzdG9yZSIsImNyZWF0ZVJlZHV4U3RvcmUiLCJoeWRyYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsInN0eWxlcyIsIlRvcEJhciIsIkxpbmsiLCJwcm9wcyIsImNoaWxkcmVuIiwiRm9vdGVyIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJob21lIiwiZGVmYXVsdEVycm9ycyIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGF0ZSIsImZhcURhdGEiLCJpc0xvYWRpbmciLCJtb2RhbCIsInR5cGVQYXNzIiwiZm9ybURhdGEiLCJwcm9kdWN0X2Rlc2NyaXB0aW9uIiwiZnVuZGluZ19oaXN0b3J5IiwiY29tcGFueV9pbmZvIiwiZmV0YXVyZXMiLCJjdXN0b21lcl9jYXNlX3N0dWR5Iiwib3ZlcmFsbF9zY29vciIsImJveF9oZWFkZXIiLCJjb2x1bURhdGEiLCJ0ZXh0IiwiZGF0YSIsImRlc2NyaXB0aW9uIiwic3ViaXRlbXMiLCJGb3VuZGVkIiwiS2V5SW52ZXN0b3JzIiwiRm91bmRlcnMiLCJoaWRlQ2xhc3MiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwib25DaGFuZ2VIYW5kbGUiLCJkZWxldGVDb2x1bSIsInRvb2dsZUNsYXNzIiwiZGVsZXRlUm93Iiwicm93bmFtZSIsInN3YWwiLCJ0aXRsZSIsImljb24iLCJidXR0b25zIiwiZGFuZ2VyTW9kZSIsInRoZW4iLCJ3aWxsRGVsZXRlIiwibWFwIiwiY2RhdGEiLCJpbmRleCIsIk9iamVjdCIsImtleXMiLCJvbmVLZXkiLCJpIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaWQiLCJmaWx0ZXIiLCJsZW5ndGgiLCIkIiwidW5kZWZpbmVkIiwicHVzaCIsImlzU3VjY2VzcyIsImVycm9ycyIsImlzRXJyb3IiLCJjb2xTcGFuIiwiY29sU3BhblRkIiwic3ViZGF0YSIsIml0ZW0iLCJOb3RGb3VuZCIsImZvb2RqZXRzVXJsIiwiYXBpX2VuZCIsIkdUTV9jb2RlIiwiR1NUTV9jb2RlIiwicGF5cGFsIiwibW9kZSIsImVudiIsInByb2Nlc3MiLCJwb3J0IiwiUE9SVCIsImV4dGVuZCIsInJlcXVpcmUiLCJkZWZhdWx0IiwiZmlyZWJhc2UiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0Iiwic2lnbnVwIiwiZG9fbG9naW4iLCJIb21lIiwic2VuZERhdGEiLCJ1c2VybmFtZSIsInR5cGUiLCJUWVBFIiwiU0lHTklOIiwicG9zdCIsInJlcyIsImVycm9yIiwibm90aWZ5RXJyb3IiLCJTSUdOSU5fRVJST1IiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiU0lHTklOX1NVQ0NFU1MiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJTSUdOVVAiLCJpc1Byb2Nlc3NpbmciLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9FUlJPUiIsIkFERF9ERUxfQUREUiIsImlzQWRkcmVzc0Vycm9yIiwiQUREX0RFTF9BRERSX1NVQ0NFU1MiLCJBRERfREVMX0FERFJfRVJST1IiLCJSRVFfREFUQSIsIkhlYWRlcmRhdGEiLCJSRVNfREFUQSIsIkZBSUxfREFUQSIsIlJFUV9BRERSRVNTX0RBVEEiLCJBZHJlc3NkYXRhIiwiUkVTX0FERFJFU1NfREFUQSIsIkZBSUxfQUREUkVTU19EQVRBIiwiSG9tZWRhdGEiLCJyZWR1eFN0YXRlIiwiY29tYmluZVJlZHVjZXJzIiwiaGVhZGVyIiwicHJlZml4IiwidHlwZXMiLCJwcmVmaXhlciIsInJlZHVjZSIsInJlc3VsdCIsImxvZ2dlck1pZGRsZXdhcmUiLCJjcmVhdGVMb2dnZXIiLCJzZXJ2ZXIiLCJlbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicm91dGVzIiwicGF0aCIsImV4YWN0IiwiY29tcG9uZW50IiwicHVibGljcm91dGVzIiwicHJpdmF0ZVJvdXRlcyIsInByb3RlY3RlZFJvdXRlcyIsIlJvdXRlciIsImhpZGVIZWFkIiwidXJsIiwiY3VycmVudEFkZHJlc3MiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJyb3V0ZSIsIlB1YmxpY1JvdXRlIiwicmVzdCIsIm9iaiIsInByZXZQYXRoIiwiUHJpdmF0ZVJvdXRlIiwiUHJvdGVjdGVkUm91dGUiLCJzZXRDb29raWUiLCJDb29raWVzIiwic2V0Iiwic2V0TGlmZXRpbWVDb29raWUiLCJkYXkiLCJleHBpcmVzIiwicmVtb3ZlQ29va2llIiwicmVtb3ZlIiwiZ2V0Q29va2llIiwiZ2V0SlNPTiIsImNvbnZlcnRGbG9hdFR3b0RlY2ltYWwiLCJudW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNvbnZlcnRUd29EZWNpbWFsUm91bmQiLCJNYXRoIiwicm91bmQiLCJsb2dFcnJvclRvU2VydmVyIiwicGFyYW1zIiwiaW52YWxpZFVybCIsImFkZGl0aW9uYWxJbmZvIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZXF1ZXN0IiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJocmVmIiwiYWRkcmVzc0Zvcm1hdGVyIiwicmVnZXgiLCJhZGRyZXNzIiwibWF0Y2giLCJpbmRleE9mIiwiZm9ybWF0dGVkQWRkcmVzcyIsIm1vZEFkZHJlc3MiLCJ0ZXN0IiwiX2FkZHJlc3MiLCJ2YWxpZEFkcnMiLCJudW1iZXIiLCJzdHJlZXQiLCJjaXR5IiwiY291bnRyeSIsInN0YXRlX2NvZGUiLCJ6aXBjb2RlIiwiaXNWYWxpZEVtYWlsIiwicGF0dGVybiIsIlN0cmluZyIsInN1Y2Nlc3MiLCJteUNvbG9yIiwiYmFja2dyb3VuZCIsIm5vdGlmeSIsInNob3ciLCJoIiwid2FybmluZyIsImN1c3RvbWVycm9yIiwiaGlkZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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SyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDNUIsT0FBRCxFQUFhO0FBQ2hDeUIsMkRBQU0sQ0FBQ0MsSUFBUCxDQUFZMUIsT0FBWixFQUFxQixTQUFyQixFQUFnQyxJQUFoQztBQUNILENBRk07QUFJQSxJQUFNNkIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzdCLE9BQUQsRUFBYTtBQUNwQyxNQUFJdUIsT0FBTyxHQUFHO0FBQUVDLGNBQVUsRUFBRSxTQUFkO0FBQXlCbE0sUUFBSSxFQUFFO0FBQS9CLEdBQWQ7QUFDQW1NLDJEQUFNLENBQUNDLElBQVAsQ0FBWTFCLE9BQVosRUFBcUIsUUFBckIsRUFBK0IsS0FBL0IsRUFBc0N1QixPQUF0QztBQUNILENBSE07QUFLQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ3RCTCwyREFBTSxDQUFDSyxJQUFQO0FBQ0gsQ0FGTSxDIiwiZmlsZSI6Ii4vbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHl7ICBvdmVyZmxvdy14OiBoaWRkZW47IHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO31cXG4qe3BhZGRpbmc6IDA7IG1hcmdpbjogMDsgb3V0bGluZTogMDsgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBib3gtc2l6aW5nOiBib3JkZXItYm94O31cXG5ib2R5e2ZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNDAwOyBsaW5lLWhlaWdodDogMThweDsgY29sb3I6ICMzMzMzMzM7fVxcblxcbmltZ3ttYXgtd2lkdGg6IDEwMCU7fVxcbmZpZ3VyZXtwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGRpc3BsYXk6IGlubGluZS1ibG9jazt9XFxuYXtjb2xvcjogIzIwOURFMjt9XFxuYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiAjMjA5REUyO31cXG4gXFxuXFxuLmNUYWJsZSB7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgd2lkdGg6IDEwMCU7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO31cXG4uY1RhYmxlIHRoe3Bvc2l0aW9uOiByZWxhdGl2ZTt9XFxuLmNUYWJsZSB0aCBpe3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE1cHg7IHRvcDogMTVweDsgY3Vyc29yOiBwb2ludGVyO31cXG4uY1RhYmxlIHRoLCAuY1RhYmxlIHRkIHtwYWRkaW5nOiAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBib3JkZXItYm90dG9tOiBub25lOyBwb3NpdGlvbjogcmVsYXRpdmU7fVxcbi5jVGFibGUub25lQ29sIHRoLCAuY1RhYmxlLm9uZUNvbCB0ZCwgLmNUYWJsZS5vbmVDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiA3MiU7fVxcbi5jVGFibGUudHdvQ29sIHRoLCAuY1RhYmxlLnR3b0NvbCB0ZCwgLmNUYWJsZS50d29Db2wgLnN1YlRhYmxlIHRke3dpZHRoOiA1NCU7fVxcbi5jVGFibGUudGhyZWVDb2wgdGgsIC5jVGFibGUudGhyZWVDb2wgdGQsIC5jVGFibGUudGhyZWVDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiAzNiU7fVxcbi5jVGFibGUuZm91ckNvbCB0aCwgLmNUYWJsZS5mb3VyQ29sIHRkLCAuY1RhYmxlLmZvdXJDb2wgLnN1YlRhYmxlIHRke3dpZHRoOiAxOCU7fVxcblxcbi5jVGFibGUgdGg6Zmlyc3QtY2hpbGQsIC5jVGFibGUgdGQ6Zmlyc3QtY2hpbGR7IHdpZHRoOiAyOCU7fVxcbi5jVGFibGUgdGh7dGV4dC1hbGlnbjogY2VudGVyO31cXG4uY1RhYmxlIHRoIHNwYW57ZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTJweDt9XFxuXFxuLmNsb3NlU2Vje3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDE1cHg7IGNvbG9yOiAjRkI2MDU2OyBjdXJzb3I6IHBvaW50ZXI7fVxcblxcbi5jVGFibGUgdGQuc3R7cGFkZGluZzogMDsgYm9yZGVyLXRvcDogbm9uZTsgYm9yZGVyLWJvdHRvbTogbm9uZTt9IFxcbi5zdWJUYWJsZXt3aWR0aDogMTAwJTsgZGlzcGxheTogbm9uZTt9XFxuLnN0T3BlbiAuc3ViVGFibGV7IGRpc3BsYXk6dGFibGU7fVxcbi5zdWJUYWJsZSB0cjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XFxuLnN1YlRhYmxlIHRke3dpZHRoOiAxOCU7fVxcbi5zdWJUYWJsZSB0ZDpmaXJzdC1jaGlsZHsgd2lkdGg6IDI4JSFpbXBvcnRhbnQ7fVxcblxcbi50YWN7dGV4dC1hbGlnbjogY2VudGVyO31cXG5cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkFwcF9fQXBwX19fVnR3QnQge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbi5BcHBfX1RvcEJhcl9fXzN5dTlGIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uQXBwX19MaW5rX19fMjU0WXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAuQXBwX19MaW5rX19fMjU0WXIgKyAuQXBwX19MaW5rX19fMjU0WXIge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuXFxuLkFwcF9fRm9vdGVyX19fMTFmZnEge1xcbiAgY29sb3I6ICNBQUFBQUE7IH1cXG5cXG4uQXBwX19hbGlnbi1pdGVtcy1jZW50ZXJfX19CUjIwbiBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgNSU7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAuQXBwX19hbGlnbi1pdGVtcy1jZW50ZXJfX19CUjIwbiBoMiB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJBcHAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLGFBQWEsRUFBRTs7QUFFakI7RUFDRSxxQkFBcUIsRUFBRTtFQUN2QjtJQUNFLGdCQUFnQixFQUFFOztBQUV0QjtFQUNFLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBRTs7QUFFakI7RUFDRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVUsRUFBRSxFQUFFXCIsXCJmaWxlXCI6XCJBcHAuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQXBwIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07IH1cXG5cXG4uVG9wQmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uTGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5MaW5rICsgLkxpbmsge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuXFxuLkZvb3RlciB7XFxuICBjb2xvcjogI0FBQUFBQTsgfVxcblxcbi5hbGlnbi1pdGVtcy1jZW50ZXIgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiAwIDUlOyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLmFsaWduLWl0ZW1zLWNlbnRlciBoMiB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAwOyB9IH1cXG5cIl19XSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIkFwcFwiOiBcIkFwcF9fQXBwX19fVnR3QnRcIixcblx0XCJUb3BCYXJcIjogXCJBcHBfX1RvcEJhcl9fXzN5dTlGXCIsXG5cdFwiTGlua1wiOiBcIkFwcF9fTGlua19fXzI1NFlyXCIsXG5cdFwiRm9vdGVyXCI6IFwiQXBwX19Gb290ZXJfX18xMWZmcVwiLFxuXHRcImFsaWduLWl0ZW1zLWNlbnRlclwiOiBcIkFwcF9fYWxpZ24taXRlbXMtY2VudGVyX19fQlIyMG5cIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLk5vdEZvdW5kX19Ob3RGb3VuZF9fXzJ6Y3BCIHtcXG4gIGNvbG9yOiBpbmhlcml0OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiTm90Rm91bmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWMsRUFBRVwiLFwiZmlsZVwiOlwiTm90Rm91bmQuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTm90Rm91bmQge1xcbiAgY29sb3I6IGluaGVyaXQ7IH1cXG5cIl19XSk7XG5cbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIk5vdEZvdW5kXCI6IFwiTm90Rm91bmRfX05vdEZvdW5kX19fMnpjcEJcIlxufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQge2dldENvb2tpZSwgc2V0TGlmZXRpbWVDb29raWV9IGZyb20gJy4uL3V0aWwvY29va2llcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmNvbnN0IEFQSV9VUkwgICAgICAgICAgID0gICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiO1xuXG5jb25zdCBBUEkgICAgICAgICAgICAgICA9ICAgYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBBUElfVVJMXG59KVxuQVBJLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbmxldCBhdXRoICAgICAgICAgICAgICA9ICAgJyc7XG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gIGxldCB1c2VyRGF0YSAgICAgICAgICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9Jyk7XG4gIGlmKCFfLmlzRW1wdHkodXNlckRhdGEpKXtcbiAgICBhdXRoICAgICAgICAgICAgICA9ICAgICdUb2tlbiAnICsgdXNlckRhdGEua2V5O1xuICB9IGVsc2V7XG4gICAgYXV0aCAgID0gIFwiXCJcbiAgfVxuIFxuICBjb25zb2xlLmxvZyhhdXRoKTtcbiAgQVBJLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBhdXRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7IiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvYnJvd3Nlcic7XG5cblxuXG4gIGV4cG9ydCBjb25zdCBTZW50cnlJbml0aWFsaXplID0gKCkgPT4ge1xuICAgIFNlbnRyeS5pbml0KHtcbiAgICAgICAgZHNuOiBjb25maWcuc2VudHJ5X2RzblxuICAgICAgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uL3VuaXZlcnNhbC9yb3V0ZXMnO1xuaW1wb3J0IGNyZWF0ZVJlZHV4U3RvcmUgZnJvbSAnLi4vdW5pdmVyc2FsL2NyZWF0ZVJlZHV4U3RvcmUnO1xuXG4vLyBHcmFiIHRoZSBzdGF0ZSBmcm9tIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGludG8gdGhlIHNlcnZlci1nZW5lcmF0ZWQgSFRNTFxuY29uc3QgcHJlbG9hZGVkU3RhdGUgPSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuXG4vLyBBbGxvdyB0aGUgcGFzc2VkIHN0YXRlIHRvIGJlIGdhcmJhZ2UtY29sbGVjdGVkXG5kZWxldGUgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcblxuLy8gQ3JlYXRlIFJlZHV4IHN0b3JlIHdpdGggaW5pdGlhbCBzdGF0ZVxuY29uc3Qgc3RvcmUgPSBjcmVhdGVSZWR1eFN0b3JlKHsgcHJlbG9hZGVkU3RhdGUgfSk7XG5cbmh5ZHJhdGUoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFJvdXRlciAvPlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVG9wQmFyfT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfSB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9IHRvPVwiL0ludmFsaWRMaW5rXCI+SW52YWxpZExpbms8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30gdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlcn0+V2lsbGlhbSBXb29kaGVhZCAtIE1JVCBMaWNlbnNlPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQXBwJztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgaXNWYWxpZEVtYWlsIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJmdW5jJztcblxuaW1wb3J0ICcuL2hvbWUuY3NzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZGVmYXVsdEVycm9ycyA9IHtcbiAgICAgIGVtYWlsOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmFxRGF0YTogW10sXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICB0eXBlUGFzczogJ3Bhc3N3b3JkJyxcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGZ1bmRpbmdfaGlzdG9yeTogXCJcIixcbiAgICAgICAgY29tcGFueV9pbmZvOiBcIlwiLFxuICAgICAgICBmZXRhdXJlczogXCJcIixcbiAgICAgICAgY3VzdG9tZXJfY2FzZV9zdHVkeTogXCJcIixcbiAgICAgICAgb3ZlcmFsbF9zY29vcjogXCJTY29yZVwiLFxuICAgICAgICBib3hfaGVhZGVyOiBcIkJveFwiXG5cbiAgICAgIH0sXG4gICAgICBjb2x1bURhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJveF9oZWFkZXI6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiQm94XCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJkYXRhXCJcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3ZlcmFsbF9zY29vcjoge1xuICAgICAgICAgICAgdGV4dDogXCJPdmVyYWxsIFNjb3JlXCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTY29yZVwiXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb2R1Y3RfZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIHRleHQ6IFwiUHJvZHVjdCBEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQm94IGlzIGEgbW9kZXJuIGNvbnRlbnQgb2YgbWFuYWdlbWVudFwiLFxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmRpbmdfaGlzdG9yeToge1xuICAgICAgICAgICAgdGV4dDogXCJGdW5kaW5nIEhpc3RvcnlcIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRvdGFsIEZ1bmRpbmc6ICQxNTBtXCIsXG5cblxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBzdWJpdGVtczoge1xuICAgICAgICAgICAgICBGb3VuZGVkOiBbXCIyMDA1XCJdLFxuICAgICAgICAgICAgICBLZXlJbnZlc3RvcnM6IFtcIkRGRywgc2NhbGUsIHZlbnR1cmUgcGFydG5lcnNcIl0sXG4gICAgICAgICAgICAgIEZvdW5kZXJzOiBbXCJBcm9uZSBMZXZpZSwgRHlsb24gc21pdGhcIl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBhbnlfaW5mbzoge1xuICAgICAgICAgICAgdGV4dDogXCJDb21wYW55IEluZm9cIixcbiAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkpvaG5zb25cIlxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZldGF1cmVzOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkZldGF1cmVzXCIsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHb29kXCJcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXN0b21lcl9jYXNlX3N0dWR5OiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkNvbXBhbnkgQ2FzZSBTdHVkeVwiLFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR29vZCBDbGllbnRcIlxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBoaWRlQ2xhc3M6IHRydWUsXG4gICAgfVxuXG5cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZSA9IHRoaXMub25DaGFuZ2VIYW5kbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZUNvbHVtID0gdGhpcy5kZWxldGVDb2x1bS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9vZ2xlQ2xhc3MgPSB0aGlzLnRvb2dsZUNsYXNzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVSb3cgPSB0aGlzLmRlbGV0ZVJvdy5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHsgfVxuXG4gIGRlbGV0ZVJvdyhyb3duYW1lKSB7XG4gICAgbGV0IHsgY29sdW1EYXRhLCBmb3JtRGF0YSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHN3YWwoe1xuICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50ICB0byAgZGVsZXRlICB0aGlzICBpdGVtP1wiLFxuXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICBkYW5nZXJNb2RlOiB0cnVlLFxuICAgIH0pXG4gICAgICAudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgICBpZiAod2lsbERlbGV0ZSkge1xuXG4gICAgICAgICAgY29sdW1EYXRhLm1hcCgoY2RhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjZGF0YSkubWFwKChvbmVLZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9uZUtleSA9PSByb3duYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNkYXRhW29uZUtleV1cbiAgICAgICAgICAgICAgICBkZWxldGUgZm9ybURhdGFbcm93bmFtZV07XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEscm93bmFtZSwgZm9ybURhdGFbcm93bmFtZV0sIGZvcm1EYXRhW1wiY29tcGFueV9pbmZvXCJdKTtcbiAgICAgICAgICAgICAgICAvLyAgZGVsZXRlIGZvcm1EYXRhW29uZUtleV1cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2x1bURhdGEsXG4gICAgICAgICAgICBmb3JtRGF0YVxuICAgICAgICAgIH0sICgpID0+IHtcblxuICAgICAgICAgICAgc3dhbChcIlBvb2YhIFlvdXIgaXRlbWhhcyBiZWVuIGRlbGV0ZWQhXCIsIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuICB9XG4gIG9uQ2hhbmdlSGFuZGxlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuZm9ybURhdGEsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvb2dsZUNsYXNzKCkge1xuICAgIGxldCB7IGhpZGVDbGFzcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBoaWRlQ2xhc3MgPSAhaGlkZUNsYXNzXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoaWRlQ2xhc3NcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlQ29sdW0oaWQpIHtcbiAgICBsZXQgeyBjb2x1bURhdGEgfSA9IHRoaXMuc3RhdGU7XG5cblxuICAgIHN3YWwoe1xuICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50ICB0byAgZGVsZXRlICB0aGlzICBpdGVtP1wiLFxuXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICBkYW5nZXJNb2RlOiB0cnVlLFxuICAgIH0pXG4gICAgICAudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgICBpZiAod2lsbERlbGV0ZSkge1xuXG4gICAgICAgICAgY29sdW1EYXRhLm1hcCgoY2RhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjZGF0YSkubWFwKChvbmVLZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgY2RhdGFbb25lS2V5XS5kYXRhID0gY2RhdGFbb25lS2V5XS5kYXRhLmZpbHRlcigoZGF0YSwgaW5kZXgpID0+IGlkICE9IGluZGV4KVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sdW1EYXRhXG4gICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgc3dhbChcIlBvb2YhIFlvdXIgaXRlbWhhcyBiZWVuIGRlbGV0ZWQhXCIsIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgfVxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgbGV0IHsgZm9ybURhdGEsIGNvbHVtRGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG5cbiAgICBsZXQgeyBvdmVyYWxsX3Njb29yLCBib3hfaGVhZGVyLCBwcm9kdWN0X2Rlc2NyaXB0aW9uLCBmdW5kaW5nX2hpc3RvcnksIGZldGF1cmVzLCBjdXN0b21lcl9jYXNlX3N0dWR5LCBjb21wYW55X2luZm8gfSA9IGZvcm1EYXRhO1xuXG5cblxuXG4gICAgY29sdW1EYXRhLm1hcCgoY2RhdGEsIGluZGV4KSA9PiB7XG4gICAgXG4gICAgICBpZiAoICEhKGNkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24pICYmIGNkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24uZGF0YS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHN3YWwoe1xuICAgICAgICAgIHRpdGxlOiBcIllvdSBjYW50IGFkZCBtb3JlICB0aGFuICAzICBpdGVtc1wiLFxuXG4gICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICAgICAgZnVuZGluZ19oaXN0b3J5OiBcIlwiLFxuICAgICAgICAgICAgY29tcGFueV9pbmZvOiBcIlwiLFxuICAgICAgICAgICAgZmV0YXVyZXM6IFwiXCIsXG4gICAgICAgICAgICBjdXN0b21lcl9jYXNlX3N0dWR5OiBcIlwiLFxuICAgICAgICAgICAgb3ZlcmFsbF9zY29vcjogXCJTY29yZVwiLFxuICAgICAgICAgICAgYm94X2hlYWRlcjogXCJCb3hcIlxuXG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgJChcIiNuZXdWZW5kb3JcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGNkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2RhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogcHJvZHVjdF9kZXNjcmlwdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2RhdGEuZnVuZGluZ19oaXN0b3J5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNkYXRhLmZ1bmRpbmdfaGlzdG9yeS5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogZnVuZGluZ19oaXN0b3J5IH0pO1xuICAgICAgICAgIE9iamVjdC5rZXlzKGNkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtcykubWFwKChvbmVLZXksIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChvbmVLZXkgPT0gXCJGb3VuZGVkXCIpIHtcbiAgICAgICAgICAgICAgY2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zW29uZUtleV0ucHVzaChcIjIwMDVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbmVLZXkgPT0gXCJLZXlJbnZlc3RvcnNcIikge1xuICAgICAgICAgICAgICBjZGF0YS5mdW5kaW5nX2hpc3Rvcnkuc3ViaXRlbXNbb25lS2V5XS5wdXNoKFwiREZHLCBzY2FsZSwgdmVudHVyZSBwYXJ0bmVyc1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uZUtleSA9PSBcIkZvdW5kZXJzXCIpIHtcbiAgICAgICAgICAgICAgY2RhdGEuZnVuZGluZ19oaXN0b3J5LnN1Yml0ZW1zW29uZUtleV0ucHVzaChcIkFyb25lIExldmllLCBEeWxvbiBzbWl0aFwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjZGF0YS5mZXRhdXJlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjZGF0YS5mZXRhdXJlcy5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogZmV0YXVyZXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNkYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2RhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeS5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogY3VzdG9tZXJfY2FzZV9zdHVkeSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2RhdGEuY29tcGFueV9pbmZvICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNkYXRhLmNvbXBhbnlfaW5mby5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogY29tcGFueV9pbmZvIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2RhdGEub3ZlcmFsbF9zY29vci5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogb3ZlcmFsbF9zY29vciB9KTtcbiAgICAgICAgY2RhdGEuYm94X2hlYWRlci5kYXRhLnB1c2goeyBkZXNjcmlwdGlvbjogYm94X2hlYWRlciB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY29sdW1EYXRhLFxuICAgICAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgICAgICBwcm9kdWN0X2Rlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICAgICAgZnVuZGluZ19oaXN0b3J5OiBcIlwiLFxuICAgICAgICAgICAgY29tcGFueV9pbmZvOiBcIlwiLFxuICAgICAgICAgICAgZmV0YXVyZXM6IFwiXCIsXG4gICAgICAgICAgICBjdXN0b21lcl9jYXNlX3N0dWR5OiBcIlwiLFxuICAgICAgICAgICAgb3ZlcmFsbF9zY29vcjogXCJTY29yZVwiLFxuICAgICAgICAgICAgYm94X2hlYWRlcjogXCJCb3hcIlxuXG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgJChcIiNuZXdWZW5kb3JcIikubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSlcblxuXG5cbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICghIXByb3BzLmRhdGEgJiYgISFwcm9wcy5kYXRhLmlzU3VjY2Vzcykge1xuXG5cbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gdGhpcy5zdGF0ZS5mb3JtRGF0YSB8fCB7fTtcbiAgICBsZXQgZXJyb3JzID0geyAuLi50aGlzLmRlZmF1bHRFcnJvcnMgfTtcbiAgICBsZXQgaXNFcnJvciA9IGZhbHNlO1xuICAgIGlmICghISFmb3JtRGF0YS5lbWFpbCkge1xuICAgICAgZXJyb3JzLmVtYWlsID0gdHJ1ZTtcbiAgICAgIGlzRXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoISEhZm9ybURhdGEucGFzc3dvcmQpIHtcbiAgICAgIGVycm9ycy5wYXNzd29yZCA9IHRydWU7XG4gICAgICBpc0Vycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCEhZm9ybURhdGEucGFzc3dvcmQgJiYgZm9ybURhdGEucGFzc3dvcmQubGVuZ3RoIDwgNCkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIGlzRXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4geyBpc0Vycm9yOiBpc0Vycm9yLCBlcnJvcnM6IGVycm9ycyB9O1xuICB9XG5cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNvbHVtRGF0YSwgZm9ybURhdGEsIGhpZGVDbGFzcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgbGV0IGNvbFNwYW4gPSBcIlwiO1xuICAgIGxldCBjb2xTcGFuVGQgPSAyO1xuICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgY29sU3BhblRkID0gKCEhZGF0YS5mdW5kaW5nX2hpc3RvcnkpPyBkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtcy5Gb3VuZGVkLmxlbmd0aCArIDE6MjtcblxuICAgICAgaWYgKCEhZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uICYmIGRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGNvbFNwYW4gPSBcInR3b0NvbFwiXG4gICAgICB9XG4gICAgICBpZiAoISFkYXRhLnByb2R1Y3RfZGVzY3JpcHRpb24gJiYgZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEubGVuZ3RoID09IDIpIHtcbiAgICAgICAgY29sU3BhbiA9IFwidGhyZWVDb2xcIlxuICAgICAgfVxuICAgICAgaWYgKCEhZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uICYmIGRhdGEucHJvZHVjdF9kZXNjcmlwdGlvbi5kYXRhLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgIGNvbFNwYW4gPSBcImZvdXJDb2xcIlxuICAgICAgfVxuICAgICAgLy8gaWYoZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEubGVuZ3RoPT00KXtcbiAgICAgIC8vICAgY29sU3Bhbj0gXCJmb3VyQ29sXCJcbiAgICAgIC8vIH1cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2lucFwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtgY1RhYmxlICR7Y29sU3Bhbn1gfT5cbiAgICAgICAgICA8dHI+XG5cbiAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbmV3VmVuZG9yXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYWRkLW5ldy5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkFkZCBOZXcgVmVuZG9yPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3RoPlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuYm94X2hlYWRlcikgPyA8PlxuXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmJveF9oZWFkZXIuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRoIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2JveC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qm94IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmJveF9oZWFkZXIuZGF0YS5sZW5ndGggPiAxID8gPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZUNvbHVtKGtleSl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5vdmVyYWxsX3Njb29yKSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5vdmVyYWxsX3Njb29yLnRleHR9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm92ZXJhbGxfc2Nvb3IuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fSBjbGFzc05hbWU9XCJ0YWNcIj48aW1nIHNyYz1cImltZy9zY29yZS1iLnBuZ1wiIC8+PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uKSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLnRleHR9ICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5wcm9kdWN0X2Rlc2NyaXB0aW9uLmRhdGEubWFwKChzdWJkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2tleX0+e3N1YmRhdGEuZGVzY3JpcHRpb259PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC8+IDogXCJcIn1cblxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgPC90cj5cblxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5mdW5kaW5nX2hpc3RvcnkpID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkID57ZGF0YS5mdW5kaW5nX2hpc3RvcnkudGV4dH08c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZVJvdyhcImZ1bmRpbmdfaGlzdG9yeVwiKX0gY2xhc3NOYW1lPVwiY2xvc2VTZWNcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+IDxpIG9uQ2xpY2s9eygpID0+IHRoaXMudG9vZ2xlQ2xhc3MoKX0gY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mdW5kaW5nX2hpc3RvcnkuZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY29sU3Bhbj17Y29sU3BhblRkfSBjbGFzc05hbWU9e2hpZGVDbGFzcyA/IFwic3RcIiA6IFwic3Qgc3RPcGVuXCJ9PlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic3ViVGFibGVcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIChkYXRhLmZ1bmRpbmdfaGlzdG9yeT09dW5kZWZpbmVkKSkgcmV0dXJuICBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YS5mdW5kaW5nX2hpc3Rvcnkuc3ViaXRlbXMpLm1hcCgob25lS2V5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57b25lS2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZ1bmRpbmdfaGlzdG9yeS5zdWJpdGVtc1tvbmVLZXldLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQ+e2l0ZW19PC90ZD4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2x1bURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIHsoISFkYXRhLmNvbXBhbnlfaW5mbykgPyA8PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuY29tcGFueV9pbmZvLnRleHR9IDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlUm93KFwiY29tcGFueV9pbmZvXCIpfSBjbGFzc05hbWU9XCJjbG9zZVNlY1wiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jb21wYW55X2luZm8uZGF0YS5tYXAoKHN1YmRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17a2V5fT57c3ViZGF0YS5kZXNjcmlwdGlvbn08L3RkPilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Lz4gOiBcIlwifVxuXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbHVtRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgICAgICAgeyghIWRhdGEuZmV0YXVyZXMpID8gPD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZldGF1cmVzLnRleHR9IDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlUm93KFwiZmV0YXVyZXNcIil9IGNsYXNzTmFtZT1cImNsb3NlU2VjXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mZXRhdXJlcy5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9PntzdWJkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sdW1EYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgICAgICB7KCEhZGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5KSA/IDw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5LnRleHR9IDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlUm93KFwiY3VzdG9tZXJfY2FzZV9zdHVkeVwiKX0gY2xhc3NOYW1lPVwiY2xvc2VTZWNcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuY3VzdG9tZXJfY2FzZV9zdHVkeS5kYXRhLm1hcCgoc3ViZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dGQga2V5PXtrZXl9PntzdWJkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+KVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvPiA6IFwiXCJ9XG5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuXG5cbiAgICAgICAgey8qICBNb2RhbCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJuZXdWZW5kb3JcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5BZGQgTmV3IFZlbmRvcjwvaDU+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIHsoZm9ybURhdGEucHJvZHVjdF9kZXNjcmlwdGlvbiAhPSB1bmRlZmluZWQpID8gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvZHVjdF9kZXNjcmlwdGlvblwiPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2Zvcm1EYXRhLnByb2R1Y3RfZGVzY3JpcHRpb259IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gbmFtZT1cInByb2R1Y3RfZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgKGZvcm1EYXRhLmZ1bmRpbmdfaGlzdG9yeSAhPSB1bmRlZmluZWQpID8gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmdW5kaW5nX2hpc3RvcnlcIj5GdW5kaW5nIEhpc3Rvcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEuZnVuZGluZ19oaXN0b3J5fSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VIYW5kbGUoZSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmdW5kaW5nX2hpc3RvcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAoZm9ybURhdGEuY29tcGFueV9pbmZvICE9IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29tcGFueV9pbmZvXCI+Q29tcGFueSBJbmZvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEuY29tcGFueV9pbmZvfSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VIYW5kbGUoZSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjb21wYW55X2luZm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChmb3JtRGF0YS5mZXRhdXJlcyAhPSB1bmRlZmluZWQpID8gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmZXRhdXJlc1wiPkZlYXR1cmVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLmZldGF1cmVzfSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2VIYW5kbGUoZSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmZXRhdXJlc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChmb3JtRGF0YS5jdXN0b21lcl9jYXNlX3N0dWR5ICE9IHVuZGVmaW5lZCkgPyA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImN1c3RvbWVyX2Nhc2Vfc3R1ZHlcIj5DdXN0b21lciBjYXNlIHN0dWR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLmN1c3RvbWVyX2Nhc2Vfc3R1ZHl9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZShlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImN1c3RvbWVyX2Nhc2Vfc3R1ZHlcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2hvbWUnOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTm90Rm91bmQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMHZoXCI+PGgyIGNsYXNzTmFtZT1cIm0tMCBibHVlLWRlZmF1bHRcIj5Sb3V0ZSBOb3QgRm91bmQ8L2gyPjwvZGl2PiAgICAgIFxuICAgICk7XG4gIH1cbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90Rm91bmQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL05vdEZvdW5kLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTm90Rm91bmQuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL05vdEZvdW5kJztcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXZlbG9wbWVudC5qc1wiOiBcIi4vc3JjL2NvbmZpZy9kZXZlbG9wbWVudC5qc1wiLFxuXHRcIi4vaW5kZXguanNcIjogXCIuL3NyYy9jb25maWcvaW5kZXguanNcIixcblx0XCIuL3Byb2R1Y3Rpb24uanNcIjogXCIuL3NyYy9jb25maWcvcHJvZHVjdGlvbi5qc1wiLFxuXHRcIi4vc3RhZ2luZy5qc1wiOiBcIi4vc3JjL2NvbmZpZy9zdGFnaW5nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbmZpZyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qcyRcIjsiLCJcbiBjb25zdCBjb25maWcgICAgPSAgIHtcbiAgICAvLyBmb3IgZGV2ICAgIFxuICAgIGZvb2RqZXRzVXJsICAgICAgICAgICAgIDogICAnJyxcbiAgICBhcGlfZW5kICAgICAgICAgICAgICAgICA6ICAgJy9hcGkvJyxcbiAgICBHVE1fY29kZSAgICAgICAgICAgICAgICA6ICAgJ0dUTS1USE5HUEg2JyxcbiAgICBHU1RNX2NvZGUgICAgICAgICAgICAgICA6ICAgJ1VBLTY1NTU0MzAxLTMnLFxuICAgIHBheXBhbCAgICAgICAgICAgICAgICAgIDogICB7XG4gICAgICAgIG1vZGUgICAgICAgICAgICAgICAgOiAgICdzYW5kYm94J1xuICAgIH0gXG59XG5leHBvcnQgZGVmYXVsdCBjb25maWc7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuLy9wcm9jZXNzLmVudi5OT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIHN0YWdpbmcgfCBkZXZlbG9wbWVudCB8IHByb2R1Y3Rpb25cbi8vcHJvY2Vzcy5lbnYuUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcbi8vY29uc3QgZW52ICAgICA9IChwcm9jZXNzLmVudi5OT0RFX0VOVik/cHJvY2Vzcy5lbnYuTk9ERV9FTlY6J2RldmVsb3BtZW50Jztcbi8vY29uc3QgZW52ICAgICAgID0gJ3N0YWdpbmcnO1xuXG5sZXQgZW52ICAgPSAnJztcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WICA9PT0gJ3Byb2R1Y3Rpb24nKVxuICBlbnYgID0gJ3Byb2R1Y3Rpb24nO1xuZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpXG4gIGVudiAgPSAnc3RhZ2luZyc7XG5lbHNlXG4gIGVudiAgPSAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0ge1xuICAvL2VudjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JyxcbiAgZW52OmVudixcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgxXG59O1xuLy9jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOViwgXy5leHRlbmQoY29uZmlnLCByZXF1aXJlKCcuLycgKyBlbnYgKyAnLmpzJykuZGVmYXVsdCB8fCB7fSkpXG5leHBvcnQgZGVmYXVsdCBfLmV4dGVuZChjb25maWcsIHJlcXVpcmUoJy4vJyArIGVudiArICcuanMnKS5kZWZhdWx0IHx8IHt9KTsiLCJjb25zdCBjb25maWcgICAgPSAgIHtcbiAgICAvL2ZvciBwcm9kdWN0aW9uXG4gICAgZm9vZGpldHNVcmwgICAgICAgICAgICAgOiAgICdodHRwczovL2Zvb2RqZXRzLmNvbScsXG4gICAgYXBpX2VuZCAgICAgICAgICAgICAgICAgOiAgICcvbWJwLXNlcnZpY2UvJyxcbiAgICBHVE1fY29kZSAgICAgICAgICAgICAgICA6ICAgJ0dUTS1USE5HUEg2JyxcbiAgICBHU1RNX2NvZGUgICAgICAgICAgICAgICA6ICAgJ1VBLTY1NTU0MzAxLTMnLFxuICAgIHNlbnRyeV9kc24gICAgICAgICAgICAgIDogICAnaHR0cHM6Ly8wOTMxZGRlMWIyMzM0MzJiOTViNzA2ZWYxMDVjYjI4NEBzZW50cnkuaW8vMTU0NjQ3MicsXG4gICAgZmlyZWJhc2UgICAgICAgICAgICAgICAgOiAgIHtcbiAgICAgICAgYXBpS2V5ICAgICAgICAgICAgICA6ICAgXCJBSXphU3lCeHYyTnVSWVVCOVNXbEhLVk5sLTRkQW9IdGFFeUhBS2NcIixcbiAgICAgICAgYXV0aERvbWFpbiAgICAgICAgICA6ICAgXCJmb29kamV0cy00YmM5Zi5maXJlYmFzZWFwcC5jb21cIixcbiAgICAgICAgZGF0YWJhc2VVUkwgICAgICAgICA6ICAgXCJodHRwczovL2Zvb2RqZXRzLTRiYzlmLmZpcmViYXNlaW8uY29tXCIsXG4gICAgICAgIHByb2plY3RJZCAgICAgICAgICAgOiAgIFwiZm9vZGpldHMtNGJjOWZcIixcbiAgICAgICAgc3RvcmFnZUJ1Y2tldCAgICAgICA6ICAgXCJmb29kamV0cy00YmM5Zi5hcHBzcG90LmNvbVwiLFxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZCAgIDogICBcIjY0NDUwMTc4MzE2MFwiLFxuICAgICAgICBhcHBJZCAgICAgICAgICAgICAgIDogICBcIjE6NjQ0NTAxNzgzMTYwOndlYjplNGQ4YzZjZjBjZjgzYzgyXCJcbiAgICB9LFxuICAgIHBheXBhbCAgICAgICAgICAgICAgICAgIDogICB7XG4gICAgICAgIG1vZGUgICAgICAgICAgICAgICAgOiAgICdwcm9kdWN0aW9uJ1xuICAgIH1cbn0iLCJjb25zdCBjb25maWcgICAgPSAgIHtcbiAgICBmb29kamV0c1VybCAgICAgICAgICAgICA6ICAgJ2h0dHA6Ly9kZXYuZm9vZGpldHMuY29tJyxcbiAgICBhcGlfZW5kICAgICAgICAgICAgICAgICA6ICAgJy9hcGkvJyxcbiAgICBHVE1fY29kZSAgICAgICAgICAgICAgICA6ICAgJ0dUTS1USE5HUEg2JyxcbiAgICBHU1RNX2NvZGUgICAgICAgICAgICAgICA6ICAgJ1VBLTY1NTU0MzAxLTMnLFxuICAgIHNlbnRyeV9kc24gICAgICAgICAgICAgIDogICAnaHR0cHM6Ly8yYjIwMjlhZTI4M2U0YTZhYTllNzJlYzU5NzlmZjU4NUBzZW50cnkuaW8vMTU0NjQ3MScsXG4gICAgZmlyZWJhc2UgICAgICAgICAgICAgICAgOiAgIHtcbiAgICAgICAgYXBpS2V5ICAgICAgICAgICAgICA6ICAgXCJBSXphU3lCbzJVVkhLQjJob25EdXRRR05fdHlZU3NHNGxaNUJNaTRcIixcbiAgICAgICAgYXV0aERvbWFpbiAgICAgICAgICA6ICAgXCJmb29kamV0cy1kZXYuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgIGRhdGFiYXNlVVJMICAgICAgICAgOiAgIFwiaHR0cHM6Ly9mb29kamV0cy1kZXYuZmlyZWJhc2Vpby5jb21cIixcbiAgICAgICAgcHJvamVjdElkICAgICAgICAgICA6ICAgXCJmb29kamV0cy1kZXZcIixcbiAgICAgICAgc3RvcmFnZUJ1Y2tldCAgICAgICA6ICAgXCJmb29kamV0cy1kZXYuYXBwc3BvdC5jb21cIixcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQgICA6ICAgXCI2ODc5NDAyMzYxMjlcIlxuXG4gICAgfSxcbiAgICBwYXlwYWwgICAgICAgICAgICAgICAgICA6ICAge1xuICAgICAgICBtb2RlICAgICAgICAgICAgICAgIDogICAnc2FuZGJveCdcbiAgICB9XG59XG4vL2NvbnNvbGUubG9nKCdTdGFnaW5nIDogJywgY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2FwcCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe30sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQXBwKTtcbiIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUnO1xuaW1wb3J0IHsgZG9fbG9naW4gfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2F1dGgnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICByZXR1cm4ge1xuICAgIGRhdGE6IHN0YXRlLnNpZ251cFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xuICAgIGRvX2xvZ2luOmRvX2xvZ2luLFxuICB9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEhvbWUpOyIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9ub3QtZm91bmQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiB7fTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHt9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKE5vdEZvdW5kKTtcbiIsImltcG9ydCBUWVBFIGZyb20gJy4uLy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi8uLi9BcGkvQXBpJztcbmltcG9ydCB7IGVycm9yIGFzIG5vdGlmeUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9ub3RpZnknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uLy4uLy4uL1NlbnRyeS9zZW50cnlcIlxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5TZW50cnlJbml0aWFsaXplKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb19sb2dpbihkYXRhKSB7XG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgICAgICAgICAgICAgPT4gIHtcbiAgICAgICAgbGV0ICBzZW5kRGF0YSAgPSAge3VzZXJuYW1lOmRhdGEuZW1haWwsIHBhc3N3b3JkOmRhdGEucGFzc3dvcmR9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzICAgICAgICAgICAgICAgICAgID0gICBhd2FpdCBBUEkucG9zdCgncmVzdC1hdXRoL2xvZ2luLycsIHNlbmREYXRhKVxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5RXJyb3IocmVzLmRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFRZUEUuU0lHTklOX0VSUk9SIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJEYXRhICAgID0gICByZXMuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fU1VDQ0VTUywgZGF0YTogIHJlcy5kYXRhfSk7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5vdGlmeUVycm9yKCdJbnZhbGlkIHJlcXVlc3QgKDQwMSknKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVFlQRS5TSUdOSU5fRVJST1IgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiIsImV4cG9ydCB7IGRvX2xvZ2luIH0gZnJvbSAnLi9hdXRoJzsiLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9hdXRoJztcbmxldCB1c2VyRGF0YSAgICA9IHt9O1xuLy9pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gIHVzZXJEYXRhICAgICAgICAgID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9JykgOiB7fTtcbi8vfVxuY29uc29sZS5sb2codXNlckRhdGEpO1xubGV0IGluaXRpYWxTdGF0ZSAgICA9ICAge1xuICB1c2VyRGF0YTogey4uLnVzZXJEYXRhfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUWVBFLlNJR05VUDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogdHJ1ZSwgaXNTdWNjZXNzOiBmYWxzZX07XG4gICAgY2FzZSBUWVBFLlNJR05VUF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNQcm9jZXNzaW5nOmZhbHNlLCBpc1N1Y2Nlc3M6IHRydWUsIHVzZXJEYXRhOiBhY3Rpb24uZGF0YX07XG4gICAgY2FzZSBUWVBFLlNJR05VUF9FUlJPUjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzogZmFsc2UsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU46XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IHRydWUsIGlzU3VjY2VzczogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzUHJvY2Vzc2luZzpmYWxzZSwgaXNTdWNjZXNzOiB0cnVlLCB1c2VyRGF0YTogYWN0aW9uLmRhdGF9O1xuICAgIGNhc2UgVFlQRS5TSUdOSU5fRVJST1I6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc1Byb2Nlc3Npbmc6IGZhbHNlLCBpc1N1Y2Nlc3M6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IGZhbHNlfTtcbiAgICBjYXNlIFRZUEUuQUREX0RFTF9BRERSX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0FkZHJlc3NFcnJvcjogZmFsc2V9O1xuICAgIGNhc2UgVFlQRS5BRERfREVMX0FERFJfRVJST1I6XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNBZGRyZXNzRXJyb3I6IHRydWV9OyBcbiAgIFxuICAgIGRlZmF1bHQ6IHJldHVybiB7Li4uc3RhdGUsIC4uLmluaXRpYWxTdGF0ZX07XG4gIH1cbn0iLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVFlQRS5SRVFfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzogdHJ1ZSwgSGVhZGVyZGF0YToge30gfTtcbiAgICBjYXNlIFRZUEUuUkVTX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEhlYWRlcmRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgSGVhZGVyZGF0YToge319O1xuXG4gICAgICBjYXNlIFRZUEUuUkVRX0FERFJFU1NfREFUQTpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiB0cnVlLCBBZHJlc3NkYXRhOiB7fSB9O1xuICAgICAgICBjYXNlIFRZUEUuUkVTX0FERFJFU1NfREFUQTpcbiAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6ZmFsc2UsIEFkcmVzc2RhdGE6IGFjdGlvbi5kYXRhfTtcblxuICAgICAgY2FzZSBUWVBFLkZBSUxfQUREUkVTU19EQVRBOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IGZhbHNlLCBBZHJlc3NkYXRhOiB7fX07XG4gICBcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn0iLCJpbXBvcnQgVFlQRSBmcm9tICcuLi90eXBlcy9ob21lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRZUEUuUkVRX0RBVEE6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIEhvbWVkYXRhOiB7fSB9O1xuICAgIGNhc2UgVFlQRS5SRVNfREFUQTpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzTG9hZGluZzpmYWxzZSwgSG9tZWRhdGE6IGFjdGlvbi5kYXRhfTtcbiAgICBjYXNlIFRZUEUuRkFJTF9EQVRBOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNMb2FkaW5nOiBmYWxzZSwgSG9tZWRhdGE6IHt9fTtcbiAgIFxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBzaWdudXAgZnJvbSAnLi9hdXRoJztcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSc7XG5cblxuXG5jb25zdCByZWR1eFN0YXRlID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBIb21lLFxuICAgIGhlYWRlcixcbiAgICBzaWdudXAsXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1eFN0YXRlOyIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAYXV0aFR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFNJR05VUDogbnVsbCxcbiAgU0lHTlVQX1NVQ0NFU1M6IG51bGwsXG4gIFNJR05VUF9FUlJPUjogbnVsbCxcbiAgU0lHTklOOiBudWxsLFxuICBTSUdOSU5fU1VDQ0VTUzogbnVsbCxcbiAgU0lHTklOX0VSUk9SOiBudWxsLFxuICBBRERfREVMX0FERFI6IG51bGwsXG4gIEFERF9ERUxfQUREUl9TVUNDRVNTOiBudWxsLFxuICBBRERfREVMX0FERFJfRVJST1I6IG51bGwsXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAaGVhZGVyVHlwZXMnO1xuXG5jb25zdCB0eXBlcyA9IHtcbiAgUkVRX0RBVEE6IG51bGwsXG4gIFJFU19EQVRBOiBudWxsLFxuICBGQUlMX0RBVEE6IG51bGwsXG4gIFJFUV9BRERSRVNTX0RBVEE6IG51bGwsXG4gIFJFU19BRERSRVNTX0RBVEE6IG51bGwsXG4gIEZBSUxfQUREUkVTU19EQVRBOiBudWxsLFxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgcHJlZml4ID0gJ0BAaG9tZVR5cGVzJztcblxuY29uc3QgdHlwZXMgPSB7XG4gIFJFUV9EQVRBOiBudWxsLFxuICBSRVNfREFUQTogbnVsbCxcbiAgRkFJTF9EQVRBOiBudWxsLFxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpOyIsImltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWZpeGVyKHR5cGVzLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHJlZHVjZSh0eXBlcywgKHJlc3VsdCwgdmFsdWUsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gYCR7cHJlZml4fS8ke2tleX1gOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJztcbmltcG9ydCByZWR1eFN0YXRlIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzJztcblxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9IGNyZWF0ZUxvZ2dlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWR1eFN0b3JlKHsgcHJlbG9hZGVkU3RhdGUsIHNlcnZlciB9ID0ge30pIHtcbiAgbGV0IGVuaGFuY2VyO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFzZXJ2ZXIpIHtcbiAgICBlbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmUpO1xuICB9IGVsc2Uge1xuICAgIGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdXhTdGF0ZSwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwJztcbmltcG9ydCB7Z2V0Q29va2llfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuXG4vL2ltcG9ydCBBYm91dCBmcm9tICcuLi9jb250YWluZXJzL0Fib3V0JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb250YWluZXJzL05vdEZvdW5kJztcblxuaW1wb3J0ICcuL2dsb2JhbC5jc3MnXG4vL2ltcG9ydCB7IGdldEFib3V0RGF0YSB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYWJvdXQnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMsIHtub3RpZnl9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XG5cblxuXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb250YWluZXJzL0hvbWUnO1xuXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1NlbnRyeUluaXRpYWxpemUgfSBmcm9tIFwiLi4vU2VudHJ5L3NlbnRyeVwiXG5TZW50cnlJbml0aWFsaXplKCk7XG4vLyBmb3IgbW9yZSBkZXRhaWxzIHNlZSBodHRwczovL3JlYWN0dHJhaW5pbmcuY29tL3JlYWN0LXJvdXRlci93ZWIvZ3VpZGVzL3NlcnZlci1yZW5kZXJpbmdcbi8vIHNwZWNpZnkgcm91dGVzIHdpdGggdGhlIGFzbnljIGZ1bmN0aW9uIHJlcXVpcmVkIHRvIGZldGNoIHRoZSBkYXRhIHRvIHJlbmRlciB0aGUgcm91dGVcbi8vIElNUE9SVEFOVDogdGhlIGxvYWREYXRhIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgUHJvbWlzZVxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFt7XG4gICAgcGF0aDogJy8nLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZVxuICB9LCB7XG4gICAgY29tcG9uZW50OiBOb3RGb3VuZFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgcHVibGljcm91dGVzID0gW1xuICAge1xuICBwYXRoOiAnL2hvbWUnLFxuICBjb21wb25lbnQ6IEhvbWUgICAgXG59XG5cbl07XG5cbmV4cG9ydCBjb25zdCBwcml2YXRlUm91dGVzID0gW1xuXG5dO1xuXG5leHBvcnQgY29uc3QgcHJvdGVjdGVkUm91dGVzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgbGV0ICBoaWRlSGVhZCA9IHRydWU7XG4gIGxldCB1cmwgICAgICAgICAgICAgICAgICAgPSAgICcnO1xuICBsZXQgdXNlckRhdGEgICAgPSB7fTtcbiAgbGV0IGN1cnJlbnRBZGRyZXNzICAgID0ge307XG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICB1c2VyRGF0YSAgICAgICAgICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykgfHwgJ3t9Jyk7XG4gIFxuICB9XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpKSB7ICAgICAgXG4gICAgdXJsICAgICAgICAgICAgICAgICAgICAgPSAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xuICAgIGlmICh1cmxbMV0gPT0gJycgfHwgdXJsWzFdID09ICdsb2dpbid8fCB1cmxbMV0gPT0gJ3NpZ251cCcpIHtcbiAgICAgIGhpZGVIZWFkICAgICAgICAgPSAgIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAge1xuICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IFxuICAgICAgPGRpdj4gICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIDxOb3RpZmljYXRpb25zIC8+XG4gICAgIFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIHtwcm90ZWN0ZWRSb3V0ZXMubWFwKChyb3V0ZSkgPT4gKFxuICAgICAgICAgICAgPFByb3RlY3RlZFJvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gdXNlckRhdGE9e3VzZXJEYXRhfSBwcmV2UGF0aD17dXJsWzFdfS8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3ByaXZhdGVSb3V0ZXMubWFwKChyb3V0ZSkgPT4gKFxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZSBrZXk9e3JvdXRlLnBhdGh9IHBhdGg9e3JvdXRlLnBhdGh9IHJvdXRlPXtyb3V0ZX0gY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9IHVzZXJEYXRhPXt1c2VyRGF0YX0gIHByZXZQYXRoPXt1cmxbMV19Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7cHVibGljcm91dGVzLm1hcChyb3V0ZSA9PihcbiAgICAgICAgICAgICAgPFB1YmxpY1JvdXRlIGtleT17cm91dGUucGF0aH0gcGF0aD17cm91dGUucGF0aH0gcm91dGU9e3JvdXRlfSBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH0gcHJldlBhdGg9e3VybFsxXX0vPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgICAge3JvdXRlcy5tYXAocm91dGUgPT4oXG4gICAgICAgICAgICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke3JvdXRlLnBhdGh9YH0gey4uLnJvdXRlfS8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgXG4gICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgIH1cbiAgICAgIDwvZGl2PiAgIFxuICApO1xufVxuXG5mdW5jdGlvbiBQdWJsaWNSb3V0ZSh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pIHtcbiAgbGV0IG9iaiA9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfTtcbiAgbGV0IHByZXZQYXRoICA9IHJlc3QucHJldlBhdGggfHwgJyc7XG4gICAgcmV0dXJuIChcbiAgICA8Um91dGUga2V5PXtgaW5kZXggJHtvYmoucGF0aH1gfSBwYXRoPXtvYmoucGF0aH0gXG4gICAgICAgIC8qIGNvbXBvbmVudD17b2JqLmNvbXBvbmVudH0gKi9cbiAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgICA8b2JqLmNvbXBvbmVudCB7Li4ucHJvcHN9IHByZXZQYXRoPXtwcmV2UGF0aH0gLz5cbiAgICAgICAgKX1cbiAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUHJpdmF0ZVJvdXRlKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkge1xuICBsZXQgb2JqID0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9O1xuICAvL2NvbnNvbGUubG9nKCdMb2NhbCBTdG9yYWdlIDogJywgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlRGF0YScpKSk7XG4gIGxldCBjdXJyZW50QWRkcmVzcyAgPSByZXN0LmN1cnJlbnRBZGRyZXNzIHx8IHt9O1xuICBsZXQgdXNlckRhdGEgID0gcmVzdC51c2VyRGF0YSB8fCB7fTtcbiAgbGV0IHByZXZQYXRoICA9IHJlc3QucHJldlBhdGggfHwgJyc7XG4gIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICFfLmlzRW1wdHkodXNlckRhdGEpKSB7XG4gICAgY29uc29sZS5sb2coJ1JvdXRlIFBSaXZhdGUgOiAnLCByZXN0LnJvdXRlKTtcbiAgICByZXR1cm4gKFxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofSBcbiAgICAgICAgLyogY29tcG9uZW50PXtvYmouY29tcG9uZW50fSAqL1xuICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAgIDxvYmouY29tcG9uZW50IHsuLi5wcm9wc30gdXNlckRhdGE9e3VzZXJEYXRhfSBwcmV2UGF0aD17cHJldlBhdGh9IC8+XG4gICAgICAgICl9XG4gICAgLz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWRpcmVjdFxuICAgICAgICB0bz17e1xuICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIlxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gUHJvdGVjdGVkUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSB7XG4gIGxldCBvYmogPSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH07XG4gIGxldCB1c2VyRGF0YSAgPSByZXN0LnVzZXJEYXRhIHx8IHt9O1xuICBsZXQgcHJldlBhdGggID0gcmVzdC5wcmV2UGF0aCB8fCAnJztcbiAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIV8uaXNFbXB0eSh1c2VyRGF0YSkpIHtcbiAgICByZXR1cm4gKFxuICAgIDxSb3V0ZSBrZXk9e2BpbmRleCAke29iai5wYXRofWB9IHBhdGg9e29iai5wYXRofVxuICAgICAgLyogY29tcG9uZW50PXtvYmouY29tcG9uZW50fSAqL1xuICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgPG9iai5jb21wb25lbnQgey4uLnByb3BzfSB1c2VyRGF0YT17dXNlckRhdGF9IHByZXZQYXRoPXtwcmV2UGF0aH0vPlxuICAgICAgKX1cbiAgICAvPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlZGlyZWN0XG4gICAgICAgIHRvPXt7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL2xvZ2luXCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuLy9jb25zb2xlLmxvZygnQ29va2llIENvbmZpZyA6ICcsIGNvbmZpZy5jb29raWUpO1xuXG4vLyBleHBvcnQgY29uc3QgZ2V0ID0gKG5hbWUgPSAnZm9vZGpldHNfbmV3X21lcmNoYW50JykgPT57XG4vLyBcdGlmKGNvbmZpZy5jb29raWUuaG9zdG5hbWUgPT09ICdodHRwOi8vY29uc29sZS5kZXYuZm9vZGpldHMuY29tJykge1xuLy8gXHRcdG5hbWUgPSAnZGV2XycrbmFtZVxuLy8gXHR9XG5cbi8vICAgXHRyZXR1cm4gQ29va2llcy5nZXRKU09OKG5hbWUpO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IHNldCA9IChkYXRhLCBuYW1lID0gJ2Zvb2RqZXRzX25ld19tZXJjaGFudCcpID0+e1xuLy8gXHRpZihjb25maWcuY29va2llLmhvc3RuYW1lID09PSAnaHR0cDovL2NvbnNvbGUuZGV2LmZvb2RqZXRzLmNvbScpIHtcbi8vIFx0XHRuYW1lID0gJ2Rldl8nK25hbWVcbi8vIFx0fVxuLy8gXHRpZighIWNvbmZpZy5jb29raWUuZG9tYWluKVxuLy8gXHRcdENvb2tpZXMuc2V0KG5hbWUsIGRhdGEsIHtkb21haW46IGNvbmZpZy5jb29raWUuZG9tYWlufSk7XG4vLyBcdGVsc2Vcbi8vIFx0XHRDb29raWVzLnNldChuYW1lLCBkYXRhKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBjb25zdCByZW1vdmUgPSAobmFtZSA9ICdmb29kamV0c19uZXdfbWVyY2hhbnQnKSA9Pntcbi8vIFx0aWYoY29uZmlnLmNvb2tpZS5ob3N0bmFtZSA9PT0gJ2h0dHA6Ly9jb25zb2xlLmRldi5mb29kamV0cy5jb20nKSB7XG4vLyBcdFx0bmFtZSA9ICdkZXZfJytuYW1lXG4vLyBcdH1cblxuLy8gXHRpZighIWNvbmZpZy5jb29raWUuZG9tYWluKVxuLy8gXHRcdENvb2tpZXMucmVtb3ZlKG5hbWUsIHtkb21haW46IGNvbmZpZy5jb29raWUuZG9tYWlufSk7XG4vLyBcdGVsc2Vcbi8vIFx0XHRDb29raWVzLnJlbW92ZShuYW1lKTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoZGF0YSwgbmFtZSkgPT57XG4gIFx0Q29va2llcy5zZXQobmFtZSwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TGlmZXRpbWVDb29raWUgPSAoZGF0YSwgbmFtZSxkYXkpID0+e1xuXHRDb29raWVzLnNldChuYW1lLCBkYXRhLCB7IGV4cGlyZXM6IGRheSB9KTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChuYW1lKSA9PntcbiAgXHRDb29raWVzLnJlbW92ZShuYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT57XG4gIFx0cmV0dXJuIENvb2tpZXMuZ2V0SlNPTihuYW1lKTtcbn07IiwiaW1wb3J0IEFQSSBmcm9tICcuLi9BcGkvQXBpJztcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L2Jyb3dzZXInO1xuaW1wb3J0IHtTZW50cnlJbml0aWFsaXplIH0gZnJvbSBcIi4uL1NlbnRyeS9zZW50cnlcIjtcblNlbnRyeUluaXRpYWxpemUoKTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRGbG9hdFR3b0RlY2ltYWwgPSBmdW5jdGlvbihudW0pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0pLnRvRml4ZWQoMik7XG59XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0VHdvRGVjaW1hbFJvdW5kID0gZnVuY3Rpb24obnVtKSB7XG4gICAgcmV0dXJuICsoTWF0aC5yb3VuZChudW0gKyBcImUrMlwiKSArIFwiZS0yXCIpO1xufVxuXG5leHBvcnQgY29uc3QgbG9nRXJyb3JUb1NlcnZlciA9IGFzeW5jIGZ1bmN0aW9uKHBhcmFtcywgZXJyb3IpIHtcbiAgICBcbiAgICBpZihwYXJhbXMudHlwZSA9PT0gJ2NhdGNoJylcbiAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBjb25zdCBpbnZhbGlkVXJsICAgID0nL2ludmFsaWQtbGluayc7XG4gICAgbGV0IGFkZGl0aW9uYWxJbmZvICAgICAgPSAgIHt9O1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhXG4gICAgICAgICAqIHN0YXR1cyBjb2RlIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcbiAgICAgICAgICovXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvLmRhdGEgICAgID0gICBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5zdGF0dXMgICA9ICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5oZWFkZXJzICA9ICAgZXJyb3IucmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRGF0YSA6ICcsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdTdGF0dXMgOiAnLCBlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdIZWFkZXJzIDogJywgZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWQsIGBlcnJvci5yZXF1ZXN0YFxuICAgICAgICAgKiBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2VcbiAgICAgICAgICogb2YgaHR0cC5DbGllbnRSZXF1ZXN0IGluIE5vZGUuanNcbiAgICAgICAgICovXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1JlcXVlc3QgOiAnLCBlcnJvci5yZXF1ZXN0KTtcbiAgICAgICAgYWRkaXRpb25hbEluZm8ucmVxdWVzdCAgICAgPSAgIGVycm9yLnJlcXVlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgYW5kIHRyaWdnZXJlZCBhbiBFcnJvclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdFcnJvciA6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBhZGRpdGlvbmFsSW5mby5tZXNzYWdlICAgICA9ICAgZXJyb3IubWVzc2FnZTtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygnQ29uZmlnIDogJywgZXJyb3IuY29uZmlnKTtcbiAgICBpZighIWVycm9yLmNvbmZpZylcbiAgICAgICAgYWRkaXRpb25hbEluZm8uY29uZmlnICAgICA9ICAgZXJyb3IuY29uZmlnO1xuICAgIGNvbnN0IHJlcyAgICAgICAgICAgPSAgIGF3YWl0IEFQSS5wb3N0KCcvYXV0aC9jYXRjaC1pbnZhbGlkLWxpbmsnLCB7XG4gICAgICAgIFwicGFyYW1zXCIgICAgOiAgIHsuLi5wYXJhbXMsIGFkZGl0aW9uYWxJbmZvOiBKU09OLnN0cmluZ2lmeShhZGRpdGlvbmFsSW5mbyl9XG4gICAgfSlcbiAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24ocmVzLmRhdGEuZXJyb3IpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5lcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSAgID0+ICB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGludmFsaWRVcmxcbiAgICAgICAgfSwzMDAwKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgYWRkcmVzc0Zvcm1hdGVyID0gKG9iaikgPT4ge1xuICAgIHRyeXtcbiAgICAgIGxldCByZWdleCA9IC8oXFxkKykgKC4rPyksICguKz8pLCAoLis/KSAoWzAtOV17NX0pLztcbiAgXG4gICAgICBsZXQgYWRkcmVzcyA9IG9iai5tYXRjaChyZWdleCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGFkZHJlc3MpO1xuICAgICAgaWYoYWRkcmVzc1s0XS5pbmRleE9mKCcsJykgPiAtMSAmJiBhZGRyZXNzWzNdLmluZGV4T2YoJyAnKSA+IC0xKXtcbiAgICAgICAgbGV0IGZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzWzNdKycsICcrIGFkZHJlc3NbNF0gKyAnICcrIGFkZHJlc3NbYWRkcmVzcy5sZW5ndGggLTFdO1xuICAgICAgICBsZXQgbW9kQWRkcmVzcyA9IGZvcm1hdHRlZEFkZHJlc3MrJywgVVNBJztcbiAgICAgICAgaWYoLyhcXGQrKSAoLis/KSwgKC4rPyksICguKz8pIChbMC05XXs1fSkvZy50ZXN0KG1vZEFkZHJlc3MpKXtcbiAgICAgICAgICBsZXQgX2FkZHJlc3MgPSBtb2RBZGRyZXNzLm1hdGNoKHJlZ2V4KTtcbiAgXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkQWRyczogdHJ1ZSwgXG4gICAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiBmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgICAgYWRkcmVzczogbW9kQWRkcmVzcyxcbiAgICAgICAgICAgIG51bWJlcjogX2FkZHJlc3NbMF0sXG4gICAgICAgICAgICBzdHJlZXQ6IF9hZGRyZXNzWzFdLFxuICAgICAgICAgICAgY2l0eTogX2FkZHJlc3NbMl0sXG4gICAgICAgICAgICBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgICAgICBzdGF0ZV9jb2RlOiBfYWRkcmVzc1s0XSxcbiAgICAgICAgICAgIHppcGNvZGU6IF9hZGRyZXNzW19hZGRyZXNzLmxlbmd0aCAtMV1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbGlkQWRyczogZmFsc2UgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbMV0gKyAnICcgKyBhZGRyZXNzWzJdICsgJywgJysgYWRkcmVzc1szXSArICcsICcgKyBhZGRyZXNzWzRdICsgJyAnICsgYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsaWRBZHJzOiB0cnVlLCBcbiAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiBmb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICAgIGFkZHJlc3M6IG9iaixcbiAgICAgICAgICBudW1iZXI6IGFkZHJlc3NbMV0sXG4gICAgICAgICAgc3RyZWV0OiBhZGRyZXNzWzJdLFxuICAgICAgICAgIGNpdHk6IGFkZHJlc3NbM10sXG4gICAgICAgICAgY291bnRyeTogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgICAgICAgIHN0YXRlX2NvZGU6IGFkZHJlc3NbNF0sXG4gICAgICAgICAgemlwY29kZTogYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtMV0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZEFkcnM6IGZhbHNlIFxuICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW1haWwgPShlbWFpbCkgPT57XG4gIGNvbnN0IHBhdHRlcm4gPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KFN0cmluZyhlbWFpbCkpO1xufSIsImltcG9ydCB7IG5vdGlmeSB9IGZyb20gJ3JlYWN0LW5vdGlmeS10b2FzdCc7XG5cbmV4cG9ydCBjb25zdCBzdWNjZXNzID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyMwMDgwMDAnLCB0ZXh0OiBcIiNGRkZGRkZcIiwgXCJ6LWluZGV4XCI6XCI5OTk5OVwiIH07XG4gICAgbm90aWZ5LnNob3cobWVzc2FnZSwgXCJjdXN0b21cIiwgNTAwMCwgbXlDb2xvcik7ICAgIFxufVxuLy8gZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcbi8vICAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNGQjYwNTYnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xuLy8gICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDUwMDAsIG15Q29sb3IpO1xuLy8gfVxuZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNGQjYwNTYnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xuICAgIGxldCBoID1cInhcIlxuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDUwMDAsIG15Q29sb3IpO1xufVxuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSAobWVzc2FnZSkgPT4ge1xuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwid2FybmluZ1wiLCA1MDAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbWVycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgICBsZXQgbXlDb2xvciA9IHsgYmFja2dyb3VuZDogJyNmZjAwMDAnLCB0ZXh0OiBcIiNGRkZGRkZcIiB9O1xuICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UsIFwiY3VzdG9tXCIsIDYwMDAwLCBteUNvbG9yKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgbm90aWZ5LmhpZGUoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9