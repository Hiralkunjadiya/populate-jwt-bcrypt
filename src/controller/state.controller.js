const { state_Services } = require("../services");

const create_state = async (req, res) => {
    try {
        //services
        console.log(req.body);
        const New_State = await state_Services.create_state(req.body);

        if (!New_State) {
            throw new Error("something wrong.........!");
        }

        res.status(200).json({
            success: true,
            //  message: "Route got hitted movie",
            data: New_State,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_state =async (req,res) => {
    try {
        //servises

        const New_State = await state_Services.get_state() 

        res.status(200).json({
            success: true,
             message: "Route got hitted movie",
            data: New_State,
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
    create_state,
    get_state
};
