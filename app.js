// import express from 'express';
import bodyParser from 'body-parser';
var express       = require('express');
var moment        = require('moment');
var PrayTimes     = require('./PrayTimes');
// Set up the express app
const app = express();
// console.log(`======= praytimes ${JSON.stringify(PrayTimes)}`);
// const currentMoment = moment().subtract(3, 'days');
// const endMoment = moment().add(1, 'days');
// console.log(`date after ${moment().add(30, 'days').format('YYYY-MM-DD')}`);
const endDate = moment().add(30, 'days');
const currentDate = moment();
var praytimesSchedule = []
// console.log(`curren date = ${currentDate.format('YYYY-MM-DD')}`);
while (currentDate.isBefore(endDate, 'day')){
  console.log(`Loop iteration up ${currentDate.format('YYYY-MM-DD')}`);
  var loopDay = currentDate.format('YYYY-MM-DD');
  var praytimesLoop = PrayTimes.getTimes(loopDay, [-6.300017, 106.670173], +7);
  praytimesSchedule.push(praytimesLoop);
  // currentDate.add(1, 'days');
  currentDate.add(1, 'days');
}

app.get('/api/v1/prayTimes', (req, res) => {
  PrayTimes.setMethod('Karachi');
  var toDay = moment();
  // var lat = -6.300017; 
  var lat = req.query.latitude; 
  // var lon = 106.670173;
  var lon = req.query.longitude;
  res.status(200).send({
    success: 'true',
    schedules: praytimesSchedule,
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
