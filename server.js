const express = require("express");
const app = new express();
const cookieParser = require("cookie-parser");
const path = require("path");
const { connectMongo } = require("./connection");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");

const urlRouter = require("./routes/urlRoutes");
const userRouter = require("./routes/userRoutes");
const urlStatRouter = require("./staticroutes/urlStatRoutes");
const userStatRouter = require("./staticroutes/userStatRoutes");

const port = 3000;
connectMongo();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);
// app.get("/test",(req,res)=>{
//     return res.render('home');
// })
app.use("/", userStatRouter);
app.use("/user", userRouter);
app.use("/",urlStatRouter);
app.use("/url",restrictTo(["NORMAL","ADMIN"]),urlRouter);
app.listen(port, () => {
  console.log(`server is listnening on ${port}`);
});
