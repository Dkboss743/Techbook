const AWS = require("aws-sdk");
const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { registerEmailParams } = require("../helpers/email");
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccesKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const ses = new AWS.SES({
  apiVersion: "2010-12-01",
});

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  //check if user exist
  User.findOne({
    email,
  }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }
    // generate JWT Token
    const token = jwt.sign(
      {
        name,
        email,
        password,
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "10m",
      }
    );
    const params = registerEmailParams(email, token);
    const sendEmailOnRegister = ses.sendEmail(params).promise();
    sendEmailOnRegister
      .then((data) => {
        console.log("email submitted to SES", data);
        res.json({
          message: `Email has been sent to ${email} , Follow the instructions to complete you registeration`,
        });
      })

      .catch((error) => {
        console.log("ses email on register", error);
        res.status(402).json({
          error: `We could not complete the registration please try again later`,
        });
      });
  });
};
