import mongoose from "mongoose";
const Schema=mongoose.Schema;
const model=mongoose.model;


const userSchema= new Schema({
    username:{type:String,unique:true,required:true},
    firstName:String,
    lastName:String,
    password:{type:String,required:true}
});

const accountSchema=new Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User', required: true},
    balance:{type: Number,required:true}
})
const transectonSchema= new Schema({
    from: {type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    to:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    amount:{type: Number,required:true},
    timestamp:{type:Date,default:Date.now()}
})
export const userModel=  model("User",userSchema);
export const accountModel= model("Account",accountSchema);
export const transactionModel=model("Transaction",transectonSchema);