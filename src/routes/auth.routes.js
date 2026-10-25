const express = require("express")
const router = express.Router()
const authContoller = require("../controllers/auth.controller.js")



router.post("/login", authContoller.login)
router.post("/register", authContoller.register)


module.exports = router