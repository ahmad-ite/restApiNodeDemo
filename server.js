const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const db = require("./models");
const apiPost = require("./app/api/post");
const apiAuthor = require("./app/api/author");
const apiClassroom = require("./app/api/classroom");
const apiStudent = require("./app/api/student");
// const mysql = require('mysql2');

var cors = require('cors')
const app = express();
app.use(cors())

app.use(bodyParser.json());
// app.use(express.static("app/public"));


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'test'
// });

// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }
 
//   let createCalss = `create table if not exists classroom(
//       id int primary key auto_increment,
//       name varchar(255) not null,
//       school varchar(255) not null
//   )`;
  
//   let createStudent = `create table if not exists student(
//       id int primary key auto_increment,
//       name varchar(255) not null,
//       surename varchar(255) not null,
//       classroomId INTEGER,
//       FOREIGN KEY(classroomId) REFERENCES classroom(id)
//   )`;
  
//   connection.query(createCalss, function(err, results, fields) {
//   if (err) {
//   console.log(err.message);
//   }
//   });
  
//   connection.query(createStudent, function(err, results, fields) {
//       if (err) {
//       console.log(err.message);
//       }
//       });
  
  
 
//   connection.end(function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//   }
//   );
// });
//create app server
db.sequelize.sync();

var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});



apiPost(app, db);
apiAuthor(app, db);
apiClassroom(app, db);
apiStudent(app, db);

// db.sequelize.sync().then(() => {
//   // populate author table with dummy data
//   db.author.bulkCreate(
//     times(10, () => ({
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName()
//     }))
//   );
//   // populate post table with dummy data
//   db.post.bulkCreate(
//     times(10, () => ({
//       title: faker.lorem.sentence(),
//       content: faker.lorem.paragraph(),
//       authorId: random(1, 10)
//     }))
//   );
//   app.listen(8080, () => console.log("App listening on port 8080!"));
// });
// app.listen(3000, () => console.log("App listening on port 3000!"));