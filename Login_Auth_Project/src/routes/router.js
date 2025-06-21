let express = require("express")
let router = express.Router()
let upload = require("../middlewares/fileupload.js")
let ctrl = require("../controllers/loginCtrl.js")
router.get("/",ctrl.LoginPage)
router.get("/reg",ctrl.regContr)
router.post("/regSave",upload.single("photo"),ctrl.saveReg)
router.post("/validateUser",ctrl.validateLoginUser)
router.get("/getLoginDetails",ctrl.UserLoginDetails)
router.get("/updlog",ctrl.UpdLogUser)
router.post("/finalUpdate",ctrl.FinalUpdLoginUser)

module.exports = router