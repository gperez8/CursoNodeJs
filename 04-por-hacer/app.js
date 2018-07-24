const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

const command = argv._[0];

switch( command ) {
    case 'crear':
        const tarea = porHacer.crear(argv.description);
        console.log(tarea);
    break;

    case 'listar':

        const listado = porHacer.getListado();

        console.log(listado);

        for (let tarea of listado) {
            console.log('====================================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====================================='.green);
        }
       

    break;
    case 'actualizar':
        const actualizar = porHacer.actualizar(argv.description, argv.completado);
    break;

    case 'borrar':
        const borrar = porHacer.borrar(argv.description);
        
        console.log(borrar);
    break;

    default:
        console.log('Comando no reconocido', argv);
}