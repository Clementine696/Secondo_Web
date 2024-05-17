const mongoose = require('mongoose');

const productBuyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    specifications: {
        type: String
    },
    description: {
        type: String,
        required: true,
        trim: true
        // max: 5000
    },
    // shippingCost: {
    //     type: Number,
    // },
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
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    createBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    updatedAt: Date

}, { timestamps: true });

module.exports = mongoose.model('ProductBuyer', productBuyerSchema);