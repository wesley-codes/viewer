const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  img: { type: String,  },
  subscribers: {type:Number, default:0},
  subscribedUsers:{type: [String]}
},{timestamps: true});

module.exports = mongoose.model("User", UserSchema)