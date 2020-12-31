"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hide = exports.customerror = exports.warning = exports.error = exports.success = void 0;

var _reactNotifyToast = require("react-notify-toast");

var success = function success(message) {
  var myColor = {
    background: '#008000',
    text: "#FFFFFF",
    "z-index": "99999"
  };

  _reactNotifyToast.notify.show(message, "custom", 5000, myColor);
}; // export const error = (message) => {
//     let myColor = { background: '#FB6056', text: "#FFFFFF" };
//     notify.show(message, "custom", 5000, myColor);
// }


exports.success = success;

var error = function error(message) {
  var myColor = {
    background: '#FB6056',
    text: "#FFFFFF"
  };
  var h = "x";

  _reactNotifyToast.notify.show(message, "custom", 5000, myColor);
};

exports.error = error;

var warning = function warning(message) {
  _reactNotifyToast.notify.show(message, "warning", 5000);
};

exports.warning = warning;

var customerror = function customerror(message) {
  var myColor = {
    background: '#ff0000',
    text: "#FFFFFF"
  };

  _reactNotifyToast.notify.show(message, "custom", 60000, myColor);
};

exports.customerror = customerror;

var hide = function hide() {
  _reactNotifyToast.notify.hide();
};

exports.hide = hide;