const express = require("express")
const route = express.Router();
const ctl = require("../controller/ctl2");
const multer = require("../multer/catmulter");
const passport = require("passport");
const localSt = require("../middleware/passport");

route.get("/addcat",passport.checkAuth,ctl.Addcat);
route.get("/viewcat",passport.checkAuth,ctl.Viewcat);


route.post("/addCat",multer,ctl.AddCat)
route.get("/deletecat",ctl.DeleteCat)
route.get("/editcat",ctl.EditCat);
route.post("/updatecat",multer,ctl.UpdateCat);


module.exports = route