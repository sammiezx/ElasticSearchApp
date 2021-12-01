const router = require("express").Router()
const {controller1} = require("../controller/firstController.js")


router.route("/first").post(controller1)

module.exports = router