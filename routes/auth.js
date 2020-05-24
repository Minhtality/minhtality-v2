const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/Users');

// @route       GET api/auth
// @desc        Get logged in user
// @access      Private access
router.get('/', (req,res) => {
    res.send('Get logged in user');
});

// @route       POST api/auth
// @desc        Auth user and get token
// @access      Public access
router.post('/',
[
    check('email', 'Please enter valid email').isEmail(),
    check('password', 'Please enter your password').exists()
], 
async (req, res) => {
    const errors = validationResult(req);
    const {email, password} = req.body;

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try {
        // Check to see if user exist
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({msg: 'User does not exist, please check username or signup'})
        }
        // Check to see if password match the hash
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({msg: "Incorrect password or email, please try again"});
        }

        // Return json web token
        const payload = {
            user: {
                id: user.id,
            },
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if(err) throw err;
                res.json({token});
            }
        )
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;