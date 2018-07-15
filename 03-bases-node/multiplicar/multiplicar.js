const fs = require('fs');

const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        
        if (!Number(base)) {
            reject(`La Base introducida ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i < 10; i++) {
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

module.exports = {
    crearArchivo,
}
