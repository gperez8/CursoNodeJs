const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Descripcion de la ciudad',
        demand: true,
    }
}).argv;

const getInfo = async (direccion) => {

    try {
        const coors = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima( coors.lat, coors.lng);
        
        return `El clima en ${ direccion } es de ${temp}`;

    } catch (error) {
        return `no se pudo determinar el clima en ${ direccion }`
    } 
   
}

getInfo(argv.direccion)
    .then( message => console.log(message))
    .catch( e => console.log(e)); 