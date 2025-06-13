let express = require("express")
let deptctrl = require("../controllers/deptcontroller.js")
let router = express.Router()

router.post("/adddept",deptctrl.saveDept)

router.get("/",deptctrl.homePage)
router.get("/newDept",deptctrl.newDept)
router.get("/viewalldept",deptctrl.getAllDept)

module.exports = router