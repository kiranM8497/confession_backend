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
const fileUploadRouter = require("./routes/uploadRoutes");
const requireAuth = require("./middleware/requireAuth");
const unauthorizedHandler = require("./middleware/unAuthorised");
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
    // origin: "http://192.168.1.5:5173" && "http://localhost:5173", // your frontend origin
    origin: "http://localhost:5173", // your frontend origin
    credentials: true, // allow cookies/auth headers
  })
);

// Rate limiter middleware (e.g., max 100 requests per 15 minutes per IP)

const oauthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // 5 attempts per window
  message: "Too many OAuth attempts",
});
const normalLimiter = rateLimit({
  windowMs: 25 * 60 * 1000, // 15 minutes
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
app.use("/api/auth", oauthLimiter, oauthRoutes);
app.use("/api", authRoutes);
app.use("/api", fileUploadRouter); //fileupload routes
app.use(itemsRouter);

app.get("/api/profile", requireAuth, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "Lax" });
  res.json({ message: "Logged out successfully" });
});
// 404 handler
app.get((req, res) => {
  res.status(404).json({ error: "Page Not Found.." });
});

//blocker
app.get("/block", (req, res) => {
  // loop will run 1,000,000,000 times 1*10^9
  let sum = 0;

  //simualte a cmple math heavy task
  for (let index = 0; index < 1e9; index++) {
    sum += index;
  }
  res.send("done");
});

app.use(unauthorizedHandler);
// Error Handler Middleware (must come last)
// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Something went wrong",
  });
});

app.listen(2000, () => {
  console.log(`listening on 2000 with ${process.pid}`);
});
