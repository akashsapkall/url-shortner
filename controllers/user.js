const USER = require("../models/user.models");
// const {v4:uuid}=require("uuid");
const { setUser } =require("../service/auth");

async function handleSignUpUser(req, res) {
  const { name, email, password, role } = req.body;
  if (!req.body) return res.status(400).json({ status: "failed" });
  // console.log(req.body);
  await USER.create({ name, email, password, role });
  return res.status(201).redirect("/");
}

async function handleLoginUser(req, res) {
  const { email, password } = req.body;
  if (!req.body) return res.status(400).json({ status: "Failed" });
  const entry = await USER.findOne({ email, password });
  if (entry) {
    const token=setUser(entry);
    res.cookie("token",token);
    return res.redirect("/");
  }
  else{
    return res.end("<h1>incorrect credentilas</h1>");
  }
}
module.exports = {
  handleSignUpUser,
  handleLoginUser,
};

// async function handleLoginUser(req, res) {
//   const { email, password } = req.body;
//   if (!req.body) return res.status(400).json({ status: "Failed" });
//   const entry = await USER.findOne({ email, password });
//   if (entry) {
//     const token=setUser(entry);
//     return res.json({token});
//   }
//   else{
//     return res.end("<h1>incorrect credentilas</h1>");
//   }
// }

// async function handleLoginUser(req, res) {
//   const { email, password } = req.body;
//   if (!req.body) return res.status(400).json({ status: "Failed" });
//   const entry = await USER.findOne({ email, password });
//   if (entry) {
//     const token=setUser(entry);
//     res.cookie("uid",token);
//     return res.redirect("/");
//   }
//   else{
//     return res.end("<h1>incorrect credentilas</h1>");
//   }
// }

// async function handleLoginUser(req, res) {
//   const { email, password } = req.body;
//   if (!req.body) return res.status(400).json({ status: "Failed" });
//   const entry = await USER.findOne({ email, password });
//   console.log(entry);
//   if (entry) {
//     const sessionid=uuid();
//     setUser(sessionid,entry);
//     res.cookie("uid",sessionid);
//     return res.redirect("/");
//   }
//   else{
//     return res.end("<h1>incorrect credentilas</h1>");
//   }
// }
module.exports = {
  handleSignUpUser,
  handleLoginUser,
};
