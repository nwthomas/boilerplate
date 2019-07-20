const graphql = require('graphql');
const User = require('../models/userModel.js');
const Thing = require('../models/thingModel.js');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt, description: 'The unique ID of the user' },
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The unique username of the user'
    },
    firstName: {
      type: GraphQLString,
      description: 'The first name of the user'
    },
    middleName: {
      type: GraphQLString,
      description: 'The middle name of the user'
    },
    lastName: { type: GraphQLString, description: 'The last name of the user' },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The unique email of the user'
    },
    phone: { type: GraphQLString, description: 'The phone number of the user' },
    street1: {
      type: GraphQLString,
      description: "Street line 1 of the user's address"
    },
    street2: {
      type: GraphQLString,
      description: "Street line 2 of the user's address"
    },
    city: { type: GraphQLString, description: 'The city of the user' },
    state: { type: GraphQLString, description: 'The state of the user' },
    zip: { type: GraphQLString, description: 'The zip code of the user' },
    things: {
      type: new GraphQLList(ThingType),
      description: 'The list of things belonging to the user',
      resolve(parent, args) {
        return Thing.findByUserId(parent.id);
      }
    }
  })
});

const ThingType = new GraphQLObjectType({
  name: 'Thing',
  fields: () => ({
    id: { type: GraphQLInt, desciption: 'The unique ID of the thing' },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the thing'
    },
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The foreign key of the associated user'
    },
    user: {
      type: UserType,
      description: 'The user associated with the thing',
      resolve(parent, args) {
        return User.findById(parent.userId);
      }
    }
  })
});

module.exports = {
  UserType,
  ThingType
};
