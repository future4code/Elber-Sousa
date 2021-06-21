import express from 'express';
import { UserController } from '../controller/Usercontroller';

export const userRouter = express.Router();
export const userController = new UserController();

userRouter.post('/signup', userController.signup);
userRouter.post('/login');
