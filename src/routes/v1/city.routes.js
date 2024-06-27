const express = require("express")
const { city_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-city",
    //callback
    city_Controller.create_city
)

router.get("/list",
    //controller
    city_Controller.get_city
)

router.delete("/delete-city",
    //controller
    city_Controller.delete_city
)

router.put("/update-city",
    city_Controller.update_city
)

module.exports = router