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

        if (!user)
            return res.status(400).json({ msg: 'Falha ao obter dados!' });

        res.send(JSON.stringify(user));
    } catch (error) {
        throw error;
    }
};

const newUser = async (req, res) => {
    let { error } = registerValidate(req.body);

    if (error) return res.status(400).json({ msg: 'Falha no cadastramento' });

    let { nome, email, idade, pais, senha } = req.body;

    try {
        const user = await User.create({
            email,
            idade,
            nome,
            pais,
            senha: bcrypt.hashSync(senha)
        });

        if (!user)
            return res.status(400).json({ msg: 'Falha no cadastramento!' });

        res.redirect('/login');
    } catch (error) {
        throw error;
    }
};

const userLogin = async (req, res) => {
    let { error } = loginValidate(req.body);

    if (error) return res.status(400).json({ msg: 'Falha na autenticação' });

    let { email, senha } = req.body;

    try {
        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user)
            return res.status(400).json({ msg: 'Falha na autenticação' });

        const comparedPassword = bcrypt.compareSync(senha, user.senha);

        if (!comparedPassword)
            return res.status(400).json({ msg: 'Falha na autenticação' });

        const token = jwt.sign(
            {
                id: user.id
            },
            process.env.JWT_TOKEN_SECRET
        );

        if (token) {
            res.cookie('auth', token, { httpOnly: true });

            res.cookie('email', user.email, { httpOnly: true });

            res.redirect('/info');
        }
    } catch (error) {
        throw error;
    }
};

const userEdit = async (req, res) => {
    let { error } = editValidate(req.body);

    if (error) return res.status(400).json({ msg: 'Falha na autenticação' });

    let { index } = req.params;

    let { nome, email, idade, pais, senha } = req.body;

    try {
        const user = await User.update(
            {
                email,
                idade,
                nome,
                pais,
                senha: bcrypt.hashSync(senha)
            },
            {
                where: {
                    id: index
                }
            }
        );

        if (!user)
            return res.status(400).json({ msg: 'Falha ao alterar usuario' });

        res.json({ msg: 'Usuario alterado com sucesso' });
    } catch (error) {
        throw error;
    }
};

const userDelete = (req, res) => {
    let { index } = req.params;

    try {
        const user = User.destroy({
            where: {
                id: index
            }
        });

        if (!user)
            return res.status(400).json({ msg: 'Falha ao deletar usuario' });

        res.redirect('/login');
    } catch (error) {
        throw error;
    }
};

export { userDelete, userEdit, userInfo, userLogin, newUser };
