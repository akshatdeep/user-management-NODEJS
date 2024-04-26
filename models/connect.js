const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/user-manegment")
  .then(() => {
    console.log("connected to DB:");
  })
  .catch((error) => {
    console.log(error);
  });




module.exports = mongoose