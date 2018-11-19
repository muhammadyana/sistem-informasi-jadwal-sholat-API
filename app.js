// import express from 'express';
import bodyParser from 'body-parser';
var express       = require('express');
var moment        = require('moment');
var PrayTimes     = require('./PrayTimes');
// Set up the express app
const app = express();
// console.log(`======= praytimes ${JSON.stringify(PrayTimes)}`);
app.get('/api/v1/prayTimes', (req, res) => {
  PrayTimes.setMethod('Karachi');
  var toDay = moment();
  // var lat = -6.300017; 
  var lat = req.query.latitude; 
  // var lon = 106.670173;
  var lon = req.query.longitude;
  res.status(200).send({
    success: 'true',
    schedule: PrayTimes.getTimes(toDay.toDate(), [lat, lon], +7)
    // scedule: getSchedule()
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
