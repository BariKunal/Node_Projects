let express = require("express")
let bodyParser = require("body-parser")

require("dotenv").config()
let db = require("../db.js")
let app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.set("views engine", "ejs")

module.exports = app