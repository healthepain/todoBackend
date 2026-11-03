const { z } = require("zod")

module.exports.todoSchema = z.object({
    title: z.string().min(5 , "title minimal 5 karakter"),

})