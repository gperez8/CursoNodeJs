/* 
    var name = 'Gregory';

    if (true) {
        var name = 'JD';
    }

    console.log(name); 
*/

/*
    Aca existe un error porque la variable ya fue declarada
    sin embargo dentro del if no hay problema debido a que 
    la variable declarada dentro de ella vive en ese scope
    y nada mas

    let name = 'Gregory';

    if (true) {
        let name = 'Jd';
    }

    let name = 'CARMEN'; 
*/


/*
    i no esta declarado ps la variable vive dentro del
    scope del for.

    for (let i = 0; i <= 5; i++) {
        console.log(`i: ${i}`);
    }
*/

/*
    aca i  es igual a cero 

    let i = 0;

    for (let i = 0; i <= 5; i++) {
        console.log(`i: ${i}`);
    }

    console.log(`i -> ${i}`);
*/

for (var i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}

console.log(`i -> ${i}`);