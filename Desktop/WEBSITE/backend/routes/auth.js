const express = require("express");
const router = express.Router();

const {
  signupUser,
  loginUser
} = require("../controllers/authController");

// Signup
router.post("/signup", signupUser);

// Login
router.post("/login", loginUser);

module.exports = router;
