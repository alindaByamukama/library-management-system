const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')

// Borrow a book (create a transaction)
router.post('/transactions', async (req, res) => {
    const { bookId, userId } = req.body
    try {
        const newTransaction = await Transaction.create({ bookId, userId })
    } catch (error) {
        res.status(500).send('Server error')
    }
})

module.exports = router