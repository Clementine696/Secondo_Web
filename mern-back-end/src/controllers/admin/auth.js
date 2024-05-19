const User = require('../../models/user');
const Address = require('../../models/address')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const shortid = require('shortid')
const fs = require('fs');
const Payment = require('../../models/payment');

exports.getUserData = (req, res) => {
    User.findOne({ _id: req.user._id })
        .then((user)=>{
            if(user){
                // console.log(user);
                return res.status(200).json({ user: user })
            }
        })
}

exports.signup = (req, res) => {

    User.findOne({email: req.body.email})
    .then(async (user)=>{
        if(user) return res.status(400).json({
            message: 'Admin already registered'
        });

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const hash_password = await bcrypt.hash(password, 10)

        const _user = new User({
            firstName,
            lastName,
            email,
            hash_password,
            // username: shortid.generate(),
            // username: email.split('@')[0] + shortid.generate(),
            username: email.split('@')[0],
            hometown: 'กรุงเทพ',
            role: 'admin'
        });

        _user.save().then(data => {
            data === _user; // true
            if(data){
                return res.status(201).json({
                    message: 'Admin  created Successfully..!'
                    // user: data
                });
            }
            // else return res.status(400).json({
            //     message: 'zum ting wong'
            // });
        }).catch((err)=>{
            console.log(err);
        });
    })
    .catch((err)=>{
        console.log(err);
    });

    // User.findOne({email: req.body.email})
    // .exec((err, user) => {
    //     if(user) return res.status(400).json({
    //         message: 'User already registered'
    //     });

        // const {
        //     firstName,
        //     lastName,
        //     email,
        //     password
        // } = req.body;

        // const _user = new User({
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     username: Math.random().toString()
        // });

        // _user.save((err, data) => {
        //     if(err){
        //         return res.status(400).json({
        //             message: 'zum ting wong'
        //         });
        //     }
        //     if(data){
        //         return res.status(201).json({
        //             user: data
        //         });
        //     }
        // });
    // });
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .then((user)=>{
    // .exec((error, user) => {
        // if(error) return res.status(400).json({ error });
        if(user){

            if(user.authenticate(req.body.password) && user.role === 'admin'){
                const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
                const { _id, firstName, lastName, email, role, fullName, profilePicture} = user;
                res.cookie('token', token, { expiresIn: '1d'});
                // const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '600ms' });
                // const { _id, firstName, lastName, email, role, fullName} = user;
                // res.cookie('token', token, { expiresIn: '6000ms'});
                res.status(200).json({
                    token,
                    user: {
                        _id, firstName, lastName, email, role, fullName, profilePicture 
                    }
                });
            }else{
                return res.status(400).json({
                    message: 'Invalid Password'
                })
            }

        }else{
            return res.status(400).json({message: 'Something went wrong'});
        }
    });
}

exports.signout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: 'Signout successfully...!'
    })
}

exports.updateProfilePicture = (req, res) => {

    if(req.file){
        console.log("Test")
        const newProfilePicture = process.env.API + '/public/' + req.file.filename;
        console.log(req.file.filename);
        console.log(newProfilePicture)
        // img = process.env.API + '/public/' + req.file.filename;

        User.findOne({ _id: req.user._id })
        .then((user)=>{
            if(user){
                console.log(user);
                if(user.profilePicture == null){
                    // console.log('no pic');
                }else{
                    // console.log('pic');
                    // console.log(user.profilePicture);
                    // console.log(user.profilePicture.split('/')[4])
                    fs.unlink("src/uploads/" + user.profilePicture.split('/')[4], (err => 
                        { if (err) console.log(err);
                            else {
                                console.log("\nDeleted file", user.profilePicture.split('/')[4]);
                            }
                        }));
                }
                // console.log('ready up')
                User.findOneAndUpdate({ _id: req.user._id }, { profilePicture: newProfilePicture}).catch((err)=>{
                    console.log('Updated file', newProfilePicture)
                    console.log(err);
                });
            }
        })
        // User.findOneAndUpdate({ _id: req.user._id }, { profilePicture: newProfilePicture})
        // .catch((err)=>{
        //     console.log(err);
        // });
        // User.findOne({ _id: req.user._id })
        // .then((user)=>{
        //     if(user){
        //         console.log('updated user: ')
        //         console.log(user)
        //     }
        // })

        return res.status(200).json({profilePicture: newProfilePicture});
    }else{
        return res.status(400).json({message: 'Something went wrong'});
    }

    
}

// exports.updateProfileDetail = (req, res) => {

// }

exports.newAddress = (req, res) => {

    const {
        address_name, address_author, tel, houseaddress, sub_district, district, province, zipcode
    } = req.body;

    User.findOne({ _id: req.user._id })
        .then((user)=>{
            if(user){
                console.log(user);

                const address = new Address({
                    address_name,
                    address_author,
                    tel,
                    houseaddress,
                    sub_district,
                    district,
                    province,
                    zipcode,
                })
                address.author.id = req.user._id;
                address.save().then(address => {
                    if(address){
                        user.addresses.push(address);
                        user.save();
                        res.status(201).json({ address });
                    }
                }).catch((error) => {
                    console.log(error);
                    return res.status(400).json({ error })
                });
            }else{
                return res.status(400).json({message: 'Something went wrong'});
            }
        })
}

exports.getAddress = (req, res) => {
    User.findOne({ _id: req.user._id })
    .populate({ path: 'addresses' })
        .then((user)=>{
            if(user){
                // console.log(user.addresses)
                res.status(201).json({ address: user.addresses })
            }else{
                return res.status(400).json({message: 'Something went wrong'});
            }
        })
}

exports.updateAddress = (req, res) => {

    const id = req.body.address_id
    const data = {
        address_name, address_author, tel, houseaddress, sub_district, district, province, zipcode
    } = req.body;

    User.findOne({ _id: req.user._id })
    .populate({ path: 'addresses' })
        .then((user)=>{
            if(user){
                const updatedAddress = Address.findOneAndUpdate({_id: id}, data);
                // console.log(user.addresses)
                res.status(201).json({ address: updatedAddress })
            }else{
                return res.status(400).json({message: 'Something went wrong'});
            }
        })
}

// exports.deleteAddress = (req, res) => {
//     User.findOne({ _id: req.user._id })
//     .populate({ path: 'addresses' })
// }

exports.newPayment = (req, res) => {

    const {
        card_owner, card_number, expired, cvc
    } = req.body;

    User.findOne({ _id: req.user._id })
        .then((user)=>{
            if(user){
                console.log(user);

                const payment = new Payment({
                    card_owner,
                    card_number,
                    expired,
                    cvc
                })
                payment.author.id = req.user._id;
                payment.save().then(payment => {
                    if(payment){
                        user.payments.push(payment);
                        user.save();
                        res.status(201).json({ payment });
                    }
                }).catch((error) => {
                    console.log(error);
                    return res.status(400).json({ error })
                });
            }else{
                return res.status(400).json({message: 'Something went wrong'});
            }
        })
}

exports.getPayment = (req, res) => {
    User.findOne({ _id: req.user._id })
    .populate({ path: 'payments' })
        .then((user)=>{
            if(user){
                // console.log(user.addresses)
                res.status(201).json({ payments: user.payments })
            }else{
                return res.status(400).json({message: 'Something went wrong'});
            }
        })
}

exports.updateProfileData = (req, res) => {

    const {
        username, firstName, lastName, email, contactNumber, hometown,
    } = req.body;

    User.findOne({_id: req.user._id})
    .then(async (user)=>{

        user.username = username;
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.contactNumber = contactNumber;
        user.hometown = hometown;

        user.save().then(user => {
            if(user){
                res.status(201).json({ user });
            }
        }).catch((error) => {
            console.log(error);
            return res.status(400).json({ error })
        });

    })
}