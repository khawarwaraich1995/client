const express = require('express')

const router = express.Router();

//auth controller methods
const { registerUser } = require("../controllers/auth")

router.get("/", registerUser);

module.exports = router