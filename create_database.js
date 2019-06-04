// Node.js + Express server backend for petsapp
// v2 - use SQLite (https://www.sqlite.org/index.html) as a database
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// run this once to create the initial database as the goalDigger.db file
//   node create_database.js

// to clear the database, simply delete the pets.db file:
//   rm goalDigger.db

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('playPal.db');

// run each database statement *serially* one after another
// (if you don't do this, then all statements will run in parallel,
//  which we don't want)
db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE users_to_playPal (name TEXT, password TEXT, points INTEGER)");
  db.run("CREATE TABLE rewards_to_playPal (rewardID TEXT, status INTEGER)");
  db.run("CREATE TABLE goals_to_playPal (goalID TEXT, completed INTEGER)");
  db.run("INSERT INTO users_to_playPal VALUES ('Nataliya', '123456', 0)");
  db.run("INSERT INTO users_to_playPal VALUES ('Emi', '234567',0)");
  db.run("INSERT INTO users_to_playPal VALUES ('Matthias', '345678',0)");
  db.run("INSERT INTO users_to_playPal VALUES ('Kristen', '456789',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('w10',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('w20',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('w30',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('w40',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('p10',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('p20',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('p30',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('p40',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('pu10',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('pu20',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('pu30',0)");
  db.run("INSERT INTO rewards_to_playPal VALUES ('pu40',0)");
  db.run("INSERT INTO goals_to_playPal VALUES ('Picture',0)");
  db.run("INSERT INTO goals_to_playPal VALUES ('Picnic',0)");
  db.run("INSERT INTO goals_to_playPal VALUES ('Grass',0)");
  db.run("INSERT INTO goals_to_playPal VALUES ('Birds',0)");
  db.run("INSERT INTO goals_to_playPal VALUES ('Dog', 0)");
  db.run("INSERT INTO goals_to_playPal VALUES ('Ice Cream',0)");
  db.run("INSERT INTO goals_to_playPal VALUES ('Shells',0)");
  db.run("INSERT INTO goals_to_playPal VALUES ('Sandcastle',0)");
  db.run("INSERT INTO goals_to_playPal VALUES ('Frisbee',0)");

  console.log('successfully created the users_to_playPal, rewards_to_playPal, and goals_to_playpal tables, in playPal.db');

  // print them out to confirm their contents:
  // db.each("SELECT name, password FROM users_to_goalDigger", (err, row) => {
  //     console.log(row.name + ": " + row.password);
  // });
  // db.each("SELECT name, points FROM users_to_playPal", (err, row) => {
  //    console.log(row.name + ": You have " + row.points + " points");
  // });


});

db.close();
