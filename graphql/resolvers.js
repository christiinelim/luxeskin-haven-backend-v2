const { findAllUsers, findUserById, createUser, getUserByEmailAndPassword } = require('../repository/User');

const resolvers = {
  Query: {
    getUsers: async () => {
      return await findAllUsers();
    },
    getUser: async (_root, { id }) => {
      return await findUserById(id);
    },
    login: async (_root, { input }) => {
      return await getUserByEmailAndPassword(input);
    }
  },
  Mutation: {
    createUser: async (_root, { input }) => {
      return await createUser(input);
    },
  },
};

module.exports = resolvers;