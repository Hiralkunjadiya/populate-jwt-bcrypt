const mongoose = require("mongoose");

const DbConnect = () => {
    mongoose.connect("mongodb+srv://hiralkunjadiya9:pZYJLkx8f1txOuCy@netflix.e9o9kve.mongodb.net/").then((data)=>{
        if(data){
            console.log("Database  successfull.");
        }
    }).catch((err)=>{
        console.log(err);
    })
};

module.exports = DbConnect