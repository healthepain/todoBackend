
const prisma = require("../config/prisma.js")

const getUserByEmail = async (email) => {
    const user = await prisma.Users.findFirst({
        where: {
            email: email
        }
    })
    return user
}

const register = async (user) => {

    const result = await prisma.Users.create(
        {
            data: user,
        }
    )

    return result
}



module.exports = {

    register,
    getUserByEmail

}
