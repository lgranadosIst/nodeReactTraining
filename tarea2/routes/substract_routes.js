var router = require('express').Router();
const operation_service = require("../services/operation_service");

router.get('/:num1/:num2', (req, res) => {
    var num1 = req.param('num1');
    var num2 = req.param('num2');
    result = operation_service.substract(num1, num2);
    res.send(result);
});

module.exports = router;

// routes -> services -> infrastructure -> db
// routes <- services <- infrastructure <- db