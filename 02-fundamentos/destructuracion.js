const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    },
    /*
        tambien puede declararse de esta manera por es6
        getNombre () {
            return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
        },
    */
};

console.log(deadpool.getNombre());

/*
    const nombre = deadpool.nombre;
    const apellido = deadpool.apellido;
    const poder = deadpool.poder;
*/

const { nombre, apellido, poder } = deadpool;

// aca extraemos nombre y le colocamos otro nombre
// const { nombre: primerNombre, apellido, poder } = deadpool;

console.log(`${nombre} ${apellido} - poder: ${poder}`);
