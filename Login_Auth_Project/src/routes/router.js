let express = require("express")
let router = express.Router()
let ctrl = require("../controllers/loginCtrl.js")
router.get("/",ctrl.LoginPage)
module.exports = router