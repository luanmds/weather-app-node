const request = require('request');
const {APIKEYMAPBOX} = require('../apiKeys');

async function getLocation(location, callback) {
    await request.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?language=pt&access_token=${APIKEYMAPBOX}`,   
        callback
    )
}

module.exports = {getLocation}