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

// Update a book
router.put('/books/:id', async (req, res) => {
    const { id } = req.params
    const { title, author, isbn } = req.body
    try {
        const book = await Book.findByPk(id)
        if(book) {
            book.title = titlebook.author = author
            book.isbn = isbn
            await book.save()
            res.json(book)
        } else {
            res.status(404).send('Book not found')
        }
    } catch (error) {
        res.status(500).send('Server error')
    }
})

// Delete a book
router.delete('/books/:id', async (req, res) => {
    const { id } = req.params
    try {
        const book = await Book.findByPk(id)
        if (book) {
            await book.destroy()
            res.json({ message: 'Book deleted' })
        } else {
            res.status(404).send('Book not found')
        }
    } catch (error) {
        res.status(500).send('Server error')
    }
})

module.exports = router