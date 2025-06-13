let db = require("../../db.js")
exports.saveDept = (deptname) => {
    console.log(deptname);
    return new Promise((resolve,reject) => {
        db.query("INSERT INTO dept VALUES ('0',?)", [deptname], (err, result) =>{
            if(err){
                console.log("Error IS : "+err);
                reject("Department not Saved...")
            }
            else{
                console.log(result);
                resolve("Department Save Successfully...")
            }
        })
    })
}