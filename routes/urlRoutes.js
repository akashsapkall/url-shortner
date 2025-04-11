const express=require("express");
const { handleAddUrl, handleRedirectToUrl, handleAnalytics }=require("../controllers/url");
const router=express.Router();

router.post("/",handleAddUrl)
router.get("/:shortId",handleRedirectToUrl)
router.get("/analytics/:shortId",handleAnalytics)


module.exports=router;