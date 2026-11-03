const response = require("./response.js")

exports.errorHandler = (err, req, res, next) => {
    // res.status(err.status || 500).json({
    //     message: err.message || "Internal Server Error!"
    // })

    return response.errorResponse(
        res,
        err.message || "Internal Server Error",
        err.status || 500,
    )
}