const ProductSeller = require('../models/productSeller')
const ProductBuyer = require('../models/productBuyer')
const ProductDonate = require('../models/productDonate')
const ProductRequest = require('../models/productRequest')
const shortid = require('shortid')
const slugify = require('slugify')
const Category = require('../models/category')

// Seller API
exports.createProductSeller = (req, res) => {
    // res.status(200).json( {file: req.files, body: req.body} );
    // const {
    //     name, price, specifications, description, shippingCost, category
    // } = req.body;
    const {
        name, price, description, shippingCost, category
    } = req.body;

    let productPictures = [];

    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            console.log(file.filename)
            return { img: file.filename }
        })
    }

    let slug = slugify(name);
    console.log(slug.length)
    if(slug.length == 0){
        console.log("Slug is 0");
        slug = name.split(" ")[0];
    }

    console.log(name, slug)

    const product = new ProductSeller({
        name: req.body.name,
        slug: slug,
        price,
        specifications: '',
        description,
        shippingCost,
        carbonCredits: '0',
        productPictures,
        verify: false,
        category,
        createBy: req.user._id
    });
    product.save().then(product => {
        if(product){
            res.status(201).json({ product });
        }
    }).catch((error) => {
        console.log(error);
        return res.status(400).json({ error })
    });
    
}

exports.getProductSellerDetailsById = (req, res) => {
    const { productId } = req.params;
    // return res.status(200).json({ message: productId })
    if(productId){
        ProductSeller.findOne({ _id: productId })
        .populate({ path: 'category', select: '_id name'})
        .populate({ path: 'createBy', select: '_id firstName'})
        .exec()
        .then((product) => {
            if(product){
                return res.status(200).json({ product });
            }
        }).catch((error) => {
            console.log(error);
            return res.status(400).json({ error })
        })
    }else{
        return res.status(400).json({ error: 'params required' });
    }
}

// Buyer API
exports.createProductBuyer = (req, res) => {
    // res.status(200).json( {file: req.files, body: req.body} );
    // const {
    //     name, price, specifications, description, shippingCost, category
    // } = req.body;
    const {
        name, price, description, shippingCost, category
    } = req.body;

    let productPictures = [];

    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            console.log(file.filename)
            return { img: file.filename }
        })
    }

    let slug = slugify(name);
    console.log(slug.length)
    if(slug.length == 0){
        console.log("Slug is 0");
        slug = name.split(" ")[0];
    }

    console.log(name, slug)

    const product = new ProductBuyer({
        name: req.body.name,
        slug: slug,
        price,
        specifications: '',
        description,
        shippingCost,
        productPictures,
        verify: false,
        category,
        createBy: req.user._id
    });
    product.save().then(product => {
        if(product){
            res.status(201).json({ product });
        }
    }).catch((error) => {
        console.log(error);
        return res.status(400).json({ error })
    });
    
}

exports.getProductBuyerDetailsById = (req, res) => {
    const { productId } = req.params;
    // return res.status(200).json({ message: productId })
    if(productId){
        ProductBuyer.findOne({ _id: productId })
        .populate({ path: 'category', select: '_id name'})
        .populate({ path: 'createBy', select: '_id firstName'})
        .exec()
        .then((product) => {
            if(product){
                return res.status(200).json({ product });
            }
        }).catch((error) => {
            console.log(error);
            return res.status(400).json({ error })
        })
    }else{
        return res.status(400).json({ error: 'params required' });
    }
}

// Donater API
exports.createProductDonater = (req, res) => {
    // res.status(200).json( {file: req.files, body: req.body} );
    // const {
    //     name, price, specifications, description, shippingCost, category
    // } = req.body;
    const {
        name, description, shippingCost, category
    } = req.body;

    let productPictures = [];

    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            console.log(file.filename)
            return { img: file.filename }
        })
    }

    let slug = slugify(name);
    console.log(slug.length)
    if(slug.length == 0){
        console.log("Slug is 0");
        slug = name.split(" ")[0];
    }

    console.log(name, slug)

    const product = new ProductDonate({
        name: req.body.name,
        slug: slug,
        specifications: '',
        description,
        shippingCost,
        carbonCredits: '0',
        productPictures,
        verify: false,
        category,
        createBy: req.user._id
    });
    product.save().then(product => {
        if(product){
            res.status(201).json({ product });
        }
    }).catch((error) => {
        console.log(error);
        return res.status(400).json({ error })
    });
    
}

exports.getProductDonaterDetailsById = (req, res) => {
    const { productId } = req.params;
    // return res.status(200).json({ message: productId })
    if(productId){
        ProductDonate.findOne({ _id: productId })
        .populate({ path: 'category', select: '_id name'})
        .populate({ path: 'createBy', select: '_id firstName'})
        .exec()
        .then((product) => {
            if(product){
                return res.status(200).json({ product });
            }
        }).catch((error) => {
            console.log(error);
            return res.status(400).json({ error })
        })
    }else{
        return res.status(400).json({ error: 'params required' });
    }
}

// Reciever API
exports.createProductReciever = (req, res) => {
    // res.status(200).json( {file: req.files, body: req.body} );
    // const {
    //     name, price, specifications, description, shippingCost, category
    // } = req.body;
    const {
        name, price, description, shippingCost, category
    } = req.body;

    let productPictures = [];

    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            console.log(file.filename)
            return { img: file.filename }
        })
    }

    let slug = slugify(name);
    console.log(slug.length)
    if(slug.length == 0){
        console.log("Slug is 0");
        slug = name.split(" ")[0];
    }

    console.log(name, slug)

    const product = new ProductRequest({
        name: req.body.name,
        slug: slug,
        price,
        specifications: '',
        description,
        shippingCost,
        productPictures,
        verify: false,
        category,
        createBy: req.user._id
    });
    product.save().then(product => {
        if(product){
            res.status(201).json({ product });
        }
    }).catch((error) => {
        console.log(error);
        return res.status(400).json({ error })
    });
    
}

exports.getProductRecieverDetailsById = (req, res) => {
    const { productId } = req.params;
    // return res.status(200).json({ message: productId })
    if(productId){
        ProductRequest.findOne({ _id: productId })
        .populate({ path: 'category', select: '_id name'})
        .populate({ path: 'createBy', select: '_id firstName'})
        .exec()
        .then((product) => {
            if(product){
                return res.status(200).json({ product });
            }
        }).catch((error) => {
            console.log(error);
            return res.status(400).json({ error })
        })
    }else{
        return res.status(400).json({ error: 'params required' });
    }
}

exports.approveProduct = (req, res) => {
    const { productId } = req.params;
    // if(productId){
    //     ProductRequest.findOne({ _id: productId })
    //     .populate({ path: 'category', select: '_id name'})
    //     .populate({ path: 'createBy', select: '_id firstName'})
    //     .exec()
    //     .then((product) => {
    //         if(product){
    //             return res.status(200).json({ product });
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //         return res.status(400).json({ error })
    //     })
    // }else{
    //     return res.status(400).json({ error: 'params required' });
    // }
}