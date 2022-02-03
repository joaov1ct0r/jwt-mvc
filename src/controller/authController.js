const jwt = require('jsonwebtoken');

const jwtSecret = 'segredo';

module.exports = (req, res, next) => {
    const token = req.header('auth-token');

    if (!token) return res.status(401).send('Falha na autenticação');

    try {
        const userVerified = jwt.verify(token, jwtSecret);

        next();
    } catch (error) {
        res.status(401).send('Falha na autenticação');
    }
};
