const { addListener } = require("../Models/clientModel");
const Client=require("../Models/clientModel")
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncError=require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
// const bcrypt = require("bcryptjs/dist/bcrypt");
const bcrypt = require("bcryptjs");
exports.registerClient=catchAsyncError( async (req,res,next)=>{
    const {name,email,password}=req.body;
    const client=await Client.create({
        name,
        email,
        password
    })
    console.log("Controller")
    const token=client.getJWTToken();
    res.status(201).json({
        success:true,
        client,
        token
    })
});
exports.getAllClients=catchAsyncError( async (req,res)=>{
    console.log("getting all cients")
    const clients = await Client.find();
    res.status(200).json({
        success:true,
        clients
    })
});
// exports.updateClient=catchAsyncError( async (req,res,next)=>{

//     let client= await Client.findById(req.params.id);
//     if(!client){
//         return next(new ErrorHandler("Client not found",404));
//     }
//     client=await Client.findByIdAndUpdate(req.params.id,req.body,{
//         new:true,
//         runValidators:true,
//         useFindAndModify:false
//     })
//     res.status(200).json({
//         success:true,
//         client
//     })
// });

exports.loginClient=catchAsyncError(async(req,res,next)=>{
        const {email,password}=req.body;


        if(!email||!password){
            return next(new ErrorHandler("Please enter email and password",400));

        }
        const client=await Client.findOne({email}).select("+password");

        if(!client){
            return next(new ErrorHandler("Invalid username ",401));

        }
        const isPasswordMatched=await client.comparePassword(password);
        
        if(!isPasswordMatched){
            return next(new ErrorHandler("Invalid  password",401));

        }
        
        sendToken(client,200,res);
    }
)
// exports.deleteClient=catchAsyncError( async(req,res,next)=>{
//     const client=await Client.findById(req.params.id);
//     if(!client){
//         return next(new ErrorHandler("Client not found",404));
//     }
//     await client.remove()
//     res.status(200).json({
//         success:true,
//         message:"client deleted"
//     })
// });