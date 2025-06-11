let express = require("express")
let bodyParser = require("body-parser")
let app = express()

app.set("views engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extends:true}))

app.get("/",(req,res) =>{
    res.render("emi.ejs",{loanamt:0,tenyr:0,intrate:0,emi:0,totalInterest:0})
})

app.post("/save",(req,res) =>{
    console.log(req.body);
    let {loanamt,tenyr,intrate} = req.body
    
    let monthlyRate = intrate / 12 / 100;
    let months = tenyr * 12;
    let emi = (loanamt * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);

    res.render("emi.ejs",{loanamt:monthlyRate,tenyr:months,intrate:intrate,emi:emi,totalInterest:0})
})

app.listen(3000,()=>{
    console.log("Server Started...");
    
})