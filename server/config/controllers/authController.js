const { sendEmail } = require("../../helpers/sendEmail");
const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");

async function SignupController(req, res) {
  const { name, email, password, phone, role } = req.body;
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  try {
    bcrypt.hash(password, 10, async function (err, hash) {
      const user = new userModel({
        name,
        email,
        password: hash,
        phone,
        role,
      });
      await user.save();
      sendEmail(email, otp), (user.otp = otp), await user.save();

      setTimeout(async () => {
        user.otp = null;
        await user.save();
      }, 120000);

      res
        .status(201)
        .json({ msg: "Registration success!", success: true, data: user });
    });
  } catch (error) {
    res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function LoginController(req, res) {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ success: false, msg: "Email not found" });
    } else {
      bcrypt.compare(
        password,
        existingUser.password,
        async function (err, result) {
          const user = await userModel.findOne({ email }).select("-password");
          if (result) {
            if (existingUser.role == "user") {
              const token = jwt.sign({ user }, process.env.JWT_secret , { expiresIn: '1h' });

              return res.status(200).json({
                success: true,
                msg: "User Login successfull",
                data: user,
                token: token,
              });
            } else if (existingUser.role == "admin") {
              const token = jwt.sign({ user }, process.env.JWT_secret, { expiresIn: '10m' });

              return res.status(200).json({
                success: true,
                msg: "Admin Login successfull",
                data: user,
                token: token,
              });
            }
          } else {
            return res
              .status(404)
              .json({ success: false, msg: "Invalid Password" });
          }
        }
      );
    }
  } catch (error) {
    res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

async function VerifyOtpController(req, res) {
  const { email, otp } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      if (existingUser.otp == otp) {
        existingUser.isVerify = true;
        existingUser.otp = null;
        await existingUser.save();
        res.status(200).json({ success: true, msg: "OTP verify successfull" });
      } else {
        res.status(404).json({ err: "Invalid OTP", success: false });
      }
    } else {
      res.status(404).json({ err: "user not found", success: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ err: error.message ? error.message : error, success: false });
  }
}

module.exports = { SignupController, LoginController, VerifyOtpController };
