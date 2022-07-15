const AuthRepository = require("../repository/AuthRepository");

const create = async (data) => {
  try {
    const handleRegister = await AuthRepository.create(data);
    return handleRegister;
  } catch (error) {
    console.log(error);
  }
};

const findOne = async (data) => {
  try {
    const handleLogin = await AuthRepository.findOne(data);
    return handleLogin;
  } catch (error) {
    console.log(error);
  }
};

const deleteAccount = async (id) => {
  try {
      const deleteAccount = await AuthRepository.deleteUser(id);
      return deleteAccount;
  } catch (error) {
      console.log(error);
  }
};

module.exports = { 
  create, 
  findOne,
  deleteAccount,
};
