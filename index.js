const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/auth");
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true, // allow cookies/auth headers
  })
);

// Rate limiter middleware (e.g., max 100 requests per 15 minutes per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: "Too many requests, please try again later." },
});

const logger = (req, res, next) => {
  console.log(`${req.method} and ${req.url}`);
  next(); // pass control to next middleware
};
// Middleware setup
app.use(logger);
app.use(limiter);
app.use(express.json()); // This is essential to parse JSON bodies

const items = [
  {
    id: 1,
    name: "MICROMAX A91",
    description: " excelent form gaming",
  },
  {
    id: 2,
    name: "MICROMAX A921",
    description: " excelent form gaming",
  },
];
let currentId = 3;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.use("/api", authRoutes);
//add new item
app.post("/items", (req, res) => {
  const { name, description } = req.body; // Should now correctly log JSON body
  console.log(name, description);
  const newItem = { id: currentId++, name: name, description: description };
  items.push(newItem);
  res.json({ message: "added new Item Successfully" });
});

//fetch all items
app.get("/items", (req, res) => {
  res.json(items);
});
//find item by id
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const item = items.find((item) => item.id == id);
  if (item) {
    item.name = name || item.name;
    item.description = description || item.description;
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// DELETE - Remove an item by ID
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.json({ message: "Item deleted" });
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

app.get("/*any", (req, res) => {
  res.status(404).json({ error: "Page Not Found.." });
});
app.listen(2000, () => {
  console.log("listening on 2000");
});
