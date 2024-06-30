const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

}, {
    tableName: 'books',
})

module.exports = Book