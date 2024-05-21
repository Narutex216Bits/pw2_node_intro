const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User= db.define('User', {
    name:{
        types:DataTypes.STRING,
        allowNull: false
    },
    email:{
        types:DataTypes.STRING,
        allowNull: false
    },
    password:{
        types:DataTypes.STRING,
        allowNull: false
    },

})

module.exports = User