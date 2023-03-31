const WeatherModel = require("../models/cities.js");

require('dotenv').config({path: './../../../.env'});

const baseURL = "http://api.openweathermap.org/data/2.5/weather";

class WeatherService {

    saveWeatherDataToMongo = async (zipCode, data) => {
        const filter = {
            zip: zipCode
        };

        const replace = {
            ...filter,
            ...data,
            date: Date.now()
        };

        await this.findOneReplace(filter, replace);
    };

    getWeatherDataFromMongo = async (zipCode) => {
        return WeatherModel.findOne({zip: zipCode});
    };

    async findOneReplace(filter, replace) {
        await WeatherModel.findOneAndReplace(filter, replace, {new: true, upsert: true});
    };

}

module.exports = WeatherService