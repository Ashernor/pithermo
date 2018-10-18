var express = require('express');
var router = express.Router();
var Survey =  require('../model/surveys');
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  Survey.find({}, function(err, surveys){
    if(err){
      console.log(err);
    } else{
      // By taking the last 5 surveys we make an average on th last 10 minutes
      let temperatures = _.meanBy(_.takeRight(surveys, 5), 'temperature');
      //ATM there is a small problem with the sensor
      temperatures-=1;
      temperatures = temperatures.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
      let lastSurvey = _.takeRight(surveys, 1)[0].date.toLocaleString('fr-FR');
      // No we can order the dagta to to make a nice graph
      // Survey by day
      let graphSurveys = _.map(_.takeRight(surveys, 22), 'temperature');
      console.log(graphSurveys);
      res.render('index', { title: 'Temperature dans le salon', avgTemperature: temperatures, lastSurvey: lastSurvey, graph: graphSurveys});
    }
  });
});

module.exports = router;
