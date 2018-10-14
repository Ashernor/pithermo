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
      let temperatures = _.meanBy(surveys, 'temperature');
      console.log('retrieved list of names', temperatures);
      res.render('index', { title: 'Temperature dans le salon', avgTemperature: temperatures});
    }
  });
});

module.exports = router;
