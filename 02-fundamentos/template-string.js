const nombre = 'Gregory';
const real = 'Raynned Perez';

console.log( nombre + ' ' + real );

console.log(`nombre: ${nombre} ${real}`);

const nombreCompleto = nombre + ' ' + real;
const nombreTemplate = `${nombre} ${real}`;

if ( nombreCompleto ===  nombreTemplate) {
    console.log('son iguales');
}

function getNombre () {
    return `${nombre} ${real}`;
}

console.log(`el nombre completo es: ${getNombre()}`)