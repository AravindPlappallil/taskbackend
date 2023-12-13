const express = require('express')
const { employeeRegister } = require('../controllers/logic')


const router= new express.Router()


router.post('/employees/register',employeeRegister)
 
 
module.exports = router