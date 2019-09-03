"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Query = {
  userProfile: async (parent, args, {
    dataSources
  }) => {
    const result = await dataSources.userApi.profile();
    return result;
  }
};
var _default = Query;
exports.default = _default;