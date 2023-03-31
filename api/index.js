const express = require('express')
const App = express()
const cors = require('cors')
const Cities = require('./models/cities')
const City = require('./models/cities.js')

App.post('/cities', async (req, res) => {
    let cities = new City()

    let citiesData = await cities.getCitiesData(78702, 'us')


    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(citiesData, null, 4))
});


App.post('/citiesMongo', async (req, res) => {
    const {zipCode, tempImperial} = req.body
    let cities = new Cities()
    let citiesData = await cities.getCitiesData(zipCode, tempImperial)

    await cities.saveCitiesDataMongo(zipCode, citiesData)
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(citiesData, null, 4))
});

App.get('./citiesMongo', async(req, res) => {
    const {zipCode} = req.query;
    let cities = newCities()

    let citiesData = await cities.getCitiesDataFromMongo(zipCode)
    res.header('Content-Type', application/json)
    res.send(JSON.Stirngify(citiesData, null, 4))

})


module.exports = App