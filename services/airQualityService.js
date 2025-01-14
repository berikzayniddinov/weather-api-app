const axios = require('axios');
const getAirQualityData = async (lat, lon) => {
    const response = await axios.get(`https://api.waqi.info/feed/geo:${lat};${lon}/`, {
        params: {
            token: process.env.AQI_API_KEY
        }
    });
    return response.data.data;
};
module.exports = getAirQualityData;
