"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express = require("express");
class Server {
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
        const typeDefs = apollo_server_express_1.gql `
 
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
        const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
        const app = express();
        server.applyMiddleware({ app });
        app.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map