const db = require('../index');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: Number,
    style_id: Number,
    size: Number,
    quantity: Number
});

const Product = db.model('Product', productSchema);

module.exports = Product;
