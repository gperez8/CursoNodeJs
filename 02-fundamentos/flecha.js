/*
function suma (a, b) {
    return a + b;
}*/

const suma = (a, b) => {
    return a + b;
};

console.log(suma(10, 20));

// si el return es en una sola linea por buenas practica va asi
// const suma = (a, b) => return a + b;

/*
    function saludar () {
        return 'Hola gregory';
    }
*/

/*
    const saludar = () => {
        return 'Hola gregory';
    }
*/

const saludar = () => 'Hola Gregory';

console.log(saludar());


const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    /*
        aca (function arrow) this apunta a lo que esta afuera de la funcion 
        que en teoria es un objeto vacio.
        getNombre: () => {
            return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
        },
    */
    
    getNombre: () => {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    },
};

console.log(deadpool.getNombre());
