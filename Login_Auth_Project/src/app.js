let express = require("express")
let bodyParser = require("body-parser")
let conn = require("../db.js")
let session = require("express-session")
let path = require("path")
let router = require("./routes/router.js")
require("dotenv").config()
let app = express()

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


app.use(session({
    secret: "mySecretKey123",  
    resave: false,
    saveUninitialized: true
}));
app.use("/",router)
module.exports = app
