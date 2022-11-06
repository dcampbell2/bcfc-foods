const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const IzlandController = require("./controllers/izland");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/bcfc-foods", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose Successfully Connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error", err);
});

app.use("/api/izlandgirls", IzlandController);

app.get("/api/config", (req, res) => {
  res.json({ success: true });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
