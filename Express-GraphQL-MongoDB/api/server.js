const express = require("express");
const mongoose = require("mongoose");
const applyMiddleware = require("./middleware.js");
const graphqlHTTP = require("express-graphql"); // Express connecting package and naming convention
const schema = require("../schema/schema.js");
require("dotenv").config();

const server = express(); // Create new server

applyMiddleware(server); // Configure middleware

// Connect to MongoDB Atlas database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log(`
         Connected to Database
  -------------------------------------
  `);
});

// Server use GraphQL with /graphql endpoint
server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true // Allows users to access the GraphiQL tool in the browser
  })
);

module.exports = server;
