const { Router } = require("express");
const express = require("express");
const { getClient, loginClient, registerClient, getCustomersOfClient, getOredersOfCustomerOfClient, logout } = require("../controllers/clientController");
const router = express.Router();
const { isAuthenticatedClient, authRole } = require("../middleware/auth");
router.route("/client").get(isAuthenticatedClient, getClient);
router.route("/clients/customer/:id").get(isAuthenticatedClient, authRole("admin"), getCustomersOfClient);
router.route("/clients/order/:id").get(isAuthenticatedClient, authRole("admin"), getOredersOfCustomerOfClient);
router.route("/clients/register").post(registerClient)
router.route("/clients/login").post(loginClient);
router.route("/clients/logout").get(logout);
module.exports = router;
