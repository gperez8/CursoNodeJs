console.log('Inicio del programa')

setTimeout(() => {
    console.log('Primer SetTimeOut');
}, 3000);

setTimeout(() => {
    console.log('Segundo SetTimeOut');
}, 0);

setTimeout(() => {
    console.log('Tercer SetTimeOut');
}, 0);

console.log('Fin del Programa');