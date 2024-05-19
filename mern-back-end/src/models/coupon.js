const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    couponImage: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Coupon', couponSchema);