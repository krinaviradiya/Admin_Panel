const express = require("express")
const route = express.Router();
const ctl = require("../controller/productctl");
const multer = require("../multer/promulter");
const passport = require("passport");
const localSt = require("../middleware/passport");

route.get("/addproduct",passport.checkAuth,ctl.AddProPage);
route.get("/viewproduct",passport.checkAuth,ctl.ViewProPage);


route.post("/addproduct",multer,ctl.AddProduct)
route.get("/deleteproduct",ctl.DeleteProduct)
route.get("/editproduct",ctl.EditProduct);
route.post("/updateproduct",multer,ctl.UpdateProduct);


module.exports = route