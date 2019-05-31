// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database('totalScore.db');
//
// db.serialize(() => {
//   db.run("CREATE TABLE points_to_totalScore (name TEXT, points TEXT)");
//   db.run("INSERT INTO points_to_totalScore VALUES ('Emi', '0')");
//
//   console.log('successfully created the points_to_totalScore table in totalScore.db');
//
//   // print them out to confirm their contents:
//   db.each("SELECT name, points FROM points_to_totalScore", (err, row) => {
//       console.log(row.name + ": " + row.points);
//   });
// });
//
// db.close();
