const express = require("express")
const todoContoller = require("../controllers/todo.controller.js")

const router = express.Router()

router.get("/", todoContoller.getTodos)
router.get("/:id", todoContoller.getTodoById)
router.post("/", todoContoller.createTodo)
router.patch("/", todoContoller.updateTodoStatus)
router.delete("/:id", todoContoller.deleteTodo)

module.exports = router