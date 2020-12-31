"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _history = require("history");

var _default = process.env.BROWSER ? (0, _history.createBrowserHistory)() : (0, _history.createMemoryHistory)();

exports.default = _default;