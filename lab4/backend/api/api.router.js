const Router = require('express')

const courseRouter = require("./courses/course.router")

var router = Router();

router.use("/courses", courseRouter)

module.exports = router