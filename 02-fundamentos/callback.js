/*
    setTimeout(() => {
        console.log('hola mundo');
    },3000); 
*/

const getUserById = (id, callback) => {
    const usuario = {
        nombre: 'Fernando',
        id,
    };

    if (id === 20) {
        callback(`El usuario ${ id } no existe`);
    } else {
        callback(null, usuario);
    }
};

getUserById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('usuario de la BD es:', usuario);
    }    
});
