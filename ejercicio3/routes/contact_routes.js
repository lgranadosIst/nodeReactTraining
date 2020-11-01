var router = require('express').Router()
var contact_service = require('../services/contact_service');

router.get('/', (req, res) => {
    res.send('Lista de contactos')
});

router.get('/:id', (req, res) => {
    //res.send('Contact unico')
    var id = req.param('id')
    //console.log(req.param('id'));
    //res.send('' + req.param('id')*2);
    //resultado = contact_service.multiplicarId(id);
    resultado = contact_service.obtenerContactoPorId(id);
    //resultado = contact_service.multiplicarId(id);

    res.send(resultado);
});

module.exports = router;