var router = require('express').Router();
var contact_service = require('../services/contact_service');
const middleware = require('../middleware/logger');

router.get('/', middleware.logger, async (req, res) => {
    let result = await contact_service.getAllContacts();
    res.send(result);
});

router.get('/:id', middleware.logger, async (req, res) => {
    let id = req.param('id');
    let result = await contact_service.selectContact(id);
    res.send(result);
});

router.post('/', middleware.auth, async (req, res) => {
    /* {"name":"Luis", "last":"Granados", "phone":"88776655", "email":"luisgranados@gmail.com"} */
    const contact = req.body;
    let result = await contact_service.insertContact(contact);
    setResponse(result, res);
});

router.put('/', middleware.auth, async (req, res) => {
    /* { "id":3, "name":"Luis", "last":"Granados", "phone":"81828384", "email":"lgranados@isthmusit.com", "isActive": 1} */
    const contact = req.body;
    console.log(req.body);
    let result = await contact_service.updateContact(contact);
    setResponse(result, res);
});

router.delete('/', middleware.auth, async (req, res) => {
    /* { "id":3 } */
    let id = req.body.id;
    let result = await contact_service.deleteContact(id);
    setResponse(result, res);
});

function setResponse(result, res) {
    if (result.includes("error")) {
        res.send(result);
    } else {
        res.send(true);
    }
}

module.exports = router


