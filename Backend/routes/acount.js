import express, { Router } from'express';
import { authMiddleware } from '../middleware.js';
import { accountModel, transactionModel, userModel } from '../db.js';
import mongoose from 'mongoose';
export const accountRouter=Router();

accountRouter.get("/balance",authMiddleware,async(req,res)=>{
const userId=req.userId;
try {
    const accountDeatil= await accountModel.findOne({userId});
res.json({
    balance:accountDeatil.balance
})
} catch (error) {
res.json({
    message:"something went wrong"
})    
}
});

accountRouter.post("/transfer",authMiddleware,async(req,res)=>{
    const session= await mongoose.startSession();
    session.startTransaction()
    const{to,amount}=req.body;
   
    const fromUser= await accountModel.findOne({ userId:req.userId}).session(session);
    if (!fromUser) {
        await session.abortTransaction();
        session.endSession();
        return res.status(404).json({ message: "User account not found" });
    }

    if (fromUser.balance <= 0 || fromUser.balance < amount) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ message: "Insufficient balance" });
    }

    const  toUser=await accountModel.findOne({userId:to}).session(session);

   if(!toUser){
    await session.abortTransaction();
    return res.status(400).json({
        message: "Invalid account"
    });
   }
    await accountModel.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
    await accountModel.updateOne({userId:to},{$inc:{balance:amount}}).session(session);
   
    await transactionModel.create({
        from:req.userId,
        to:to,
        amount
    })
    await session.commitTransaction();
    session.endSession();
    res.json({
        message: "Transfer successful"
    });
})

accountRouter.get("/transection/history",authMiddleware,async(req,res)=>{
    const userId=req.userId;
    const transactionHistory = await transactionModel.find({
        $or: [{ from: userId }, { to: userId }],
      }).populate("from","firstName")
      .populate("to","firstName");
    res.json({
        history:transactionHistory
    })
})