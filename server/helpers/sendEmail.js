const nodemailer = require("nodemailer");

async function sendEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });

  const info = await transporter.sendMail({
    // from: process.env.AUTH_EMAIL,
    from: '"E-commerce" <maddison53@ethereal.email>', 
    to: email, 
    subject: "Account verification", // Subject line
    // text: `Your E-commerce verification code is ${otp}`, // plain text body
    // html: `Your E-commerce verification code is <b>${otp}</b>`, // html body
    html: 
    
    `<div style="margin: auto; width: 800px; height: 400px; background-color: antiquewhite; border-radius: 30px ;">
      <h3 style="color: brown; margin: auto; text-align: center; padding-top: 20px">E-commerce (Labib) </h3>
      <h2 style="margin: auto; margin-top: 30px;text-align: center; font-size: 40px; font-family:Arial, Helvetica, sans-serif;">Your verification code</h2>

      <div style="width: 550px; height: 120px; background-color: brown; margin: auto; margin-top: 10px; border-radius: 30px; border: 1px  black;">
        <h1 style="text-align: center; font-size: 90px;  color: white;">${otp}</h1>
      </div>

      <h4 style="text-align: center; font-family: Verdana, Geneva, Tahoma, sans-serif;"><span style="color: red;">Note:</span> The code will be expire within 2 minutes</h4>
    </div>`

  });
}

module.exports = { sendEmail };
