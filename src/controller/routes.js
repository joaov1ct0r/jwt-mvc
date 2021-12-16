const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");

router.get("/all", (req, res) => {
    res.send(JSON.stringify(usersDb));
});

router.get("/all/:index", (req, res) => {
    let { index } = req.params;

    res.send(JSON.stringify(usersDb[index]));
});

router.post("/new", bodyParser.json(), (req, res) => {
    let { nome } = req.body;

    let { email } = req.body;

    let { idade } = req.body;

    let { pais } = req.body;

    let { senha } = req.body;

    usersDb.push({ nome, email, idade, pais, senha });

    res.send("Cadastro adicionado com sucesso");
});

router.put("/all/:index", bodyParser.json(), (req, res) => {
    let { index } = req.params;

    let { nome } = req.body;

    let { email } = req.body;

    let { idade } = req.body;

    let { pais } = req.body;

    let { senha } = req.body;

    usersDb[index].nome = nome;

    usersDb[index].email = email;

    usersDb[index].idade = idade;

    usersDb[index].pais = pais;

    usersDb[index].senha = senha;

    res.send("Usuario alterado com sucesso");
});

router.delete("/delete/:index", (req, res) => {
    let { index } = req.params;

    delete usersDb[index];

    res.send("Usuario deletado com sucesso");
});
