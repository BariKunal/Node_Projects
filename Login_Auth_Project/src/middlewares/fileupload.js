let multer = require("multer")
let strorage = multer.diskStorage({
    destination : (req,file,cb)=> {
        cb(null,"public/images/")
    },
    filename:(req,file,cb) => {
        cb(null,file.originalname)
    }
})

let upload = multer({storage:strorage})

module.exports= upload