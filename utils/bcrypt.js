require("dotenv").config();
const bcrypt = require("bcrypt");

const hashPassword = async (plainPassword) => {
  try {
    const salt = await bcrypt.genSalt(process.env.SALT_ROUNDS);
    const hashPassword = await bcrypt.hashSync(plainPassword, salt);
    return hashPassword;
  } catch (error) {
    console.log("🚀 ~ file: bcrypt.js ~ line 9 ~ hashPassword ~ error", error);
    return error;
  }
};

const checkPassword = async (password, encryptedPassword) => {
  try {
    const isValidPassword = await bcrypt.compare(password, encryptedPassword);
    return isValidPassword;
  } catch (error) {
    console.log(
      "🚀 ~ file: bcrypt.js ~ line 18 ~ checkPassword ~ error",
      error
    );
    return error;
  }
};

module.exports = {
  hashPassword,
  checkPassword,
};
