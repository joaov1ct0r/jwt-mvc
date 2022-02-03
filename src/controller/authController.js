const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../controller/userController');

module.exports = (req, res, next) => {
    const token = req.headers('auth-token');

    if (!token) return res.status(401).send('Falha na autenticação');

    const userVerified = jwt.verify(token, jwtSecret);
};
