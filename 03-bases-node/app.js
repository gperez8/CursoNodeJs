const { crearArchivo }  = require('./multiplicar/multiplicar');

const base = 'sdjfkldsl';

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(error => console.log(error));