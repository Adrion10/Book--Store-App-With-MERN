const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");

const app = express();

//middlewares
app.use("/books", router);
mongoose
  .connect("mongodb://localhost:27017/BookStore")
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
