let deptmodel = require("../models/savedeptmodel.js")

exports.saveDept=((req,res) =>{
    let {name} = req.body
    let promise = deptmodel.saveDept(name)
    promise.then((result) => {
        console.log(result);
        res.render("adddept.ejs",{msg:result})
    }).catch((err) => {
        res.render("adddept.ejs",{msg:err})
    })
})

exports.homePage = (req,res) => {
    res.render("home.ejs")
}

exports.newDept = (req, res) => {
    res.render("adddept.ejs",{msg:""})
}

exports.getAllDept = (req,res) => {
    let promise   = deptmodel.getAllDept()
    promise.then((result) => {
        res.render("viewdept.ejs",{deptList:result})
    })
    promise.catch((err) => {
        res.send(err)
    })
}