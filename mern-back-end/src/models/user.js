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

	payments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Payment'
		},
	],

	carts: [{
		product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product'
			},
		quantity: Number
	}],

	historys: [{
		product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product'
			},
		address: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Address'
			},
		payment: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Payment'
			},
		pay_date: String,
	}],
    
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