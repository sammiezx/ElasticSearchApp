const app = require('./app')
const dotenv = require("dotenv")

dotenv.config({path: "config/config.env"})
let port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("Server Running")
})