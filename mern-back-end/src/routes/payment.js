const express = require("express");
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { payments, sellerCheckout } = require("../controllers/payment");
let router = express.Router();
require('dotenv').config()

router.post('/payment', payments)
router.post('/payment/sellerCheckout', requireSignin, adminMiddleware, sellerCheckout);

module.exports = router;