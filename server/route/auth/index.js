const express = require("express");
const {
  SignupController,
  LoginController,
  VerifyOtpController,
} = require("../../config/controllers/authController");
const verifyTokenController = require("../../config/controllers/verifyTokenController");
const router = express.Router();

// http://localhost:3000/auth/signup
router.post("/signup", SignupController);

// // http://localhost:3000/auth/all-user
// router.get("/all-user", (req,res)=>{
//     res.send("All user page")
// })

// http://localhost:3000/auth/login
router.post("/login", LoginController);

// http://localhost:3000/auth/verify-otp
router.post("/verify-otp", VerifyOtpController);

// http://localhost:3000/auth/verify-token
router.get("/verify-token", verifyTokenController)


module.exports = router;
