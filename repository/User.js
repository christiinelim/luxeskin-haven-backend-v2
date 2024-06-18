const User = require('../models/User');

const findAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw new Error('Unable to fetch users');
  }
};

const findUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error retrieving user');
  }
};

module.exports = {
  findAllUsers,
  findUserById,
};