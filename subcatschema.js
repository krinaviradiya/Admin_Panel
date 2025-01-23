const mongoose = require("mongoose");

const subcatschema = mongoose.Schema({
    subcatname:{
        type:String,
        required:true
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        ref:"category",
        required:true
    }
  
});

const category = mongoose.model("subcategory",subcatschema);
module.exports = category;