const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const authRoutes = require("./routes/auth");
const itemsRouter = require("./routes/items");
const jwt = require("jsonwebtoken");
const oauthRoutes = require("./routes/oauth");
const session = require("express-session");
const passport = require("passport");

//Registers your Facebook strategy
require("./config/passport-config");
const app = express();
app.use(cookieParser());

// Required for Passport session management
app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecret",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true, // allow cookies/auth headers
  })
);

// Rate limiter middleware (e.g., max 100 requests per 15 minutes per IP)

const oauthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: "Too many OAuth attempts",
});
const normalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Limit each IP to 100 requests per windowMs
  message: { error: "Too many requests, please try again later." },
});

const logger = (req, res, next) => {
  console.log(`${req.method} and ${req.url}`);
  next(); // pass control to next middleware
};
// Middleware setup
app.use(logger);
app.use(normalLimiter);
app.use(express.json()); // This is essential to parse JSON bodies
app.use("/auth", oauthLimiter, oauthRoutes);
app.use("/api", authRoutes);
app.use(itemsRouter);

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "Lax" });
  res.json({ message: "Logged out successfully" });
});

app.get("/*sam", (req, res) => {
  res.status(404).json({ error: "Page Not Found.." });
});
app.listen(2000, () => {
  console.log("listening on 2000");
});
