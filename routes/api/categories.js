const express = require('express')

const categoriesRouter = express.Router()

const Category = require('../../models/Category')

// @route   GET /api/categories 
// @desc    GET ALL Categories
// @access  Public
categoriesRouter.get('/', (req, res) => {
    Category.find()
            .sort({ created_at: -1 })
            .then( categories => res.json(categories) )
            .catch( err => res.json(err) )
})

categoriesRouter.post('/', (req, res) => {
    const {category_name} = req.body

    // Simple validation
    if(!category_name){
        return res.status(400).json({ message: 'Please enter category name' })
    }
    
    const newCategory = new Category({
        category_name
    })

    newCategory.save()
        .then( category => res.json(category) )
        .catch( err => res.json(err) )

})

module.exports = categoriesRouter