const BookService = require('../service/BookService');

const getAllBooks = async (req, res) => {
    const book = await BookService.getAllBooks();
    res.send(book);
}

const getBook = async (req, res) => {
    const book = await BookService.getOneBook(req.params.id);
    if (!book) res.sendStatus(400);
    res.send(book);
}

const Get1PageBook = async (req, res) => {
    let skip = "0";
    console.log("🚀 ~ file: Book.js ~ line 13 ~ router.get ~ skip", skip);
    skip = req.params.skip;
    const book = await BookService.getAllBooksSkip(skip);
    res.send(book);
}

module.exports = {
    getAllBooks,
    getBook,
    Get1PageBook,
}