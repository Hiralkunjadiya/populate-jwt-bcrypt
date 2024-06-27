const { admin_Services } = require("../services");

const create_admin = async (req, res) => {
    try {
        //services
        console.log(req.body);
        const New_Admin = await admin_Services.create_admin(req.body);

        if (!New_Admin) {
            throw new Error("something wrong.........!");
        }

        res.status(200).json({
            success: true,
            //  message: "Route got hitted movie",
            data: New_Admin,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_admin =async (req,res) => {
    try {
        //servises

        const New_admin = await admin_Services.get_admin(req.body) 

        res.status(200).json({
            success: true,
            //  message: "Route got hitted movie",
            data: New_admin,
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
    create_admin,
    get_admin
};
