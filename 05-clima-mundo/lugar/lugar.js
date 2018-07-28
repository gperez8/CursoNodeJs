const axios = require('axios');


const getLugarLatLng = async (direccion) => {
    const encodeUrl = encodeURI(direccion);
    const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la dirección ${direccion}`);
    } 

    const data = resp.data.results[0];

    return {
        direccion: data.formatted_address,
        lat: data.geometry.location.lat,
        lng: data.geometry.location.lng,
    }
}

module.exports = {
    getLugarLatLng,
}

/*
    .then( resp => {
        // truco para ver todo lo que trae un JSON
        // console.log(JSON.stringify(resp.data, undefined, 2));
        // const data = resp.data.results[0];


        if (resp.data.status !== 'ZERO_RESULTS') {
            const data = resp.data.results[0];

            console.log('----------------------------------------------------------');
            console.log('Dirección: ', data.formatted_address);
            console.log('Latitud: ', data.geometry.location.lat);
            console.log('Longitud: ', data.geometry.location.lng);
            console.log('-----------------------------------------------------------');
        } else {
            console.log('Direccion no valida');
        }
    })
    .catch( e => console.log(e.response) );

*/