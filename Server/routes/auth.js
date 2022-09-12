const router = require("express").Router();
const { signUp,login } = require("../controllers/auth");

//CREATE USER
router.post("/register", signUp);

//LOGIN
router.post("/login", login);

//GOOGLE AUTH
//router.post("/google", signUp);


module.exports = router;
