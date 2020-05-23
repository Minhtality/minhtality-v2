const express = require('express');
const router = express.Router();


// @route       GET api/contacts
// @desc        Get all user's contacts
// @access      Private access
router.get('/', (req,res) => {
    res.send("Get user's contacts");
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