const express = require("express");
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { payments, sellerCheckout, payCarbonCredits, buyerCheckout } = require("../controllers/payment");
let router = express.Router();
require('dotenv').config()

router.post('/payment', payments)
router.post('/payment/sellerCheckout', requireSignin, adminMiddleware, sellerCheckout);
router.post('/payment/buyerCheckout', requireSignin, adminMiddleware, buyerCheckout);
router.post('/payment/payCarbonCredits', requireSignin, adminMiddleware, payCarbonCredits);

module.exports = router;