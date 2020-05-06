//load environement variables from the .env file
// const dotenv = require('dotenv');
//application dependcies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
//hard coded data
const weatherData = require('./data/weather.json');
const geoData = require('./data/geo.json');
//application setup
const app = express();
const PORT = process.env.PORT || 3001;

function transformGeo(data) {
    const firstResult = data;
    console.log(firstResult, 'get it');
    return {
        formatted_query: firstResult.display_name,
        latitude: firstResult.lat,
        longitude: firstResult.lon
    };
}

// function transformWeather(data) {
//     const firstResult = data.results[0];
//     return {
        
//     };
// }

app.use(cors());

app.get('/location', (req, res) => {
    try {
        const resultGeo = transformGeo(geoData);
        res.json(resultGeo);
        console.log(resultGeo, 'getit2');
    } catch (e) {
        console.error('Hello');

        res.json({
            status: 404,
            responseText: 'Hello',
        });
    }
});

// app.get('/weather', (req, res) => {
//     try {
//         const result = transformWeather(weatherData);
//         res.json(result);
//     } catch (e) {
//         console.error(e);

//         res.json({
//             status: 500,
//             responseText: e,
//         });
//     }
// });







app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });







