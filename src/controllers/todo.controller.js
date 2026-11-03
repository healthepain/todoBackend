const todoService = require("../services/todo.service.js")
const { todoSchema } = require("../entity/todo.schema.js")
const response = require("../middlewares/response.js")

const getTodos = async (req, res, next) => {
    // try {
    //     const todos = await todoService.getTodos()
    //     res.json(todos)
    // } catch (err) {
    //     next(err)
    // }

    try {
        const todos = await todoService.getTodos()
        return response.successResponse(res, todos)
    } catch (err) {
        return response.errorResponse(res, err)
    }

}

const getTodoByUserId = async (req, res) => {
    try {

        const { id } = req.params

        const todos = await todoService.getTodoByUserId(id)

        return response.successResponse(res, todos)
    } catch (err) {
        return response.errorResponse(res, err)

    }
}

const getTodoById = async (req, res) => {
    const { id } = req.params

    const todo = await todoService.getTodoById(id)

    res.send(todo)
}

const createTodo = async (req, res, next) => {
    try {

        const data = {
            ...req.body,
            image: req.file ? req.file.path : null
        }

        const validationResult = todoSchema.safeParse(data)

        if (!validationResult.success) {
            // validasigagal
            return res.status(400).json({
                errors: validationResult.error.issues
            })
        }
        const todo = await todoService.createTodo(data)

        return res.status(201).json(todo)

    } catch (err) {
        next(err)
    }
}

const updateTodoStatusByUserId = async (req, res) => {

    try {

        const { id } = req.params
        const { is_completed } = req.body

        const result = await todoService.updateTodoStatusByUserId(id, is_completed)

        return response.successResponse(res, result)
    } catch (err) {
        return response.errorResponse(res, err)
    }
}

const updateTodoStatus = async (req, res) => {
    const { id, is_completed } = req.body

    const result = await todoService.updateTodoStatus(id, is_completed)

    res.send(result)
}

const deleteTodoByUserId = async (req, res) => {
    try {

        const { id } = req.params

        const result = await todoService.deleteTodoByUserId(id)
        return response.successResponse(res, result)
    } catch (err) {
        return response.errorResponse(res, err)
    }
}

const deleteTodo = async (req, res) => {
    const { id } = req.params

    const result = await todoService.deleteTodo(id)
    res.send(result)
}

module.exports = {
    getTodos,
    getTodoById,
    getTodoByUserId,
    createTodo,
    updateTodoStatus,
    updateTodoStatusByUserId,
    deleteTodo,
    deleteTodoByUserId
}