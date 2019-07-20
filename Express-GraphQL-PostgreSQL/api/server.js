const express = require('express');
const applyMiddleware = require('./middleware.js');
const graphqlHTTP = require('express-graphql'); // Express connecting package and naming convention
const schema = require('../schema/schema.js');
const expressPlayground = require('graphql-playground-middleware-express')
  .default; // Custom middleware replacement of Graphiql with GraphQL Playground
const server = express();

applyMiddleware(server);

server.get('/playground', expressPlayground({ endpoint: '/graphql' })); // Use GraphQL Playground

server.get('/', (req, res) => {
  res.send('The Server is alive and well 🎉');
});

// Server use GraphQL with /graphql endpoint
server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: false // Turns off graphiql for GraphQL Playground use
  })
);

module.exports = server;
