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

// Get all transactions
router.get('/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.findAll()
        res.json(transactions)
    } catch (error) {
        res.status(500).send('Server error')
    }
})

// Return a book
router.put('/transactions/:id', async (req, res) => {
    const { id } = req.params
    try {
        const transaction = await Transaction.findByPk(id)
        if (transaction) {
            transaction.returnedAt = new Date()
            await transaction.save()
            res.json(transaction)
        } else {
            res.status(404).send('Transaction not found')
        }
    } catch (error) {
        res.status(500).send('Server error')
    }
})

module.exports = router