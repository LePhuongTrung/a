const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    bookId: String,
    quantity: Number,
    price: Number,
})

const Cart = mongoose.model('Book', BookSchema);
module.exports = Book;