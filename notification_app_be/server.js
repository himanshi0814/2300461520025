const express = require("express");
const cors = require("cors");

const loggerMiddleware = require("./src/middleware/logger.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Notification Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});