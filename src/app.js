const express = require('express');
const cors = require("cors")
const todoRoutes = require("./routes/todo.routes.js")
const userRoutes = require("./routes/user.routes.js")
const authRoutes = require("./routes/auth.routes.js")
const { authenticate } = require("./middlewares/auth.middleware.js")
const { authorize } = require("./middlewares/auth.middleware.js")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/todos", authenticate, authorize(["USER"]), todoRoutes)
app.use("/users", authenticate, userRoutes)
app.use(authRoutes)


module.exports = app