We created a file named `passport-config.js` to configure Facebook login:

```js
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: "/auth/facebook/callback",
  profileFields: ["id", "displayName", "emails", "photos"]
}, async (accessToken, refreshToken, profile, done) => {
  // You can store the user in your DB here
  return done(null, profile);
}));


in index.js file
require("./passport-config");

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