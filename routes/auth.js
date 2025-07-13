// routes/auth.js
const express = require("express");
const { signUp, signIn } = require("../controllers/authController");
const router = express.Router();

// Example: User signup
router.post("/signup", signUp);
// POST /api/signin
router.post("/signin", signIn);

module.exports = router;
