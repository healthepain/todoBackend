const todoService = require("../services/todo.service.js")

const getTodos = async (req, res, next) => {
    try {
        const todos = await todoService.getTodos()
        res.json(todos)
    } catch (err) {
        next(err)
    }
}

const getTodoById = async (req, res) => {
    const { id } = req.params

    const todo = await todoService.getTodoById(id)

    res.send(todo)
}

const createTodo = async (req, res) => {
    const data = req.body

    res.json(await todoService.createTodo(data))
}

const updateTodoStatus = async (req, res) => {
    const { id, is_completed } = req.body

    const result = await todoService.updateTodoStatus(id, is_completed)

    res.send(result)
}

const deleteTodo = async (req, res) => {
    const { id } = req.params

    const result = await todoService.deleteTodo(id)
    res.send(result)
}

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodoStatus,
    deleteTodo
}