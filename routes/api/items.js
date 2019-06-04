const express = require('express')

const router = express.Router()

const Item = require('../../models/Item')

// @route   GET api/items
// @desc    GET all items
// @access  Public 
router.get('/', (req, res) => {
    //res.send('lsdkfjsdlfjksdlkj')
    Item.find()
        .sort({ created_at: -1 })
        .then(items => res.json(items))
})

// @route   POST api/items
// @desc    Create an new item
// @access  Public
router.post('/', (req, res) => {

    const { item_name, item_unit} = req.body

    // Simple validation
    if(!item_name || !item_unit){
        return res.status(400).json({ message: 'Please enter all fields' })
    }

    const newItem = new Item({
        ...req.body
    })
    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.json(err))
})

// @route   PUT api/items/:id with item data
// @desc    Create an new item
// @access  Public
router.put('/:id', (req, res) => {

    const { item_name, item_unit, item_price} = req.body

    // Simple validation
    if(!item_name || !item_unit){
        return res.status(400).json({ message: 'Please enter all fields' })
    }

    Item.updateOne(
            { "_id": req.params.id },
            { $set: { item_name, item_unit, item_price } }
        )
        .then(item => res.json(item))
        .catch(err => res.json(err))

        
})

// @route   POST api/items/:id
// @desc    Delete an item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then( item=>{
            item.remove()
                .then( () => res.json({success: true}) )
                .catch( err => res.status(404).json({success: false, error: err}) )
        })
        .catch( err => {
            res.status(404).json({success: false, error: err})
        })
})

module.exports = router