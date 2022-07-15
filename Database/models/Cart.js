const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({
    bookId: String,
    userId: String,
    quantity: Number,
    price: Number,
})

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;