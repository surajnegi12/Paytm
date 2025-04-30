import express from "express";
import { accountModel, userModel } from "../db.js";
import { z } from "zod";
import dotenv from 'dotenv';
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { authMiddleware } from "../middleware.js";
dotenv.config();
export const userRouter=express.Router();
const SeceretKey=process.env.JWT_SECRET;
userRouter.post("/signup",async(req,res)=>{
const requireBody=z.object({
     username:z.string().min(3).max(30).email(),
     firstName:z.string(),
     lastName:z.string(),
     password:z.string().min(5).max(30)
})
const parseDataWithSuccess= requireBody.safeParse(req.body);
if(!parseDataWithSuccess.success){
    res.json({
        message:"inavild format"
    });
    return
}

  const{username,firstName,lastName,password}=req.body;
  try {
    const hasheddPassword= await bcrypt.hash(password,5);
    const user = await userModel.create({
        username:username,
        firstName:firstName,
        lastName:lastName,
        password:hasheddPassword
    })

    const userId=user._id

    await accountModel.create({
      userId,
      balance:1+Math.random()*10000
    })

    res.status(200).json({
        message:"signup successfull"
    })
  } catch (error) {
    res.status(411).json({
        message: "Email already taken / Incorrect inputs"
    })
  }
})

userRouter.post("/signin",async(req,res)=>{
    const{username,password}=req.body;
    const user= await userModel.findOne({username});
    if(!user){
        res.json({
            message:"user does not exists"
        })
        return;
    }

    const hashedPasswordMatch= await bcrypt.compare(password,user.password);
    if (!hashedPasswordMatch) {
        res.status(403).json({ message: "Incorrect credentials" });
        return;
      }
    const userId=user._id;
    const token=jwt.sign({userId},SeceretKey);

    res.json(
      {
        message:"login successfull",
        token,
        user:{
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          _id: user._id
        }
      }
    )

})

  userRouter.put("/update",authMiddleware,async(req,res)=>{
    const {password,firstName,lastName}=req.body;
    const userId=req.userId;
    try {
      const user= await userModel.findById(userId);
      if(!user){
        res.json({
          message:"no user find"
        })
      }
      if(firstName) user.firstName=firstName;
      if(lastName)user.lastName=lastName;
      if(password){
        const hashedpassword= await bcrypt.hash(password,5);
        user.password=hashedpassword;
      }
     await user.save();
      res.status(200).json({
        message: "Updated successfully"
    })
    } catch (error) {
      res.status(411).json({
        message:"Error while updating information"
      })
    }
   
  })

userRouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await userModel.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
userRouter.get("/userinfo",authMiddleware,async(req,res)=>{
  const userId=req.userId;
  const user= await accountModel.findOne({userId:userId});
  if(!user){
    res.json({
      message:"user does not exist"
    })
    return;
  }
  
  res.json({
    account:user
  })
})
