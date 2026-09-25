const authMiddleware = (req, res, next) => {
    const isAuthenticated = true

    if (!isAuthenticated) {
        return res.send("unAuthorized")
    }

    next()
}

module.exports = authMiddleware