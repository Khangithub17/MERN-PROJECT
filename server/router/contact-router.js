const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller"); // Corrected the typo

router.route("/contact").post(contactForm);

module.exports = router;
