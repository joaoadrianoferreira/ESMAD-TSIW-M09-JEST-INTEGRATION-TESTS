require('dotenv').config()
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_, process.env.USER_, process.env.PASS_, {
    host: process.env.HOST_,
    dialect: process.env.DIALECT_
});

exports.insert = async function(data) {
    try {
        const response = await sequelize.query("INSERT INTO users (name, email) VALUES ('"+data.name+"','"+data.email+"')"); 
        return response[1]
    } catch (error) {
        throw Error('error');
    }
}

exports.drop = async function(email) {
    try {
        const response = await sequelize.query("DELETE FROM users WHERE email = '"+email+"'"); 
        return response[1]
    } catch (error) {
        throw Error('error');
    }
}

exports.list = async function(email) {
    try {
        const response = await sequelize.query("SELECT * FROM users WHERE email = '"+email+"'"); 
        return response[1][0]
    } catch (error) {
        throw Error('error');
    }
}

exports.clearDatabase = function() {
    sequelize.query("DELETE FROM users");
}