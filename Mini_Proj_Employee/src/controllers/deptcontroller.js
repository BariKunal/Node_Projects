let deptmodel = require("../models/savedeptmodel.js")

exports.saveDept = ((req, res) => {
    let { name } = req.body
    let promise = deptmodel.saveDept(name)
    promise.then((result) => {
        console.log(result);
        res.render("adddept.ejs", { msg: result })
    }).catch((err) => {
        res.render("adddept.ejs", { msg: err })
    })
})

exports.homePage = (req, res) => {
    res.render("home.ejs")
}

exports.newDept = (req, res) => {
    res.render("adddept.ejs", { msg: "" })
}

exports.getAllDept = (req, res) => {
    let promise = deptmodel.getAllDept()
    promise.then((result) => {
        res.render("viewdept.ejs", { deptList: result })
    })
    promise.catch((err) => {
        res.send(err)
    })
}

exports.delDept = (req, res) => {
    let did = parseInt(req.query.did)
    let promise = deptmodel.delDeptById(did)
    promise.then((result) => {
        let pro = deptmodel.getAllDept()
        pro.then((result) => {
            res.render("viewdept.ejs", { deptList: result })
        })
        pro.catch((err) => {
            res.send(err)
        })
    })
    promise.catch((err) => {
        res.send(err)
    })
}

exports.updDept = (req,res) =>{
    res.render("upddept.ejs",{deptName:req.query.dn, 
                              deptId:req.query.did})
    // res.send("Upd")
}

exports.deptFinalUpd = (req,res) =>{
    let {id,name} = req.body
    let promise = deptmodel.deptFinalUpd(id,name)
    promise.then((result) =>{
        let pro = deptmodel.getAllDept()
        pro.then((result) => {
            res.render("viewdept.ejs", { deptList: result })
        })
        pro.catch((err) => {
            res.send(err)
        })
    })
    promise.catch((err) =>{
        res.send("Not Updated")
    })
}