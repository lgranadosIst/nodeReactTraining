const contact_infrastruture = require('../infrastructure/contact_infrastructure')

function getAllContacts() {
    return contact_infrastruture.getAllContacts();
}

function selectContact(id) {
    if (id !== null) {
        return contact_infrastruture.selectContact(id);
    } else {
        return { error: 'Id inválido' }
    }
}

function insertContact(contact) {
    if(contact !== null){
        return contact_infrastruture.insertContact(contact);
    } else{
        return { error: 'Datos inválidos'}
    }
}

function updateContact(contact) {
    if(contact !== null){
        return contact_infrastruture.updateContact(contact);
    } else{
        return { error: 'Datos inválidos'}
    }
}

function deleteContact(id) {
    if (id !== null) {
        return contact_infrastruture.deleteContact(id);
    } else {
        return { error: 'Id inválido' }
    }
}

module.exports = {
    getAllContacts,
    selectContact,
    insertContact,
    updateContact,
    deleteContact
}
