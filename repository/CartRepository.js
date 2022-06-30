const Bookmodel = require('../Database/models/Book');
const CartModel = require('../Database/models/Cart');

const AddToCart = async (id) =>{
    try{
        const book = await Bookmodel.findById(id);
        return book;
    } catch(error){
        console.log(error);
    }
}

module.exports = {
    AddToCart,
}