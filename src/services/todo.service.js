const db = require("../config/db.js")

const getTodos = async () => {

    const [todos] = await db.query("select * from todos")

    return todos
}

module.exports = {
    getTodos
}
