const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    titulo: {
        type: String,
        require: true,
        trim: true
    },
    preço: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Produto', schema);