const { Book } = require("../model");

const create_book = (data) => {
    return Book.create(data)
};

const get_book = ()=>{
    return Book.find()
}

module.exports = {
    create_book,
    get_book
}