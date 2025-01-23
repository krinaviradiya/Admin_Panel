const mongoose = require("mongoose");

const catschema = mongoose.Schema({
    catname:{
        type:String,
        required:true
    },
    catimg:{
        type:String,
        required:true
    }
  
});

const category = mongoose.model("category",catschema);
module.exports = category;