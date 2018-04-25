var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
var courses = [
    {name: 'ReactJS'},
    {name: 'AngularJS'},
    {name: 'EmberJS'}
]
app.get('/courses', function (req, res) {
    res.json(courses);
  })

  app.post('/courses', function (req, res) {
      var course = req.body;
      console.log(course)
      courses.push(course)
    res.json(courses);
  })
 
app.listen(3000)