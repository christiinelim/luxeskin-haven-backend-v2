const { findAllUsers, findUserById, createUser } = require('../repository/User');

const resolvers = {
  Query: {
    getUsers: async () => {
      return await findAllUsers();
    },
    getUser: async (_root, { id }) => {
      return await findUserById(id);
    },
  },
  Mutation: {
    createUser: async (_root, { input }) => {
      const newUser = await createUser(input);
      return newUser;
    },
  },
};

module.exports = resolvers;