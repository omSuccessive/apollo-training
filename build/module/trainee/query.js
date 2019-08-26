"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Query = {
  getTrainee: async (parent, args, {
    dataSources
  }) => {
    return await dataSources.traineeApi.getTrainee();
  }
};
var _default = Query;
exports.default = _default;