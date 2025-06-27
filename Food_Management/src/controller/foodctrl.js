let fModel = require("../models/foodmodel.js")

exports.homePage = ((req,res) => {
    res.render("home.ejs")
})


exports.Category=((req,res) => {
    res.render("Addcat.ejs",{msg:""})
})

exports.CategoryAdd=((req,res) => {
    let {name} = req.body
    let promise = fModel.addCat(name)
    promise.then((result) =>{
        res.render("Addcat.ejs",{msg:result})
    }).catch((err)=>{
        res.render("Addcat.ejs",{msg:err})
    })
})
exports.getCategory = ((req,res) => {
    let promise = fModel.AllCategory()
    promise.then((result)=>{
        res.render("viewCat.ejs",{foodList:result});
    }).catch((err) => {
        res.send(err)
    })
})

exports.AddFoods=((req,res)=>{

     let promise = fModel.AllCategory()
    promise.then((result)=>{
        res.render("addFoods.ejs",{foodList:result,msg:""});
    }).catch((err) => {
        res.send(err)
    })
    

    // console.log("hello addfoods ");
    // res.render("addFoods.ejs",{msg:""}) 
})

exports.foodItems = ((req,res) => {
    let {name,price,alv,list} = req.body
    let promise = fModel.saveFood(name,price,alv,list)
    promise.then((result)=>{
        res.render("addFoods.ejs",{foodList:result})
    }).catch((err)=>{
        res.send(err)
    })
})