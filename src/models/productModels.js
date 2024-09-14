const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    descricao: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
