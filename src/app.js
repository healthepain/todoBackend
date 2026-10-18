const express = require('express');
const cors = require("cors")
const todoRoutes = require("./routes/todo.routes.js")
const userRoutes = require("./routes/user.routes.js")
const authMiddleware = require("./middlewares/auth.middleware.js")
const app = express()

app.use(express.json())
app.use(cors())
app.use("/todos", authMiddleware, todoRoutes)
app.use("/users", authMiddleware, userRoutes)


module.exports = app