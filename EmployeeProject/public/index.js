let express = require("express")
let path = require("path")
let app = express()

let bodyParser = require("body-parser")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

let p = path.join(__dirname + "/public")
app.get("/", (req, res) => {
    res.sendFile(p + "/StdRegis.html")
})

app.get("/save", (req, res) => {
    let name = req.query.name
    let email = req.query.email
    let contact = req.query.contact
    let slt = req.query.cs
    let dte = req.query.dte
    let qly = req.query.un
    console.log(qly);
    res.send(`Name is "${name}" <br> Email is ${email} <br> Contact is ${contact} <br> Qualification is ${slt} <br> Date Of Birth is ${dte} <br> University is ${qly}`)
})

app.listen(3000, (req, res) => {
    console.log("server Started")
})