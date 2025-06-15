let express = require("express")
let deptctrl = require("../controllers/deptcontroller.js")
let empCtrl = require("../controllers/empctrl.js")
let router = express.Router()

router.post("/adddept",deptctrl.saveDept)

router.get("/",deptctrl.homePage)
router.get("/newDept",deptctrl.newDept)
router.get("/viewalldept",deptctrl.getAllDept)
router.get("/deptdelet",deptctrl.delDept)
router.get("/upddept",deptctrl.updDept)
router.post("/updatedept",deptctrl.deptFinalUpd)
router.get("/searchDeptByName",deptctrl.searchDeptByUsingName)

router.get("/newemployee",empCtrl.newEmp)


module.exports = router