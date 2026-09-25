const express = require("express")
const todoContoller = require("../controllers/todo.controller.js")

const router = express.Router()

router.get("/", todoContoller.getTodos)
router.get("/:id", todoContoller.getTodoById)
router.post("/", todoContoller.createTodo)

module.exports = router