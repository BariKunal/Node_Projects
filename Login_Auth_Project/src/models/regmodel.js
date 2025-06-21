let conn = require("../../db.js")

async function saveReg(...regData){
    let result = conn.query("insert into register values('0',?,?,?,?,?,?)",[...regData])
    return result
}

async function validateUser(uname,upass) {
    let result = conn.query("select * from register where username=? and password=?",[uname,upass])
    return result
}

async function getLoginDetails(loginUserId){
    let userData = await conn.query("select * from register where rid =?",[loginUserId])
    return userData
}

async function Update(name,email,contact,password,loginUserId){
    let result = await conn.query("update register set name=?,email=?,contact=?,password=? where rid = ?",[name,email,contact,password,loginUserId])
    return result
}
module.exports={saveReg,validateUser,getLoginDetails,Update}