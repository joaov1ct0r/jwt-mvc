import 'dotenv/config';

import express from 'express';

import bodyParser from 'body-parser';

import userRoutes from './routes/userRoutes';

import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

let app = express();

app.use('/api', bodyParser.json(), userRoutes);

app.use('/', express.static(path.join(__dirname, '/view')));

app.use('/cadastro', express.static(path.join(__dirname, '/view/cadastro')));

app.use('/login', express.static(path.join(__dirname, '/view/login')));

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
