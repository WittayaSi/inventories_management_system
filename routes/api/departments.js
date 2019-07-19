const express = require('express')

const departmentRoute = express.Router()

const Department = require('../../models/Department')

departmentRoute.get('/', (req, res) => {
    Department.find()
        .sort({ updatedAt: -1 })
        .then( departments => res.json(departments) )
        .catch( err => res.json(err) )
})

departmentRoute.post('/', (req, res) => {
    const { name, chief_name, chief_position } = req.body
    
    if(!name || !chief_name || !chief_position){
        return res.status(400).json({ message: 'กรุณากรอกทุกช่องที่มีเครื่องหมาย *' })
    }

    const department = new Department( req.body )
    department.save()
        .then( department => res.json(department))
        .catch( err => res.status(400).json(err))
})

module.exports = departmentRoute