const mongoose=require('mongoose'
)

const structure =mongoose.Schema(
    {
        FirstName:{
            type:String,
            required:true
        },
        LastName:{
            type:String,
            required:true
        },
        Email:{
            type:String,
            required:true
        },
        Password:{
            type:String,
            required:true
        },
        Telephone:{
            type:Number,
            required:true
        }

    }
)

const useModel=mongoose.model('REGISTERED',structure)

module.exports=useModel

