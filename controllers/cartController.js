const CartService = require('../service/CartService');

const AddToCart = async (req, res) => {
    try{
        const book = await CartService.AddToCart(req.params.id);
        if (!book) res.sendStatus(400);
        res.send(book);
    }catch (error){
        console.log("🚀 ~ file: cartController.js ~ line 9 ~ AddToCart ~ error", error)    
    }
}