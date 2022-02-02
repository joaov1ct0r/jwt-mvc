const express = require('express');

let app = express();

const path = require('path');

const routes = require('./routes/routes');

app.use('/api', routes);

app.use('/', express.static(path.join(__dirname, '/view')));

app.use('/cadastro', express.static(path.join(__dirname, '/view/cadastro')));

app.use('/login', express.static(path.join(__dirname, '/view/login')));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
