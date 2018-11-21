// import express from 'express';
// import bodyParser from 'body-parser';
var bodyParser    = require('body-parser');
var express       = require('express');
var moment        = require('moment');
var PrayTimes     = require('./PrayTimes');
// Set up the express app
const app = express();
// console.log(`======= praytimes ${JSON.stringify(PrayTimes)}`);
// const currentMoment = moment().subtract(3, 'days');
// const endMoment = moment().add(1, 'days');
// console.log(`date after ${moment().add(30, 'days').format('YYYY-MM-DD')}`);
  
app.get('/api/v1/prayTimes', (req, res) => {
  const endDate = moment().add(req.query.duration, 'days');
  const currentDate = moment();
  var praytimesSchedule = []
  PrayTimes.setMethod('Karachi');
  var lat = req.query.latitude; 
  var lon = req.query.longitude;
  // console.log(`curren date = ${currentDate.format('YYYY-MM-DD')}`);
  while (currentDate.isBefore(endDate, 'day')){
    // console.log(`Loop iteration up ${currentDate.format('YYYY-MM-DD')}`);
    var loopDay = currentDate.format('YYYY-MM-DD');
    var praytimesLoop = PrayTimes.getTimes(currentDate.toDate(), [lat, lon], +7);
    praytimesLoop.date = loopDay;
    praytimesSchedule.push(praytimesLoop);
    // currentDate.add(1, 'days');
    currentDate.add(1, 'days');
  }
  // var toDay = moment();
  // var singleSchedule = PrayTimes.getTimes(toDay.toDate(), [lat, lon], +7);
  // singleSchedule.date = toDay.format('YYYY-MM-DD');
  res.status(200).send({
    success: true,
    schedules: praytimesSchedule
    // schedule: singleSchedule
  })
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("App is running on port " + port);
});


// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
