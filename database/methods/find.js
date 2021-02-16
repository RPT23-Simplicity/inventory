const db = require('../index');

let findStyle = (productId, styleId) => {
    let productInt = parseInt(productId);
    let styleInt = parseInt(styleId);

    return new Promise((res, rej) => {
        db.collection('Products').find({product_id: productInt, style_id: styleInt}, (err, result) => {
            if (err) {
                rej(err);
            } else {
                res(result.toArray());
            }
        });
    });
    
};

module.exports = findStyle;
