const mongoose = require("mongoose");

const User = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  jobrole: String,
});

const users = mongoose.model("users", User);

module.exports = users;
