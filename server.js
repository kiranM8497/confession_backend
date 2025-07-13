const express = require("express");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
// console.log(express);
const app = express();
// console.log("app", app);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  console.log("req", req);
  res.send("<h1>Hey There</h1>");
});

//query parameter
app.get("/user", (req, res) => {
  const id = req.query.id;
  console.log(id);
  res.send("id recieved");
});

app.get("/user", (req, res) => {
  const id = req.query.id;
  console.log(id);
  res.send("id recieved");
});

app.get("/user/:userName", (req, res) => {
  res.render("index", { username: req.params.userName });
});

app.get("/getBigText", (req, res) => {
  const readStream = fs.createReadStream("./text.txt");
  readStream.pipe(res);
});

// to show a response to a path which doesnot exist
//use wild cards
//always place after all existing routes
app.get("/*any", (req, res) => {
  res.status(404).send("<h1>Page Not Found..</h1>");
});

//path parameter
// app.get("/account/:any", (req, res) => {
//   console.log(req.params);
//   let pathparameter = req.params.any;
//   const val = isNaN(pathparameter);
//   console.log(val);
//   if (isNaN(pathparameter)) {
//     return res.send("this server accepts only number");
//   }
//   res.send("number recieved");
// });
const port = 5000;
app.listen(port, () => {
  console.log("lisenting on port 5000");
});
