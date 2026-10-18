const prisma = require("../config/prisma.js")

const getUserWithTodos = async (user_id) => {
    const result = await prisma.Users.findUnique({
        where: { id: Number(user_id) },
        include: { todos: true }
    })

    return result
}

const createUser = async (user) => {
    const result = await prisma.Users.create({
        data: {
            name : user.name,
            email: user.email,
            password: user.password
        }
    })

    return result
}


module.exports = {
    getUserWithTodos,
    createUser
}