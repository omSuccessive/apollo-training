"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Subscription = require("../../Subscription");

const traineeSubscription = {
  addTrainee: {
    subscribe: () => _Subscription.pubsub.asyncIterator([_Subscription.ADD_TRAINEE])
  },
  updateTrainee: {
    subscribe: () => _Subscription.pubsub.asyncIterator([_Subscription.UPDATE_TRAINEE])
  },
  deleteTrainee: {
    subscribe: () => _Subscription.pubsub.asyncIterator([_Subscription.DELETE_TRAINEE])
  }
};
var _default = traineeSubscription;
exports.default = _default;