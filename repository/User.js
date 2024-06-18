const User = require('../models/User');
const { getHashedPassword } = require('../utils')

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

const createUser = async (input) => {
  try {
    const { password, ...rest } = input;
    const hashedPassword = await getHashedPassword(password);
    const newUser = await User.create({ password: hashedPassword, ...rest });
    return newUser
  } catch (error) {
    throw new Error('Unable to create new user');
  }
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser
};