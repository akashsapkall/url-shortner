const mongoose=require("mongoose");
const urlSchema =mongoose.Schema({
    shortUrl:{
        type:String,
        required:true,
        unique:true,
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    urlHistory:[
        {timestamp:{type:Number,}},
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

const URL=mongoose.model("URL",urlSchema);

module.exports=URL;