const { crearArchivo }  = require('./multiplicar/multiplicar');

// Array de argumentos
const argv = process.argv;

// Se toma el segudo elemento del array de argumentos
const parametros = argv[2];

// separamos el nombre de la varible enviada desde la terminal
// de su valor
const base = parametros.split('=')[1];



crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(error => console.log(error));