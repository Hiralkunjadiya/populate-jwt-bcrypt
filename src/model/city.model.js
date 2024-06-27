const mongoose = require("mongoose")

const city_schema = mongoose.Schema(
    {
        city_name:{
            type:String,
            trim:true
        },

        //populate

        state:{
            type:mongoose.Types.ObjectId,
            ref:"State"
        },
        country:{
           type:mongoose.Types.ObjectId,
            ref:"Country"
        }

        //Specific populate

        // admin:{
        //     type:mongoose.Types.ObjectId,
        //     ref:"Admin"
        // }

    },
    {
        timestamps: true
    }
)

const City = mongoose.model("City",city_schema)

module.exports = City