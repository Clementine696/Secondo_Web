const mongoose = require('mongoose');

const productRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    specifications: {
        type: String
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    shippingCost: {
        type: Number,
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
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    createBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    updatedAt: Date

}, { timestamps: true });

module.exports = mongoose.model('ProductRequest', productRequestSchema);