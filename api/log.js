// // const Log = mongoose.model('Log', logSchema);

// //Routes
// app.get('/logs', (req, res) => {
//   Log.find()
//     .then(logs => {
//       res.json(logs);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status().json({ error: 'Server error' });
//     })
// });

// app.post('/logs', (req, res) => {
//   const { city, country, date, description, image, latitude, longitude, rating } = req.body;
//   const newLog = new Log({
//     city,
//     country,
//     date,
//     description,
//     image,
//     rating,
//   })
//   newLog.save()
//     .then(log => {
//       res.json(log);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status().json({ error: 'Server error' });
//     })
// });

// app.put('/logs/:id', (req, res) => {
//   const { city, country, date, description, image, latitude, longitude, rating } = req.body;
//   Log.findByIdAndUpdate(req.params.id, {
//     city,
//     country,
//     date,
//     description,
//     image,
//     latitude,
//     longitude,
//     rating
//   }, { new: true })
//     .then(log => {
//       res.json(log);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status().json({ error: 'Server error' })
//     })
// });

// app.delete('/logs/:id', (req, res) => {
//   Log.findByIdAndDelete(req.params.id)
//     .then(() => {
//       res.json({ success: true });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status().json({ error: 'Server error' });
//     })
// });

   

