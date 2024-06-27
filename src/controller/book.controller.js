const { book_Services } = require("../services");

const create_book = async (req, res) => {
    try {
        //services
        console.log(req.body);
        const New_book = await book_Services.create_book(req.body);

        if(!New_book){
            throw new Error("something wrong.........!")
        }

        res.status(200).json({
            success: true,
            //  message: "Route got hitted movie",
            data: New_book,
        })
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

const get_book =async (req,res)=>{
    try {
        //servises
        const New_book = await book_Services.get_book()

        res.status(200).json({
            success: true,
            //  message: "Route got hitted movie",
            data: New_book,
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    create_book,
    get_book
}
