const express = require("express");
const router = express.Router();
const Book = require("../model/BookModel");

router.get("/", async (req, res, next) => {
  //This route will provide all of the book
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No produucts found" });
  }
  return res.status(200).json({ books });
});
module.exports = router;
