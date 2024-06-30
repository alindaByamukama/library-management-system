const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.get('/books', async (req, res) => {
    try {
        const books = await Book.findAll()
        res.json(books)
    } catch (err) {
        res.status(500).send('Server error')
    }
})

module.exports = router