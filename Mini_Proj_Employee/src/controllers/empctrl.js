let dbmodel = require("../models/savedeptmodel.js")
let empCrud = require("../models/empcrudmodel.js")

exports.newEmp = (req, res) => {
    let promise = dbmodel.getAllDept()
    promise.then((result) => {
        res.render("newEmp.ejs",{deptList : result,msg:""})
    })
}

exports.saveEmployee = ((req,res) => {
    let {name,email,contact,sal,deptid} =req.body
    let filename = req.file.filename
    
    let promise = empCrud.saveEmployee(name,email,contact,sal,filename,deptid)
    promise.then((result) => {
        let p = dbmodel.getAllDept()
        p.then((r) => {
            res.render("newEmp.ejs",{deptList : r,msg:result})
        })
    })
    promise.catch((err) =>{
        res.send(err)
    })

})

exports.getAllEmployee = ((req,res) => {
    let promise = empCrud.getAllEmps()
        promise.then((result) => {
            res.render("viewEmp.ejs", { deptList: result })
        })
        promise.catch((err) => {
            res.send(err)
        })
})