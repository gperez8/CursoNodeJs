const fs = require('fs');
const color = require('colors');

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        
        if (!Number(base) || !Number(limite)) {
            reject(`La Base introducida ${ base } o el limite introducido ${ limite } no es un numero`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`Tablas/tabla-${ base }`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${ base }`);
        });
    })
};

const listarTabla = (base, limite) => {

    console.log('==================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('==================='.green);

    for( let i = 1; i <= limite; i++ ) {
        console.log(`${ base } * ${i} = ${ base * i }`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}
