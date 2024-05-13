const mongoose = require('mongoose');

const productSellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true
        // unique: true
    },
    price: {
        type: Number,
        required: true
    },
    specifications: {
        type: String
        // required: false,
        // trim: true
        // max: 5000
    },
    description: {
        type: String,
        required: true,
        trim: true
        // max: 5000
    },
    shippingCost: {
        type: Number,
        required: true
    },
    // offer: { type:Number },
    carbonCredits: { 
        type:Number,
        default: 0
    },
    productPictures: [
        { img: {type: String} }
    ],
    verify: { 
        type: Boolean,
        default: false 
    },
    status: {
        type: String,
        default: 'รอการตรวจสอบ'
    },
    // reviews: [
    //     {
    //         userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //         review: String
    //     }
    // ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    createBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    updatedAt: Date

}, { timestamps: true });

module.exports = mongoose.model('ProductSeller', productSellerSchema);