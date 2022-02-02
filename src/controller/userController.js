const db = require('../model/db.js');

let user = {
    info: function (req, res) {
        let { email, senha } = req.body;

        db.getUser(email, senha, function (result) {
            res.send(JSON.stringify(result));
        });
    },

    new: function (req, res) {
        let { nome, email, idade, pais, senha } = req.body;

        db.newUser(nome, email, idade, pais, senha, function (result) {
            console.log(result);

            res.send('Cadastro adicionado com sucesso');
        });
    },

    login: function (req, res) {}
};

module.exports = user;
