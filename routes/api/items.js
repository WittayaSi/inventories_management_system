const express = require('express')

const itemRouter = express.Router()

const Item = require('../../models/Item')
const Category = require('../../models/Category')

// @route   GET api/items
// @desc    GET all items
// @access  Public 
itemRouter.get('/', (req, res) => {
    //res.send('lsdkfjsdlfjksdlkj')
    Category.find({},{"category_items": 1})
        .sort({ created_at: -1 })
        .then( categories => {
            // Call Category Model method
            let items = Category.getItems(categories)
            res.json(items)
        })
})

// @route   POST api/items
// @desc    Create an new item
// @access  Public
itemRouter.post('/', (req, res) => {

    const { category_id, item_name, item_unit, item_price } = req.body

    // Simple validation
    if( !category_id || !item_name || !item_unit ){
        return res.status(400).json({ message: 'Please enter all fields' })
    }

    const newItem = new Item({
        item_name,
        item_unit,
        item_price
    })

    Category.updateOne(
        { _id: category_id },
        { $push: { category_items: newItem } },
        { upsert:true }
    )
    .then(() => res.json(newItem))
    .catch(err => res.json(err))

    // newItem.save()
    //     .then(item => res.json(item))
    //     .catch(err => res.json(err))
})

// @route   PUT api/items/:id with item data
// @desc    Create an new item
// @access  Public
itemRouter.patch('/:id', (req, res) => {

    const { item_name, item_unit, item_price} = req.body
    const id = req.params.id
    const newItem = {
        item_name,
        item_unit,
        item_price,
        "udpated_at": Date.now()
    }

    // Simple validation
    if(!item_name || !item_unit){
        return res.status(400).json({ message: 'Please enter all fields' })
    }

    Item.updateOne(
            { _id: id },
            { $set: newItem },
            { upsert:true }
        )
        .then( () => res.json({ success: true }))
        .catch( err => res.json({success: false, error: err}))
})

// @route   POST api/items/:id
// @desc    Delete an item
// @access  Public
itemRouter.delete('/:id', (req, res) => {
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

module.exports = itemRouter