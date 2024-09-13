const express = require('express');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mongoose = require ('mongoose')
mongoose.connect('mongodb://localhost:27017/mydatabase')

//registrar os models
require('./models/produto')

//criar rotas
const index = require('./routes/index')
app.use('/', index)

// criar rota para produto
const produtoRouter = require('./routes/produto-route')
app.use('/produto', produtoRouter)

module.exports = app;