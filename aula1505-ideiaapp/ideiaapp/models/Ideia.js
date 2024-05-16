const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const User = require('./User')

const Ideia = db.define('Ideia', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

Ideia.belongsTo(User)
User.hasMany(Ideia)

module.export = Ideia