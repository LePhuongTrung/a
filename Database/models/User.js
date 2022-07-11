const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: String,
  password: String,
  fullname: String,
  role: String,
});

// chuẩn
// const UserSchema = new Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true, minLength: 6, },
//     fullname: { type: String, required: true},
//     role: { type: String, required: true},
//   });

// tạo model
const User = mongoose.model("User", UserSchema);

module.exports = User;
