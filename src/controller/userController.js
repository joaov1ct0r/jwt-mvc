import {
    registerValidate,
    loginValidate,
    editValidate
} from './validateData.js';

import User from '../model/userModel.js';

import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

const userInfo = async (req, res) => {
    let { email } = req.body;

    db.getUser(email, function (result) {
        res.send(JSON.stringify(result));
    });
};

const newUser = (req, res) => {
    let { error } = registerValidate(req.body);

    if (error) {
        return res.status(400).send('Falha no cadastramento');
    }
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
};

const userLogin = (req, res) => {
    let { error } = loginValidate(req.body);

    if (error) {
        return res.status(400).send('Falha na autenticação');
    }
    let { email, senha } = req.body;

    db.userLogin(email, function (result) {
        let comparedPassword = bcrypt.compareSync(senha, result[0].senha);
        if (!comparedPassword) {
            console.log(result);
            res.status(500).send('Falha na autenticação');
        } else {
            console.log(result);

            const token = jwt.sign(
                {
                    email: result[0].email
                },
                jwtSecret
            );
            res.header('auth-token', token);
            res.status(200).send('Autenticação realizada com sucesso');
        }
    });
};

const userEdit = (req, res) => {
    let { error } = editValidate(req.body);

    if (error) {
        return res.status(400).send('Falha na autenticação');
    }
    let { index } = req.params;

    let { nome, email, idade, pais, senha } = req.body;

    db.changeUser(
        index,
        nome,
        email,
        idade,
        pais,
        bcrypt.hashSync(senha),
        function (result) {
            console.log(result);

            res.send('Usuario alterado com sucesso');
        }
    );
};

const userDelete = (req, res) => {
    let { index } = req.params;

    db.deleteUser(index, function (result) {
        console.log(result);

        res.send('Usuario deletado com sucesso');
    });
};

export { userDelete, userEdit, userInfo, userLogin, newUser };
