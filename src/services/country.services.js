const { Country } = require("../model");

const create_country = (data) => {
    return Country.create(data)
};

const get_country = ()=>{
    return Country.find()
}


module.exports = {
    create_country,
    get_country,
}