const CitySchema = require("../models/cities.js");

require('dotenv').config({path: './../../../.env'});

const baseURL = "http://api.openweathermap.org/data/2.5/weather";

class WeatherService {

    savCityDataToMongo = async (zipCode, data) => {
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

    getCityDataFromMongo = async (zipCode) => {
        return CitySchema.findOne({zip: zipCode});
    };

    async findOneReplace(filter, replace) {
        await CitySchema.findOneAndReplace(filter, replace, {new: true, upsert: true});
    };

}

module.exports = CitySchema