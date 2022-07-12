var express = require("express");
var router = express.Router();
const authController = require('../controller/authController')

/* GET home page. */
router.post("/register", authController.register);

router.post("/login", authController.login);

router.delete("/deletedAccount/:id", authController.deletedAccount);

module.exports = router;
