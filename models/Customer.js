const mongoose = require('mongoose')

const Customer = mongoose.model('Customer', {
    name: String,
    addres: String,
    documentNumber: String,
})

module.exports = Customer