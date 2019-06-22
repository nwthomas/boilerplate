const graphql = require("graphql");
const User = require("../models/user.js");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  buildSchema
} = graphql;

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
    zip: { type: GraphQLString }
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
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
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
        zip: { type: GraphQLString }
      },
      resolve(parent, args) {
        let user = new User({
          username: args.username,
          password: args.password,
          firstName: args.firstName,
          middleName: args.middleName,
          lastName: args.lastName,
          email: args.email,
          phone: args.phone,
          street1: args.street1,
          street2: args.street2,
          city: args.city,
          state: args.state,
          zip: args.zip
        });
        return user.save();
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        firstName: { type: GraphQLString },
        middleName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        street1: { type: GraphQLString },
        street2: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString },
        zip: { type: GraphQLString }
      },
      async resolve(parent, args) {
        let user = await User.findById(args.id);
        if (args.username) user.username = args.username;
        if (args.password) user.password = args.password;
        if (args.firstName) user.firstName = args.firstName;
        if (args.middleName) user.middleName = args.middleName;
        if (args.lastName) user.lastName = args.lastName;
        if (args.email) user.email = args.email;
        if (args.phone) user.phone = args.phone;
        if (args.street1) user.street1 = args.street1;
        if (args.street2) user.street2 = args.street2;
        if (args.city) user.city = args.city;
        if (args.state) user.state = args.state;
        if (args.zip) user.zip = args.zip;
        return user.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
