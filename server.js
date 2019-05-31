const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const handlebars = require('express3-handlebars')
const index = require('./routes/index');


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

app.get('/', index.start)
app.get('/goal1', index.goal1)
app.get('/task_overview', index.task_overview)
app.get('/tasks_page', index.tasks_page)
app.get('/howToPlay', index.howToPlay)
app.get('/rewards', index.rewards)
app.get('/home', index.home)
app.get('/goal1camera', index.goal1camera)
app.get('/goal2', index.goal2)
app.get('/goal3', index.goal3)
app.get('/goal4', index.goal4)
app.get('/goal5', index.goal5)
app.get('/goal6', index.goal6)
app.get('/login', index.login)
app.get('/goal7', index.goal7)
app.get('/goal8', index.goal8)
app.get('/goal9', index.goal9)

app.use(express.static('views'));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('playPal.db');


app.get('/users', (req, res) => {
  db.all('SELECT name FROM users_to_playPal', (err, rows) =>{
    console.log(rows);
    const allUsernames = rows.map(e => e.name);
    console.log(allUsernames );
    res.send(allUsernames );
  });
});

// To test, use the web frontend interface at:
//   http://localhost:3000/petsapp.html
// use this library to parse HTTP POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); // hook up with your app
app.use(bodyParser.json());


app.post('/users', (req, res) => {
  console.log(req.body);
  db.run(
    'INSERT INTO users_to_playPal VALUES ($name, $password, $points)',
    // parameters to SQL query:
    {
      $name: req.body.name,
      $password: req.body.password,
      $points:  0,
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
app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above

  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all(
    'SELECT * FROM users_to_playPal WHERE name=$name',
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

//rewards retrival code
app.get('/points', (req, res) => {
	db.all(
   'SELECT points FROM users_to_playPal',

		(err, rows) => {
			console.log(rows);
			if (rows.length > 0) {
        res.send(rows[0]);
          } else {
        res.send({});
		}
	}
  );
});

//Points updateing code
app.post('/addPoints', (req, res) => {
  console.log(req.body);
  db.run(
    'UPDATE users_to_playPal SET points = points + $addedPoints',
    // parameters to SQL query:
    {
      $addedPoints: req.body.addedPoints
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

app.post('/removePoints', (req, res) => {
  console.log(req.body);
  db.run(
    'UPDATE users_to_playPal SET points = points - $lostPoints',
    // parameters to SQL query:
    {
      $lostPoints: req.body.lostPoints
    },
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/removePoints)'});
      } else {
        res.send({message: 'successfully run app.post(/removePoints)'});
      }
    }
  );
});

//rewards buttons stuff
app.post('/addReward', (req, res) => {
  console.log(req.body);
  db.run(
    'UPDATE rewards_to_playPal SET status = 1 WHERE rewardID = $rewardID',
    // parameters to SQL query:
    {
      $rewardID: req.body.rewardID
    },
    // callback function to run when the query finishes:
    (err) => {
      if (err) {
        res.send({message: 'error in app.post(/addReward)'});
      } else {
        res.send({message: 'successfully run app.post(/addReward)'});
      }
    }
  );
});


app.get('/currentRewards', (req, res) => {
  db.all('SELECT status FROM rewards_to_playPal', (err, rows) =>{
    console.log(rows);
    const allRewards = rows.map(e => e.status);
    console.log(allRewards);
    res.send(allRewards);
  });
});


// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
