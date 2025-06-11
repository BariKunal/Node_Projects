let express = require("express")
let bodyParser = require("body-parser")
let app = express()

app.set("views engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extends:true}))

app.get("/",(req,res) =>{
    res.render("emi.ejs")
})

// app.post("/save",(req,req) =>{

// })

app.listen(3000,()=>{
    console.log("Server Started...");
    
})