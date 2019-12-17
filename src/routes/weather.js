const express = require('express');
const router = express.Router();
const openWeatherMap = require("../api/openWeatherMap");
const mapBox = require("../api/mapBox");

router.get('/', (req, res) => {

    const query = req.query.q;
    let infoResponse = {};

    mapBox.getLocation(query, (err, response, body) => {
        
        const location = JSON.parse(body).features[0];

        if(!location) {
            infoResponse = {message: 'Location not found.'}
            res.status(response.statusCode)
                .render('ForecastInfo', infoResponse);
            return;
        }

        let longitude = location.center[0];
        let latitude = location.center[1];

        openWeatherMap.getWeatherByLatLong(
            Number(longitude).toFixed(4),
            Number(latitude).toFixed(4), 
            (err, response, body) => {
            
                if(err) console.log(err);
        
                const jsonBody = JSON.parse(body);       
                if(response.statusCode === 200) 
                    infoResponse = {
                        location: location.place_name_pt,
                        weather: jsonBody.weather[0].description,
                        temp: jsonBody.main.temp,
                        temp_min: jsonBody.main.temp_min,
                        temp_max: jsonBody.main.temp_max
                    }
                else 
                    infoResponse = {
                        cod: jsonBody.cod,
                        message: jsonBody.message
                    }
        
                res.status(response.statusCode)
                .render('ForecastInfo', infoResponse);
            }
        );
    });
});

module.exports = router;
