const upload = require("../config/multer.js")

const express = require("express")
const todoContoller = require("../controllers/todo.controller.js")

const router = express.Router()

router.get("/", todoContoller.getTodos)
router.get("/:id", todoContoller.getTodoById)
router.get("/user/:id", todoContoller.getTodoByUserId)
router.post("/", upload.single("image"), todoContoller.createTodo)
router.patch("/", todoContoller.updateTodoStatus)
router.patch("/user/:id", todoContoller.updateTodoStatusByUserId)
router.delete("/:id", todoContoller.deleteTodo)
router.delete("/user/:id", todoContoller.deleteTodoByUserId)


module.exports = router