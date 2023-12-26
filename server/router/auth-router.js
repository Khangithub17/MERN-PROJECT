const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controllers");
const validate = require("../middlewares/validate-middleware");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const authMiddleware = require("../middlewares/auth-Middleware");
router.get("/", (req, res) => {
  res.status(200).send("Welcome To Our Website Codewithkhan");
});

router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema), authcontrollers.login); 

router.route("/user").get(authMiddleware, authcontrollers.user)

module.exports = router;
