const { getAllBooks, getBookById } = require('../controllers/book-controller')

const bookRouter = require('express').Router()

bookRouter.get('/', getAllBooks)
bookRouter.get('/:bookId', getBookById)

module.exports = bookRouter