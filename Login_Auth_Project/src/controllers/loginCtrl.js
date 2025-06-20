// const { use } = require("react")
let regModel = require("../models/regmodel.js")
exports.LoginPage=(req,res)=>{
    res.render("login.ejs",{msg:""})
}

exports.regContr= (req,res) => {
    res.render("register.ejs",{msg:""})
}

exports.saveReg = (req,res) => {
    let {name,email,username,password,photo,contact} = req.body
    let result = regModel.saveReg(name,email,contact,username,password,req.file.filename)
    result.then((r) => {
        if(r[0].affectedRows > 0){

            res.render("register.ejs",{msg:"Registration Successful..."})
        }
        else{
             res.render("register.ejs",{msg:"Registration Failed..."})
        }
    }).catch((err) => {
        console.log(err);
        
    })
}

exports.validateLoginUser = (req,res) =>{
    let {username,password}=req.body
    let result = regModel.validateUser(username,password)
    result.then((r) => {
        if(r[0].length > 0){
            let userData = r[0][0]
            req.session.loginUserId = userData.rid
            req.session.loginUserName = userData.name
            res.render("viewprofile.ejs",{loginUserName:userData.name})
        }
        else{
            res.render("login.ejs",{msg:"Login Failed"})
        }
    }).catch((err) => {
        res.render("login.ejs",{msg:"Login Failed"})
        
    })
}