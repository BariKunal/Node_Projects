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