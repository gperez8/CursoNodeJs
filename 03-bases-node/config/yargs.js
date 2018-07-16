const opts = {
    base: {
        demand: true,
        default: 1,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10,                        
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimir Tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de la tabla de Multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv,
};