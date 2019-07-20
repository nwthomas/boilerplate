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
      resolve(parent, args) {
        if (!args.username || !args.email) {
          return new Error(
            'Please include the required credentials and try again.'
          );
        } else {
          const newUser = { ...args };
          return User.insert(newUser)
            .then(res => {
              if (res.rowCount) {
                return User.findByUsername(args.username)
                  .then(res => {
                    if (res) {
                      return res;
                    } else {
                      return new Error(
                        'There was an error returning the new user.'
                      );
                    }
                  })
                  .catch(err => {
                    return new Error(
                      'There was an error completing your request.'
                    );
                  });
              } else {
                return new Error('The user could not be created.');
              }
            })
            .catch(err => {
              return new Error('There was an error completing your request.');
            });
        }
      }
    },
    updateUser: {
      type: UserType,
      description: 'Updates an existing user by user ID',
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
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
      resolve(parent, args) {
        const userChanges = { ...args };
        return User.update(args.id, userChanges)
          .then(res => {
            if (res) {
              return User.findById(args.id)
                .then(res => {
                  return res;
                })
                .catch(err => {
                  return new Error(
                    'There was an error completing your request.'
                  );
                });
            } else {
              return new Error('The user could not be updated.');
            }
          })
          .catch(err => {
            return new Error('There was an error completing your request.');
          });
      }
    },
    deleteUser: {
      type: UserType,
      description: 'Deletes an existing user by user ID',
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
          description: 'The unique ID of the user'
        }
      },
      resolve(parent, args) {
        if (!args.id) {
          return new Error('Please include a user ID and try again.');
        } else {
          return User.remove(args.id)
            .then(res => {
              if (res) {
                return { id: args.id };
              } else {
                return new Error('The user could not be deleted.');
              }
            })
            .catch(err => {
              return new Error('There was an error completing your request.');
            });
        }
      }
    }
  })
});

module.exports = {
  Mutation
};
