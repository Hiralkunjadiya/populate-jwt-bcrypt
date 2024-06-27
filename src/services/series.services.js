const { Series } = require("../model");

const create_series = (data) => {
    return Series.create(data)
};

module.exports = {
    create_series
}
