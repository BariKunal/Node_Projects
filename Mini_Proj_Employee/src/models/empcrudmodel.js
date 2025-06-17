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
        db.query("select e.eid,e.name,e.email,e.contact,e.sal,e.photo,d.deptname from employee e inner join dept d on d.deptid=e.deptid",(err,result) => {
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}

exports.deleteEmpById = (eid) =>{
    return new Promise((resolve,reject) => {
        db.query("delete from employee where eid=?",[eid],(err,result) =>{
            if(err){
                reject("Error is "+err)
            }
            else{
                resolve("Deleted Successfully...")
            }
        })
    })
}

exports.verifyEmail=(userEmail)=>{
    return new Promise((resolve,reject)=> {
        db.query("select * from employee where email=?",[userEmail],(err,result)=> {
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}

exports.empFinalUpd = (eid,name) =>{
    return new Promise((resolve, reject) => {
        db.query("update employee set name=? where eid=?",[name,eid],(err,result) => {
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })

    })
}