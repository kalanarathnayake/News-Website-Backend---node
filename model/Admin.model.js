const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  }, 
  id: {
    type: Number,
  },
});

module.exports = Admin = mongoose.model("Admin", UserSchema);
