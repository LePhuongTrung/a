var express = require('express');
var router = express.Router();
const BookController = require('../bookControllers/bookController')
/**
 * @swagger
 * tags:
 *  name: Books
 *  description: API to manage your books.
 */
/**
 * @swagger
 * /bookapi/books:
 *   get:
 *     summary: Retrieve a list of books.
 *     tags: [Books]
 *     description: Retrieve a list of books from Mongoose. Can be used to display existing products.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                      id:
 *                       type: string
 *                       description: The book's unique ID.
 *                      name:
 *                       type: string
 *                       description: The book's name.
 *                      price:
 *                       type: number
 *                       description: The book's price.
 */

router.get('/books', BookController.getAllBooks );
/**
 * @swagger
 * /bookapi/books/skip/{skip}:
 *   get:
 *     summary: Retrieve a list of books.
 *     tags: [Books]
 *     description: Retrieve a list of books from Mongoose. Can be used to display 4 book to each page.
 *     parameters:
 *       - in: path
 *         name: skip
 *         required: true
 *         description: number of pages.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list 4 books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                      id:
 *                       type: string
 *                       description: The book's unique ID.
 *                      name:
 *                       type: string
 *                       description: The book's name.
 *                      price:
 *                       type: number
 *                       description: The book's price.
 */
router.get('/books/skip/:skip', BookController.get1PageBook);

/**
 * @swagger
 * /bookapi/oneBook/{id}:
 *   get:
 *     summary: Retrieve a list of books.
 *     tags: [Books]
 *     description: Retrieve a list of books from Mongoose. Can be used to display 4 book to each page.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                      id:
 *                       type: string
 *                       description: The book's unique ID.
 *                      name:
 *                       type: string
 *                       description: The book's name.
 *                      price:
 *                       type: number
 *                       description: The book's price.
 */
router.get('/oneBook/:id', BookController.getBook);

/* POST create book. */
router.post('/CreateBooks', BookController.createBook);
/* PUT update book. */
router.put('/updateBooks/:id',BookController.updateBook);

/**
 * @swagger
 * /bookapi/deleteBooks/{id}:
 *   delete:
 *     summary: delete a book by id.
 *     tags: [Books]
 *     description: find book by id and delete it.
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
router.delete('/deleteBooks/:id', BookController.deletedBook); 

router.get('/deleteBook/:id', BookController.deletedBook); 
/* Search book. */
router.get('/searchBook/:searchString/:skip', BookController.searchBook);


module.exports = router;
