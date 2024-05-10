const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createProductSeller, getProductSellerDetailsById, createProductBuyer, getProductBuyerDetailsById, createProductDonater, getProductDonaterDetailsById, createProductReciever, getProductRecieverDetailsById, approveProduct } = require('../controllers/product');
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
        console.log(path.dirname(__dirname))
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage });

router.post('/product/seller/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProductSeller);
router.get('/product/seller/:productId', getProductSellerDetailsById);

router.post('/product/buyer/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProductBuyer);
router.get('/product/buyer/:productId', getProductBuyerDetailsById);

router.post('/product/donater/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProductDonater);
router.get('/product/donater/:productId', getProductDonaterDetailsById);

router.post('/product/reciever/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProductReciever);
router.get('/product/reciever/:productId', getProductRecieverDetailsById);

router.post('/product/approve', approveProduct);

// router.post('/product/createBuyer', requireSignin, adminMiddleware, upload.array('productPicture'), createProductSeller);
// router.post('/product/createSeller', requireSignin, adminMiddleware, upload.array('productPicture'), createProductSeller);
// router.post('/product/createSeller', requireSignin, adminMiddleware, upload.array('productPicture'), createProductSeller);

// router.get('/products/:slug', getProductsBySlug)
// router.get('/category/getcategory', getCategory);


module.exports = router;