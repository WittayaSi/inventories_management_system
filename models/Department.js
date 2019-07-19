const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
    },
    chief_name: {
        type: String,
        required: true
    },
    chief_position: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Department = mongoose.model('departments', DepartmentSchema)
module.exports = Department