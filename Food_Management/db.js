require("dotenv").config()
let mysql = require("mysql2")

let conn = mysql.createConnection({
    host: process.env.db_host_name,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database
})

conn.connect((err) => {
    if (err) {
        console.log("Database Not Connected..." + err);
    }
    else {
        console.log("Dtabase Connected...");
    }
})

module.exports = conn