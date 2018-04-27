'use strict';
var mongoose = require('mongoose'),
models = require("../models/workoutSchemaRef.js");

var Workout = models.Workout;
var Category = models.Category;
var WorkoutActive = models.WorkoutActive;

exports.list_all_categories = function(req, res) {
  Category.find({}, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};

exports.create_category = function(req, res) {  
  var new_category  = new Category(req.body);  
  new_category.save(function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });	
};

exports.read_a_category = function(req, res) {
  Category.findById(req.params._id, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};

exports.update_a_category = function(req, res) {    
  Category.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, function(err, category) {
    if (err)
      res.send(err);
    res.json(category);
  });
};

exports.delete_a_category = function(req, res) {  
console.log("delete_a_category"+JSON.stringify(req.params));
  Category.remove({_id:req.params._id}, function(err, category) {
    if (err)
      res.send(err);
    res.json({ message: 'category successfully deleted' });
  });
};

exports.list_all_workoutActive = function(req, res) {
  WorkoutActive.find({}, function(err, workoutActive) {
    if (err)
      res.send(err);
    res.json(workoutActive);
  });
};

exports.create_workoutActive = function(req, res) {
  var new_WorkoutActive = new WorkoutActive(req.body);
  console.log("req.body:"+JSON.stringify(req.body)); 
  console.log("new_WorkoutActive:"+JSON.stringify(new_WorkoutActive));  
  new_WorkoutActive.save(function(err, workoutActive) {
    if (err)
      res.send(err);
    res.json(workoutActive);
  });
};


exports.read_workoutActive = function(req, res) {
  WorkoutActive.findById(req.params.workoutActiveId, function(err, workoutActive) {
    if (err)
      res.send(err);
    res.json(workoutActive);
  });
};
exports.update_workoutActive = function(req, res) {
  console.log(req.params.workoutActiveId)
  WorkoutActive.findOneAndUpdate({"workout" : mongoose.Types.ObjectId(""+ req.params.workoutActiveId)}, req.body, {new: true}, function(err, workoutActive) {
    if (err)
      res.send(err);
    res.json(workoutActive);
  });
};

exports.delete_workoutActive = function(req, res) {
  WorkoutActive.remove({
    _id: req.params.workoutActiveId
  }, function(err, workoutActive) {
    if (err)
      res.send(err);
    res.json({ message: 'WorkoutActive successfully deleted' });
  });
};


exports.list_all_workouts = function(req, res) {
  Workout.find({}, function(err, workout) {
    if (err)
      res.send(err);
    res.json(workout);
  });
};

exports.create_workout = function(req, res) {	
  var new_workout = new Workout(req.body);
  new_workout.save(function(err, workout) {
    if (err)
      res.send(err);
    res.status(201).json({message: 'Workout created!!'});
  });
};

exports.read_a_workout = function(req, res) {
  Workout.findById(req.params.workoutId, function(err, workout) {
    if (err)
      res.send(err);
    res.json(workout);
  });
};

exports.update_a_workout = function(req, res) {  
  Workout.findOneAndUpdate({_id: req.params.workoutId}, req.body, {new: true}, function(err, workout) {
    if (err)
      res.send(err);
    res.json(workout);
  });
};

exports.delete_a_workout = function(req, res) {
console.log("delete_a_category"+JSON.stringify(req.params));
  Workout.remove({_id: req.params.workoutId
  }, function(err, workout) {
    if (err)
      res.send(err);
    res.json({ message: 'workout successfully deleted' });
  });
};