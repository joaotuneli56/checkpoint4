const Product = require('../models/productModels');

exports.createProduct = async (req, res) => {
    try {
        const { nome, preco, descricao } = req.body;
        const novoProduto = new Product({ nome, preco, descricao });
        await novoProduto.save();
        res.status(201).json({
            message: 'Produto inserido com sucesso',
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar produto', error });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const produtos = await Product.find();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos', error });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const produtoAtualizado = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!produtoAtualizado) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.status(200).json({
            message: 'Produto atualizado com sucesso',
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto', error });
    }
};

