const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { signup, signin } = require("../controller/user");
const { check } = require("express-validator");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validators/auth");

router.post("/signup", validateSignupRequest, isRequestValidated, signup);

router.post("/signin", validateSigninRequest, isRequestValidated, signin);

module.exports = router;
