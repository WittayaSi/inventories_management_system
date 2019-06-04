const mongoose = require('mongoose')

const Schema = mongoose.Schema

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
        default: Date.now()
    },
})

module.exports = User = mongoose.model('users', UserSchema)