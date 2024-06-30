const express = require('express')
const sequelize = require('./config/database')
const Book = require('./models/Book')
const bookRoutes = require('./routes/bookRoutes')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

app.use('./api', bookRoutes)

app.get('/', (req, res) => {
    res.send('Library Management System API')
})

sequelize.sync()
    .then(() => {
        console.log('Databse synced...')
        app.listen(PORT, ()=> {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log('Error: ' + err)
    })

