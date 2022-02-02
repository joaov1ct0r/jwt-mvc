const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const userController = require('../controller/userController');

router.post('/info', userController.info);

router.post('/new', bodyParser.json(), (req, res) => {
    let { nome } = req.body;

    let { email } = req.body;

    let { idade } = req.body;

    let { pais } = req.body;

    let { senha } = req.body;

    let request = db.newUser(
        nome,
        email,
        idade,
        pais,
        senha,
        function (result) {
            console.log(result);

            res.send('Cadastro adicionado com sucesso');
        }
    );
});

router.post('/login', bodyParser.json(), (req, res) => {
    let { email } = req.body;

    let { senha } = req.body;

    let request = db.userLogin(email, senha, async function (result) {
        if (result.length < 1) {
            console.log(result);
            res.status(500).send('Falha na autenticação');
        } else {
            console.log(result);
            res.status(200).send('Autenticação realizada com sucesso');
        }
    });
});

router.put('/edit/:index', bodyParser.json(), (req, res) => {
    let { index } = req.params;

    let { nome } = req.body;

    let { email } = req.body;

    let { idade } = req.body;

    let { pais } = req.body;

    let { senha } = req.body;

    let request = db.changeUser(
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
});

router.delete('/delete/:index', (req, res) => {
    let { index } = req.params;

    let request = db.deleteUser(index, function (result) {
        console.log(result);

        res.send('Usuario deletado com sucesso');
    });
});

module.exports = router;
