const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    carName:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Cars', CarSchema)