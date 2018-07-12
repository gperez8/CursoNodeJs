const getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Gregory');
        }, 3000);
    });
}

const saludar = async () => {
    const nombre = await getNombre();

    return `Hola ${nombre}`;
}

saludar().then((nombre) => {
    console.log(nombre)
});