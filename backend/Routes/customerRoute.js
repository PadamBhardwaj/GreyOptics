const { Router } = require("express");
const express=require("express");
const {getAllCustomers,createCustomer,updateCustomer,deleteCustomer, loginCustomer, getCustomersOfClient}=require("../controllers/customerController");
const { isAuthenticatedClient, authRole } = require("../middleware/auth");
const router=express.Router();

router.route("/customers").get( getAllCustomers);
router.route("/customers/new").post(isAuthenticatedClient,authRole("admin"), createCustomer);
router.route("/customers/:id").put(isAuthenticatedClient,authRole("admin"),updateCustomer).delete(isAuthenticatedClient,authRole("admin"),deleteCustomer);
module.exports=router;