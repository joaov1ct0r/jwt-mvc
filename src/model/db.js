const mysql = require('mysql2');

let db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'cadLoginSys'
});

let getUsers = (callback) => {
    let SQL = `SELECT * FROM usuarios`
    db.query(SQL, (err, result) => {
        if(err) {
            throw err;
        }  callback(result)
    })
}

module.exports = {
    ,

    getUser(index) {
        return this.usersDb[index];
    },

    newUser(nome, email, idade, pais, senha) {
        this.usersDb.push({
            id: generateId(),
            nome,
            email,
            idade,
            pais,
            senha
        });
    },

    userLogin(email, senha) {
        if (
            email !== this.usersDb[0].email ||
            senha !== this.usersDb[0].senha
        ) {
            return 'Falha na autenticação';
        } else if (
            email == this.usersDb[0].email &&
            senha == this.usersDb[0].senha
        ) {
            return 'Login realizado com sucesso';
        }
    },

    deleteUser(index) {
        delete this.usersDb[index];
    },

    changeUser(index, nome, email, idade, pais, senha) {
        this.usersDb[index].nome = nome;

        this.usersDb[index].email = email;

        this.usersDb[index].idade = idade;

        this.usersDb[index].pais = pais;

        this.usersDb[index].senha = senha;
    }
};

let generateId = () => {
    return Math.random().toString(26).substring(2, 9);
};
