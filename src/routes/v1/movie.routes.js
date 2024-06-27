const express = require("express");
const { movie_Controller } = require("../../controller");

const router = express.Router();

router.post(
    "/creat-movie",
    //controller
    movie_Controller.create_movie1
);

router.get(
    "/list",
    // callback || controller
    (req,res) => {
        try {
            res.status(200).json({
                success: true,
                message: "Route got hitted movie"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
)

module.exports = router;
