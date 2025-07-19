const express = require("express");
const itemsRouter = express.Router();

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

itemsRouter.post("/items", (req, res) => {
  const { name, description } = req.body; // Should now correctly log JSON body
  console.log(name, description);
  const newItem = { id: currentId++, name: name, description: description };
  items.push(newItem);
  res.json({ message: "added new Item Successfully" });
});

//fetch all items
itemsRouter.get("/items", (req, res) => {
  res.json(items);
});
//find item by id
itemsRouter.get("/items/:id", (req, res) => {
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
itemsRouter.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.json({ message: "Item deleted" });
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

itemsRouter.get("/test", (req, res, next) => {
  try {
    throw new Error("Invalid credentials");
  } catch (error) {
    next(error);
  }
});

module.exports = itemsRouter;
