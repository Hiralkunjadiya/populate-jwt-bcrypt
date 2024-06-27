const { City } = require("../model");

const create_city = (data) => {
    return City.create(data)
};

const get_city = ()=>{
    return City.find().populate("state").populate("country")
    // return City.find().populate("admin",{admin_name:1})
}

const delete_city = (id) => {
    return City.findByIdAndDelete(id)
}


const update_city = (id,data) => {
    return City.findByIdAndUpdate(id,data)
}

module.exports = {
    create_city,
    get_city,
    delete_city,
    update_city
}