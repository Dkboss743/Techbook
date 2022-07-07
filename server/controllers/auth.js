const AWS = require("aws-sdk");
const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const shortId = require("shortid");
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
exports.registerActivate = (req, res) => {
  const { token } = req.body;
  jwt.verify(
    token,
    process.env.JWT_ACCOUNT_ACTIVATION,
    function (err, decoded) {
      if (err) {
        return res.status(404).json({
          error: "Expired link. Try again",
        });
      }
      const { name, email, password } = jwt.decode(token);
      const username = shortId.generate();
      User.findOne({
        email,
      }).exec((err, user) => {
        if (user) {
          return res.status(401).json({
            error: "Email is taken",
          });
        }

        const newUser = new User({
          username,
          name,
          email,
          password,
        });

        newUser.save((err, result) => {
          console.log(err);

          if (err) {
            return res.status(401).json({
              error: "Error saving user, Try later",
            });
          }
          return res.json({
            message: "Registration success, Please Login.",
          });
        });
      });
    }
  );
};
