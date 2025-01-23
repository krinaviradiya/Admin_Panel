const AddCatSchema = require("../module/catschema");
const fs = require("fs")
const mailer = require("../middleware/mail")


module.exports.Addcat =async(req,res) => {
    res.render("addcat");
    
}

module.exports.Viewcat =async(req,res) => {
    let data = await AddCatSchema.find({})
    data && res.render("viewcat",{data});
}

module.exports.AddCat = async(req,res)=>{
    req.body.catimg = req.file.path;
    let data = await AddCatSchema.create(req.body)
    data && res.redirect("/category/addcat")
    // console.log(data);   
}
module.exports.DeleteCat = async(req,res)=>{
    let SingleData = await AddCatSchema.findById(req.query.id)
    fs.unlinkSync(SingleData.catimg);
    let data = await AddCatSchema.findByIdAndDelete(req.query.id)
    data && res.redirect("/category/viewcat");
}
module.exports.EditCat = async(req,res)=>{
    let data = await AddCatSchema.findById(req.query.id)
   
    data && res.render("editCat",{data});
    
}
module.exports.UpdateCat = async(req,res)=>{
    let img = "";
    let SingleData = await AddCatSchema.findById(req.body.id)
    req.file ? img = req.file.path : img = SingleData.catimg
    req.file && fs.unlinkSync(SingleData.catimg)
    req.body.catimg = img
    let data = await AddCatSchema.findByIdAndUpdate(req.body.id,req.body)
    console.log(data);
    
    data && res.redirect("/category/viewcat");
}