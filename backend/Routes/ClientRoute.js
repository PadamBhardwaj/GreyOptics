const { Router } = require("express");
const express=require("express");
const {getAllClients, loginClient, registerClient}=require("../controllers/clientController");
const router=express.Router();
console.log("Route start point Client");
router.route("/clients").get(getAllClients);
// router.route("/clients/new").post(createClient);
// router.route("/clients/:id").put(updateClient).delete(deleteClient);
router.route("/clients/register").post(registerClient)
router.route("/clients/login").post(loginClient);

module.exports=router;