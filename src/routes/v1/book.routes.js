const express = require("express")
const { book_Controller } = require("../../controller")

const router = express.Router()

router.post("/create-book",
   //controller
   book_Controller.create_book
)

router.get("/list",
   //controller
   book_Controller.get_book
)

module.exports = router