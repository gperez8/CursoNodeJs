const description = {
    demand: true,
    alias: 'd',
};

const completado = {
    default: true,
    alias: 'c',
};


const opts = {
    crear: {
        description
    },
    listar: {
        alias: 'l',
    },
    actualizar: {
        description,
        completado 
    },
    borrar: {
        description
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', opts.crear )
    .command('actualizar', 'actualiza una nueva tarea', opts.actualizar )
    .command('borrar', 'borra una nueva tarea', opts.borrar )
    .help()
    .argv;

module.exports = {
    argv,
}