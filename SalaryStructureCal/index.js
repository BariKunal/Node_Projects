let express = require("express")
let bodyParser = require("body-parser")
let app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("salary.ejs", { name: null, email: null, contact: null, basicSal: null, da: null, hra: null, totalSal: null })
})

app.post("/save", (req, res) => {
    let { name, email, contact, basicSal } = req.body
    let da = basicSal * 0.30
    let hra = basicSal * 0.30
    let totalSal = da + hra + basicSal
    res.render("salary.ejs", { name, email, contact, basicSal, da, hra, totalSal })
})

app.listen(3000, () => {
    console.log("Server Started..");

})