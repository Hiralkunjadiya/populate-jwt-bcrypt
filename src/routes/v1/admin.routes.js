const express = require("express")
const { admin_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-admin",
    //callback
    admin_Controller.create_admin
)

router.get("/list",
    //controller
    admin_Controller.get_admin
)

module.exports = router