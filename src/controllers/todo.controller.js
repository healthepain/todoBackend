const todoService = require("../services/todo.service.js")

const getTodos = async (req, res) => {
    res.json( await todoService.getTodos())
}

const getTodoById = (req, res) => {
    const { id } = req.params

    res.send(id)
}

const createTodo = (req, res) => {
    const data = req.body

    res.json(data)
}

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
}