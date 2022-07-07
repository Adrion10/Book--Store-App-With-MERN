const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middlewares

app.use("/", (req, res, next) => {
  res.send("this is our starting app");
});
mongoose
  .connect("mongodb://localhost:27017/BookStore")
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
