const express = require("express");
const cookieParser=require("cookie-parser");
const dotenv=require("dotenv");
dotenv.config({path:"config/config.env"});
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const errorMiddleware=require("./middleware/error")
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(errorMiddleware);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.DBPATH+"/customerDB",{useNewUrlParser:true});
//Routes
console.log("app start");
const customer=require("./Routes/customerRoute")
const order=require("./Routes/orderRoute")
const client=require("./Routes/clientRoute")
app.use("/api",customer);   
app.use("/api",order);   
app.use("/api",client);   
console.log("app end")
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
const server=app.listen(3000, function (Req, res) {
    console.log("server started at port 3000.")
})
// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });












// app.get("/", function (req, res) {  
//     res.sendFile(__dirname + "/views/home.html");
// })

// app.get("/adminlogin", function (req, res) {
//     res.sendFile(__dirname + "/views/adminlogin.html");

// })
// app.post("/adminlogin",function(req,res){
//     const val={
//         username:req.body.adminname,
//         password:req.body.adminpass
//     }
//     console.log(val);
//     res.send("success");
// })
// app.get("/userlogin", function (req, res) {
//     res.sendFile(__dirname + "/views/userlogin.html");
// })
// app.post("/userlogin",function(req,res){
//     const val={
//         username:req.body.username,
//         password:req.body.userpass
//     }
//     console.log(val);
//     res.send("success");
// })


