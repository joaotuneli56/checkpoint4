const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/gerenciamento-produtos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro de conexão ao MongoDB:', error));

app.use('/api/produtos', productRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
