const UserModel = require("../../../Database/models/User");

const create = async (data) => {
  try {
    const register = await UserModel.create(data);
    return register;
  } catch (error) {
    console.log("🚀 ~ file: AuthRepository.js ~ line 18 ~ register ~ error", error)

  }
};

const findOne = async (data) => {
  try {
    const login = await UserModel.findOne({ email: data });
    return login;
  } catch (error) {
    console.log("login repository: ", error);
  }
};

const deleteUser = async (id) =>{
  try{
      const deleteUser = await UserModel.findByIdAndDelete(id);
      return deleteUser;
  } catch(error){
      console.log(error);
  }
}
module.exports = { 
  create, 
  findOne,
  deleteUser,
};
