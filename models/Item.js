const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const now_utc = new Date(Date.now())
// const now_locale = new Date(now_utc.setHours(now_utc.getHours()+7)) 

const ItemSchema = new Schema({
    // category_id: {
    //     type: String,
    //     required: true
    // },
    item_code: {
        type: String,
        unique: true
    },
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
        type: String,
        default: 0
    },
    item_status: {
        type: String,
        default: 'active'
    }
}, { timestamps: true })

const Item = mongoose.model('items', ItemSchema)

module.exports = Item 