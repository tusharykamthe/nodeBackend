const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: { type: String, require: true },
  emailId: { type: String, require: true },
  mobileNo: { type: Number, require: true },
  password: { type: String, required: true },
  profilePic: { type: String, require: false },
  address: { type: String, require: false },
});

module.exports = mongoose.model("user", userSchema) 