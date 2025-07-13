const fs = require("fs");

console.log("Start"); // sync code so this will run immediately

// Asynchronous file read operation (I/O event)
// But if you move the two calls(setTimeout and setImmediate) within an I/O cycle, the setImmediate callback is ALWAYS executed first:
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
  // setTimeout time is set to 0
});

setImmediate(() => {
  console.log("From setImmediate");
});

setTimeout(() => {
  console.log("From setTimeout");
}, 0);

console.log("End");

//o/p should be start -- End ---From setTimeout --- From setImmediate
