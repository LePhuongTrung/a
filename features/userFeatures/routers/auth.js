var express = require("express");
var router = express.Router();
const authController = require('../controller/authController')

/* register. */
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: register account.
 *     tags: [User]
 *     description: register new account.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              fullname:
 *                type: string
 *              role:
 *                type: string
 *     responses:
 *       200:
 *         description: A new user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                    properties:
 *                     _id:
 *                      type: string
 *                     email:
 *                      type: string
 *                     password:
 *                      type: string
 *                     fullname:
 *                      type: string
 *                     role:
 *                      type: string
 */
router.post("/register", authController.register);

router.post("/login", authController.login);
/* DELETE */
/**
 * @swagger
 * /users/deletedAccount/{id}:
 *   delete:
 *     summary: delete user by id.
 *     tags: [User]
 *     description: find user by id and delete it.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User that was deleted
 */
router.delete("/deletedAccount/:id", authController.deletedAccount);

module.exports = router;
