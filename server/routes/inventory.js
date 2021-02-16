const express = require('express');
const findStyle = require('../../database/methods/find');

const router = express.Router();

router.route('/:productid/:styleid')
  .get((req, res) => {
    findStyle(req.params.productid, req.params.styleid)
    .then((result) => {
        res.send(result).status(200);
    })
    .catch((err) => {
        console.log(err);
    });

});

module.exports = router;
