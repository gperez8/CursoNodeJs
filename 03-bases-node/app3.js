const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla }  = require('./multiplicar/multiplicar');

const command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(error => console.log(error));
    break;

    default: 
        console.log('comando no reconocido');
    break;
}