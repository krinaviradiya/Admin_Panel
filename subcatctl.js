const SubCatSchema = require("../module/subcatschema");
const AddCatSchema = require("../module/catschema");
const fs = require("fs")
const mailer = require("../middleware/mail")


module.exports.Addsubcat =async(req,res) => {
    let data = await AddCatSchema.find({})
    res.render("addsubcat",{data});
}

module.exports.Viewsubcat =async(req,res) => {
    let data = await SubCatSchema.find({}).populate("categoryId")
    res.render("viewsubcat",{data});
}

module.exports.AddSubCat = async(req,res)=>{
    let data = await SubCatSchema.create(req.body)
    data && res.redirect("/subcategory/addsubcat")
    console.log(data);   
}
// module.exports.DeleteCat = async(req,res)=>{
//     let SingleData = await AddCatSchema.findById(req.query.id)
//     fs.unlinkSync(SingleData.catimg);
//     let data = await AddCatSchema.findByIdAndDelete(req.query.id)
//     data && res.redirect("/category/viewcat");
// }
// module.exports.EditCat = async(req,res)=>{
//     let data = await AddCatSchema.findById(req.query.id)
   
//     data && res.render("editCat",{data});
    
// }
// module.exports.UpdateCat = async(req,res)=>{
//     let img = "";
//     let SingleData = await AddCatSchema.findById(req.body.id)
//     req.file ? img = req.file.path : img = SingleData.catimg
//     req.file && fs.unlinkSync(SingleData.catimg)
//     req.body.catimg = img
//     let data = await AddCatSchema.findByIdAndUpdate(req.body.id,req.body)
//     console.log(data);
    
//     data && res.redirect("/category/viewcat");
// }