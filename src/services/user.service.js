const prisma = require("../config/prisma.js")

const getUserWithTodos = async (user_id) => {
    const result = await prisma.Users.findUnique({
        where: { id: Number(user_id) },
        include: { todos: true }
    })

    return result
}



module.exports = {
    getUserWithTodos
}