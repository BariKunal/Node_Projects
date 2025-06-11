let express = require("express")
let bodyParser = require("body-parser")
let app = express()

app.set("views engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("emi.ejs", { loanamt: null, tenyr: null, intrate: null, emi: null, totalInterest: null })
})

app.post("/save", (req, res) => {
    // console.log(req.body);
    let { loanamt, tenyr, intrate } = req.body

    let monthlyRate = intrate / 12 / 100;           // Monthly interest rate
    let months = tenyr * 12;                        // Total number of months

    // EMI formula
    let emi = (loanamt * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);

    let totalPayment = emi * months;                // Total amount paid (Principal + Interest)
    let totalInterest = totalPayment - loanamt;

    res.render("emi.ejs", { loanamt: loanamt, tenyr: tenyr, intrate: intrate, emi: emi, totalInterest: totalInterest })
})

app.listen(3000, () => {
    console.log("Server Started...");

})