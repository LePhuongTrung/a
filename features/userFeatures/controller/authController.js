const { hashPassword, checkPassword } = require("../../../utils/bcrypt");
const { createToken } = require("../../../utils/jwt");
const AuthService = require("../services/AuthServices")

const register = async (req, res, next) => {
  try {
    let data = req.body;
    const foundUser = await AuthService.findOne(data.email);
    if (foundUser) return res.status(400).send("user already exist");
    if (!data.email || !data.password || !data.fullname) return res.status(412).send("Please fill in all required information")

    const hashedPassword = await hashPassword(data.password);

    const newUser = await AuthService.create({ ...data, password: hashedPassword });

    if (!newUser) return res.status(500).send("Internal server error");

    return res.status(200).send(newUser);
  } catch (error) {
    console.log("🚀 ~ file: auth.js ~ line 19 ~ router.post ~ error", error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res.status(400).send("empty email or password");

    const foundUser = await AuthService.findOne(email);

    if (!foundUser) return res.status(403).send("Can't find any user");

    const isValidPassword = await checkPassword(password, foundUser.password);

    if (!isValidPassword) return res.status(401).send("Password is not valid");

    const { email: userEmail, role, fullname } = foundUser;

    const payload = { email: userEmail, role, fullname };

    const token = await createToken(payload);

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 300000,
    });

    return res.status(200).send("Login successfully !!!");
  } catch (error) {
    console.log("🚀 ~ file: auth.js ~ line 47 ~ router.post ~ error", error);
    next(error);
  }
};

const deletedAccount = async (req, res) => {
  try {
      const user = await AuthService.deleteAccount(req.params.id);
      res.send(user);
  }
  catch(error){
      console.log("🚀 ~ file: Book.js ~ line 151 ~ router.delete ~ error", error);
  }
}

module.exports = {
  register,
  login,
  deletedAccount,
};
