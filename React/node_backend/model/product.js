const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ProductSchema = new schema({
    product_name: String,
    image: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('Product', ProductSchema);