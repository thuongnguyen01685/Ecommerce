const express = require("express");
const router = express.Router();
const { signup, signin, signout } = require("../../controller/admin/admin");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../../validators/auth");
const { requireSignin } = require("../../common-middleware/index");

router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/admin/signout", signout);

router.post("/admin/profile", requireSignin, (req, res) => {
  res.status(200).json({ user: "profile" });
});

module.exports = router;
