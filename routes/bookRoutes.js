const express = require("express");
const router = express.Router();
const Book = require("../model/BookModel");
const { getAllBooks, addBook } = require("../controllers/bookController");

router.get("/", getAllBooks);
router.post("/", addBook);

module.exports = router;
