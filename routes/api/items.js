const express = require('express')
const { ObjectId } = require('mongodb')

const itemRouter = express.Router()

const Item = require('../../models/Item')
const Category = require('../../models/Category')

// @route   GET api/items
// @desc    GET all items
// @access  Public 
itemRouter.get('/', (req, res) => {
    //res.send('lsdkfjsdlfjksdlkj')
    Category.find({},{ category_items: 1, category_name: 1 })
        .sort({ "category_items.created_at": -1 })
        .then( categories => {
            // Call Category Model method
            let items = Category.getItems(categories)
            let data = items.sort((a,b) => b.updated_at - a.updated_at)
            res.json(data)
        })
})

// @route   POST api/items
// @desc    Create an new item
// @access  Public
itemRouter.post('/', (req, res) => {

    const { category_id, item_name, item_unit, item_price } = req.body

    // Simple validation
    if( !category_id || !item_name || !item_unit ){
        return res.status(400).json({ message: 'กรุณากรอกทุกช่องที่มีเครื่องหมาย *' })
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
itemRouter.patch('/:cid/:iid', (req, res) => {

    const { item_name, item_unit, item_price} = req.body
    const { cid, iid } = req.params
    const now_utc = new Date(Date.now())
    const now_locale = new Date(now_utc.setHours(now_utc.getHours()+7)) 
    //console.log(cid, iid)
    const newItem = {
        "category_items.$.item_name": item_name,
        "category_items.$.item_unit": item_unit,
        "category_items.$.item_price": item_price,
        "category_items.$.updated_at": now_locale
    }

    // Simple validation
    if(!item_name || !item_unit || !item_price){
        return res.status(400).json({ message: 'Please enter all fields' })
    }

    Category.updateOne(
        { _id: ObjectId(cid), category_items: { $elemMatch: { _id: ObjectId(iid) } } },
        { $set: newItem }
    )
    .then( (result) => res.json({ success: true, result }))
    .catch( err => res.json({success: false, error: err}))
})

// @route   DELETE api/items/:cid/:iid
// @desc    Delete an item
// @access  Public
itemRouter.delete('/:cid/:iid', (req, res) => {
    const {cid, iid} = req.params
    Category.updateOne(
        { _id: cid },
        { $pull: { category_items: { _id: ObjectId(iid) }} },
        { upsert: true }
    )
    .then( (result)=> res.json(result) )
    .catch( err => res.status(404).json({ success: false, error: err }))
})

module.exports = itemRouter