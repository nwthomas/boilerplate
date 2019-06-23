const express = require("express");
const mongoose = require("mongoose");
const applyMiddleware = require("./middleware.js");
const graphqlHTTP = require("express-graphql"); // Express connecting package and naming convention
const schema = require("../schema/schema.js");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
const restricted = require("../auth/restricted.js");
require("dotenv").config();

const server = express(); // Create new server

applyMiddleware(server); // Configure middleware

server.get("/playground", expressPlayground({ endpoint: "/graphql" })); // Use GraphQL Playground

server.get("/", (req, res) => {
  res.send("The server is alive and well 🎉");
});

// Connect to MongoDB Atlas database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log(`
         Connected to Database
  -------------------------------------
  `);
});

const logger = (req, res, next) => {
  console.log("IP: ", req.ip);
  next();
};

server.use(restricted);

// Server use GraphQL with /graphql endpoint
server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: false // Turns off graphiql for GraphQL Playground use
  })
);

module.exports = server;
