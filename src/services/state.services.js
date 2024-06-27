const { State } = require("../model");

const create_state= (data) => {
    return State.create(data)
};

const get_state = ()=>{
    return State.find()
}

module.exports = {
   create_state,
   get_state
}