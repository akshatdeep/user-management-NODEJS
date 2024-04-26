var express = require("express");
var router = express.Router();
const userdata = require("../models/userdata");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/user-info", async function (req, res, next) {
  try {
    const user = await userdata.find();
    res.render("userinfo", { users: user });
  } catch (error) {
    res.send(error);
  }
});

router.get("/create", function (req, res, next) {
  res.render("createUser");
});

router.post("/user", async function (req, res, next) {
  try {
    const newuser = new userdata(req.body);
    await newuser.save();
    res.redirect("/user-info");
  } catch (error) {
    res.send(error);
  }
});

router.get("/update/:id", async function (req, res, next) {
  try {
    const updateUser = await userdata.findById(req.params.id);
    res.render("update", { user: updateUser });
  } catch (error) {}
  res.render("update");
});

router.post("/update/:id", async function (req, res, next) {
  try {
    await userdata.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/user-info");
  } catch (error) {
    res.send(error);
  }
});

router.get("/delete/:id", async function (req, res, next) {
  try {
    await userdata.findByIdAndDelete(req.params.id);
    res.redirect("/user-info");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
