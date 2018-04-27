'use strict';
var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var WorkoutSchema = Schema({    
    workoutTitle: String,
    workoutNotes: String,
    caloriesBurntPerMin: Number, 
	category:{ type: Schema.Types.ObjectId, ref: 'Category' },	
    createdDt: {type: Date,default: Date.now}
}); 

var WorkoutActiveSchema = Schema({
	workout:{ type: Schema.Types.ObjectId, ref: 'Workout' },
	workoutComments: String,
	workoutStatus:Boolean,
	startDateTm: Date,                                     	
    endDateTm: Date,
	startTm: String,                                     
	endTm: String                                 
});

var CategorySchema =  Schema({	
	categoryName: {type: String, required: 'Category is required'},
	createdDt: {type: Date,default: Date.now}
});

var Workout=mongoose.model('Workout',WorkoutSchema);
var WorkoutActive=mongoose.model('WorkoutActive',WorkoutActiveSchema);
var Category=mongoose.model('Category',CategorySchema);
module.exports.Workout = Workout;
module.exports.WorkoutActive = WorkoutActive;
module.exports.Category = Category;