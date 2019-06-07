const mongoose = require('mongoose')

const Schema = mongoose.Schema

const now_utc = new Date(Date.now())
const now_locale = new Date(now_utc.setHours(now_utc.getHours()+7)) 

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    user_role:{
        type: String,
        required: true,
        default: 'guest'
    },
    password: {
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: now_locale
    },
})

module.exports = User = mongoose.model('users', UserSchema)