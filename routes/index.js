// load JSON fake "database" file into the data variable
//var data = require('../data.json');

exports.home = function(req, res){
  res.render('home');
};

exports.task_overview = function(req, res){
  res.render('task_overview');
};

exports.task1 = function(req, res){
  res.render('task1');
};

exports.tasks_page = function(req, res){
  res.render('tasks_page');
};

exports.howToPlay = function(req, res){
  res.render('howToPlay');
};

exports.rewards = function(req, res){
  res.render('rewards');
};

exports.tasks = function(req, res){
  res.render('tasks');
};