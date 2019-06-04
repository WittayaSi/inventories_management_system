const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ItemSchema = new Schema({
    // category_id: {
    //     type: String,
    //     required: true
    // },
    item_name: {
        type: String,
        unique: true,
        required: true
    },
    item_unit: {
        type: String,
        required: true
    },
    item_price: {
        type: Number,
        default: 0
    },
    item_status: {
        type: String,
        default: 'active'
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Item = mongoose.model('items', ItemSchema)