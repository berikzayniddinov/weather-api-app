const axios = require('axios');
const getTimezoneData = async (lat, lon) => {
    const response = await axios.get('http://api.timezonedb.com/v2.1/get-time-zone', {
        params: {
            key: process.env.TIMEZONE_API_KEY,
            format: 'json',
            by: 'position',
            lat: lat,
            lng: lon
        }
    });
    return response.data;
};
module.exports = getTimezoneData;
