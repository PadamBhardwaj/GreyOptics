const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const errorMiddleware = require("./middleware/error")
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(errorMiddleware);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.DBPATH + "/customerDB", { useNewUrlParser: true });

//Routes
const customer = require("./Routes/customerRoute")
const order = require("./Routes/orderRoute")
const client = require("./Routes/clientRoute")
app.use("/api", customer);
app.use("/api", order);
app.use("/api", client);

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
const server = app.listen(4000, function (Req, res) {
  console.log("server started at port 4000.")
})
// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
