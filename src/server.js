import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
// import configuration from './config';
import {configuration} from './config'
import schema from '.';

console.log('-----------', configuration.port);
const app = express();

const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
});

server.applyMiddleware({ app });

// app.listen({ port: configuration.port }, () => {
//   console.log('server is ready');
// });
app.listen({ port: 4000 }, () =>
            console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
        );