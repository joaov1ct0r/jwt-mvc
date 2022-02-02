const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');

router.post('/info', userController.info);

router.post('/new', userController.new);

router.post('/login', userController.login);

router.put('/edit/:index', userController.edit);

router.delete('/delete/:index', userController.delete);

module.exports = router;
