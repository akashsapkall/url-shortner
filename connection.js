const mongoose=require("mongoose");

function connectMongo(){
    return mongoose.connect("mongodb://127.0.0.1:27017/short-url")
    .then(()=>{console.log("Connection Established!")})
    .catch((err)=>{
        console.log("Connection Failed !!!!")
    })
}

module.exports ={
    connectMongo,
}