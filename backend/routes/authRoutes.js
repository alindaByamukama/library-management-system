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

module.exports = router