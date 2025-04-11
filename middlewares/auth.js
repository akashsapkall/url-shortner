
const {getUser}=require("../service/auth");
function checkForAuthentication(req,res,next){
    // console.log(req);
    const token=req.cookies?.token;
    if(!token) return next();
    const user=getUser(token);
    req.user=user;
    next();
}

function restrictTo(roles){
    return function(req,res,next){
        if(!req.user) return res.redirect("/login");
        if(!roles.includes(req.user.role)) return res.end("UnAuthorized!!");
        return next();
    }
}

module.exports={
    checkForAuthentication,
    restrictTo
}


// async function restrictToLoginUserOnly(req,res,next){
//     // const token=req.cookies?.uid;
//     const reqHead=req.headers['authorization'];
//     if(!reqHead){
//         return res.redirect("/login");
//     }
//     const token=reqHead.split("Bearer ")[1];
//     if(!token){
//         return res.redirect("/login");
//     }
//     const user=getUser(token);
//     if(!user){
//         return res.redirect("/login");
//     }
//     req.user=user;
//     next();
// }

// async function checkAuh(req,res,next){
//     // const token=req.cookies?.uid;
//     console.log("Request Headers:", req.headers);

//     const reqHead=req.headers['authorization'];
//     if(!reqHead){
//         return res.redirect("/login");
//     }
//     const token=reqHead.split("Bearer ")[1];
//     if(!token) return res.redirect("/login");
//     const user=getUser(token);
//     req.user=user;
//     next();
// }