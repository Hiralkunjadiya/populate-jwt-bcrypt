const mongoose = require("mongoose")

const state_schema = mongoose.Schema(
    {
        state_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    }
)

const State = mongoose.model("State",state_schema)

module.exports =State