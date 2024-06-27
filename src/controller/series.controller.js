const { series_Services } = require("../services");

const create_series =async (req,res) => {
    try {
        //services
        console.log(req.body);
        const New_series = await series_Services.create_series(req.body) 

        res.status(200).json({
            success: true,
            //  message: "Route got hitted movie",
            data: New_series,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {
    create_series
}