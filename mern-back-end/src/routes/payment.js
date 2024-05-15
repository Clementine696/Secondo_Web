const express = require("express");
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { payments, checkout } = require("../controllers/payment");
let router = express.Router();
require('dotenv').config()

router.post('/payment', payments)
router.post('/payment/checkout', requireSignin, adminMiddleware, checkout);

module.exports = router;