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
      // No we can order the dagta to to make a nice graph
      // Survey by day
      res.render('index', { title: 'Temperature dans le salon', avgTemperature: temperatures});
    }
  });
});

module.exports = router;
