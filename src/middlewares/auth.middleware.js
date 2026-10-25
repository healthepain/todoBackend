const jwt = require("jsonwebtoken")

exports.authenticate = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const token = authHeader.split(" ")[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded

        next()
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

}

exports.authorize = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "forbiden"
            })
        }
        next()
    }
}