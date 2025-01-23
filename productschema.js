const mongoose = require("mongoose");

const schema = mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    productprice:{
        type:String,
        required:true
    },
    productrate:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    proimg:{
        type:String,
        required:true
    }
});

const admin = mongoose.model("Product",schema);
module.exports = admin;