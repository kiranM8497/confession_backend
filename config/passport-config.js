const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// ✅ Serialize the user by their DB ID
passport.serializeUser((user, done) => {
  done(null, user.id); // Store user ID in session
});

// ✅ Deserialize by looking user up in DB
passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "emails", "photos"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const facebookId = profile.id;
        const email = profile.emails?.[0]?.value;
        const displayName = profile.displayName || "";

        const nameParts = displayName.split(" ");
        const firstname = nameParts[0] || "";
        const lastname = nameParts.slice(1).join(" ") || "";

        let user = await prisma.user.findUnique({ where: { facebookId } });

        if (!user && email) {
          const existing = await prisma.user.findUnique({ where: { email } });

          if (existing) {
            user = await prisma.user.update({
              where: { email },
              data: { facebookId },
            });
          }
        }

        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              facebookId,
              password: null,
              firstname,
              lastname,
            },
          });
        }

        return done(null, user);
      } catch (err) {
        console.error("Facebook Strategy Error:", err);
        return done(err, null);
      }
    }
  )
);
