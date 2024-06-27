const mongoose = require("mongoose")

const country_schema = mongoose.Schema(
    {
        country_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

const Country = mongoose.model("Country",country_schema)

module.exports = Country