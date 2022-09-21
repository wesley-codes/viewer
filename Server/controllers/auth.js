const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { createError } = require("../error");
const JWT = require("jsonwebtoken");

//create
const signUp = async (req, res, next) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt); //HASING PASSWORD USING BYCRPT
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).json({msg: "Account has been created sucessfully"}); //ACCOUNT CREATED SUCESSFULLY
  } catch (err) {
    next(createError(404, "This user already exist"));
  }
};

//login
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && next(createError(404, "User doesn't exist")); //USER DOES NOT EXIST
    const isCorrect = await bcrypt.compare(req.body.password, user.password); //CHECK IF PASSWORD AND HASED PASSWORD ARE THE SAME
    console.log("=======",isCorrect)
   if (!isCorrect) return next(createError(400, "Wrong credentials!"));
    const token = JWT.sign(
      {
        id: user._id,
      },
      process.env.JWT_KEY
    );
    const { password, ...other } = user._doc;
    //SAVING ACCESSTOKEN TO COOKIES
    res.cookie("access_token", token, { 
      httpOnly: true,
    });
    res.status(200).json({ ...other, token });
  } catch (err) {
    next(createError(500, "Login failed"));
  }
};
module.exports = { signUp, login };
