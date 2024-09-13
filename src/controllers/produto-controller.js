const respository = require('../repositories/produto-repository')

exports.get = async (rew, res, next) => {
    const data = await respository.get();
    return res.status(200).send(data);
}

exports.post = async(req, res) => {
    await respository.create(req.body)
    return res.status(201).sent({mensagem: "Criado com sucesso!"})
}

exports.put = async (req, res) => {
    const id = req.params.id;
    const { nome, preco } = req.body;
    if (!nome || !preco) {
        return res.status(400).send({ mensagem: "Campos não preenchidos" });
    }
    const updated = await repository.update(id, req.body);
    if (!updated) {
        return res.status(404).send({ mensagem: "Sem Cadastro." });
    }
    res.status(204).send({ mensagem: "Sucesso!" });
};