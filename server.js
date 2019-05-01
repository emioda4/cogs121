// Node.js + Express server backend for petsapp
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// Prerequisites - first run:
//   npm install
//
// which will look in package.json and install all dependencies
// (e.g., express)
//
// To start the server, run:
//   node server.js
//
// and open the frontend webpage at http://localhost:3000/petsapp.html

const express = require('express');
const app = express();

//Emi's code below
const http = require('http');
const path = require('path');
const handlebars = require('express3-handlebars')
const index = require('./routes/index');
//ends right here


// put all of your static files (e.g., HTML, CSS, JS, JPG) in the static_files/
// sub-directory, and the server will serve them from there. e.g.,:
//
// http://localhost:3000/petsapp.html
// http://localhost:3000/cat.jpg
//
// will send the file static_files/cat.jpg to the user's web browser
//
// Learn more: http://expressjs.com/en/starter/static-files.html
app.use(express.static('static_files'));


// simulates a database in memory, to make this example simple and
// self-contained (so that you don't need to set up a separate database).
// note that a real database will save its data to the hard drive so
// that they become persistent, but this fake database will be reset when
// this script restarts. however, as long as the script is running, this
// database can be modified at will.
const fakeDatabase = {
  'Philip': {job: 'professor', pet: 'cat.jpg'},
  'John': {job: 'student',   pet: 'dog.jpg'},
  'Carol': {job: 'engineer',  pet: 'bear.jpg'}
};


// To learn more about server routing:
// Express - Hello world: http://expressjs.com/en/starter/hello-world.html
// Express - basic routing: http://expressjs.com/en/starter/basic-routing.html
// Express - routing: https://expressjs.com/en/guide/routing.html


// GET a list of all usernames
//
// To test, open this URL in your browser:
//   http://localhost:3000/users
app.get('/users', (req, res) => {
  const allUsernames = Object.keys(fakeDatabase); // returns a list of object keys
  console.log('allUsernames is:', allUsernames);
  res.send(allUsernames);
});


// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/users/Philip
//   http://localhost:3000/users/Carol
//   http://localhost:3000/users/invalidusername
app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above
  const val = fakeDatabase[nameToLookup];
  console.log(nameToLookup, '->', val); // for debugging
  if (val) {
    res.send(val);
  } else {
    res.send({}); // failed, so return an empty object instead of undefined
  }
});

//Start of Our Stuff
app.get('/Tasks_page', (req, res) => {
  const pageName = 'Tasks_page'; 
  console.log('trying to change to TasksPage');
  res.send(pageName);
});

// Emi's code below
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.home)
app.get('/task2', index.task2)
app.get('/task_overview', index.task_overview)
app.get('/tasks_page', index.tasks_page)
app.get('/howToPlay', index.howToPlay)
app.get('/rewards', index.rewards)


// end of Emi's code

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
