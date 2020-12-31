"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = exports.removeCookie = exports.setLifetimeCookie = exports.setCookie = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  _jsCookie.default.set(name, data);
};

exports.setCookie = setCookie;

var setLifetimeCookie = function setLifetimeCookie(data, name, day) {
  _jsCookie.default.set(name, data, {
    expires: day
  });
};

exports.setLifetimeCookie = setLifetimeCookie;

var removeCookie = function removeCookie(name) {
  _jsCookie.default.remove(name);
};

exports.removeCookie = removeCookie;

var getCookie = function getCookie(name) {
  return _jsCookie.default.getJSON(name);
};

exports.getCookie = getCookie;