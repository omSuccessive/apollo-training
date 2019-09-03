"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGIN = exports.DELETE_TRAINEE = exports.UPDATE_TRAINEE = exports.ADD_TRAINEE = exports.pubsub = void 0;

var _apolloServerExpress = require("apollo-server-express");

const pubsub = new _apolloServerExpress.PubSub();
exports.pubsub = pubsub;
const ADD_TRAINEE = 'ADD_TRAINEE';
exports.ADD_TRAINEE = ADD_TRAINEE;
const UPDATE_TRAINEE = 'UPDATE_TRAINEE';
exports.UPDATE_TRAINEE = UPDATE_TRAINEE;
const DELETE_TRAINEE = 'DELETE_TRAINEE';
exports.DELETE_TRAINEE = DELETE_TRAINEE;
const LOGIN = 'LOGIN';
exports.LOGIN = LOGIN;