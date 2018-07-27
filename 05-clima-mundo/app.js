const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Descripcion de la ciudad',
        demand: true,
    }
}).argv;

console.log(argv.direccion);