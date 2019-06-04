const express = require('express')

const router = express.Router();

// @route   api/users
// @desc    Create new user
// @access  Public
router.post('/', (req, res) => {
    const { fullname, email, password } = req.body
    
})

module.exports = router