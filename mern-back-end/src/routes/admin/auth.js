const express = require('express');
const { signup, signin, signout, updateProfilePicture, newAddress, getAddress, getUserData, newPayment, getPayment, updateProfileData, updateAddress } = require('../../controllers/admin/auth');
const router = express.Router();
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require ('../../validaters/auth');
const { requireSignin, adminMiddleware } = require('../../common-middleware');

const shortid = require('shortid')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname('../'), 'src', 'uploads'))
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage });

router.get('/admin/getuserdata', requireSignin, adminMiddleware, getUserData);
router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/admin/signout', signout);
router.post('/admin/updateProfilePicture', requireSignin, adminMiddleware, upload.single('newProfilePicture'), updateProfilePicture);
// router.post('/admin/signout', requireSignin, signout);
router.post('/admin/address/new', requireSignin, adminMiddleware, newAddress);
router.post('/admin/address/get', requireSignin, adminMiddleware, getAddress);
router.post('/admin/address/update', requireSignin, adminMiddleware, updateAddress);

router.post('/admin/profile/update', requireSignin, adminMiddleware, updateProfileData);

router.post('/admin/payment/new', requireSignin, adminMiddleware, newPayment);
router.post('/admin/payment/get', requireSignin, adminMiddleware, getPayment);


module.exports = router;