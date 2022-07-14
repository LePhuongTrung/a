var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')

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

router.get('/books', bookController.getAllBooks );
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
router.get('/books/skip/:skip', bookController.get1PageBook);

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
router.get('/oneBook/:id', bookController.getBook);

/* POST create book. */
/**
 * @swagger
 * /bookapi/CreateBook:
 *   post:
 *     tags: [Books]
 *     summary: Create a new book
 *     requestBody:
 *      content:
 *          application/json:
 *             schema:
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                  title:
 *                    type: string
 *                  price:
 *                    type: number
 *                  author:
 *                    type: string
 *     responses:
 *       201:
 *         description: Created.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  price:
 *                    type: number
 *                  author:
 *                    type: string
 */
router.post('/CreateBook', bookController.createBook);
/* PUT update book. */
/**
 * @swagger
 * /api/book/{bookId}:
 *   put:
 *     tags: [Books]
 *     summary: Update a book
 *     parameters:
 *      - in: path
 *        name: bookId
 *        required: true
 *        schema:
 *         type: string
 *         description: string id of user to delete
 *     requestBody:
 *      content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  title:
 *                    type: string
 *                  price:
 *                    type: number
 *                  author:
 *                    type: string
 *     responses:
 *       200:
 *         description: Book that was update.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  _id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  author:
 *                    type: string
 *                  price:
 *                    type: number
 */
router.put('/updateBooks/:id',bookController.updateBook);

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
router.delete('/deleteBooks/:id', bookController.deletedBook); 

/* Search book. */
router.get('/searchBook/:searchString/:skip', bookController.searchBook);


module.exports = router;
