//import mongoose
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://elsaju004:Elsa@cluster0.me95zsb.mongodb.net/Sampledb1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log(error)
})
