const Prod = require("../model/Users");

const getProducts = async (req, res) => {
    const prod = await Prod.find();
    res.json(prod);  
};

module.exports = getProducts;
