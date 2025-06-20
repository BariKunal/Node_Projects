let express = require("express")
let router = express.Router()
let upload = require("../middlewares/fileupload.js")
let ctrl = require("../controllers/loginCtrl.js")
router.get("/",ctrl.LoginPage)
router.get("/reg",ctrl.regContr)
router.post("/regSave",upload.single("photo"),ctrl.saveReg)
router.post("/validateUser",ctrl.validateLoginUser)
module.exports = router