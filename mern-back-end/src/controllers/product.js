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
// const ProductSeller = require('../models/productSeller')
// const ProductBuyer = require('../models/productBuyer')
// const ProductDonate = require('../models/productDonate')
// const ProductRequest = require('../models/productRequest')
// User.findOneAndUpdate({ _id: req.user._id }, { profilePicture: newProfilePicture}).catch((err)=>{
//     console.log('Updated file', newProfilePicture)
//     console.log(err);
// });

exports.approveProduct = (req, res) => {
    const body = req.body;
    switch (body.type){
        case 'seller' :
            ProductSeller.findOneAndUpdate({ _id: body.product_id }, {verify: true, carbonCredits: body.carbon_credit})
            .then((product) => {
                if(product){
                    return res.status(200).json({ product });
                }
            }).catch((error) => {
                console.log(error);
                return res.status(400).json({ error })
            })
            // return res.status(200).json({ message: 'seller' });
            break;
        case 'buyer' :
            ProductBuyer.findOneAndUpdate({ _id: body.product_id }, {verify: true})
            .then((product) => {
                if(product){
                    return res.status(200).json({ product });
                }
            }).catch((error) => {
                console.log(error);
                return res.status(400).json({ error })
            })
            break;
        case 'donater' :
            ProductDonate.findOneAndUpdate({ _id: body.product_id }, {verify: true, carbonCredits: body.carbon_credit})
            .then((product) => {
                if(product){
                    return res.status(200).json({ product });
                }
            }).catch((error) => {
                console.log(error);
                return res.status(400).json({ error })
            })
            break;
        case 'request' :
            ProductRequest.findOneAndUpdate({ _id: body.product_id }, {verify: true})
            .then((product) => {
                if(product){
                    return res.status(200).json({ product });
                }
            }).catch((error) => {
                console.log(error);
                return res.status(400).json({ error })
            })
            break;
    }
}

exports.getUserProducts = async (req, res) => {
    const id = req.user._id;
    
    let productsSeller = await ProductSeller.find({})
                                        .populate({
                                            path: 'createBy',
                                            match: {
                                                _id: id
                                            }
                                        })
                                        .exec();
    productsSeller = productsSeller.filter(function(product) {
        return product.createBy;
    });

    let productsBuyer = await ProductBuyer.find({})
                                        .populate({
                                            path: 'createBy',
                                            match: {
                                                _id: id
                                            }
                                        })
                                        .exec();
    productsBuyer = productsBuyer.filter(function(product) {
        return product.createBy;
    });

    let productsDonater = await ProductDonate.find({})
                                        .populate({
                                            path: 'createBy',
                                            match: {
                                                _id: id
                                            }
                                        })
                                        .exec();
    productsDonater = productsDonater.filter(function(product) {
        return product.createBy;
    });

    let productsReciever = await ProductRequest.find({})
                                        .populate({
                                            path: 'createBy',
                                            match: {
                                                _id: id
                                            }
                                        })
                                        .exec();
    productsReciever = productsReciever.filter(function(product) {
        return product.createBy;
    });

    res.status(200).json({ 
        productsSeller,
        productsBuyer,
        productsDonater,
        productsReciever
     });
}

exports.searchProduct = async (req, res) => {
    const { keyword } = req.params;
    // return res.status(200).json({ message: productId })
    // res.status(201).json({ keyword })
    if(keyword){
        // let productsSeller = await ProductSeller.find({ name: {$regex: keyword, $options: 'i'}}).exec();

        let productsSeller = await ProductSeller.find({ name: {$regex: keyword, $options: 'i'}, verify: true}).exec();
        let productsBuyer = await ProductBuyer.find({ name: {$regex: keyword, $options: 'i'}, verify: true }).exec();
        let productsDonater = await ProductDonate.find({ name: {$regex: keyword, $options: 'i'}, verify: true}).exec();
        let productsReciever = await ProductRequest.find({ name: {$regex: keyword, $options: 'i'}, verify: true}).exec();

        res.status(201).json({ 
            productsSeller,
            productsBuyer,
            productsDonater,
            productsReciever
        })
    
        // ProductSeller.find({ name: {$regex: keyword, $options: 'i'}})
        // .then((product) => {
        //     if(product){
        //         return res.status(200).json({ product });
        //     }
        // }).catch((error) => {
        //     console.log(error);
        //     return res.status(400).json({ error })
        // })
        // .then((findproduct)
        // {
        //     res.status(201).json({ findproduct })
        // })
    }else{
        return res.status(400).json({ error: 'params required' });
    }
    
}

// router.get("/s/:keyword", function(req, res){
// 	let search = req.params.keyword;
// 	console.log(search);
// 	Product.find({name: {$regex: search, $options: 'i'}}).exec(function(err, allProducts){
// 		if(err){
// 			console.log(err);
// 		} else{
// 			res.render("product/index.ejs",{products: allProducts});
// 		}
// 	});
// });