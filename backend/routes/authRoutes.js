const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

// Register a new user
router.post('/register', async (req, res) => {
    const { email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ email, password: hashedPassword })
        res.json(newUser)
    } catch (error) {
        res.status(500).send('Server error')
    }
})

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        res.status(500).send('Server: error')
    }
})

// Update a user
router.put('/users/:id', async (req, res) => {
    const { id } = req.params
    const { email, password } = req.body
    try {
        const user = await User.findByPk(id)
        if(user) {
            user.email = email
            if (password) {
                user.password = await bcrypt.hash(password, 10)
            }
            await user.save()
            res.json(user)
            } else {
                res.status(404).send('Server error')
            }
        } catch (error) {
        res.status(500).send('Server error')
    }
})

module.exports = router