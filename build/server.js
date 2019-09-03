"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGIN = void 0;

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _config = require("./config");

var _ = _interopRequireDefault(require("."));

var _services = require("./services");

var _http = require("http");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const server = new _apolloServerExpress.ApolloServer({
  schema: (0, _apolloServerExpress.makeExecutableSchema)(_.default),
  dataSources: () => {
    return {
      traineeApi: new _services.TraineeApi(),
      userApi: new _services.UserApi()
    };
  },
  context: ({
    req,
    connection
  }) => {
    if (connection) {
      return connection.context;
    }

    return {
      authorization: req.headers.authorization || ""
    };
  }
});
server.applyMiddleware({
  app
});
const httpServer = (0, _http.createServer)(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen({
  port: _config.configuration.port
}, () => {
  console.log(`🚀 Server ready at http://localhost:${_config.configuration.port}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${_config.configuration.port}${server.subscriptionsPath}`);
  console.log('server is ready');
});
const LOGIN = 'LOGIN';
exports.LOGIN = LOGIN;