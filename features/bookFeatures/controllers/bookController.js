const bookService = require('../service/BookService');

const getAllBooks = async (req, res) => {
    try{
        const book = await bookService.getAllBooks();
        if(!book) res.Status(400).send('No books in stock yet');
        res.send(book);
    }catch (error){
        console.log("🚀 ~ file: bookController.js ~ line 8 ~ getAllBooks ~ error", error)    ;
    }
}

const getBook = async (req, res) => {
    try{
        const book = await bookService.getOneBook(req.params.id);
        if (!book) res.sendStatus(400);
        res.send(book);
    }catch (error){
        console.log("🚀 ~ file: bookController.js ~ line 19 ~ getBook ~ error", error)        
    }
}

const get1PageBook = async (req, res) => {
    try{
        let skip = "0";
        console.log("🚀 ~ file: Book.js ~ line 13 ~ router.get ~ skip", skip);
        skip = req.params.skip;
        const book = await bookService.getAllBooksSkip(skip);
        res.send(book);
    }catch (error){
        console.log("🚀 ~ file: bookController.js ~ line 31 ~ get1PageBook ~ error", error)        
    }
}

const createBook = async (req, res) => {
    try{
        if(!req.body) return res.sendStatus(400);

        const book = await bookService.createBook(req.body);

        if(!book) return res.sendStatus(500);
        return res.status(200).send(book);
    }catch(error){
    console.log("🚀 ~ file: bookController.js ~ line 26 ~ createBook ~ err", error);
    res.sendStatus(500); 
    }
}

const deletedBook = async (req, res) => {
    try {
        const book = await bookService.deleteBook(req.params.id);
        res.send(book);
    }
    catch(error){
        console.log("🚀 ~ file: Book.js ~ line 151 ~ router.delete ~ error", error);
    }
}

const updateBook = async (req, res) => {
    try{
        if(!req.params.id) return "This id could not be found";

        if(!req.body) return res.sendStatus(400);

        const book = await bookService.updateBook(req.params.id, req.body);

        if(!book) return res.sendStatus(500);
        return res.status(200).send(book);
    }catch(error){
    console.log("🚀 ~ file: bookController.js ~ line 56 ~ updateBook ~ error", error)
    res.sendStatus(500); 
    }
}

const searchBook = async (req, res) => {
    try{

    }catch (error){
        
    }
    const searchString = req.params.searchString;
    const skip = req.params.skip;
    if (skip == null) {
        skip = 0;
    }
    const book = await bookService.searchBook(searchString, skip);
    res.send(book);
}
module.exports = {
    getAllBooks,
    getBook,
    get1PageBook,
    createBook,
    deletedBook,
    updateBook,
    searchBook,
}