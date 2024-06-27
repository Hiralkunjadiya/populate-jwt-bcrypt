const { country_Services } = require("../services");

const create_country = async (req, res) => {
    try {
        //services
        console.log(req.body);
        const New_country = await country_Services.create_country(req.body);

        if (!New_country) {
            throw new Error("something wrong.........!");
        }

        res.status(200).json({
            success: true,
            //  message: "Route got hitted movie",
            data: New_country,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_country =async (req,res) => {
    try {
        //servises

        const New_country = await country_Services.get_country() 

        res.status(200).json({
            success: true,
             message: "Route got hitted movie",
            data: New_country,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_country,
    get_country
};
