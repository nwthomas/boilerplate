const graphql = require('graphql');
const User = require('../models/userModel.js');
const Thing = require('../models/thingModel.js');
const { UserType, ThingType } = require('./types.js');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt
} = graphql;

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addUser: {
      type: UserType,
      description: 'Adds a new user',
      args: {
        username: {
          type: GraphQLNonNull(GraphQLString),
          description: 'The unique username of the new user'
        },
        firstName: {
          type: GraphQLString,
          description: 'The first name of the new user'
        },
        middleName: {
          type: GraphQLString,
          description: 'The middle name of the new user'
        },
        lastName: {
          type: GraphQLString,
          description: 'The last name of the new user'
        },
        email: {
          type: GraphQLNonNull(GraphQLString),
          description: 'The unique email of the new user'
        },
        phone: {
          type: GraphQLString,
          description: 'The phone number of the new user'
        },
        street1: {
          type: GraphQLString,
          description: "Street line 1 of the new user's address"
        },
        street2: {
          type: GraphQLString,
          description: "Street line 2 of the new user's address"
        },
        city: { type: GraphQLString, description: 'The city of the new user' },
        state: {
          type: GraphQLString,
          description: 'The state of the new user'
        },
        zip: {
          type: GraphQLString,
          description: 'The zip code of the new user'
        }
      },
      async resolve(parent, args) {
        if (!args.username || !args.email) {
          return new Error(
            'Please include the required credentials and try again.'
          );
        }
        try {
          const newUser = { ...args };
          return await User.insert(newUser);
        } catch {
          return new Error('There was an error completing your request.');
        }
      }
    },
    updateUser: {
      type: UserType,
      description: 'Updates an existing user by user ID',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The unique ID of the user'
        },
        username: {
          type: GraphQLString,
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
        lastName: {
          type: GraphQLString,
          description: 'The last name of the user'
        },
        email: {
          type: GraphQLString,
          description: 'The unique email of the user'
        },
        phone: {
          type: GraphQLString,
          description: 'The phone number of the user'
        },
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
        zip: { type: GraphQLString, description: 'The zip code of the user' }
      },
      async resolve(parent, args) {
        if (!args.id) {
          return new Error('Please include the user id and try again.');
        }
        try {
          const userChanges = { ...args };
          return User.update(userChanges.id, userChanges);
        } catch {
          return new Error('There was an error completing your request.');
        }
      }
    },
    deleteUser: {
      type: UserType,
      description: 'Deletes an existing user by user ID',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The unique ID of the user'
        }
      },
      async resolve(parent, args) {
        if (!args.id) {
          return new Error('Please include a user ID and try again.');
        }
        try {
          const id = await User.remove(args.id);
          return { id };
        } catch {
          return new Error('There was an error completing your request.');
        }
      }
    },
    addThing: {
      type: ThingType,
      description: 'Adds a new thing',
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'The unique name of the new thing'
        },
        userId: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The user Id associated with the thing'
        }
      },
      async resolve(parent, args) {
        if (!args.name || !args.userId) {
          return new Error('Please include a name and userId and try again.');
        }
        try {
          return Thing.insert({ ...args });
        } catch {
          return new Error('The user could not be created.');
        }
      }
    }
  })
});

module.exports = {
  Mutation
};
