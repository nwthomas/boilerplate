const graphql = require("graphql");
const User = require("../models/user.js");
const Thing = require("../models/thing.js");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const ThingType = new GraphQLObjectType({
  name: "Thing",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLNonNull(GraphQLString) },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userid);
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    middleName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLString },
    street1: { type: GraphQLString },
    street2: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString },
    things: {
      type: new GraphQLList(ThingType),
      resolve(parent, args) {
        return Thing.find({ userid: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      }
    },
    thing: {
      type: ThingType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Thing.findById(args.id);
      }
    },
    things: {
      type: new GraphQLList(ThingType),
      resolve(parent, args) {
        return Thing.find();
      }
    }
  }
});

module.exports = {
  UserType,
  ThingType,
  RootQuery
};
