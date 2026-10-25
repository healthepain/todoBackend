const authService = require("../services/auth.service.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await authService.getUserByEmail(email)
    if (!user) {
        res.status(401).json({
            message: "user not found"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        res.status(401).json({
            message: "password doesn't match"
        })
    }

    const token = jwt.sign({
        id: user.id,
        name: user.name,
        role: "USER"
    }, process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        })

    res.json({
        tokn: token
    })
}



const register = async (req, res) => {
    const user = req.body
    const hashedPassword = await bcrypt.hash(user.password, 10)

    res.json(await authService.register({
        ...user,
        password: hashedPassword,
    }))
}


module.exports = {
    register,
    login
}

