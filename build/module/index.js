"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("./user"));

var _trainee = _interopRequireDefault(require("./trainee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log(UserQuery,TraineeQuery,"<--->")
const resolvers = {
  Query: { ..._user.default,
    ..._trainee.default
  }
};
var _default = resolvers;
exports.default = _default;