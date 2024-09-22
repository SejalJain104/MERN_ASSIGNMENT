const express = require("express");
const User = require("../model/User");

const router = express.Router();

async function handleFetchUsersByEmail(req, res) {
  const email = req.params.email;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
}

async function handleFetchUsers(req, res) {
    console.log("users hit");
    try {
      const users = await User.find({});
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching user", error: error.message });
    }
  }
  

async function handleUserCreation(req, res) {
  console.log("users hit");
  const { name, email, age } = req.body;
  console.log(req.body);
  try {
    const newUser = await User.create({ name, email, age });

    res.status(200).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error Creating user", error: error.error });
  }
}

router.get("/user/:email", handleFetchUsersByEmail);
router.get("/users/find", handleFetchUsers);

router.post("/users", handleUserCreation);

module.exports = router;
