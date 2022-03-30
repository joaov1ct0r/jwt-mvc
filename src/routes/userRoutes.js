import express from 'express';

import {
    userInfo,
    newUser,
    userLogin,
    userEdit,
    userDelete
} from '../controller/userController.js';

import authController from '../controller/authController.js';

const userRouter = express.Router();

userRouter.post('/info', authController, userInfo);

userRouter.post('/new', newUser);

userRouter.post('/login', userLogin);

userRouter.put('/edit/:index', authController, userEdit);

userRouter.delete('/delete/:index', authController, userDelete);

export default userRouter;
