let express = require("express")
let deptctrl = require("../controllers/deptcontroller.js")
let router = express.Router()

router.post("/adddept",deptctrl.saveDept)

module.exports = router