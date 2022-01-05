const mysql = require('mysql2');

let db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'cadLoginSys'
});

// RETORNA TODOS OS CADASTROS
let getUsers = callback => {
    let SQL = `SELECT * FROM usuarios`;
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

// RETORNA UM CADASTRO EM ESPECIFICO
let getUser = (index, callback) => {
    let SQL = `SELECT * FROM usuarios WHERE email = ?`;
    return this.usersDb[index];
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
let userLogin = (email, senha, callback) => {
    let SQL = `SELECT email, senha FROM usuarios WHERE email = ? AND senha = ?`;
    let params = [email, senha];

    db.query(SQL, params, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
    if (email !== this.usersDb[0].email || senha !== this.usersDb[0].senha) {
        return 'Falha na autenticação';
    } else if (
        email == this.usersDb[0].email &&
        senha == this.usersDb[0].senha
    ) {
        return 'Login realizado com sucesso';
    }
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
    getUsers,

    getUser,

    newUser,

    userLogin,

    deleteUser,

    changeUser
};

let generateId = () => {
    return Math.random().toString(26).substring(2, 9);
};
