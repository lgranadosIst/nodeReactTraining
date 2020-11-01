const contact_infrastruture = require('../infrastructure/contact_infrastructure');

function obtenerContactoPorId(id) {
    if (id !== null) {
        return contact_infrastruture.obtenerContactoPorId(id);
    } else {
        return { error: 'No me dio un id para retornar' }
    }
}

function multiplicarId(id){
    return id*2;
}

function dividirId(id){
    return id/2;
}

module.exports = {
    obtenerContactoPorId,
    multiplicarId,
    dividirId
};


//rutas -> servicio -> infraestructura (bd)
//infraestructura -> servicio -> rutas