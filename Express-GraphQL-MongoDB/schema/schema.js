const graphql = require("graphql");
const { Mutation } = require("./mutation.js");
const { RootQuery } = require("./type.js");
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
