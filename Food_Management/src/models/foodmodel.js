
let db = require("../../db.js")

exports.addCat=(name)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into category values ('0',?)",[name],(err,result)=>{
            if(err){
                reject("error iss : "+err)
            }
            else{
                resolve("Added...")
            }
        })
    })
}

exports.AllCategory = ()=> {
    return new Promise ((resolve, reject) => {
        db.query("select * from category",(err,result) => {
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    })
}

exports.saveFood = (...foodData)=>{
    console.log("save food function");
    return new Promise ((resolve,reject) => {
        db.query("insert into food values('0',?,?,?,?)",[...foodData],(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Food Added...")
            }
        })
    })

}