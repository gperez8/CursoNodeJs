const fs = require('fs');
let listadoPorHacer = [];

const leerArchivo = () => {
    try {
        listadoPorHacer = require('../BD/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
    
} 

const guardarDB = () => { 

    const data = JSON.stringify(listadoPorHacer);
    
    fs.writeFile('BD/data.json', data, (err) => {
        if (err) throw new Error('no de pudo grabar', err);
    }); 
}

const crear = (descripcion) => {
    
    leerArchivo();

    const tarea = {
        descripcion,
        completado: false,
    }

    listadoPorHacer.push(tarea);
    guardarDB();
    
    return tarea;
}

const getListado = () => {
    leerArchivo();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    leerArchivo();

    const index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    leerArchivo();
    const nuevoListadoPorHacer = listadoPorHacer.filter((tarea) => tarea.descripcion !== descripcion);

    if (nuevoListadoPorHacer.length !== listadoPorHacer.length) {
        listadoPorHacer = nuevoListadoPorHacer;
        guardarDB();
        return true;
    } else {
        return false;
    }
        
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}