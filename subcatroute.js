const express = require("express")
const route = express.Router();
const ctl = require("../controller/subcatctl");
const passport = require("passport");
const localSt = require("../middleware/passport");

route.get("/addsubcat",passport.checkAuth,ctl.Addsubcat);
route.get("/viewsubcat",passport.checkAuth,ctl.Viewsubcat);


route.post("/addSubCat",ctl.AddSubCat)
// route.get("/deletecat",ctl.DeleteCat)
// route.get("/editcat",ctl.EditCat);
// route.post("/updatecat",multer,ctl.UpdateCat);


module.exports = route