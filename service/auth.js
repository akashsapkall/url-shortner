
const jwt = require("jsonwebtoken");
const secretkey = "tnuismy$only$love;";
function setUser(user) {
const payload={_id:user._id,email:user.email,role:user.role};
  return jwt.sign(payload, secretkey);
}
function getUser(token) {
  return jwt.verify(token, secretkey);
}

module.exports = {
  setUser,
  getUser,
};
// const sessionIdToUser = new Map();

// function setUser(id,user){
//     sessionIdToUser.set(id,user);
// }
// function getUser(id){
//     return sessionIdToUser.get(id);
// }

// module.exports={
//     setUser,
//     getUser,
// }
