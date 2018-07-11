const empleados = [{
    id: 1,
    nombre: 'Gregory',
}, {
     id: 2,
     nombre: 'Carmen',
}, {
    id: 3,
    nombre: 'Ramon',
}];

const salarios = [{
    id: 1,
    salario: 1000,
}, {
    id: 2,
    salario: 2000,
}];

const callbackSalario = (err, salario) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(`El salario de ${salario.nombre} es de ${salario.salario}`);
    }
}

const getSalario = (empleado, callback) => {
    const salarioBD = salarios.find((salario) => salario.id === empleado.id);
    
    if (!salarioBD) {
        callback(`No se encuentra salario para empleado ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
        });
    }
}


const callbackEmpleado = (err, empleado) => {
    if (err) {
        return console.log(err);
    } else {
        getSalario(empleado, callbackSalario);
    }
};

const getEmpleado = (id, callback) => {
    const empleadoDB = empleados.find((empleado) => empleado.id === id );
    if (!empleadoDB) {
        callback(`No se encuentra empleado con ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

getEmpleado(3, callbackEmpleado);   