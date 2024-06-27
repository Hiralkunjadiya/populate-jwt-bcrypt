const express = require("express")
const { state_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-state",
    //callback
    state_Controller.create_state
)

router.get("/list",
    //controller
    state_Controller.get_state
)

module.exports = router