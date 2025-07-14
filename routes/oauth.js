const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.get("/me", requireAuth, (req, res) => {
  res.json({ user: req.user }); // already decoded by middleware
});
// Start Facebook login
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

// Handle Facebook callback
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/auth/failure",
  }),
  (req, res) => {
    // Redirect to success route where JWT is created
    res.redirect("/auth/success");
  }
);

// Generate JWT and set cookie
router.get("/success", (req, res) => {
  const user = req.user;

  if (!user) {
    return res.redirect("/auth/failure");
  }

  const token = jwt.sign(
    {
      id: user.id,
      name: user.displayName,
      email: user.emails?.[0]?.value,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  // Set HttpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // set to true in production (HTTPS only)
    sameSite: "Lax",
  });

  // Redirect to your React app at port 5173
  res.redirect("http://localhost:5173/home");
});

// Auth failure
router.get("/failure", (req, res) => {
  res.status(401).send("Facebook login failed");
});

module.exports = router;
