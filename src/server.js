import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';

import { configuration } from './config'
import schema from '.';
import TraineeApi from './services';

// console.log(TraineeApi);
const app = express();
app.get('/health-check', (req, res) => {
  res.send('I am fine');
});

const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  dataSources: () => {
    return {
      traineeApi : new TraineeApi(),
    };
  },

context: ({ req}) => {
    return { authorization : req.headers.authorization }
  }
});
server.applyMiddleware({ app });
// app.listen({ port: configuration.port }, () => {
//   console.log('server is readyat http://localhost:4000${server.graphqlPath}' );
// });


app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);