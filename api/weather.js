const WEATHER = require("../models/Weather.js")

require('dotnev').config({path: './../../../.env'})

const baseURL = "http://api.openweathermap.org/data/2.5/weather"

class Weather {

    saveWeatherDataToMongo = async (zipCode, data) => {
        const filter = {
            zip: ZipCode
        }

        const replace = {
            ...filter,
            ...data,
            data: Date.now()
        }
        await this.findOneReplace(filter, replace)
    };

    getWeatherDataFromMongo = async (zipCode) => {
        return WEATHER.findOne({zip: zipCode})
    };

    async findOneReplace(filter, replace) {
        await WEATHER.findOneAndReplace(filter, replace, {new: true, upsert: true})
    };

}