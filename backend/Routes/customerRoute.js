const { Router } = require("express");
const express = require("express");
const { getAllCustomers, createCustomer, updateCustomer, deleteCustomer, addOrder } = require("../controllers/customerController");
const { isAuthenticatedClient, authRole } = require("../middleware/auth");
const router = express.Router();

router.route("/customers").get(getAllCustomers);
router.route("/customers/new").post(isAuthenticatedClient, createCustomer);
router.route("/customers/update").post(isAuthenticatedClient, updateCustomer);
router.route("/customers/:id").put(isAuthenticatedClient, authRole("admin"), updateCustomer).delete(isAuthenticatedClient, authRole("admin"), deleteCustomer);
router.route("/customer/orders/new/:id").post(addOrder);

module.exports = router;