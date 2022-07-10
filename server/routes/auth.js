const express = require("express");
const authController = require("../controllers/auth");

const {
  userRegisterValidator,
  userLoginValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");
const router = express.Router();
router.post(
  "/register",
  userRegisterValidator,
  runValidation,
  authController.register
);
router.post("/register/activate", authController.registerActivate);
router.post("/login", userLoginValidator, runValidation, authController.login);
module.exports = router;
