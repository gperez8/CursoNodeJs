const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
require('./hbs/helpers');

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {    
    const data = {
        name: 'grEgoRy pErEz',
    };

    res.render('home', data);
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando Peticiones en el puerto ${port}`);
});