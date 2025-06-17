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

exports.DeleteEmp = ((req,res) => {
    let eid = parseInt(req.query.eid)
    // console.log("ID = "+parseInt(req.query.eid));
    // console.log("EID =", req.query.eid, "Parsed EID =", eid);
    let promise = empCrud.deleteEmpById(eid)
    promise.then((result) =>{
        let pro = empCrud.getAllEmps()
            pro.then((result) => {
                res.render("viewEmp.ejs", { deptList: result })
            })
            pro.catch((err) => {                   
                res.send(err)
            })
    })
    promise.catch((err) => {
        res.send("Errorrrrr..."+err)
    })
})

exports.verifyEmail = (req,res) => {
    let userEmail = req.query.e
    let promise = empCrud.verifyEmail(userEmail)
    promise.then((result) => {
        if(result.length > 0){
            res.send("Email Already Exist..")
        }
        else{
            res.send("")
        }
    })
}

exports.updEmployee = (req,res) =>{
    res.render("updateEmp.ejs",{Name:req.query.dn, 
                              deptId:req.query.eid})
    
}

exports.empFinalUpd = (req,res) =>{
    let {eid,name} = req.body
    let promise = empCrud.empFinalUpd(eid,name)
    promise.then((result) =>{
        let pro = empCrud.getAllEmps()
        pro.then((result) => {
            res.render("viewEmp.ejs", { deptList: result })
        })
        pro.catch((err) => {
            res.send(err)
        })
    })
    promise.catch((err) =>{
        res.send("Not Updated")
    })
}