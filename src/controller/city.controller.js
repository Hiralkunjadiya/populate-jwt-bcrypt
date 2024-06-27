const { city_Services } = require("../services");

const create_city = async (req, res) => {
    try {
        //services
        console.log(req.body);
        const New_City = await city_Services.create_city(req.body);

        if (!New_City) {
            throw new Error("something wrong.........!");
        }

        res.status(200).json({
            success: true,
            //  message: "Route got hitted movie",
            data: New_City,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_city =async (req,res) => {
    try {
        //servises

        const New_city = await city_Services.get_city() 

        res.status(200).json({
            success: true,
             message: "Route got hitted movie",
            data: New_city,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const delete_city =async (req,res) => {
    try {
        //servises
        const id = req.body.id
        const New_city = await city_Services.delete_city(id) 

        res.status(200).json({
            success: true,
             message: "Route got hitted movie",
            data: New_city,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const update_city =async (req,res) => {
    try {
        //servises
        const id = req.body.id
        const data = req.body
        const New_city = await city_Services.update_city(id,data)

        res.status(200).json({
            success: true,
             message: "Route got hitted movie",
            data:data,
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
    create_city,
    get_city,
    delete_city,
    update_city
};
