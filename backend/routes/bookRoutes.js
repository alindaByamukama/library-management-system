const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

// Get all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.findAll()
        res.json(books)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server error')
    }
})

// Add a new book
router.post('/books', async (req, res) => {
    const { title, author, isbn } = req.body;
    try {
        const newBook = await Book.create({ title, author, isbn })
        res.json(newBook)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server error')
    }
})

module.exports = router