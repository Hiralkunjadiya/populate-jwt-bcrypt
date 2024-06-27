const { Admin } = require("../model");

const create_admin = (data) => {
    return Admin.create(data)
};

const get_admin = ()=>{
    return Admin.find()
}

module.exports = {
    create_admin,
    get_admin
}