require("dotenv").config()
let mysql = require("mysql2")

let conn = mysql.createConnection({
    host:process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_pass,
    database:process.env.db_database
})

conn.connect((err)=> {
    if(err){
        console.log("Connection Failed");
    }
    else{
        console.log("Database Connected..");
    }
})