# Weather API App

A simple weather application that provides weather information, air quality, and timezone data for a given city using external APIs. The application displays the data on a map, using the Leaflet library for map rendering.

## Features

- Fetches weather data using the OpenWeather API.
- Displays air quality index (AQI) using the AQICN API.
- Retrieves timezone data using the TimeZoneDB API.
- Displays the city location on an interactive map.
- Information displayed includes temperature, weather description, wind speed, humidity, air quality index (AQI), rain volume, and timezone.

## Technologies Used

- **Node.js** - Backend environment.
- **Express.js** - Web framework for building the API.
- **Leaflet.js** - Frontend library to display maps.
- **OpenWeather API** - For weather data.
- **AQICN API** - For air quality data.
- **TimeZoneDB API** - For timezone data.
- **HTML/CSS/JavaScript** - Frontend for user interface.

## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/berikzayniddinov/weather-api-app.git
   ```

2. Navigate into the project directory:
   ```bash
   cd weather-api-app
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables with your own API keys:

   ```env
   WEATHER_API_KEY=your_openweather_api_key
   AQI_API_KEY=your_aqi_api_key
   TIMEZONE_API_KEY=your_timezone_api_key
   ```

5. Run the server:
   ```bash
   npm start
   ```

6. Visit `http://localhost:3000/map` in your browser to view the map with weather information.

## Usage

1. Upon visiting the map page, you will be prompted to enter a city.
2. After entering a city, the app will fetch weather data, air quality data, and timezone information for that city.
3. The location of the city will be displayed on the map with a marker, and the weather details will be shown in a popup.

## API Endpoints

- `/api/weather?city=<city_name>`: Fetch weather, air quality, and timezone data for a given city.

## Example Response

The response from `/api/weather?city=London` will include:

```json
{
  "city": "London",
  "temperature": 15.3,
  "description": "Clear sky",
  "feelsLike": 13.5,
  "humidity": 72,
  "pressure": 1015,
  "windSpeed": 3.2,
  "country": "GB",
  "rainVolume": 0,
  "coordinates": {
    "lat": 51.5074,
    "lon": -0.1278
  },
  "airQuality": {
    "aqi": 45,
    "mainPollutant": "PM2.5"
  },
  "timezone": {
    "name": "Europe/London",
    "gmtOffset": 0
  }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request. You can also report any issues you encounter.
