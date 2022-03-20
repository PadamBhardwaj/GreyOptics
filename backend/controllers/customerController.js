const { addListener } = require("../Models/customerModel");
const Customer=require("../Models/customerModel")
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncError=require("../middleware/catchAsyncError");


exports.createCustomer=catchAsyncError( async (req,res,next)=>{
    const customer=await Customer.create(req.body);
    console.log("Controller")
    sendToken(customer,201,res);

});
exports.getAllCustomers=catchAsyncError( async (req,res)=>{
    const customers = await Customer.find();
    res.status(200).json({
        success:true,
        customers
    })
});

// exports.loginCustomer=catchAsyncError(
//     async(req,res,next)=>{
//         const {email,password}=req.body;
//         if(!email||!password){
//             return next(new ErrorHandler("Please enter email and password",400));

//         }
//         const customer=await Customer.findOne({email}).select("+password");
//         if(!user){
//             return next(new ErrorHandler("Invalid username or password",401));

//         }
//         const isPasswordMatched=customer.comparePassword(password);
//         if(!isPasswordMatched){
//             return next(new ErrorHandler("Invalid username or password",401));

//         }
//         sendToken(customer,200,res);
//     }
// )

exports.updateCustomer=catchAsyncError( async (req,res,next)=>{
    let customer= await Customer.findById(req.params.id);
    if(!customer){
        return next(new ErrorHandler("Customer not found",404));
    }
    customer=await Customer.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    res.status(200).json({
        success:true,
        customer
    })
});
exports.deleteCustomer=catchAsyncError( async(req,res,next)=>{
    const customer=await Customer.findById(req.params.id);
    if(!customer){
        return next(new ErrorHandler("Customer not found",404));
    }
    await customer.remove()
    res.status(200).json({
        success:true,
        message:"customer deleted"
    })
});
