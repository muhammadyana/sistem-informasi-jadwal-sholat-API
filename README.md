# Siforlat Backend use node.js
### Instalation
``` npm install ```

``` npm install --save-dev nodemon ```

``` npm install express —-save```

``` npm install babel-cli --save ```

``` npm install babel-preset-es2015 --save ```

### Run Server
``` npm run start ```

### Use app
running in local
http://localhost:5000/api/v1/prayTimes?latitude=-6.300060&longitude=106.670181&duration=10

running in  heroku 
https://siforlat-api.herokuapp.com/api/v1/prayTimes?latitude=-6.300060&longitude=106.670181&duration=10

```json
{
  "latitude": -6.300060,
  "longitude": 106.670181,
  "duration": 10
}
```

``` duration ``` is use for how many days u want get prayertimes from current date

### Example result
```json
{
  "success": "true",
  "schedules": [
    {
      "imsak": "04:02",
      "fajr": "04:12",
      "sunrise": "05:26",
      "dhuhr": "11:39",
      "asr": "15:03",
      "sunset": "17:52",
      "maghrib": "17:52",
      "isha": "19:06",
      "midnight": "23:39",
      "date": "2018-11-21"
    },
    {
      "imsak": "04:02",
      "fajr": "04:12",
      "sunrise": "05:26",
      "dhuhr": "11:39",
      "asr": "15:03",
      "sunset": "17:52",
      "maghrib": "17:52",
      "isha": "19:07",
      "midnight": "23:39",
      "date": "2018-11-22"
    },
    {
      "imsak": "04:02",
      "fajr": "04:12",
      "sunrise": "05:27",
      "dhuhr": "11:40",
      "asr": "15:04",
      "sunset": "17:53",
      "maghrib": "17:53",
      "isha": "19:07",
      "midnight": "23:40",
      "date": "2018-11-23"
    },
    {
      "imsak": "04:02",
      "fajr": "04:12",
      "sunrise": "05:27",
      "dhuhr": "11:40",
      "asr": "15:04",
      "sunset": "17:53",
      "maghrib": "17:53",
      "isha": "19:08",
      "midnight": "23:40",
      "date": "2018-11-24"
    },
    {
      "imsak": "04:02",
      "fajr": "04:12",
      "sunrise": "05:27",
      "dhuhr": "11:40",
      "asr": "15:05",
      "sunset": "17:53",
      "maghrib": "17:53",
      "isha": "19:08",
      "midnight": "23:40",
      "date": "2018-11-25"
    },
    {
      "imsak": "04:02",
      "fajr": "04:12",
      "sunrise": "05:27",
      "dhuhr": "11:41",
      "asr": "15:05",
      "sunset": "17:54",
      "maghrib": "17:54",
      "isha": "19:09",
      "midnight": "23:41",
      "date": "2018-11-26"
    },
    {
      "imsak": "04:02",
      "fajr": "04:12",
      "sunrise": "05:27",
      "dhuhr": "11:41",
      "asr": "15:06",
      "sunset": "17:54",
      "maghrib": "17:54",
      "isha": "19:09",
      "midnight": "23:41",
      "date": "2018-11-27"
    },
    {
      "imsak": "04:03",
      "fajr": "04:13",
      "sunrise": "05:28",
      "dhuhr": "11:41",
      "asr": "15:06",
      "sunset": "17:55",
      "maghrib": "17:55",
      "isha": "19:10",
      "midnight": "23:41",
      "date": "2018-11-28"
    },
    {
      "imsak": "04:03",
      "fajr": "04:13",
      "sunrise": "05:28",
      "dhuhr": "11:41",
      "asr": "15:07",
      "sunset": "17:55",
      "maghrib": "17:55",
      "isha": "19:10",
      "midnight": "23:42",
      "date": "2018-11-29"
    },
    {
      "imsak": "04:03",
      "fajr": "04:13",
      "sunrise": "05:28",
      "dhuhr": "11:42",
      "asr": "15:07",
      "sunset": "17:56",
      "maghrib": "17:56",
      "isha": "19:11",
      "midnight": "23:42",
      "date": "2018-11-30"
    }
  ]
}
```