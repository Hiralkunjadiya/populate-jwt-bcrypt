const express = require("express");

const userRoute = require("./user.routes");
const movieRoute = require("./movie.routes");
const SeriesRoute = require("./series.routes");
const AdminRoute = require("./admin.routes");
const BookRoute = require("./book.routes")
const CityRoute = require("./city.routes")
const StateRoute = require("./state.routes")
const CountryRoute = require("./country.routes")
 
const router = express.Router();

router.use("/linking-phrase", userRoute);
router.use("/movie", movieRoute);
router.use("/series", SeriesRoute);
router.use("/admin", AdminRoute);
router.use("/book",BookRoute)
router.use("/city",CityRoute)
router.use("/state",StateRoute)
router.use("/country",CountryRoute)

module.exports = router;
