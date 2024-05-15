const User = require('../models/user');
const Address = require('../models/address')
const ProductSeller = require('../models/productSeller')
const ProductBuyer = require('../models/productBuyer')
const ProductDonate = require('../models/productDonate')
const ProductRequest = require('../models/productRequest')

const env = require('dotenv')
env.config();

var omise = require('omise')({
    'publicKey': process.env.OMISE_PUBLIC_KEY,
    'secretKey': process.env.OMISE_SECRET_KEY
});

exports.payments = async (req, res) => {
    const { email, name, amount, token } = req.body 
    try {
        const customer = await omise.customers.create({
            email,
            description: name,
            card: token
        });

        const charge = await omise.charges.create({
            amount: amount,
            currency: "thb",
            customer: customer.id
        });

        res.send({
            amount: charge.amount,
            status: charge.status
        })
    } catch (error) {
        console.log(error)
    }
    // next()
}

exports.checkout = (req, res) => {
    const body = req.body;

    User.findOne({ _id: req.user._id })
        .then((user)=>{
            if(user){
                console.log(user);

                ProductSeller.findOne({ _id: body.item_id })
                .exec()
                .then((product) => {
                    if(product){
                        Address.findOne({ _id: body.address_id })
                        .exec()
                        .then((address) => {
                            if(address){
                                const history = {
                                    product,
                                    address,
                                    price: body.price,
                                    shipping: body.shipping
                                }
                                return res.status(200).json({ history });
                            }
                        }).catch((error) => {
                            console.log(error);
                            return res.status(400).json({ error })
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                    return res.status(400).json({ error })
                })

                // payment.author.id = req.user._id;
                // payment.save().then(payment => {
                //     if(payment){
                //         user.payments.push(payment);
                //         user.save();
                //         res.status(201).json({ payment });
                //     }
                // }).catch((error) => {
                //     console.log(error);
                //     return res.status(400).json({ error })
                // });
                
            }else{
                return res.status(400).json({message: 'Something went wrong'});
            }
        })
}