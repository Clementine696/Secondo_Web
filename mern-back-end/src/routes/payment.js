const express = require("express");
const { payments } = require("../controllers/payment");
let router = express.Router();
require('dotenv').config()

router.post('/payment', payments)

module.exports = router;