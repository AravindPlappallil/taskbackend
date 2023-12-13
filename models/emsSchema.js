const mongoose=require('mongoose')


const employees=mongoose.model('employees',{

    employeeid:{
        type:String,
        required:true,
        unique:true,
        },
    employename:{
        type:String,
        required:true,
    },
    employeeplace:{
        type:String,
        required:true, 
    },
    jobdescription:{ 
        type:String, 
        required:true,
    }
})

module.exports = employees