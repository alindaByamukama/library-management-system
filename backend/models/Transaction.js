const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Transaction = sequelize.define('Transaction', {
    bookId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'books',
            key: 'id',
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    borrowedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    returnedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'transactions',
})

module.exports = Transaction