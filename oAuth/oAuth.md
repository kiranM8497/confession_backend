# Step 01: Why OAuth in Our App

We are implementing OAuth in the Confession Corner app to make sign-in faster, more secure, and user-friendly. Passwordless login reduces friction and avoids storing sensitive password data.

### Benefits:
- Users can log in using existing accounts (Google, Facebook, GitHub)
- Improved trust and convenience
- Simplified authentication backend
- HttpOnly cookies will protect access tokens (mitigating XSS risks)

We are choosing:
- ✅ Google — mainstream and universal
- ✅ Facebook — for social audience

❓ "Will Facebook OAuth work for both sign in and signup?"

✅ Answer: Yes, Facebook OAuth handles both sign in and signup automatically
✅ How OAuth works:
When a user clicks "Continue with Facebook":

They’re redirected to Facebook to log in and grant access.

Facebook sends back the user’s info (like email, name, ID).

You (your backend) can then:

Look them up in your DB.

If they exist → treat it as Sign In.

If they don’t exist → treat it as Sign Up (create a new user).

🔁 So the same button, same route, same flow is used for both.
The logic to differentiate sign in vs. sign up happens in the backend (based on DB lookup).