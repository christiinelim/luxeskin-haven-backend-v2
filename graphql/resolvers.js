const User = require('../models/User');

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        throw new Error('Unable to fetch users', error);
      }
    },
    getUser: async (parent, { id }) => {
      return await User.findByPk(id);
    },
  },
  Mutation: {
    createUser: async (parent, { username, email }) => {
      return await User.create({ username, email });
    },
  },
};

module.exports = resolvers;