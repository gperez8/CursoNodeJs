const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Descripcion de la ciudad',
        demand: true,
    }
}).argv;

const  encodeUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
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
    .catch( e => console.log(e.response) )