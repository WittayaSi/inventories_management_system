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

Category.getItems = (categories) => {
    // Destructure category to items
    let items = []
    items = categories.reduce((a, b) => {
        const category_id = b._id
        // create new array 
        let newObject = []
        newObject = b.category_items.reduce((x,y) => {
            // Create new item object
            let item = {
                category_id,
                ...y
            }
            return x.concat(item)
        },[])
        return a.concat(newObject)
    },[])

    return items
}