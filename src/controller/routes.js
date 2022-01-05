const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const db = require('../model/db.js');

router.get('/all', (req, res) => {
    let request = db.getUsers(function (result) {
        res.send(JSON.stringify(result));
    });
});

router.post('/new', bodyParser.json(), (req, res) => {
    let { nome } = req.body;

    let { email } = req.body;

    let { idade } = req.body;

    let { pais } = req.body;

    let { senha } = req.body;

    if (nome && email && idade && pais && senha) {
        db.newUser(nome, email, idade, pais, senha);

        res.status(200).send('Cadastro adicionado com sucesso');
    } else {
        res.status(400).send('Falha no cadastramento');
    }
});

router.post('/login', bodyParser.json(), (req, res) => {
    let { email } = req.body;

    let { senha } = req.body;

    let resp = db.userLogin(email, senha);

    res.send(resp);
});

router.put('/edit/:index', bodyParser.json(), (req, res) => {
    let { index } = req.params;

    let { nome } = req.body;

    let { email } = req.body;

    let { idade } = req.body;

    let { pais } = req.body;

    let { senha } = req.body;

    db.changeUser(index, nome, email, idade, pais, senha);

    res.send('Usuario alterado com sucesso');
});

router.delete('/cadastros/delete/:index', (req, res) => {
    let { index } = req.params;

    db.deleteUser(index);

    res.send('Usuario deletado com sucesso');
});

module.exports = router;
