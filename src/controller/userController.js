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

    try {
        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user) return res.status(400).send('Falha ao obter dados!');

        res.send(JSON.stringify(user));
    } catch (error) {
        throw error;
    }
};

const newUser = async (req, res) => {
    let { error } = registerValidate(req.body);

    if (error) return res.status(400).send('Falha no cadastramento');

    let { nome, email, idade, pais, senha } = req.body;

    try {
        const user = await User.create({
            email,
            idade,
            nome,
            pais,
            senha: bcrypt.hashSync(senha)
        });

        if (!user) return res.status(400).send('Falha no cadastramento!');

        res.send('Usuario cadastrado com sucesso');
    } catch (error) {
        throw error;
    }
};

const userLogin = async (req, res) => {
    let { error } = loginValidate(req.body);

    if (error) return res.status(400).send('Falha na autenticação');

    let { email, senha } = req.body;

    try {
        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user) return res.status(400).send('Falha na autenticação');

        const comparedPassword = bcrypt.compareSync(senha, user.senha);

        if (!comparedPassword)
            return res.status(400).send('Falha na autenticação');

        const token = jwt.sign(
            {
                id: user.id
            },
            process.env.JWT_TOKEN_SECRET
        );

        if (token) {
            res.cookie('auth', token, { httpOnly: true });

            res.redirect('/info');
        }
    } catch (error) {
        throw error;
    }
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
