import dbConnection from '../config/db.js';

const mysql = require('mysql2');

let db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'cadLoginSys'
});

// RETORNA UM CADASTRO EM ESPECIFICO
let getUser = (email, callback) => {
    let SQL = `SELECT * FROM usuarios WHERE email = ?`;

    db.query(SQL, email, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

// INSERE UM NOVO USUARIOS NO DB
let newUser = (nome, email, idade, pais, senha, callback) => {
    let SQL = `INSERT INTO usuarios (nome, email, idade, pais, senha) VALUES (?, ?, ?, ?, ?)`;

    let params = [nome, email, idade, pais, senha];

    db.query(SQL, params, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

// ALTERA DADOS DO CADASTRO DO USUARIO
let changeUser = (index, nome, email, idade, pais, senha, callback) => {
    let SQL = `UPDATE usuarios SET nome = ?, email = ?, idade = ?, pais = ?, senha = ? WHERE id = ?`;

    let params = [nome, email, idade, pais, senha, index];

    db.query(SQL, params, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

// FAZ O LOGIN DE UM USUARIO
let userLogin = (email, callback) => {
    let SQL = `SELECT email, senha FROM usuarios WHERE email = ?`;

    db.query(SQL, email, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

// DELETA UM CADASTRO
let deleteUser = (index, callback) => {
    let SQL = `DELETE FROM usuarios WHERE id = ?`;

    db.query(SQL, index, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

module.exports = {
    getUser,

    newUser,

    userLogin,

    deleteUser,

    changeUser
};
