const express = require("express");

const bodyParser = require("body-parser");

const PORT = 3000;

let app = express();

let usersDb = [
    {
        nome: "Marco aurelio",
        email: "teste123@email.com",
        idade: "19",
        pais: "Brasil",
        senha: "fladkjl"
    }
];

app.get("/all", (req, res) => {
    res.send(JSON.stringify(usersDb));
});

app.get("/all/:index", (req, res) => {
    let { index } = req.params;

    res.send(JSON.stringify(usersDb[index]));
});

app.post("/new", bodyParser.json(), (req, res) => {
    let { nome } = req.body;

    let { email } = req.body;

    let { idade } = req.body;

    let { pais } = req.body;

    let { senha } = req.body;

    usersDb.push({ nome, email, idade, pais, senha });

    res.send("Cadastro adicionado com sucesso");
});

app.put("/all/:index", bodyParser.json(), (req, res) => {
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

app.delete("/delete/:index", (req, res) => {
    let { index } = req.params;

    delete usersDb[index];

    res.send("Usuario deletado com sucesso");
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
