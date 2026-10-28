// const db = require("../config/db.js")
const prisma = require("../config/prisma.js")


const getTodos = async () => {

    throw {
        status : 404,
        message : "not found"
    }
    const todos = await prisma.Todos.findMany()

    return todos
}

const getTodoById = async (id) => {
    // const [todo] = await db.query("select * from Todos where id = ?", [id])
    const todo = await prisma.Todos.findUnique({
        where: { id: Number(id) }
    })

    return todo
}

const createTodo = async (todo) => {


    // const [todos] = await db.query("insert into Todos(user_id, title) value (?,?)", [user_id, title])

    const result = await prisma.Todos.create({
        data: {
            title: todo.title,
            user: {
                connect: { id: todo.user_id }
            }
        }
    })
    return result
}

const updateTodoStatus = async (id, is_completed) => {
    // const [todo] = await db.query("update Todos set is_completed = ? where id = ?", [is_completed, id])

    const result = await prisma.Todos.update({
        where: { id },
        data: {
            is_completed
        }
    })

    return result
}

const deleteTodo = async (id) => {
    // const [todo] = await db.query("DELETE FROM Todos WHERE id = ?", [id])
    const result = await prisma.Todos.delete({
        where: { id: Number(id) }
    })

    return result
}

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodoStatus,
    deleteTodo
}
