var mongoose = require('mongoose');  

mongoose.connect('mongodb://localhost/pithermo');  
var surveySchema = new mongoose.Schema({  
  name: String,
  temperature: Number,
  date: Date,
});
var Survey = mongoose.model('temp_surveys', surveySchema);
// make this available to our users in our Node applications
module.exports = Survey;