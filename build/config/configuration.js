"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
const configurations = Object.freeze({
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  serviceURL: process.env.SERVICE_URL
});
console.log('>>>>>>>>>>>', configurations);
var _default = configurations;
exports.default = _default;