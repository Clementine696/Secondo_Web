const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    Hometown: {
        type: String,
    },
    contactNumber: { type: String },
    profilePicture: { type: String },

    addresses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Address'
		},
	],

    money: { type: Number },
    carbonCredits: { type: Number},

	// payments: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Payment'
	// 	},
	// ],

	// carts: [{
	// 	product: {
	// 			type: mongoose.Schema.Types.ObjectId,
	// 			ref: 'Product'
	// 		},
	// 	quantity: Number
	// }],

	// historysSeller: [{
	// 	product: {
	// 			type: mongoose.Schema.Types.ObjectId,
	// 			ref: 'ProductSeller'
	// 		},
	// 	address: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Address'
	// 		},
    //     price: Number,
    //     shipping: String,
	// 	pay_date: String,
	// }],
    // historysBuyer: [{
	// 	ref_buyer_product: {
	// 			type: mongoose.Schema.Types.ObjectId,
	// 			ref: 'ProductBuyer'
	// 		},
    //     your_product: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'ProductSeller'
    //     },
	// 	// address: {
	// 	// 	type: mongoose.Schema.Types.ObjectId,
	// 	// 	ref: 'Address'
    //     // },
    //     // price: Number,
    //     // shipping: String,
	// 	// pay_date: String,
	// }],
    // historysDonater: [{
	// 	product: {
	// 			type: mongoose.Schema.Types.ObjectId,
	// 			ref: 'ProductDonate'
	// 		},
	// 	address: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Address'
	// 		},
    //     text_request: {
            
    //     }
    //     price: Number,
    //     shipping: String,
	// 	pay_date: String,
	// }],
    // historysRequest: [{
	// 	product: {
	// 			type: mongoose.Schema.Types.ObjectId,
	// 			ref: 'ProductRequest'
	// 		},
	// 	address: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Address'
	// 		},
    //     price: Number,
    //     shipping: String,
	// 	pay_date: String,
	// }],
    
}, { timestamps: true });

// userSchema.virtual('password')
// .set(function(password){
//     this.hash_password = bcrypt.hashSync(password, 10);
// });

userSchema.virtual('fullname')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
    authenticate: async function(password){
        // return bcrypt.compareSync(password, this.hash_password);
        return await bcrypt.compare(password, this.hash_password);
    }
}

module.exports = mongoose.model('User', userSchema);