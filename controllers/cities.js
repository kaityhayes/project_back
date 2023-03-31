import express from 'express';
import Cities from './models/cities.js';

const App = express();

App.post('/', (req, res) => {
  console.log(req.body);
  const { city, state, zip } = req.body;
  Cities.create({ city, state, zip })
    .then(cities => {
      res.json(cities);
    })
    .catch(err => console.log('POST / ERROR:', err));
});

App.get('/', (req, res) => {
  Cities.find()
    .then(cities => {
      res.json(cities);
    })
    .catch(err => console.log('GET / ERROR:', err));
});

App.get('/:id', (req, res) => {
  Cities.findById(req.params.id)
    .then(cities => {
      res.json(cities);
    })
    .catch(err => console.log('GET / :id ERROR:', err));
});

// UPDATE
App.put('/:id', (req, res) => {
  const { city, state, zip } = req.body;
  const updateCities = {
    city,
    state,
    zip
  };
  App.findByIdAndUpdate({ _id: req.params.id }, updateCities)
    .then(cities => {
      updateCities._id = cities._id;
      res.json(updateCities);
    })
    .catch(err => console.log('PUT / :id ERROR:', err));
});

// DELETE 
App.delete('/:id', (req, res) => {
  Cities.findByIdAndDelete({ _id: req.params.id })
    .then(cities => {
      res.json(cities);
    })
    .catch(err => console.log('DELETE /:id ERROR:', err));
});

export default App;
