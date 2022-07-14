const bookRepository = require('../repository/BookRepository');

const getAllBooks = async () => {
    try {
        const books = await bookRepository.FindAllBooks();
        return books;
    } catch (error) {
        console.log(error);
    }
};
const searchBook = async (searchString, skip) => {
    try {
        const books = await bookRepository.SearchBook(searchString, skip);
        return books;
    } catch (error) {
        console.log(error);
    }
};
const getAllBooksSkip = async (skip) => {
    try {
        const books = await bookRepository.FindAllBooksSkip(skip);
        return books;
    } catch (error) {
        console.log(error);
    }
};
const getOneBook = async (id) => {
    try {
        const book = await bookRepository.FindOneBook(id);
        return book;
    } catch (error) {
        console.log(error);
    }
};
const createBook = async (data) => {
    try {
        const book = await bookRepository.CreateBook(data);
        return book;
    }
    catch(error) {
        console.log("🚀 ~ file: BookService.js ~ line 38 ~ createBook ~ error", error)
    }
};
const updateBook = async (id, book) => {
    try {
        const updatedBook = await bookRepository.UpdateBook(id, book);
        return updatedBook;
    } catch (error) {
        console.log(error);
    }
};
const deleteBook = async (id) => {
    try {
        const deletedBook = await bookRepository.DeleteBook(id);
        return deletedBook;
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllBooks,
    getAllBooksSkip,
    getOneBook,
    createBook,
    updateBook,
    deleteBook,
    searchBook,
};