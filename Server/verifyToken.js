const JWT = require("jsonwebtoken");
const { createError } = require("./error");

const verifyToken = (req, res, next) => {
 // console.log("++++++++",)
  //console.log("~~~~~~~~~~~",req.cookies)
  const token = req.body.token //TAKING ACCESSTOKEN FROM COOKIE AFTER USER AUTH LOGIN
  //const token = req.cookies.access_token
  console.log("=====verify=====", token)
  !token && next(createError(401, "Not authenticated!"));
  JWT.verify(token, process.env.JWT_KEY, (err, user) => {
    err && next(createError(403, "Invalid token!"));
    //console.log("=======",user)
   //console.log(req)

    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
