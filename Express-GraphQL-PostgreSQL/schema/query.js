const graphql = require('graphql');
const User = require('../models/userModel.js');
const Thing = require('../models/thingModel.js');
const { UserType, ThingType } = require('./types.js');

const { GraphQLObjectType, GraphQLList, GraphQLID } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      description: 'Gets all users',
      resolve(parent, args) {
        return User.find()
          .then(res => {
            if (res) {
              return res;
            } else {
              return new Error('The users could not be found.');
            }
          })
          .catch(err => {
            return new Error('There was an error completing your request.');
          });
      }
    },
    getUserById: {
      type: UserType,
      description: 'Gets a user by user ID',
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        if (!args.id) {
          return new Error('Please include a user ID and try again.');
        } else {
          return User.findById(args.id)
            .then(res => {
              if (res) {
                return res;
              } else {
                return new Error('The user could not be found.');
              }
            })
            .catch(err => {
              return new Error('There was an error completing your request.');
            });
        }
      }
    },
    getAllThings: {
      type: new GraphQLList(ThingType),
      description: 'Gets all things',
      resolve(parent, args) {
        return Thing.find()
          .then(res => {
            if (res) {
              return res;
            } else {
              return new Error('The things could not be found.');
            }
          })
          .catch(err => {
            return new Error('There was an error completing your request.');
          });
      }
    },
    getThingsByThingId: {
      type: ThingType,
      description: 'Gets a thing by thing ID',
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        if (!args.id) {
          return new Error('Please include a thing ID and try again.');
        } else {
          return Thing.findById(args.id)
            .then(res => {
              if (res) {
                return res;
              } else {
                return new Error('No thing with that thing ID could be found.');
              }
            })
            .catch(err => {
              return new Error('There was an error completing your request.');
            });
        }
      }
    }
    // getAllWalletsByUserId: {
    //   type: WalletType,
    //   description: "Gets all wallets by user ID",
    //   args: { userId: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     if (!args.userId) {
    //       return new Error("Please include a wallet ID and try again.");
    //     } else {
    //       return Wallet.findByUserId(args.userId)
    //         .then(res => {
    //           if (res.length) {
    //             return res;
    //           } else {
    //             return new Error("No wallets for that user ID could be found.");
    //           }
    //         })
    //         .catch(err => {
    //           return new Error("There was an error completing your request.");
    //         });
    //     }
    //   }
    // }
  }
});

module.exports = {
  RootQuery
};
