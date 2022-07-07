const express = require("express");
const authController = require("../controllers/auth");

const { userRegisterValidator } = require("../validators/auth");
const { runValidation } = require("../validators");
const router = express.Router();
router.post(
  "/register",
  userRegisterValidator,
  runValidation,
  authController.register
);
router.post("/register/activate", authController.registerActivate);
module.exports = router;
