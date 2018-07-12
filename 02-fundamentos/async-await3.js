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

const getEmpleado = async id => {
        const empleadoDB = empleados.find((empleado) => empleado.id === id );
        
        if (!empleadoDB) {
            throw new Error(`No se encuentra empleado con ID ${id}`);
        } else {
            return empleadoDB;
        }  
}

const getSalario = async empleado => {
    const salarioBD = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioBD) {
        throw new Error(`No se encuentra salario para empleado ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
        };
    }
};

const saludar = async (id) => {
    const empleado = await getEmpleado(id);

    if (empleado) {
        const sueldo = await getSalario(empleado);
        return `El sueldo de ${sueldo.nombre} es de ${sueldo.salario}`;
    }
};

saludar(3)
    .then((obj) => {
        console.log(obj);
    })
    .catch(e => {
        console.log(e);
    });