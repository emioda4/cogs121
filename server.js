const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const handlebars = require('express3-handlebars')
const index = require('./routes/index');

const ourFakeDatabase = {
  'Matthias': {id: 'Matthias', role: 'Parent'},
  'Kristen': {id: 'Kristen', role: 'Child'},
  'Emi': {id: 'Emi', role: 'Child'},
  'Natalia' : {id: 'Natalia', role: 'Parent'}
};


app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');


//Start of Our Stuff
app.get('/Tasks_page', (req, res) => {
  const pageName = 'Tasks_page'; 
  console.log('trying to change to TasksPage');
  res.send(pageName);
});

//Login Request
app.get('/login', (req, res) => {
  const allLogins = Object.keys(ourFakeDatabase);
  let randomLoginID = Math.floor(Math.random()*allLogins.length); // returns a list of object keys
  const usedLogin = allLogins[randomLoginID];
  const loginToSend =  ourFakeDatabase[usedLogin];
  console.log('attempting to send user: ' + loginToSend);
  res.send(loginToSend);
});


app.get('/', index.home)
app.get('/task1', index.task1)
app.get('/task_overview', index.task_overview)
app.get('/tasks_page', index.tasks_page)
app.get('/howToPlay', index.howToPlay)
app.get('/rewards', index.rewards)
app.get('/tasks', index.tasks)

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
