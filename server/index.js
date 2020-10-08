const express = require('express');
const app = express();
const inventoryDB = require('../database');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function(req, res, next){
     res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
     })
     next();
});

app.listen(3004, () => {
    console.log('Listening on port 3004');
});


app.get('/inventory/:productid/:styleid', (req, res) => {
    inventoryDB.findStyle(req.params.productid, req.params.styleid)
    .then((result) => {
        console.log(result);
        res.send(result).status(200);
    })
    .catch((err) => {
        console.log(err);
    });

}); 