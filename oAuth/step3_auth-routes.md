# Step 04: Facebook OAuth Routes

We added the following routes to handle Facebook OAuth:

```js
app.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));

app.get("/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/auth/failure" }),
  (req, res) => {
    res.redirect("/auth/success");
  }
);