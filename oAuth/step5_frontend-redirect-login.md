# Step 06: Frontend Redirect to Facebook OAuth

In the frontend, we added a click handler to redirect to the backend Facebook login route:

```js
const handleOAuthLogin = (provider) => {
  window.location.href = `http://localhost:5173/auth/${provider}`;
};