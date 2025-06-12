let deptmodel = require("../models/savedeptmodel.js")

exports.saveDept=((req,res) =>{
    let {name} = req.body
    let promise = deptmodel.saveDept(name)
    promise.then((result) => {
        console.log(result);
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
})