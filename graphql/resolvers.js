const { findAllUsers, findUserById } = require('../repository/User');

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
      const { username, email, password, first_name, last_name, contact, address } = input;
      const newUser = await User.create({ username, email, password, first_name, last_name, contact, address });
      return newUser;
    },
  },
};

module.exports = resolvers;