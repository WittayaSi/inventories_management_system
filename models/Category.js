const mongoose = require('mongoose')

const Schema = mongoose.Schema

const now_utc = new Date(Date.now())
const now_locale = new Date(now_utc.setHours(now_utc.getHours()+7)) 

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
        default: now_locale
    },
    updated_at: {
        type: Date,
        default: now_locale
    }
})

module.exports = Category = mongoose.model('categories', CategorySchema)

Category.getItems = (categories) => {
    // Destructure category to items
    let items = []
    items = categories.reduce((a, b) => {
        //console.log(b)
        const category_id = b._id
        const category_name = b.category_name
        // create new array 
        let newObject = []
        newObject = b.category_items.reduce((x,y) => {
            // Create new item object
            let item = {
                category_id,
                category_name,
                ...y
            }
            return x.concat(item)
        },[])
        return a.concat(newObject)
    },[])

    return items
}