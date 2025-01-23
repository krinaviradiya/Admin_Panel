const AddProSchema = require("../module/productschema");
const fs = require("fs")
const mailer = require("../middleware/mail")


module.exports.AddProPage =async(req,res) => {
    res.render("addproduct");
    
}

module.exports.ViewProPage =async(req,res) => {
    let data = await AddProSchema.find({})
    data && res.render("viewproduct",{data});
}

module.exports.AddProduct = async(req,res)=>{
    req.body.proimg = req.file.path;
    let data = await AddProSchema.create(req.body)
    data && res.redirect("/product/addproduct")
    console.log(data);   
}
module.exports.DeleteProduct = async(req,res)=>{
    let SingleData = await AddProSchema.findById(req.query.id)
    fs.unlinkSync(SingleData.proimg);
    let data = await AddProSchema.findByIdAndDelete(req.query.id)
    data && res.redirect("/product/viewproduct");
}
module.exports.EditProduct = async(req,res)=>{
    let data = await AddProSchema.findById(req.query.id)
   
    data && res.render("editproduct",{data});
    
}
module.exports.UpdateProduct = async(req,res)=>{
    let img = "";
    let SingleData = await AddProSchema.findById(req.body.id)
    req.file ? img = req.file.path : img = SingleData.proimg
    req.file && fs.unlinkSync(SingleData.proimg)
    req.body.proimg = img
    let data = await AddProSchema.findByIdAndUpdate(req.body.id,req.body)
    console.log(data);
    
    data && res.redirect("/product/viewproduct");
}