const express = require('express')
const sequelize = require('./config/database')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Library Management System API')
})

sequelize.authenticate()
    .then(() => {
        console.log('Databse connected...')
        app.listen(PORT, ()=> {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log('Error: ' + err)
    })

