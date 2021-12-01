const express = require("express")
const app = express()
const bodyParser = require("body-parser")

//route imports
const v1Route = require("./routes/v1Route.js")

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))



//use routes in express app
app.use("/api/v1", v1Route)

module.exports = app






