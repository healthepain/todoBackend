const express = require('express');
const todoRoutes = require("./routes/todo.routes.js")
const authMiddleware = require("./middlewares/auth.middleware.js")
const app = express()

app.use(express.json())
app.use("/todos", authMiddleware, todoRoutes)


module.exports = app