const request = require('request');
const {APIKEYWEATHER} = require('../apiKeys');


async function getWeatherByLocation(location, callback) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt&units=metric&APPID=${APIKEYWEATHER}`;
    await request.get(url, callback)
}

async function getWeatherByLatLong(longitude, latitude, callback) {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt&units=metric&APPID=${APIKEYWEATHER}`;
    await request.get(url,callback);
}

module.exports = {getWeatherByLocation, getWeatherByLatLong}