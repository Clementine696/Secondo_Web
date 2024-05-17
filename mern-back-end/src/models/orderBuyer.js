const mongoose = require('mongoose');

const orderBuyerSchema = new mongoose.Schema({
    user_owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    user_customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product_owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductBuyer'
    },
    product_customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductSeller'
    },
    offer_date: String,
}, { timestamps: true });

module.exports = mongoose.model('OrderBuyer', orderBuyerSchema);