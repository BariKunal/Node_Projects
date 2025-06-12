let db = require("../../db.js")
exports.saveDept = (deptname) => {
    console.log(deptname);
    return new Promise((resolve,reject) => {
        db.query("insert into dept values('0',?)",[deptname],(err,result) =>{
            if(err){
                console.log(err);
                reject("Dept not Save...")
            }
            else{
                console.log(result);
                resolve("Dept Save Successfully...")
            }
        })
    })
}