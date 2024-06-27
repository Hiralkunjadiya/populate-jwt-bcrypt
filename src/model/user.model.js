const mongoose = require("mongoose")

const user_schema = mongoose.Schema(
    {
        //keys
        name:{
            type:String,
            trim:true
        },
        lname:{
            type:String,
            trim:true
        },
        email:{
            type:String,
            trim:true
        }
    },
    {
        //2 unique  || functionality keys
        timestamps:true
    }
)

const user = mongoose.model("user",user_schema)

module.exports = user
