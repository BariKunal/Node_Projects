let app = require("./src/app.js")
// require("dotenv").config()
app.listen(process.env.db_port, () => {
    console.log("Server Started");

})

// module.exports=app