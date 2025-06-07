const { log } = require("console")
let express = require("express")
let path = require("path")
let mysql = require("mysql2")

let app = express()
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}));

let p = path.join(__dirname + "/public")
app.get("/", (req, res) => {
    res.sendFile(p + "/StdRegis.html")
})

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "studentRegistration"
})

conn.connect((err) =>{
    if(err){
        console.log("Connection Failed...");
    }
    else{
        console.log("Database is Connected...");
    }
})

app.post("/save", (req, res) => {
    let {name,email,contact,qualification,dte,university}=req.body;
    conn.query("insert into regFormDetail values('0',?,?,?,?,?,?)",[name,email,contact,qualification,dte,university],(err,result) =>{
        if(err){
            console.log("Not Inserted"+err);
        }
        else{
            if(result.affectedRows > 0){
                res.send("Student Added")
            }
            else{
                res.send("Student Not Added")
            }
        }
    })
    // res.send(`Name is ${name} \t Email is ${email} \t Contact is ${contact} <br> Qualification is ${qly} \t Date Of Birth is ${dob} \t University is ${unv}`)
})

app.listen(3000, (req,result) => {
    console.log("server Started")
})