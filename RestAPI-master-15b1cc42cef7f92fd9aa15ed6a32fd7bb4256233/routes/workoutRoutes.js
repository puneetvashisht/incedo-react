'use strict';
module.exports = function(app) {
	
  var workoutController = require('../controllers/workoutController');

  app.get("/", function(req, res) {
	res.status(200).send("Welcome to our restful API");
  }); 	

  app.route('/category')
    .get(workoutController.list_all_categories)
    .post(workoutController.create_category);
	
  app.route('/category/:_id')
    .get(workoutController.read_a_category)
    .put(workoutController.update_a_category)
	.delete(workoutController.delete_a_category);	
  
  app.route('/workouts')
    .get(workoutController.list_all_workouts)
    .post(workoutController.create_workout);
	
  app.route('/workouts/:workoutId')
    .get(workoutController.read_a_workout)
    .put(workoutController.update_a_workout)
    .delete(workoutController.delete_a_workout);
	
  app.route('/workoutActive')
    .get(workoutController.list_all_workoutActive)
    .post(workoutController.create_workoutActive);
	
  app.route('/workoutActive/:workoutActiveId')
    .get(workoutController.read_workoutActive)
    .put(workoutController.update_workoutActive)
    .delete(workoutController.delete_workoutActive);
};