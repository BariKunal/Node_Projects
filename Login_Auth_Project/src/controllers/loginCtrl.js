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
            res.render("login.ejs",{msg:"Login failed"})
        }
    }).catch((err) => {
        res.render("login.ejs",{msg:"Login failed"})
        
    })
}

exports.UserLoginDetails = (req,res) => {
    let loginUserId = req.session.loginUserId;
    let result = regModel.getLoginDetails(loginUserId)
    result.then((r) =>{
        if(r[0].length>0){
            let userData = r[0][0]
            res.render("showProfile.ejs",{u:userData})
        }
    })
}

exports.UpdLogUser=(req,res) => {
    console.log(req.query);
    let {name,email,contact,password} =req.query;
    let loginUserId = req.session.loginUserId;
    console.log(loginUserId);
    res.render("updateInfo.ejs",{SesId:loginUserId,name:name,email:email,contact:contact,password:password});
}

exports.FinalUpdLoginUser = ((req,res) => {
    console.log(req.body);
    let {name,email,contact,password} = req.body
        let loginUserId = req.session.loginUserId;
console.log(loginUserId);
    
     let result = regModel.Update(name,email,contact,password,loginUserId)
     result.then((r) => {
        if (r[0].affectedRows > 0) {
            res.redirect("/getLoginDetails"); 
        } else {
            res.send("Update failed!");
        }
    }).catch((err) => {
        console.log("Update error:", err);
        res.send("Error update");
    });
})