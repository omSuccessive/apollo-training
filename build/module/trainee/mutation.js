"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Subscription = require("../../Subscription");

const Mutation = {
  addTrainee: async (parent, args, {
    dataSources
  }) => {
    const result = await dataSources.traineeApi.addTrainee(args);

    _Subscription.pubsub.publish(_Subscription.ADD_TRAINEE, {
      addTrainee: result
    });
  },
  updateTrainee: async (parent, args, {
    dataSources
  }) => {
    const result = await dataSources.traineeApi.updateTrainee(args);

    _Subscription.pubsub.publish(_Subscription.UPDATE_TRAINEE, {
      updateTrainee: result
    });

    return result;
  },
  deleteTrainee: async (parent, args, {
    dataSources
  }) => {
    const result = await dataSources.traineeApi.deleteTrainee(args);

    _Subscription.pubsub.publish(_Subscription.DELETE_TRAINEE, {
      deleteTrainee: result
    });

    return result;
  }
};
var _default = Mutation;
exports.default = _default;