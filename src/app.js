const express = require("express");

const bodyParser = require("body-parser");
const { append } = require("express/lib/response");

const PORT = 3000;

let usersDb = [
    {
        nome: "Marco aurelio",
        email: "teste123@email.com",
        idade: "19",
        pais: "Brasil",
        senha: "fladkjl"
    }
];

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
