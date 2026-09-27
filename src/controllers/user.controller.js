const userService = require("../services/user.service.js")

const getUserWithTodos = async (req, res) => {
    const { id } = req.params
    const result = await userService.getUserWithTodos(id)
    if (!result) {
        return res.status(404).json({ message: "User not found" });
    }
    res.send(result)
}


module.exports = {
    getUserWithTodos
}