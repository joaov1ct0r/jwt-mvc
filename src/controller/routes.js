const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");

const usersDb = require("../model/db");

router.get("/all", (req, res) => {
    res.send(JSON.stringify(usersDb.getUsers()));
});

router.get("/all/:index", (req, res) => {
    let { index } = req.params;

    res.send(JSON.stringify(usersDb.getUser(index)));
});

router.post("/new", bodyParser.json(), (req, res) => {
    let { nome } = req.body;

    let { email } = req.body;

    let { idade } = req.body;

    let { pais } = req.body;

    let { senha } = req.body;

    usersDb.newUser(nome, email, idade, pais, senha);

    res.send("Cadastro adicionado com sucesso");
});

router.put("/all/:index", bodyParser.json(), (req, res) => {
    let { index } = req.params;

    let { nome } = req.body;

    let { email } = req.body;

    let { idade } = req.body;

    let { pais } = req.body;

    let { senha } = req.body;

    usersDb.changeUser(index, nome, email, idade, pais, senha);

    res.send("Usuario alterado com sucesso");
});

router.delete("/delete/:index", (req, res) => {
    let { index } = req.params;

    usersDb.deleteUser(index);

    res.send("Usuario deletado com sucesso");
});

module.exports = router;
