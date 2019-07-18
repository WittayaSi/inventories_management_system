const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OfficeSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    short_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    tel_no: {
        type: String,
    },
    fax_no: {
        type: String,
    },
    chief_name: {
        type: String,
    },
    chief_position: {
        type: String,
    },
    invent_chief_name: {
        type: String,
    },
    invent_chief_position: {
        type: String,
    }
},
{ timestamps: true }) 

const Office = mongoose.model('office', OfficeSchema)

module.exports = Office 