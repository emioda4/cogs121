const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const handlebars = require('express3-handlebars')
const index = require('./routes/index');

//const ourFakeDatabase = {
  //'Matthias': {id: 'Matthias', role: 'Parent'},
//  'Kristen': {id: 'Kristen', role: 'Child'},
//  'Emi': {id: 'Emi', role: 'Child'},
//  'Natalia' : {id: 'Natalia', role: 'Parent'}
//};


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
//app.get('/login', (req, res) => {
//  const allLogins = Object.keys(ourFakeDatabase);
  //let randomLoginID = Math.floor(Math.random()*allLogins.length); // returns a list of object keys
//  const usedLogin = allLogins[randomLoginID];
//  const loginToSend =  ourFakeDatabase[usedLogin];
//  console.log('attempting to send user: ' + loginToSend);
//  res.send(loginToSend);
//});


app.get('/', index.home)
app.get('/task1', index.task1)
app.get('/task_overview', index.task_overview)
app.get('/tasks_page', index.tasks_page)
app.get('/howToPlay', index.howToPlay)
app.get('/rewards', index.rewards)
app.get('/tasks', index.tasks)
app.get('/goal1camera', index.goal1camera)
app.get('/login', index.login)
app.use(express.static('views'));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('goalDigger.db');



app.get('/goalDigger', (req, res) => {
  db.all('SELECT title FROM users_to_goalDigger', (err, rows) =>{
    console.log(rows);
    const allGoalDigger = rows.map(e => e.title);
    console.log(allGoalDigger);
    res.send(allGoalDigger);
  });
});

// To test, use the web frontend interface at:
//   http://localhost:3000/petsapp.html
// use this library to parse HTTP POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); // hook up with your app
app.post('/users', (req, res) => {
  console.log(req.body);

  db.run(
    'INSERT INTO users_to_goalDigger VALUES ($name, $password)',
    // parameters to SQL query:
    {
      $name: req.body.name,
      $password: req.body.password,
    },
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/users)'});
      } else {
        res.send({message: 'successfully run app.post(/users)'});
      }
    }
  );
});


// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/users/Philip
//   http://localhost:3000/users/Carol
//   http://localhost:3000/users/invalidusername
app.get('/users/:goalDiggerid', (req, res) => {
  const nameToLookup = req.params.goalDiggerid; // matches ':userid' above

  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all(
    'SELECT * FROM users_to_goalDigger WHERE name=$name',
    // parameters to SQL query:
    {
      $name: nameToLookup
    },
    // callback function to run when the query finishes:
    (err, rows) => {
      console.log(rows);
      if (rows.length > 0) {
        res.send(rows[0]);
      } else {
        res.send({}); // failed, so return an empty object instead of undefined
      }
    }
  );
});

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
