const express = require("express");
const app = express.Router();

// const usersRoute = require("./Users/usersRoute")
const productRoute = require("./products/productsRoute");
const userRoute = require("./Users/usersRoute");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/status", function (req, res) {
  res.status(200).send("MESSAGE OK");
});

// app.use("/api/v1/user", usersRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/user", userRoute);

module.exports = app;
