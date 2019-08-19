##GraphQL:
           GraphQL is a syntax that describes how to ask for data, and is generally used to load data from a server to a client. GraphQL has three main characteristics:
           -It lets the client specify exactly what data it needs.
           -It makes it easier to aggregate data from multiple sources.
           -It uses a type system to describe data.
           With GraphQL the user is able to make a single call to fetch the required information rather than to construct several REST requests to fetch the same.
            A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type. For example, a GraphQL service that tells us who the logged in user is (me) as well as that user's name might look something like this:

       type Query {
       me: User
       }

      type User {
     id: ID
     name: String
    }
    
##GraphQL Schema:
                     A schema is defined in terms of the types and directives it supports as well as the root operation types for each kind of operation: query, mutation, and subscription; this determines the place in the type system where those operations begin.
                     
                     A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it.


 ##Resolvers

    
##Query
             A GraphQL operation can either be a read or a write operation. A GraphQL query is used to read or fetch values while a mutation is used to write or post values. In either case, the operation is a simple string that a GraphQL server can parse and respond to with data in a specific format. The popular response format that is usually used for mobile and web applications is JSON.

The syntax to define a query is as follows −

syntax 1:
query query_name{ someField }

syntax 2:
{ someField }
Following is an example of a query −

query with name myQuery
query myQuery{
   greeting
}

 query without any name
{
   greeting
}
         It is clear from the above example that the query keyword is optional.

         GraphQL queries help to reduce over fetching of data. Unlike a Restful API, GraphQL allows a user to restrict fields that should be fetched from the server. This means smaller queries and lesser traffic over the network; which in turn reduces the response time.

##Mutation:
            Mutation queries modify data in the data store and returns a value. It can be used to insert, update, or delete data. Mutations are defined as a part of the schema.

          The syntax of a mutation query is given below −

          mutation{
         someEditOperation(dataField:"valueOfField"):returnType
          }