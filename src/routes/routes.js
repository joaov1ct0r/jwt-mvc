const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const userController = require('../controller/userController');

router.post('/info', userController.info);

router.post('/new', userController.new);

router.post('/login', userController.login);

router.put('/edit/:index', userController.edit);

router.delete('/delete/:index', (req, res) => {
    let { index } = req.params;

    let request = db.deleteUser(index, function (result) {
        console.log(result);

        res.send('Usuario deletado com sucesso');
    });
});

module.exports = router;
