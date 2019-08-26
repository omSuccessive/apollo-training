"use strict";

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _config = require("./config");

var _ = _interopRequireDefault(require("."));

var _services = _interopRequireDefault(require("./services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log(TraineeApi);
const app = (0, _express.default)(); // app.get('/health-check', (req, res) => {
//   res.send('I am fine');
// });

const server = new _apolloServerExpress.ApolloServer({
  schema: (0, _apolloServerExpress.makeExecutableSchema)(_.default),
  dataSources: () => {
    return {
      traineeApi: new _services.default()
    };
  },
  context: ({
    req
  }) => {
    return {
      authorization: req.headers.authorization
    };
  }
});
server.applyMiddleware({
  app
}); // app.listen({ port: configuration.port }, () => {
//   console.log('server is readyat http://localhost:4000${server.graphqlPath}' );
// });

app.listen({
  port: 4000
}, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));