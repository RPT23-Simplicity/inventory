require('../database/index');
const express = require('express');
const app = express();

app.use(function(req, res, next){
     res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
     })
     next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/shop/:productId/:styleId', express.static(__dirname + '/../client/dist'));
app.use('/inventory', require('./routes/inventory'));

module.exports = app;
