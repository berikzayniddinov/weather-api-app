const axios = require('axios');
const getWeatherData = async (city) => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: process.env.WEATHER_API_KEY,
            units: 'metric'
        }
    });
    return response.data;
};
module.exports = getWeatherData;
