const db = require('../index');
const Product = require('../models/inventory');

let addToDb = (data) => {
    let productInt = parseInt(data.product_id);
    let styleInt = parseInt(data.style_id);

    let newProduct = new Product({
        product_id: productInt,
        style_id: styleInt,
        size: data.size,
        quantity: data.quantity
    });;


    return new Promise((res, rej) => {
        
        db.collection('Products').insertOne(newProduct)
        .then((result) => {
            res(result);
        }) 
        .catch((err) => {
            rej(err);
        });
    });
    
};

module.exports = addToDb;
