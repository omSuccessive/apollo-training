import { ApolloServer, gql } from 'apollo-server-express';
import * as express from 'express';

export default class Server {
    constructor() {
        const books = [
            {
                title: 'Harry Potter and the Chamber of Secrets',
                author: 'J.K. Rowling',
                name: 'jack Ryan'
            },
            {
                title: 'Jurassic Park',
                author: 'Michael Crichton',
                name: 'tony Stark',
            },
        ];

        const typeDefs = gql`
 
  type Book {
    title: String
    author: String
    name:  String
  }

 
  type Query {
    books: [Book]
  }
`;


        const resolvers = {
            Query: {
                books: () => books,
            },
        };

        const server = new ApolloServer({ typeDefs, resolvers });

        const app = express();
        server.applyMiddleware({ app });

        app.listen({ port: 4000 }, () =>
            console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
        );
    }
}
