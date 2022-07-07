const Book = require("../model/BookModel");

exports.getAllBooks = async (req, res, next) => {
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
};

exports.addBook = async (req, res, next) => {
  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(500).json({ mesage: " unable to add" });
  }
  return res.status(201).json({ book });
};
