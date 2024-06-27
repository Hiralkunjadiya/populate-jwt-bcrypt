const express = require("express")
const { country_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-country",
    //callback
    country_Controller.create_country
)

router.get("/list",
    //controller
    country_Controller.get_country
)



module.exports = router