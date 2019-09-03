"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Subscription = require("../../Subscription");

const userMutation = {
  login: async (parent, args, {
    dataSources
  }) => {
    console.log(args);
    const result = await dataSources.userApi.login(args);

    _Subscription.pubsub.publish(_Subscription.LOGIN, {
      login: result
    });

    return result;
  }
};
var _default = userMutation;
exports.default = _default;