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

const getEmpleado = id => {
    return new Promise((resolve, reject) => {
        const empleadoDB = empleados.find((empleado) => empleado.id === id );
        if (!empleadoDB) {
            reject(`No se encuentra empleado con ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });   
}

const getSalario = empleado => {
    return new Promise((resolve, reject) => {
        const salarioBD = salarios.find((salario) => salario.id === empleado.id);
    
        if (!salarioBD) {
            reject(`No se encuentra salario para empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario,
            });
        }
    });
}


getEmpleado(1)
    .then((empleado) => {
        getSalario(empleado)
            .then((resp) => {
                console.log(resp);
            }, (err) => {
                console.log(err);
            })
    }, (err) => {
        console.log(err);
    });