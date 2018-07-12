/*
*   Asyn and Await
*/

const getNombre = async () => {
    return 'Hola Gregory';
}

/*
    Al colocar la palabra async en una funcion 
    como en el caso siguiente:

    const getNombre = async () => {
        return 'Hola Gregory';
    }

    lo que realmente esta pasando es que la funcion 
    se transforma en una promesa como se ilustra en 
    a continuacion 
    
    const getNombre = () => {
        return new Promise((resolve, reject) => {
            resolve('Hola Gregory')
        });
    }
    
    Para disparar un Reject basta con que ocurra cualquier 
    ERROR de Javascript y para manejar ese reject se utiliza Throw

    const getNombre = async () => {
        throw new Error('ERROOOOOOOR');        
        return 'Hola Gregory';
    }
*/

// console.log(getNombre());

getNombre()
    .then((nombre) => { 
        console.log(nombre); 
    })
    .catch((e) => {
        console.log('Error', e);
    });