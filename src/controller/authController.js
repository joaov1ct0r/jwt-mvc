import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    const token = req.header('auth-token');

    if (!token) return res.status(401).send('Falha na autenticação');

    try {
        const userVerified = jwt.verify(token, jwtSecret);

        if (!userVerified) return res.status(400).send('Falha na autenticação');

        next();
    } catch (error) {
        throw error;
    }
}
