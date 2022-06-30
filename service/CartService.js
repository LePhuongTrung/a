const CartRepository = require('../repository/CartRepository');

const AddToCart = async (id) => {
    try {
        const book = await CartRepository.AddToCart(id);
        return book;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    AddToCart,
}