import express from 'express';
import { userRouter } from './user.js';
import { accountRouter } from './acount.js';

export const router=express.Router();

router.use("/user",userRouter);
router.use("/account",accountRouter);