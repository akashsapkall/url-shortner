const express=require("express");
// const { handleAddUrl, handleRedirectToUrl, handleAnalytics }=require("../controllers/url");
const router=express.Router();
router.get("/signup",async(req,res)=>{
    return res.render("signup");
});
router.get("/login",async(req,res)=>{
    return res.render("login");
});

module.exports=router;