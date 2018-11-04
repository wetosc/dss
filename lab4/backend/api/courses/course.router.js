const Controller = require("./course.controller")

const Router = require('express').Router
var router = Router()

router.post("/", [
    Controller.insert
])
router.get("/", [
    Controller.list
])
router.get("/:id", [
    Controller.getById
])
router.delete("/:id", [
    Controller.removeById
])

module.exports = router
