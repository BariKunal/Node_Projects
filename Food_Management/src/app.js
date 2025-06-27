let express = require("express")
let db = require("../db.js")
let router = require("./routes/router.js")
let mysql = require("mysql2")
let bodyParser = require("body-parser")
let app = express()

app.set("views engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use("/",router)

module.exports = app
