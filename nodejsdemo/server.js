var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
var app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

const CourseSchema = new Schema({
      courseId: ObjectId,
      courseName: String
});

const CourseModel = mongoose.model('CourseSchema', CourseSchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cors())
 
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

      // create a blog post
var courseObj = new CourseModel({
  courseName: course.name 
});
 
// create a comment

 
courseObj.save(function (err) {
  if (!err) console.log('Success!');
});
    // res.json(courses);
    res.status(201).json({message: 'Successfully created!!'})
  })
 
app.listen(3000)