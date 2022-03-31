import 'dotenv/config';

import express from 'express';

import bodyParser from 'body-parser';

import cookieParser from 'cookie-parser';

import userRoutes from './routes/userRoutes.js';

import authController from './controller/authController.js';

import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

let app = express();

app.use('/api', cookieParser(), bodyParser.json(), userRoutes);

app.use(
    '/cadastro',
    express.static(path.join(__dirname, '/view', '/cadastro'))
);

app.use('/login', express.static(path.join(__dirname, '/view', '/login')));

app.use(
    '/info',
    cookieParser(),
    authController,
    express.static(path.join(__dirname, '/view', '/info'))
);

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
