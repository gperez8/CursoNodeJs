const express = require('express');
const app = express();
 
app.use(express.static(__dirname + '/public'));

/*
    app.get('/', function (req, res) {
        // res.send('Hello World');

        const obj = {
            nombre: 'Gregory',
            edad: 26,
            url: req.url,
        };

        res.send(obj);
    });
*/

app.listen(3000, () => {
    console.log('Escuchando Peticiones en el puerto 3000');
});