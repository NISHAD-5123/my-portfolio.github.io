const mongoose = require("mongoose");
const contact=new mongoose.Schema({
    comment:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        unique:true
    }
});
const Contactform=new mongoose.model("Contactform",contact);
module.exports=Contactform;