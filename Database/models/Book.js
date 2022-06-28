const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
    title: String,
    category: String,
    author: String,
    description: String,
    imageUrl: String,
    price: Number,
})

// create a model
const Book = mongoose.model('Book', BookSchema);
module.exports = Book;