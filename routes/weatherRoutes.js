const express = require('express');
const getWeatherData = require('../services/weatherService');
const getAirQualityData = require('../services/airQualityService');
const getTimezoneData = require('../services/timezoneService');
const router = express.Router();
router.get('/weather', async (req, res) => {
    const { city } = req.query;
    if (!city) {
        return res.status(400).send('City is required');
    }
    try {
        const weatherData = await getWeatherData(city);
        const airQualityData = await getAirQualityData(weatherData.coord.lat, weatherData.coord.lon);
        const timezoneData = await getTimezoneData(weatherData.coord.lat, weatherData.coord.lon);
        const responseData = {
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            feelsLike: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            windSpeed: weatherData.wind.speed,
            country: weatherData.sys.country,
            rainVolume: weatherData.rain && weatherData.rain["3h"] ? weatherData.rain["3h"] : 0,
            coordinates: {
                lat: weatherData.coord.lat,
                lon: weatherData.coord.lon
            },
            airQuality: {
                aqi: airQualityData.aqi,
                mainPollutant: airQualityData.dominentpol
            },
            timezone: {
                name: timezoneData.zoneName,
                gmtOffset: timezoneData.gmtOffset
            }
        };
        res.json(responseData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        if (error.response) {
            res.status(error.response.status).send(error.response.data.message || 'Error fetching data from API');
        } else {
            res.status(500).send('Failed to fetch data');
        }
    }
});
module.exports = router;
