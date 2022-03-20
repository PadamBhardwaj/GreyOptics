const catchAsyncError = require("./catchAsyncError");

exports.isAuthenticatedClient=catchAsyncError(async (req,res,next)=>{
    const token=req.cookies;
    console.log(token);
});