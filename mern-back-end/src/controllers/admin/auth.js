const User = require('../../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const shortid = require('shortid')
const fs = require('fs');

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
            username: shortid.generate(),
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