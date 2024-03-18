const express = require('express');
const { signup, signin } = require('../controllers/auth');
const router = express.Router();
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require ('../validaters/auth');


router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin);

module.exports = router;