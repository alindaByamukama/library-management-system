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



module.exports = router