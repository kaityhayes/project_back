import express from 'express'
import Weather from './models/weather.js'
import react from 'react'


const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    const {
        city, 
        state,
        zip } = req.body;
    Weather.create({ city, state, zip }).then(weather => {
        res.json(weather) 
    })
    .catch(err => console.log('POST / ERROR:', err))
    });


    router.get('/', (req, res) => {
        weather.find().then(weather => {
             res.json(weather)
         })
         .catch(err => console.log('GET / ERROR:', err))
     });

 
 router.get('/:id', (req, res) => {
   Weather.findById(req.params.id).then(weather => {
        res.json(weather)
    })
.catch(err => console.log('GET / :id ERROR:', err))
 });


 //UPDATE
 router.put('/:id', (req, res) => {
    const {
        city,
        state,
        zip
    } = req.body;
    const updateWeather = {
        city,
        state,
        zip
    }
    Weather.findByIdAndUpdate({ _id: req.params.id }, updatedWeather).then(weather => {
        updatedWeather._id = weather._id
        res.json(updatedWeather)
    })
    .catch(err => console.log('PUT / :id ERROR:', err))
    });
 
//DELETE 
router.delete(':/id', (req, res) => {
    Weather.findByIdAndDelete({ _id: req.params.id }).then(weather => {
        res.json(weather)
    })
    .catch(err => console.log('DELETE /:id ERROR:', err))
});

export default router

