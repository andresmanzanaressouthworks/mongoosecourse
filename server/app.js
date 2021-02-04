const express = require("express");
const app = express();
const api = require("./api");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 8081;

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api", api);
app.use(express.static("static"));

app.use("/", (req, res) => {
  res.status(404).send("Not page found");
});

mongoose.connect("mongodb://localhost:27017/virtualstandups", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
