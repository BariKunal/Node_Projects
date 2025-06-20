let conn = require("../../db.js")

async function saveReg(...regData){
    let result = conn.query("insert into register values('0',?,?,?,?,?,?)",[...regData])
    return result
}

async function validateUser(uname,upass) {
    let result = conn.query("select * from register where username=? and password=?",[uname,upass])
    return result
}

module.exports={saveReg,validateUser}