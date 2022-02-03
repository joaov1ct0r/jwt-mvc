const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');

const authController = require('../controller/authController');

router.post('/info', authController, userController.info);

router.post('/new', userController.new);

router.post('/login', userController.login);

router.put('/edit/:index', userController.edit);

router.delete('/delete/:index', userController.delete);

module.exports = router;
