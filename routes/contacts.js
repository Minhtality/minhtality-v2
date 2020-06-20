const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/Users');
const Contact = require('../models/Contact');


// @route       GET api/contacts
// @desc        Get all user's contacts
// @access      Private access
router.get('/', auth, async (req,res) => {
    try {
        const contacts = await Contact.find({user: req.user.id}).sort({date: -1});
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// @route       POST api/contacts
// @desc        Add new contact
// @access      Private access
router.post('/', (req,res) => {
    res.send("Add new contacts for user");
})

// @route       PUT api/contacts/:id
// @desc        Update contacts
// @access      Private access
router.put('/:id', (req,res) => {
    res.send("Update/Edit contact");
})

// @route       DELETE api/contacts/:id
// @desc        Delete contacts
// @access      Private access
router.delete('/:id', (req,res) => {
    res.send("Delete contact");
})


module.exports = router;