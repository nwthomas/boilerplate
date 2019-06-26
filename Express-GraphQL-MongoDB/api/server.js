const express = require("express");
const mongoose = require("mongoose");
const applyMiddleware = require("./middleware.js");
const graphqlHTTP = require("express-graphql"); // Express connecting package and naming convention
const schema = require("../schema/schema.js");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
const server = express(); // Create new server
require("dotenv").config();
const restricted = require("../auth/restricted.js");

applyMiddleware(server);

server.get("/playground", expressPlayground({ endpoint: "/graphql" })); // Use GraphQL Playground

server.get("/", (req, res) => {
  res.send("The server is alive and well 🎉");
});

// Connect to MongoDB Atlas database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log(`
           Connected to MongoDB Database Cluster
  ------------------------------------------------------------
  `);
});

// Server use GraphQL with /graphql endpoint
server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: false // Turns off graphiql for GraphQL Playground use
  })
);

module.exports = server;
