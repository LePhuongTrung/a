const Bookmodel = require('../Database/models/Book');
var numProductOfEachPage = 3;
const FindAllBooks = async () =>{
    try{
        const books = await Bookmodel.find();
        return books;
    } catch(error){
        console.log(error);
    }
};
//search books by title
const SearchBook = async (searchString, skip) =>{
    try{
        const books = await Bookmodel.find({title: searchString}).skip(skip * numProductOfEachPage).limit(numProductOfEachPage);
        return books;
    } catch(error){
        console.log(error);
    }
};
//find and display list limit number book
const FindAllBooksSkip = async (skip) =>{
    try{
        const books = await Bookmodel.find().skip(skip * numProductOfEachPage).limit(numProductOfEachPage);
        return books;
    } catch(error){
        console.log(error);
    }
};
const FindOneBook = async (id) =>{
    try{
        const book = await Bookmodel.findById(id);
        return book;
    } catch(error){
        console.log(error);
    }
};
const CreateBook = async (data) =>{
    try{
        const book = await Bookmodel.create(data)
        return book;
    } catch(error){
        console.log("🚀 ~ file: BookRepository.js ~ line 42 ~ CreateBook ~ error", error)
    }
}
const UpdateBook = async (id, data) =>{
    try{
        const updatedBook = await Bookmodel.findByIdAndUpdate(id, data);
        return updatedBook;
    } catch(error){
        console.log(error);
    }
}
const DeleteBook = async (id) =>{
    try{
        const deletedBook = await Bookmodel.findByIdAndDelete(id);
        return deletedBook;
    } catch(error){
        console.log(error);
    }
}
const sum = (a, b) => a + b;
module.exports = {
    FindAllBooks,
    FindAllBooksSkip,
    FindOneBook,
    CreateBook,
    UpdateBook,
    DeleteBook,
    SearchBook,
    sum,
};