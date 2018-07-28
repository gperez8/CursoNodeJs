const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=35a04942a6724893a1f994cdb1cf5ffd`);
    return resp.data.main.temp;
} 

module.exports = {
    getClima,
};