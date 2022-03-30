const { addListener } = require("../Models/customerModel");
const Customer = require("../Models/customerModel")
const Order = require("../Models/orderModel")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncError = require("../middleware/catchAsyncError");
const { compile } = require("ejs");


exports.createCustomer = catchAsyncError(async (req, res, next) => {
    req.body.client_id = req.client.id;
    const customer = await Customer.create(req.body);

    res.status(200).json({
        success: true,
        customer
    })


});
exports.getAllCustomers = catchAsyncError(async (req, res) => {
    const customers = await Customer.find();
    res.status(200).json({
        success: true,
        customers
    })
});


exports.updateCustomer = catchAsyncError(async (req, res, next) => {
    let customer = await Customer.findById(req.params.id);
    if (!customer) {
        return next(new ErrorHandler("Customer not found", 404));
    }
    customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        customer
    })
});
exports.deleteCustomer = catchAsyncError(async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        return next(new ErrorHandler("Customer not found", 404));
    }
    await customer.remove()
    res.status(200).json({
        success: true,
        message: "customer deleted"
    })
});
exports.addOrder = catchAsyncError(async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        return next(new ErrorHandler("Customer not found", 404));

    }
    const order = await Order.create(req.body);

    // console.log(customer)
    // const newOrder = req.body;
    // console.log(req.body);
    await Customer.findOneAndUpdate({ _id: customer._id }, { $push: { orders: order._id } })
    // console.log(customer);
    res.status(200).json({
        success: true,
        order,
        message: "order added"
    })
})
