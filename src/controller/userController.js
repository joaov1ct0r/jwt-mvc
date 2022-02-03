const db = require('../model/db.js');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')

let user = {
    info: function (req, res) {
        let { email, senha } = req.body;

        db.getUser(email, senha, function (result) {
            res.send(JSON.stringify(result));
        });
    },

    new: function (req, res) {
        let { nome, email, idade, pais, senha } = req.body;

        db.newUser(
            nome,
            email,
            idade,
            pais,
            bcrypt.hashSync(senha),
            function (result) {
                console.log(result);

                res.send('Cadastro adicionado com sucesso');
            }
        );
    },

    login: function (req, res) {
        let { email, senha } = req.body;

        db.userLogin(email, function (result) {
            let comparedPassword = bcrypt.compareSync(senha, result[0].senha);
            if (!comparedPassword) {
                console.log(result);
                res.status(500).send('Falha na autenticação');
            } else {
                console.log(result);
                res.status(200).send('Autenticação realizada com sucesso');
            }
        });
    },

    edit: function (req, res) {
        let { index, nome, email, idade, pais, senha } = req.params;

        db.changeUser(
            index,
            nome,
            email,
            idade,
            pais,
            senha,
            function (result) {
                console.log(result);

                res.send('Usuario alterado com sucesso');
            }
        );
    },

    delete: function (req, res) {
        let { index } = req.params;

        db.deleteUser(index, function (result) {
            console.log(result);

            res.send('Usuario deletado com sucesso');
        });
    }
};

module.exports = user;
