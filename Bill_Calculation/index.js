let express = require("express")
let bodyParser = require("body-parser")
let app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("bill.ejs", { calBill: 0 })
})

app.post("/save", (req, res) => {
    let { qty, rate } = req.body
    let b = qty * rate;
    res.render("bill.ejs", { calBill: b })
})

app.listen(3000, () => {
    console.log("Server Started..");

})