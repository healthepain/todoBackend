const express = require("express")
const userContoller = require("../controllers/user.controller.js")
const router = express.Router()

router.get("/:id", userContoller.getUserWithTodos)
router.post("/", userContoller.createUser)

module.exports = router