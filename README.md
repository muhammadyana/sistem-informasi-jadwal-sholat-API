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