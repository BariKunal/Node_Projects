let db = require("../../db.js")

exports.saveEmployee = (...empData) => {
    return new Promise ((resolve,reject) => {

        db.query("insert into employee values('0',?,?,?,?,?,?)",[...empData],(err,result) => {
            if(err){
                reject("Not Save")
            }
            else{
                resolve("Employee Save Successfully...")
            }
        })
    })
}

exports.getAllEmps = () => {
    return new Promise((resolve,reject) => {
        db.query("select e.name,e.email,e.contact,e.sal,e.photo,d.deptname from employee e inner join dept d on d.deptid=e.deptid",(err,result) => {
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}