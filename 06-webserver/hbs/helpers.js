const hbs = require('hbs');

// Helper
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    const palabra = texto.split(' ');
    const result = palabra.map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    });

    return result.join(' ');
});