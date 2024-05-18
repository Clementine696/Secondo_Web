const mongoose = require('mongoose');

const orderSellerSchema = new mongoose.Schema({
    user_owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    user_customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductSeller'
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
        },
    price: {
        type: Number,
        require: true
    },
    shipping: {
        type: String,
        require: true
    },
    pay_date: {
        type: String,
        require: true
    },
    order_tag: {
        type: String
    }
    // payment: {
    //     type: String,
    //     require: true
    // },
}, { timestamps: true });

module.exports = mongoose.model('OrderSeller', orderSellerSchema);