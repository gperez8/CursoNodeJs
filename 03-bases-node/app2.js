const argv = require('yargs')
                .command('listar', 'Imprimir Tabla de multiplicar', {
                    base: {
                        demand: true,
                        default: 1,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10,                        
                    }
                })
                .help()
                .argv;

const { crearArchivo }  = require('./multiplicar/multiplicar');

const argv2 = process.argv;
/* 
    const parametros = argv[2];
    const base = parametros.split('=')[1];
*/

console.log('Limite', argv.limite);
console.log('argv', argv.base);


/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(error => console.log(error));*/