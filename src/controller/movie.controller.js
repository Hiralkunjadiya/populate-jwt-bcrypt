const { movie_Services } = require("../services");

const create_movie1 = async (req, res) => {
    try {
        //movie creat in backend
        console.log(req.body);

        const new_movie = await movie_Services.create_movie_S(req.body);

        res.status(200).json({
            success: true,
            // message: "Route got hitted movie"
            data: new_movie,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    create_movie1,
};
