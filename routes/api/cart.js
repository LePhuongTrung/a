var express = require('express');
var router = express.Router();
const CartController = require('../../controllers/cartController')

router.put('/addToCart/:id',CartController.addToCart);

module.exports = router;