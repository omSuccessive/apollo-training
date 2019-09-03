"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Subscription = require("../../Subscription");

const userSubscription = {
  login: {
    subscribe: () => _Subscription.pubsub.asyncIterator([_Subscription.LOGIN])
  }
};
var _default = userSubscription;
exports.default = _default;