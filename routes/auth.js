// routes/auth.js
const express = require("express");
const { signUp, signIn } = require("../controllers/authController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// Example: User signup
router.post("/signup", signUp);
// POST /api/signin
router.post("/signin", signIn);

// Final response after login
router.get("/success", (req, res) => {
  res.json({ message: "Login successful", user: req.user });
});

// Error handler
router.get("/failure", (req, res) => {
  res.status(401).json({ message: "Facebook login failed" });
});

router.post("/logout", (req, res) => {
  console.log("reached logout route");
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});
// router.get("/auth/facebook", (req, res) => {
//   res.send("Facebook OAuth will be implemented here");
// });

// router.get("/auth/facebook/callback", (req, res) => {
//   res.send("Facebook callback will be implemented here");
// });
module.exports = router;
