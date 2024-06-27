const mongoose=require('mongoose')
const schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Place:String,
    Phone:Number,
})
//user is a collection 

const userModel=mongoose.model("user",schema)
module.exports=userModel

