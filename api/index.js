const express = require('express')
const router = express.Router()

const Weather = require('./weather')

router.post('/weather', async (req, res) => {
    let weather = new Weather()

    let weatherData = await weather.getWeatherData(78702, 'us')


    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(weatherData, null, 4))
});


router.post('/weatherMongo', async (req, res) => {
    const {zipCode, tempImperial} = req.body
    let weather = new Weather()
    let weatherData = await weather.getWeatherData(zipCode, tempImperial)

    await weather.saveWeatherDataMongo(zipCode, weatherData)
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(weatherData, null, 4))
});

router.get('./weatherMongo', async(req, res) => {
    const {zipCode} = req.query;
    let weather = new Weather()

    let weatherData = await weather.getWeatherDataFromMongo(zipCode)
    res.header('Content-Type', application/json)
    res.send(JSON.Stirngify(weatherData, null, 4))

})


module.exports = router 