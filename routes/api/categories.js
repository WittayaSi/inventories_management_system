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

// @route   POST /api/categories 
// @desc    Create new Categories
// @access  Public
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

// @route   DELETE /api/categories/:id
// @desc    Delete a Categories
// @access  Public
categoriesRouter.delete('/:id', (req, res) => {
    const category_id = req.params.id

    res.json({ category_id })
})

module.exports = categoriesRouter