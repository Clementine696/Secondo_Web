const User = require('../../models/user');
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {

    User.findOne({email: req.body.email})
    .then((user)=>{
        if(user) return res.status(400).json({
            message: 'Admin already registered'
        });

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString(),
            role: 'admin'
        });

        _user.save().then(data => {
            data === _user;
            if(data){
                return res.status(201).json({
                    message: 'Admin  created Successfully..!'
                });
            }
        }).catch((err)=>{
            console.log(err);
        });
    })
    .catch((err)=>{
        console.log(err);
    });
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .then((user)=>{
        if(user){

            if(user.authenticate(req.body.password) && user.role === 'admin'){
                const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                const { _id, firstName, lastName, email, role, fullName} = user;
                res.status(200).json({
                    token,
                    user: {
                        _id, firstName, lastName, email, role, fullName 
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
