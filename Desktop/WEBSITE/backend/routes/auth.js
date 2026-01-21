const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Signup
router.post("/signup", authController.signup);

// Login (we’ll do later)
router.post("/login", authController.login);

module.exports = router;

