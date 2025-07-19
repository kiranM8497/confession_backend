const express = require("express");
const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length;
console.log(numCPUs);
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers (create child processes)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP port
  const app = express();
  // Your Express middleware and routes
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({
      message: "Hello from Express worker",
      pid: process.pid,
      worker: cluster.worker.id,
    });
  });

  app.get(" ", (req, res) => {
    res.json({
      users: ["John", "Jane", "Bob"],
      handledBy: `Worker ${cluster.worker.id} (PID: ${process.pid})`,
    });
  });

  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started on port ${PORT}`);
  });
}
