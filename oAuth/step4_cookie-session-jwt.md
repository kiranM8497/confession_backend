# Step 05: Creating HttpOnly Cookie from Facebook Session

After Facebook login success, we generate a JWT and store it as an HttpOnly cookie:

```js
const jwt = require("jsonwebtoken");

app.get("/auth/success", (req, res) => {
  const user = req.user;

  const token = jwt.sign(
    { id: user.id, name: user.displayName },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "Lax"
  });

  res.redirect("http://localhost:3000"); // redirect to frontend
});