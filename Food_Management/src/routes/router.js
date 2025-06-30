let express = require("express")
let bodyParser = require("body-parser")
let ctrlr = require("../controller/foodctrl.js")

let router = express.Router()
let app = require("../app.js")


router.get("/", ctrlr.homePage)
router.get("/categoryAdd", ctrlr.Category)
router.post("/addCat", ctrlr.CategoryAdd)
router.get("/foodadded", ctrlr.getCategory)

router.get("/add", ctrlr.AddFoods)
router.post("/foodItems", ctrlr.foodItems)
module.exports = router