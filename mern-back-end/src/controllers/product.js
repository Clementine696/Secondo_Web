const Product = require('../models/product')
const shortid = require('shortid')
const slugify = require('slugify')

exports.createProduct = (req, res) => {

    const {
        name, price, quantity, description, category
    } = req.body;

    let productPictures = [];

    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            return { img: file.filename }
        })
    }

    const product = new Product({
        name: req.body.name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createBy: req.user._id
    });

    product.save().then(product => {
        if(product){
            res.status(201).json({ product });
        }
    }).catch((error) => {
        return res.status(400).json({ error })
        console.log(error);
    });
    
}




