const express = require('express')
const { ObjectId } = require('mongodb')
const officeRouter = express.Router()

const Office = require('../../models/Office')

// @route   GET api/offices
// @desc    GET an Office
// @access  Public 
officeRouter.get('/', (req, res) => {
    Office.find()
        .then( office => res.json(office))
        .catch( err => res.json(err))
})

// @route PATCH api/offices
// @desc Update an office
// @access Private
officeRouter.patch('/', (req, res) => {
    const { _id, full_name, short_name, address } = req.body
    
    // Simple validation
    if(!full_name || !short_name || !address){
        return res.status(400).json({ message: 'กรุณากรอกทุกช่องที่มีเครื่องหมาย *' })
    }

    if(_id === undefined){
        const newOffice = new Office(req.body)
        newOffice.save()
            .then( office => res.json(office) )
            .catch( err => res.json(err) )
    }else{
        //console.log(req.body)
        Office.updateOne(
                {_id: ObjectId(_id)},
                {$set: req.body}
            )
            .then( (result) => res.json({ success: true, result }))
            .catch( err => res.json({success: false, error: err}))
    }
    
})

module.exports = officeRouter