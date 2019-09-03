"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireWildcard(require("./user"));

var _trainee = _interopRequireWildcard(require("./trainee"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// console.log(UserQuery,TraineeQuery,"<--->")
const resolvers = {
  Query: { ..._user.default,
    ..._trainee.default
  },
  Mutation: { ..._user.userMutation,
    ..._trainee.traineeMutation
  },
  Subscription: { ..._trainee.traineeSubscription,
    ..._user.userSubscription
  }
};
var _default = resolvers;
exports.default = _default;