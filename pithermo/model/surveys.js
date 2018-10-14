var mongoose = require('mongoose');  
var surveySchema = new mongoose.Schema({  
  name: String,
  temperature: Number,
  date: Date,
});
var Survey = mongoose.model('Survey', surveySchema);
// make this available to our users in our Node applications
module.exports = Survey;