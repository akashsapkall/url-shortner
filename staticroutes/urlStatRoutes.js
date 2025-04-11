const express=require("express");
const { restrictTo }=require("../middlewares/auth");
// const { handleAddUrl, handleRedirectToUrl, handleAnalytics }=require("../controllers/url");
const router=express.Router();
const URL=require("../models/url.models");
router.get("/admin",restrictTo(["ADMIN"]),async(req,res)=>{
    const allUrls=await URL.find({});
    console.log(allUrls)
    return res.render("home",{"data":allUrls});
});
router.get("/",restrictTo(["NORMAL","ADMIN"]),async(req,res)=>{
    const allUrls=await URL.find({createdBy:req.user._id});
    console.log(allUrls)
    return res.render("home",{"data":allUrls});
});

module.exports=router;