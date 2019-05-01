// load JSON fake "database" file into the data variable
//var data = require('../data.json');

exports.home = function(req, res){
  res.render('home');
};

exports.task_overview = function(req, res){
  res.render('task_overview');
};

exports.task2 = function(req, res){
  res.render('task2');
};

exports.tasks_page = function(req, res){
  res.render('tasks_page');
};