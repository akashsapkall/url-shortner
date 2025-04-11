const URL = require("../models/url.models");
const shortid = require("shortid");

async function handleAddUrl(req, res) {
  const redirect_Url = req.body.redirectUrl;
  const short_id = shortid.generate();
  if (!req.body) return res.status(400).json({ status: "failed" });
  await URL.create({
    shortUrl: short_id,
    redirectUrl: redirect_Url,
    urlHistory: [],
    createdBy:req.user._id,
  });
  return res.status(201).render("home",{ID: short_id });
}
async function handleRedirectToUrl(req,res) {
    const shortUrl=req.params.shortId;
    if(!shortUrl) return res.status(400).json({status:"Failed"});
    const entry=await URL.findOneAndUpdate({
        shortUrl,
    },{
        $push:{
            urlHistory:{
                timestamp:Date.now(),
            }
        }
    })
    return res.redirect(entry.redirectUrl);
}
async function handleAnalytics(req,res){
    const shortUrl=req.params.shortId;
    if(!shortUrl) return res.status(400);
    const result=await URL.findOne({ shortUrl })
    return res.status(200).json({
        "clickCount":result.urlHistory.length,
        "Analytics":result.urlHistory,
    })
}
module.exports = {
  handleAddUrl,
  handleRedirectToUrl,
  handleAnalytics,
};
