const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
    category_name: {
        type: String,
        required: true
    },
    category_items: {
        type: Array,
        default: []
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



module.exports = Category = mongoose.model('categories', CategorySchema)