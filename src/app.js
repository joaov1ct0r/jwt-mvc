require('dotenv');

const express = require('express');

const bodyParser = require('body-parser');

let app = express();

const path = require('path');

const routes = require('./routes/routes');

app.use('/api', bodyParser.json(), routes);

app.use('/', express.static(path.join(__dirname, '/view')));

app.use('/cadastro', express.static(path.join(__dirname, '/view/cadastro')));

app.use('/login', express.static(path.join(__dirname, '/view/login')));

app.listen(process.env.NODE_ENV_SERVER_PORT, () => {
    console.log(`Server running`);
});
